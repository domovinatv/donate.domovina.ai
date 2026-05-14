// Donations widget: EPC QR (SEPA), HUB3 PDF417 (HR banks), EIP-681 QR (Web3).
// On-chain inbound EURe transfer feed via direct JSON-RPC against Gnosis Chain.
// Dependencies (loaded as UMD globals in <head>):
//   - QRCode (qrcode@1.5.4)
//   - bwipjs (bwip-js@4.5.2)

const SAFE = '0x6693a7D19486Dc45e9F90Fd2D515d972bBA2d65e';
const EURE = '0x420CA0f9B9b604cE0fd9C18EF134C705e5Fa3430';
const CHAIN_ID = 100;
const DEPLOY_BLOCK = 46170946;

const MONERIUM = {
  iban: 'EE707777000162921128',
  bic: 'LHVBEE22',
  name: 'ITalk d.o.o.',
};

const HR_BANK = {
  iban: 'HR6023900011500157044',
  name: 'ITalk d.o.o.',
  address: 'IX. Južna obala 20',
  city: 'Zagreb',
  model: 'HR00',
  reference: '1991',
};

const RPC_URLS = [
  'https://rpc.gnosischain.com',
  'https://rpc.gnosis.gateway.fm',
];

const TRANSFER_TOPIC = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
const ZERO_ADDR = '0x0000000000000000000000000000000000000000';

const lang = document.documentElement.lang === 'en' ? 'en' : 'hr';
const T = {
  hr: {
    mint: 'Mint (SEPA → EURe)',
    transfer: 'On-chain transfer',
    from: 'od',
    loading: 'Učitavanje transakcija…',
    none: 'Nema transakcija (još).',
    error: 'Greška pri dohvatu transakcija.',
    just_now: 'upravo sada',
    sec_ago: (n) => `prije ${n} sek`,
    min_ago: (n) => `prije ${n} min`,
    hour_ago: (n) => `prije ${n} h`,
    day_ago: (n) => `prije ${n} d`,
    copied: 'Kopirano!',
    copy: 'Kopiraj',
  },
  en: {
    mint: 'Mint (SEPA → EURe)',
    transfer: 'On-chain transfer',
    from: 'from',
    loading: 'Loading transactions…',
    none: 'No transactions (yet).',
    error: 'Error fetching transactions.',
    just_now: 'just now',
    sec_ago: (n) => `${n}s ago`,
    min_ago: (n) => `${n}m ago`,
    hour_ago: (n) => `${n}h ago`,
    day_ago: (n) => `${n}d ago`,
    copied: 'Copied!',
    copy: 'Copy',
  },
}[lang];

// ---------- Payload builders (ports of pay.domovina.ai Flutter logic) ----------

function buildEpcPayload(amount) {
  const hasAmount = amount && amount > 0;
  const amountStr = hasAmount ? `EUR${amount.toFixed(2)}` : '';
  const lines = [
    'BCD',
    '001',
    '1',
    'SCT',
    MONERIUM.bic,
    MONERIUM.name,
    MONERIUM.iban,
    amountStr,
    'OTHR',
    `gnosis:${SAFE}`,
  ];
  while (lines.length && lines[lines.length - 1] === '') lines.pop();
  return lines.join('\n');
}

function buildHub3Payload(amount) {
  const cents = Math.round(amount * 100);
  const amountStr = String(cents).padStart(15, '0');
  return [
    'HRVHUB30',
    'EUR',
    amountStr,
    '', '', '',
    HR_BANK.name,
    HR_BANK.address,
    HR_BANK.city,
    HR_BANK.iban,
    HR_BANK.model,
    HR_BANK.reference,
    'OTHR',
    `gnosis:${SAFE}`,
  ].join('\n');
}

function buildEipPayload(amount) {
  const units = decimalToWei(amount, 18);
  return `ethereum:${EURE}@${CHAIN_ID}/transfer?address=${SAFE}&uint256=${units}`;
}

function decimalToWei(amount, decimals) {
  const [whole, frac = ''] = String(amount).split('.');
  const fracPadded = (frac + '0'.repeat(decimals)).slice(0, decimals);
  const combined = (whole + fracPadded).replace(/^0+/, '') || '0';
  return combined;
}

// ---------- Rendering ----------

function renderQR(canvasId, payload) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !window.QRCode) return;
  window.QRCode.toCanvas(canvas, payload, {
    width: 240,
    margin: 1,
    errorCorrectionLevel: 'M',
    color: { dark: '#002F6C', light: '#FFFFFF' },
  }, (err) => { if (err) console.error('QR render error', err); });
}

function renderPdf417(canvasId, payload) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !window.bwipjs) return;
  try {
    window.bwipjs.toCanvas(canvas, {
      bcid: 'pdf417',
      text: payload,
      scale: 2,
      height: 12,
      includetext: false,
      backgroundcolor: 'FFFFFF',
      barcolor: '002F6C',
    });
  } catch (e) {
    console.error('PDF417 render error', e);
  }
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function regenerate() {
  const input = document.getElementById('amount');
  const amount = Math.max(0.01, parseFloat(input.value) || 1.01);

  const epc = buildEpcPayload(amount);
  const hub3 = buildHub3Payload(amount);
  const eip = buildEipPayload(amount);

  setText('payload-epc', epc);
  setText('payload-hub3', hub3);
  setText('payload-eip', eip);

  renderQR('qr-epc', epc);
  renderPdf417('qr-hub3', hub3);
  renderQR('qr-eip', eip);
}

// ---------- Tabs ----------

function activateTab(tabKey) {
  document.querySelectorAll('.tab').forEach((b) =>
    b.classList.toggle('active', b.dataset.tab === tabKey),
  );
  document.querySelectorAll('.tab-panel').forEach((p) =>
    p.classList.toggle('hidden', p.dataset.panel !== tabKey),
  );
}

// ---------- Copy ----------

function wireCopy() {
  document.querySelectorAll('.btn-copy').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.copy;
      const text = document.getElementById(id)?.textContent || '';
      try {
        await navigator.clipboard.writeText(text);
        const orig = btn.textContent;
        btn.textContent = T.copied;
        setTimeout(() => { btn.textContent = orig; }, 1500);
      } catch (e) {
        console.error('Copy failed', e);
      }
    });
  });
}

// ---------- On-chain transaction feed ----------

async function rpcCall(method, params) {
  let lastErr;
  for (const url of RPC_URLS) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error.message || 'RPC error');
      return json.result;
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

async function fetchTransfers() {
  const fromBlockHex = '0x' + DEPLOY_BLOCK.toString(16);
  const safeTopic = '0x000000000000000000000000' + SAFE.slice(2).toLowerCase();
  const logs = await rpcCall('eth_getLogs', [{
    address: EURE,
    topics: [TRANSFER_TOPIC, null, safeTopic],
    fromBlock: fromBlockHex,
    toBlock: 'latest',
  }]);
  return logs;
}

async function fetchBlockTimestamps(blockNumbers) {
  const unique = [...new Set(blockNumbers)];
  const results = await Promise.all(
    unique.map((bn) => rpcCall('eth_getBlockByNumber', [bn, false])
      .then((b) => [bn, b ? parseInt(b.timestamp, 16) : null])
      .catch(() => [bn, null])),
  );
  return Object.fromEntries(results);
}

function formatAge(secondsAgo) {
  if (secondsAgo < 30) return T.just_now;
  if (secondsAgo < 60) return T.sec_ago(Math.floor(secondsAgo));
  if (secondsAgo < 3600) return T.min_ago(Math.floor(secondsAgo / 60));
  if (secondsAgo < 86400) return T.hour_ago(Math.floor(secondsAgo / 3600));
  return T.day_ago(Math.floor(secondsAgo / 86400));
}

function formatEur(amount) {
  return new Intl.NumberFormat(lang === 'hr' ? 'hr-HR' : 'en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(amount);
}

function shortAddr(addr) {
  if (!addr) return '?';
  return addr.slice(0, 6) + '…' + addr.slice(-4);
}

async function renderTxList() {
  const container = document.getElementById('tx-list');
  if (!container) return;
  try {
    const logs = await fetchTransfers();
    if (logs.length === 0) {
      container.innerHTML = `<p class="muted">${T.none}</p>`;
      return;
    }
    const blockNumbers = logs.map((l) => l.blockNumber);
    const tsMap = await fetchBlockTimestamps(blockNumbers);
    const now = Math.floor(Date.now() / 1000);

    const rows = logs
      .map((log) => {
        const from = '0x' + log.topics[1].slice(-40);
        const value = BigInt(log.data) / BigInt(10 ** 14); // → 4 decimals safe
        const amount = Number(value) / 1e4;
        const ts = tsMap[log.blockNumber];
        const isMint = from.toLowerCase() === ZERO_ADDR;
        return {
          from,
          amount,
          ts,
          txHash: log.transactionHash,
          isMint,
        };
      })
      .sort((a, b) => (b.ts || 0) - (a.ts || 0));

    container.innerHTML = rows
      .map((r) => {
        const age = r.ts ? formatAge(now - r.ts) : '';
        const label = r.isMint ? T.mint : T.transfer;
        const sender = r.isMint
          ? `<span class="tx-mint-badge">${T.mint}</span>`
          : `<span class="tx-from">${T.from} <a href="https://gnosisscan.io/address/${r.from}" target="_blank" rel="noopener">${shortAddr(r.from)}</a></span>`;
        return `
          <div class="tx-row">
            <div class="tx-amount">${formatEur(r.amount)}</div>
            <div class="tx-meta">
              ${sender}
              <span class="tx-age" title="${r.ts ? new Date(r.ts * 1000).toISOString() : ''}">${age}</span>
              <a class="tx-link" href="https://gnosisscan.io/tx/${r.txHash}" target="_blank" rel="noopener" title="${r.txHash}">${r.txHash.slice(0, 10)}…</a>
            </div>
          </div>
        `;
      })
      .join('');
  } catch (e) {
    console.error('Tx fetch failed', e);
    container.innerHTML = `<p class="muted">${T.error}</p>`;
  }
}

// ---------- Boot ----------

function init() {
  // Tabs
  document.querySelectorAll('.tab').forEach((btn) => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
  });

  // Amount input
  const amountInput = document.getElementById('amount');
  if (amountInput) {
    amountInput.addEventListener('input', regenerate);
    regenerate();
  }

  wireCopy();

  renderTxList();
  setInterval(renderTxList, 60_000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
