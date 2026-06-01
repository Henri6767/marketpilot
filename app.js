const assets = [
  { rank: 1, name: "Bitcoin", symbol: "BTC", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "bitcoin" },
  { rank: 2, name: "Ethereum", symbol: "ETH", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "ethereum" },
  { rank: 3, name: "Solana", symbol: "SOL", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "solana" },
  { rank: 4, name: "BNB", symbol: "BNB", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "binancecoin" },
  { rank: 5, name: "XRP", symbol: "XRP", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "ripple" },
  { rank: 6, name: "Cardano", symbol: "ADA", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "cardano" },
  { rank: 7, name: "Dogecoin", symbol: "DOGE", type: "Krypto", region: "Global", risk: "Sehr hoch", geckoId: "dogecoin" },
  { rank: 8, name: "TRON", symbol: "TRX", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "tron" },
  { rank: 9, name: "Chainlink", symbol: "LINK", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "chainlink" },
  { rank: 10, name: "Avalanche", symbol: "AVAX", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "avalanche-2" },
  { rank: 11, name: "Stellar", symbol: "XLM", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "stellar" },
  { rank: 12, name: "Polkadot", symbol: "DOT", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "polkadot" },
  { rank: 13, name: "Litecoin", symbol: "LTC", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "litecoin" },
  { rank: 14, name: "Bitcoin Cash", symbol: "BCH", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "bitcoin-cash" },
  { rank: 15, name: "Polygon", symbol: "POL", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "polygon-ecosystem-token" },
  { rank: 16, name: "Near Protocol", symbol: "NEAR", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "near" },
  { rank: 17, name: "Internet Computer", symbol: "ICP", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "internet-computer" },
  { rank: 18, name: "Uniswap", symbol: "UNI", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "uniswap" },
  { rank: 19, name: "Apple", symbol: "AAPL", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "AAPL" },
  { rank: 20, name: "Microsoft", symbol: "MSFT", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "MSFT" },
  { rank: 21, name: "Nvidia", symbol: "NVDA", type: "Aktie", region: "USA", risk: "Hoch", yahoo: "NVDA" },
  { rank: 22, name: "Alphabet", symbol: "GOOGL", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "GOOGL" },
  { rank: 23, name: "Amazon", symbol: "AMZN", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "AMZN" },
  { rank: 24, name: "Meta Platforms", symbol: "META", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "META" },
  { rank: 25, name: "Tesla", symbol: "TSLA", type: "Aktie", region: "USA", risk: "Hoch", yahoo: "TSLA" },
  { rank: 26, name: "Broadcom", symbol: "AVGO", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "AVGO" },
  { rank: 27, name: "Eli Lilly", symbol: "LLY", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "LLY" },
  { rank: 28, name: "JPMorgan Chase", symbol: "JPM", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "JPM" },
  { rank: 29, name: "Visa", symbol: "V", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "V" },
  { rank: 30, name: "Mastercard", symbol: "MA", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "MA" },
  { rank: 31, name: "Berkshire Hathaway", symbol: "BRK-B", type: "Aktie", region: "USA", risk: "Niedrig", yahoo: "BRK-B" },
  { rank: 32, name: "Walmart", symbol: "WMT", type: "Aktie", region: "USA", risk: "Niedrig", yahoo: "WMT" },
  { rank: 33, name: "Costco", symbol: "COST", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "COST" },
  { rank: 34, name: "ASML", symbol: "ASML", type: "Aktie", region: "Europa", risk: "Mittel", yahoo: "ASML" },
  { rank: 35, name: "Novo Nordisk", symbol: "NVO", type: "Aktie", region: "Europa", risk: "Mittel", yahoo: "NVO" },
  { rank: 36, name: "SAP", symbol: "SAP.DE", type: "Aktie", region: "Deutschland", risk: "Mittel", yahoo: "SAP.DE" },
  { rank: 37, name: "Siemens", symbol: "SIE.DE", type: "Aktie", region: "Deutschland", risk: "Mittel", yahoo: "SIE.DE" },
  { rank: 38, name: "Allianz", symbol: "ALV.DE", type: "Aktie", region: "Deutschland", risk: "Mittel", yahoo: "ALV.DE" },
  { rank: 39, name: "Deutsche Telekom", symbol: "DTE.DE", type: "Aktie", region: "Deutschland", risk: "Mittel", yahoo: "DTE.DE" },
  { rank: 40, name: "LVMH", symbol: "MC.PA", type: "Aktie", region: "Europa", risk: "Mittel", yahoo: "MC.PA" },
  { rank: 41, name: "Nestlé", symbol: "NESN.SW", type: "Aktie", region: "Europa", risk: "Niedrig", yahoo: "NESN.SW" },
  { rank: 42, name: "Toyota", symbol: "TM", type: "Aktie", region: "Japan", risk: "Mittel", yahoo: "TM" },
  { rank: 43, name: "TSMC", symbol: "TSM", type: "Aktie", region: "Taiwan", risk: "Mittel", yahoo: "TSM" },
  { rank: 44, name: "AMD", symbol: "AMD", type: "Aktie", region: "USA", risk: "Hoch", yahoo: "AMD" },
  { rank: 45, name: "S&P 500 ETF", symbol: "VOO", type: "ETF", region: "USA", risk: "Mittel", yahoo: "VOO" },
  { rank: 46, name: "SPDR S&P 500 ETF", symbol: "SPY", type: "ETF", region: "USA", risk: "Mittel", yahoo: "SPY" },
  { rank: 47, name: "iShares Core S&P 500", symbol: "IVV", type: "ETF", region: "USA", risk: "Mittel", yahoo: "IVV" },
  { rank: 48, name: "Nasdaq 100 ETF", symbol: "QQQ", type: "ETF", region: "USA", risk: "Hoch", yahoo: "QQQ" },
  { rank: 49, name: "Total Stock Market ETF", symbol: "VTI", type: "ETF", region: "USA", risk: "Mittel", yahoo: "VTI" },
  { rank: 50, name: "Total International ETF", symbol: "VXUS", type: "ETF", region: "Global", risk: "Mittel", yahoo: "VXUS" },
  { rank: 51, name: "Russell 2000 ETF", symbol: "IWM", type: "ETF", region: "USA", risk: "Hoch", yahoo: "IWM" },
  { rank: 52, name: "Developed Markets ETF", symbol: "EFA", type: "ETF", region: "Global", risk: "Mittel", yahoo: "EFA" },
  { rank: 53, name: "Emerging Markets ETF", symbol: "EEM", type: "ETF", region: "Global", risk: "Hoch", yahoo: "EEM" },
  { rank: 54, name: "US Aggregate Bond ETF", symbol: "AGG", type: "ETF", region: "USA", risk: "Niedrig", yahoo: "AGG" },
  { rank: 55, name: "Vanguard Total Bond ETF", symbol: "BND", type: "ETF", region: "USA", risk: "Niedrig", yahoo: "BND" },
  { rank: 56, name: "Gold ETF", symbol: "GLD", type: "ETF", region: "Global", risk: "Mittel", yahoo: "GLD" },
  { rank: 57, name: "US Treasury 20+ ETF", symbol: "TLT", type: "ETF", region: "USA", risk: "Mittel", yahoo: "TLT" },
  { rank: 58, name: "Dividend Equity ETF", symbol: "SCHD", type: "ETF", region: "USA", risk: "Mittel", yahoo: "SCHD" },
  { rank: 59, name: "Vanguard Growth ETF", symbol: "VUG", type: "ETF", region: "USA", risk: "Mittel", yahoo: "VUG" },
  { rank: 60, name: "Vanguard Value ETF", symbol: "VTV", type: "ETF", region: "USA", risk: "Mittel", yahoo: "VTV" },
  { rank: 61, name: "iShares MSCI ACWI ETF", symbol: "ACWI", type: "ETF", region: "Global", risk: "Mittel", yahoo: "ACWI" },
  { rank: 62, name: "MSCI World UCITS ETF", symbol: "EUNL.DE", type: "ETF", region: "Global", risk: "Mittel", yahoo: "EUNL.DE" },
  { rank: 63, name: "Core S&P 500 UCITS ETF", symbol: "SXR8.DE", type: "ETF", region: "USA", risk: "Mittel", yahoo: "SXR8.DE" },
  { rank: 64, name: "FTSE All-World UCITS ETF", symbol: "VWCE.DE", type: "ETF", region: "Global", risk: "Mittel", yahoo: "VWCE.DE" },
  { rank: 65, name: "EM IMI UCITS ETF", symbol: "IS3N.DE", type: "ETF", region: "Global", risk: "Hoch", yahoo: "IS3N.DE" },
  { rank: 66, name: "Toncoin", symbol: "TON", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "the-open-network" },
  { rank: 67, name: "Hedera", symbol: "HBAR", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "hedera-hashgraph" },
  { rank: 68, name: "Cosmos", symbol: "ATOM", type: "Krypto", region: "Global", risk: "Hoch", geckoId: "cosmos" },
  { rank: 69, name: "Aptos", symbol: "APT", type: "Krypto", region: "Global", risk: "Sehr hoch", geckoId: "aptos" },
  { rank: 70, name: "Arbitrum", symbol: "ARB", type: "Krypto", region: "Global", risk: "Sehr hoch", geckoId: "arbitrum" },
  { rank: 71, name: "Optimism", symbol: "OP", type: "Krypto", region: "Global", risk: "Sehr hoch", geckoId: "optimism" },
  { rank: 72, name: "Shiba Inu", symbol: "SHIB", type: "Krypto", region: "Global", risk: "Sehr hoch", geckoId: "shiba-inu" },
  { rank: 73, name: "Netflix", symbol: "NFLX", type: "Aktie", region: "USA", risk: "Hoch", yahoo: "NFLX" },
  { rank: 74, name: "Oracle", symbol: "ORCL", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "ORCL" },
  { rank: 75, name: "Salesforce", symbol: "CRM", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "CRM" },
  { rank: 76, name: "Adobe", symbol: "ADBE", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "ADBE" },
  { rank: 77, name: "Cisco", symbol: "CSCO", type: "Aktie", region: "USA", risk: "Niedrig", yahoo: "CSCO" },
  { rank: 78, name: "Coca-Cola", symbol: "KO", type: "Aktie", region: "USA", risk: "Niedrig", yahoo: "KO" },
  { rank: 79, name: "McDonald's", symbol: "MCD", type: "Aktie", region: "USA", risk: "Niedrig", yahoo: "MCD" },
  { rank: 80, name: "Walt Disney", symbol: "DIS", type: "Aktie", region: "USA", risk: "Mittel", yahoo: "DIS" },
  { rank: 81, name: "Airbus", symbol: "AIR.PA", type: "Aktie", region: "Europa", risk: "Mittel", yahoo: "AIR.PA" },
  { rank: 82, name: "Shell", symbol: "SHEL.L", type: "Aktie", region: "Europa", risk: "Mittel", yahoo: "SHEL.L" },
  { rank: 83, name: "AstraZeneca", symbol: "AZN", type: "Aktie", region: "Europa", risk: "Mittel", yahoo: "AZN" },
  { rank: 84, name: "Sony", symbol: "SONY", type: "Aktie", region: "Japan", risk: "Mittel", yahoo: "SONY" },
  { rank: 85, name: "Technology Select Sector ETF", symbol: "XLK", type: "ETF", region: "USA", risk: "Hoch", yahoo: "XLK" },
  { rank: 86, name: "Financial Select Sector ETF", symbol: "XLF", type: "ETF", region: "USA", risk: "Mittel", yahoo: "XLF" },
  { rank: 87, name: "Energy Select Sector ETF", symbol: "XLE", type: "ETF", region: "USA", risk: "Hoch", yahoo: "XLE" },
  { rank: 88, name: "Health Care Select Sector ETF", symbol: "XLV", type: "ETF", region: "USA", risk: "Mittel", yahoo: "XLV" },
  { rank: 89, name: "VanEck Semiconductor ETF", symbol: "SMH", type: "ETF", region: "USA", risk: "Hoch", yahoo: "SMH" },
  { rank: 90, name: "iShares Semiconductor ETF", symbol: "SOXX", type: "ETF", region: "USA", risk: "Hoch", yahoo: "SOXX" },
  { rank: 91, name: "ARK Innovation ETF", symbol: "ARKK", type: "ETF", region: "USA", risk: "Sehr hoch", yahoo: "ARKK" },
  { rank: 92, name: "Vanguard Real Estate ETF", symbol: "VNQ", type: "ETF", region: "USA", risk: "Mittel", yahoo: "VNQ" },
  { rank: 93, name: "High Yield Corporate Bond ETF", symbol: "HYG", type: "ETF", region: "USA", risk: "Mittel", yahoo: "HYG" }
];

const selectors = {
  assetGrid: document.querySelector("#assetGrid"),
  search: document.querySelector("#searchInput"),
  segments: document.querySelectorAll(".segment"),
  sort: document.querySelector("#sortSelect"),
  regionFilter: document.querySelector("#regionFilter"),
  riskFilter: document.querySelector("#riskFilter"),
  statusFilter: document.querySelector("#statusFilter"),
  rangeButtons: document.querySelectorAll(".range-button"),
  viewButtons: document.querySelectorAll("[data-view-mode]"),
  chart: document.querySelector("#priceChart"),
  heroChart: document.querySelector("#heroChart"),
  chartLoading: document.querySelector("#chartLoading"),
  chartTooltip: document.querySelector("#chartTooltip"),
  watchlistToggle: document.querySelector("#watchlistToggle"),
  compareToggle: document.querySelector("#compareToggle"),
  alertButton: document.querySelector("#alertButton"),
  detailNoteButton: document.querySelector("#detailNoteButton"),
  detailAlertButton: document.querySelector("#detailAlertButton"),
  savedWatchlist: document.querySelector("#savedWatchlist"),
  compareTray: document.querySelector("#compareTray"),
  compareList: document.querySelector("#compareList"),
  compareTitle: document.querySelector("#compareTitle"),
  compareGrid: document.querySelector("#compareGrid"),
  compareSummary: document.querySelector("#compareSummary"),
  clearCompare: document.querySelector("#clearCompare"),
  assetTableWrap: document.querySelector("#assetTableWrap"),
  assetTableBody: document.querySelector("#assetTableBody"),
  heatmapGrid: document.querySelector("#heatmapGrid"),
  alertsList: document.querySelector("#alertsList"),
  createGlobalAlert: document.querySelector("#createGlobalAlert"),
  clearAlerts: document.querySelector("#clearAlerts"),
  toastRegion: document.querySelector("#toastRegion"),
  modal: document.querySelector("#appModal"),
  modalClose: document.querySelector("#modalClose"),
  modalCancel: document.querySelector("#modalCancel"),
  modalConfirm: document.querySelector("#modalConfirm"),
  modalTitle: document.querySelector("#modalTitle"),
  modalBody: document.querySelector("#modalBody"),
  modalChart: document.querySelector("#modalChart"),
  modalKicker: document.querySelector("#modalKicker"),
  modalInput: document.querySelector("#modalInput"),
  modalInputLabel: document.querySelector("#modalInputLabel"),
  mobileMenuButton: document.querySelector("#mobileMenuButton"),
  mainNav: document.querySelector("#mainNav"),
  navProStatus: document.querySelector("#navProStatus"),
  dataSourceButton: document.querySelector("#dataSourceButton"),
  dataDrawer: document.querySelector("#dataDrawer"),
  drawerClose: document.querySelector("#drawerClose"),
  accessCodeButton: document.querySelector("#accessCodeButton"),
  openCheckout: document.querySelector("#openCheckout"),
  openAccessModal: document.querySelector("#openAccessModal"),
  accessModal: document.querySelector("#accessModal"),
  accessClose: document.querySelector("#accessClose"),
  accessCancel: document.querySelector("#accessCancel"),
  accessCodeInput: document.querySelector("#accessCodeInput"),
  toggleAccessCode: document.querySelector("#toggleAccessCode"),
  accessCodeMessage: document.querySelector("#accessCodeMessage"),
  redeemAccessCode: document.querySelector("#redeemAccessCode"),
  checkoutModal: document.querySelector("#checkoutModal"),
  checkoutClose: document.querySelector("#checkoutClose"),
  checkoutPrice: document.querySelector("#checkoutPrice"),
  checkoutSubline: document.querySelector("#checkoutSubline"),
  checkoutMessage: document.querySelector("#checkoutMessage"),
  completeCheckout: document.querySelector("#completeCheckout"),
  checkoutAccessCode: document.querySelector("#checkoutAccessCode"),
  billingToggle: document.querySelector("#billingToggle"),
  pricingAccessCode: document.querySelector("#pricingAccessCode"),
  proPlanBadge: document.querySelector("#proPlanBadge"),
  proPlanStatusNote: document.querySelector("#proPlanStatusNote"),
  proPriceLabel: document.querySelector("#proPriceLabel"),
  resetDemoAccess: document.querySelector("#resetDemoAccess"),
  resetDemoAccessLegal: document.querySelector("#resetDemoAccessLegal"),
  premiumGrid: document.querySelector(".premium-grid"),
  proDashboard: document.querySelector("#proDashboard"),
  proDashboardOutput: document.querySelector("#proDashboardOutput"),
  openProDashboard: document.querySelector("#openProDashboard"),
  proPlanButton: document.querySelector("#proPlanButton"),
  retentionGrid: document.querySelector(".retention-grid"),
  assistantFab: document.querySelector("#assistantFab"),
  assistantQuota: document.querySelector("#assistantQuota"),
  assistantDrawer: document.querySelector("#assistantDrawer"),
  assistantClose: document.querySelector("#assistantClose"),
  assistantMessages: document.querySelector("#assistantMessages"),
  assistantForm: document.querySelector("#assistantForm"),
  assistantInput: document.querySelector("#assistantInput"),
  assistantSuggestions: document.querySelector("#assistantSuggestions"),
  assistantAccessText: document.querySelector("#assistantAccessText"),
  assistantContextLine: document.querySelector("#assistantContextLine"),
  assistantLimit: document.querySelector("#assistantLimit"),
  marketRadar: document.querySelector("#marketRadar"),
  radarTabs: document.querySelector("#radarTabs"),
  riskMap: document.querySelector("#riskMap"),
  watchlistPulse: document.querySelector("#watchlistPulse"),
  generateWatchlistBriefing: document.querySelector("#generateWatchlistBriefing"),
  watchlistPulseBriefing: document.querySelector("#watchlistPulseBriefing"),
  newsImpactScanner: document.querySelector("#newsImpactScanner"),
  compareBattle: document.querySelector("#compareBattle"),
  smartAlertType: document.querySelector("#smartAlertType"),
  smartAlertAsset: document.querySelector("#smartAlertAsset"),
  smartAlertCondition: document.querySelector("#smartAlertCondition"),
  createSmartAlert: document.querySelector("#createSmartAlert"),
  smartAlertsList: document.querySelector("#smartAlertsList"),
  briefingScope: document.querySelector("#briefingScope"),
  generatePremiumBriefing: document.querySelector("#generatePremiumBriefing"),
  generatedBriefing: document.querySelector("#generatedBriefing"),
  confidenceBox: document.querySelector("#confidenceBox"),
  learningLayer: document.querySelector("#learningLayer"),
  proPreview: document.querySelector("#proPreview")
};

const state = {
  activeFilter: "Alle",
  activeRange: "1d",
  activeAsset: assets[0],
  quoteCache: new Map(),
  chartCache: new Map(),
  statusCache: new Map(),
  loadingQuotes: new Set(),
  loadingCharts: new Set(),
  lastChart: null,
  savedSymbols: new Set(JSON.parse(localStorage.getItem("marketpilot-watchlist") || "[]")),
  compareSymbols: new Set(JSON.parse(localStorage.getItem("marketpilot-compare") || "[]")),
  notes: JSON.parse(localStorage.getItem("marketpilot-notes") || "{}"),
  alerts: JSON.parse(localStorage.getItem("marketpilot-alerts") || "{}"),
  watchlistGroups: JSON.parse(localStorage.getItem("marketpilot-groups") || "{}"),
  activeNewsFilter: "all",
  activeGroup: "Alle",
  viewMode: "cards",
  chartType: "line",
  activeIndicators: new Set(),
  activeDetailTab: "chart",
  modalMode: null,
  modalSymbol: null,
  lastViewed: JSON.parse(localStorage.getItem("marketpilot-last-viewed") || "[]"),
  lastVisit: localStorage.getItem("marketpilot-last-visit") || null,
  renderQueued: false,
  hydrationQueued: false,
  isProUser: localStorage.getItem("marketpilot-pro") === "true" || localStorage.getItem("isProUser") === "true",
  assistantMessages: JSON.parse(localStorage.getItem("marketpilot-assistant") || "[]"),
  assistantDaily: JSON.parse(localStorage.getItem("marketpilot-assistant-daily") || "{}"),
  marketRadarFilter: "Alle",
  smartAlerts: JSON.parse(localStorage.getItem("marketpilot-smart-alerts") || "[]"),
  proAccessMethod: localStorage.getItem("marketpilot-pro-method") || localStorage.getItem("proAccessMethod") || "",
  checkoutPlan: localStorage.getItem("selectedBillingCycle") || localStorage.getItem("marketpilot-billing-cycle") || localStorage.getItem("marketpilot-checkout-plan") || "monthly",
  checkoutLoading: false
};

localStorage.setItem("marketpilot-last-visit", new Date().toISOString());

const isLocalHttp = location.protocol.startsWith("http") && ["127.0.0.1", "localhost", "::1"].includes(location.hostname);

const ACCESS_CONFIG = {
  validDemoCodes: ["67tz-OiL9-009K-Pokl-AqQq-U76i-KNml"]
};

async function validateAccessCode(code) {
  // Later this can become: return fetch("/api/access/validate", { method: "POST", body: JSON.stringify({ code }) });
  return ACCESS_CONFIG.validDemoCodes.includes(code);
}

function bootInterfaceEffects() {
  const topbar = document.querySelector(".topbar");
  const updateTopbar = () => topbar?.classList.toggle("scrolled", window.scrollY > 24);
  updateTopbar();
  window.addEventListener("scroll", updateTopbar, { passive: true });

  const revealItems = document.querySelectorAll("main > section, .premium-card, .asset-card, .news-card, .dashboard-widget");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealItems.forEach((item) => {
    item.classList.add("reveal-item");
    observer.observe(item);
  });
}

function formatCurrency(value, currency = "EUR") {
  if (!Number.isFinite(value)) return "Live-Daten nicht verfügbar";
  const digits = Math.abs(value) >= 1 ? 2 : 6;
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency,
    minimumFractionDigits: Math.min(2, digits),
    maximumFractionDigits: digits
  }).format(value).replace(/\u00a0/g, " ");
}

function formatPrice(value, currency = "EUR") {
  return formatCurrency(value, currency);
}

function formatPercent(value) {
  if (!Number.isFinite(value)) return "Nicht verfügbar";
  return `${value >= 0 ? "+" : ""}${value.toFixed(2).replace(".", ",")} %`;
}

function formatCompactNumber(value) {
  if (!Number.isFinite(value)) return "Nicht verfügbar";
  return new Intl.NumberFormat("de-DE", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value).replace(/\u00a0/g, " ");
}

function trendClass(value) {
  if (!Number.isFinite(value)) return "trend-neutral";
  return value >= 0 ? "trend-up" : "trend-down";
}

function healthLabel(status) {
  return {
    live: "Live",
    delayed: "Verzögert",
    demo: "Fallback",
    cache: "Cache",
    failed: "Fehlgeschlagen",
    loading: "Aktualisiert"
  }[status || "loading"];
}

function setStatus(text, mode = "loading") {
  document.querySelector("#dataStatus").textContent = text;
  document.querySelector("#liveSignal").className = `signal ${mode === "live" ? "online" : mode === "failed" ? "offline" : ""}`;
  document.querySelector("#liveBadge").textContent = healthLabel(mode);
  document.querySelector("#liveBadge").className = `live-badge health-${mode}`;
}

function getRangeConfig(range) {
  return {
    "1d": { yahooRange: "1d", yahooInterval: "5m", geckoDays: "1", days: 1 },
    "1w": { yahooRange: "5d", yahooInterval: "15m", geckoDays: "7", days: 7 },
    "1m": { yahooRange: "1mo", yahooInterval: "1d", geckoDays: "30", days: 30 },
    "6m": { yahooRange: "6mo", yahooInterval: "1d", geckoDays: "180", days: 180 },
    "1y": { yahooRange: "1y", yahooInterval: "1wk", geckoDays: "365", days: 365 },
    "5y": { yahooRange: "5y", yahooInterval: "1mo", geckoDays: "1825", days: 1825 },
    "max": { yahooRange: "max", yahooInterval: "3mo", geckoDays: "max", days: 3650 }
  }[range] || { yahooRange: "1d", yahooInterval: "5m", geckoDays: "1", days: 1 };
}

function rangeLabel(range) {
  return {
    "1d": "1T",
    "1w": "1W",
    "1m": "1M",
    "6m": "6M",
    "1y": "1J",
    "5y": "5J",
    max: "Max"
  }[range] || "1T";
}

function yahooUrl(asset, range) {
  const cfg = getRangeConfig(range);
  if (!isLocalHttp) {
    return `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(asset.yahoo)}?range=${cfg.yahooRange}&interval=${cfg.yahooInterval}&includePrePost=false&events=div%2Csplits`;
  }
  return `/api/yahoo-chart?symbol=${encodeURIComponent(asset.yahoo)}&range=${cfg.yahooRange}&interval=${cfg.yahooInterval}`;
}

function geckoMarketsUrl(ids) {
  const joined = encodeURIComponent(ids.join(","));
  if (!isLocalHttp) return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${joined}&price_change_percentage=24h`;
  return `/api/coingecko-markets?ids=${joined}&currency=eur`;
}

function geckoChartUrl(asset, range) {
  const cfg = getRangeConfig(range);
  if (!isLocalHttp) return `https://api.coingecko.com/api/v3/coins/${asset.geckoId}/market_chart?vs_currency=eur&days=${cfg.geckoDays}`;
  return `/api/coingecko-chart?id=${encodeURIComponent(asset.geckoId)}&days=${cfg.geckoDays}&currency=eur`;
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  selectors.toastRegion.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3200);
}

function saveCompare() {
  localStorage.setItem("marketpilot-compare", JSON.stringify([...state.compareSymbols]));
}

function saveNotes() {
  localStorage.setItem("marketpilot-notes", JSON.stringify(state.notes));
}

function saveAlerts() {
  localStorage.setItem("marketpilot-alerts", JSON.stringify(state.alerts));
}

function saveGroups() {
  localStorage.setItem("marketpilot-groups", JSON.stringify(state.watchlistGroups));
}

function saveLastViewed() {
  localStorage.setItem("marketpilot-last-viewed", JSON.stringify(state.lastViewed.slice(0, 6)));
}

function saveProState() {
  localStorage.setItem("marketpilot-pro", String(state.isProUser));
  localStorage.setItem("marketpilot-pro-method", state.proAccessMethod || "");
  localStorage.setItem("marketpilot-billing-cycle", state.checkoutPlan || "monthly");
  localStorage.setItem("marketpilot-checkout-plan", state.checkoutPlan || "monthly");
  localStorage.setItem("isProUser", String(state.isProUser));
  localStorage.setItem("proAccessMethod", state.proAccessMethod || "");
  localStorage.setItem("selectedBillingCycle", state.checkoutPlan || "monthly");
}

function activatePro(method) {
  state.isProUser = true;
  state.proAccessMethod = method;
  saveProState();
  updateProUI();
  renderPremiumModules();
  document.body.classList.add("pro-just-activated");
  window.setTimeout(() => document.body.classList.remove("pro-just-activated"), 1600);
}

function saveAssistant() {
  localStorage.setItem("marketpilot-assistant", JSON.stringify(state.assistantMessages.slice(-20)));
  localStorage.setItem("marketpilot-assistant-daily", JSON.stringify(state.assistantDaily));
}

function saveSmartAlerts() {
  localStorage.setItem("marketpilot-smart-alerts", JSON.stringify(state.smartAlerts));
}

function trackViewedAsset(asset) {
  state.lastViewed = [asset.symbol, ...state.lastViewed.filter((symbol) => symbol !== asset.symbol)].slice(0, 6);
  saveLastViewed();
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function remainingAssistantQuestions() {
  if (state.isProUser) return "∞";
  const used = state.assistantDaily[todayKey()] || 0;
  return Math.max(0, 3 - used);
}

function requirePro(feature, benefit) {
  if (state.isProUser) return true;
  openModal("pro", state.activeAsset, { feature, benefit });
  return false;
}

function updateProUI() {
  document.body.classList.toggle("is-pro", state.isProUser);
  document.body.classList.toggle("is-free", !state.isProUser);
  const methodLabel = state.proAccessMethod === "code" ? "Aktiviert per Nexus Code." : state.proAccessMethod === "purchase" ? "Aktiviert per Demo-Kauf." : "";
  document.querySelector("#proStatusLabel").textContent = state.isProUser ? "Pro aktiv" : "Free";
  document.querySelector("#proStatusText").textContent = state.isProUser
    ? "Alle Demo-Pro-Funktionen sind freigeschaltet: Assistant, Smart Alerts, Briefings und Scanner."
    : "Free: 3 AI-Fragen pro Tag, Basis-Insights und sichtbare Pro-Vorschau.";
  selectors.accessCodeButton.textContent = state.isProUser ? "Pro aktiv" : "Nexus Code";
  if (selectors.navProStatus) selectors.navProStatus.textContent = state.isProUser ? "Pro aktiv" : "Free";
  selectors.openAccessModal.textContent = state.isProUser ? "Code verwalten" : "Code einlösen";
  if (selectors.openCheckout) selectors.openCheckout.textContent = state.isProUser ? "Pro Dashboard öffnen" : "Pro kaufen";
  selectors.openAccessModal.setAttribute("aria-pressed", String(state.isProUser));
  if (selectors.proPlanButton) selectors.proPlanButton.textContent = state.isProUser ? "Pro Dashboard öffnen" : "Pro kaufen";
  if (selectors.proPlanBadge) selectors.proPlanBadge.textContent = state.isProUser ? "PRO AKTIV" : "PRO";
  if (selectors.proPlanStatusNote) {
    selectors.proPlanStatusNote.hidden = !state.isProUser;
    selectors.proPlanStatusNote.textContent = state.isProUser ? `Dein Pro-Zugang ist aktiv. ${methodLabel}`.trim() : "";
  }
  if (selectors.pricingAccessCode) selectors.pricingAccessCode.hidden = state.isProUser;
  if (selectors.proPriceLabel) selectors.proPriceLabel.textContent = state.checkoutPlan === "yearly" ? "119,99 €" : "12,99 €";
  selectors.resetDemoAccess.hidden = !state.isProUser;
  selectors.resetDemoAccessLegal.hidden = !state.isProUser;
  selectors.assistantQuota.textContent = remainingAssistantQuestions();
  if (selectors.assistantLimit) {
    selectors.assistantLimit.textContent = state.isProUser ? "Pro aktiv · unbegrenzte Fragen" : `${remainingAssistantQuestions()}/3 Free-Fragen übrig`;
  }
  if (selectors.assistantContextLine) {
    const quote = state.quoteCache.get(state.activeAsset.symbol);
    selectors.assistantContextLine.textContent = `${state.activeAsset.name} · ${rangeLabel(state.activeRange)} · Risiko ${state.activeAsset.risk} · ${healthLabel(quote?.health)}`;
  }
  selectors.assistantAccessText.textContent = state.isProUser
    ? "Pro: unbegrenzte Demo-Fragen mit Watchlist-, News- und Risikoanalyse."
    : `Free: noch ${remainingAssistantQuestions()} AI-Fragen heute. Pro schaltet unbegrenzte Analysen frei.`;
  document.querySelectorAll("[data-pro-copy]").forEach((item) => {
    item.textContent = state.isProUser ? "Pro aktiv" : item.dataset.proCopy || "Pro";
  });
}

function checkoutPriceCopy() {
  if (state.checkoutPlan === "yearly") {
    return {
      price: "119,99 € pro Jahr",
      subline: "Jährlich zahlen und 2 Monate sparen. Demo-Kauf aktiviert Pro lokal."
    };
  }
  return {
    price: "12,99 € monatlich",
    subline: "Monatlich kündbar. Demo-Kauf aktiviert Pro lokal."
  };
}

function updateCheckoutUI() {
  const copy = checkoutPriceCopy();
  selectors.checkoutPrice.textContent = copy.price;
  selectors.checkoutSubline.textContent = copy.subline;
  selectors.billingToggle?.querySelectorAll("[data-plan-cycle]").forEach((button) => {
    const active = button.dataset.planCycle === state.checkoutPlan;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  if (selectors.proPriceLabel) selectors.proPriceLabel.textContent = state.checkoutPlan === "yearly" ? "119,99 €" : "12,99 €";
}

function startCheckout(plan = state.checkoutPlan) {
  state.checkoutPlan = plan;
  localStorage.setItem("selectedBillingCycle", state.checkoutPlan);
  localStorage.setItem("marketpilot-billing-cycle", state.checkoutPlan);
  localStorage.setItem("marketpilot-checkout-plan", state.checkoutPlan);
  selectors.checkoutModal.hidden = false;
  selectors.checkoutMessage.textContent = "";
  selectors.completeCheckout.disabled = false;
  selectors.completeCheckout.textContent = state.isProUser ? "Zum Pro Dashboard" : "Demo-Kauf abschließen";
  updateCheckoutUI();
}

const openCheckout = startCheckout;

function closeCheckout() {
  selectors.checkoutModal.hidden = true;
  state.checkoutLoading = false;
}

function assetSector(asset) {
  if (asset.type === "Krypto") return "Crypto";
  if (asset.type === "ETF") {
    if (asset.name.includes("Bond") || asset.name.includes("Treasury")) return "Anleihen";
    if (asset.name.includes("Nasdaq") || asset.name.includes("Growth")) return "Technologie";
    if (asset.name.includes("Gold")) return "Rohstoffe";
    return "Multi-Asset";
  }
  if (["AAPL", "MSFT", "NVDA", "GOOGL", "AMZN", "META", "TSLA", "AVGO", "AMD", "ASML", "SAP"].includes(asset.symbol)) return "Technologie";
  if (["JPM", "V", "MA", "BRK-B", "ALV.DE"].includes(asset.symbol)) return "Finanzen";
  if (["LLY", "NVO"].includes(asset.symbol)) return "Gesundheit";
  if (["WMT", "COST", "MC.PA", "NESN.SW"].includes(asset.symbol)) return "Konsum";
  return "Industrie";
}

function mockFundamentals(asset) {
  if (asset.type === "ETF") {
    return `TER ${(0.05 + (asset.rank % 12) / 100).toFixed(2)}% · Anbieter ${asset.symbol.includes(".DE") ? "iShares/Xtrackers" : "Vanguard/iShares"} · Index ${asset.name.includes("S&P") ? "S&P 500" : asset.name.includes("World") ? "MSCI/FTSE World" : "Breiter Markt"} · Replikation physisch · Top Holdings: Apple, Microsoft, Nvidia.`;
  }
  if (asset.type === "Krypto") {
    return `Market Cap ${(asset.rank * 12.4).toFixed(1)} Mrd. € · 24h Volume ${(asset.rank * 0.8).toFixed(1)} Mrd. € · Volatilität erhöht · Abstand zum ATH ${(20 + asset.rank).toFixed(0)}%.`;
  }
  return `Marktkapitalisierung ${(asset.rank * 38).toFixed(0)} Mrd. $ · KGV ${(18 + asset.rank % 22).toFixed(1)} · Dividendenrendite ${asset.rank % 3 === 0 ? "1,4%" : "0,0%"} · Börse ${asset.symbol.includes(".DE") ? "Xetra" : "Nasdaq/NYSE"} · Sektor ${assetSector(asset)}.`;
}

function basePriceForAsset(asset) {
  const known = {
    BTC: 104000,
    ETH: 3600,
    SOL: 170,
    BNB: 650,
    XRP: 0.55,
    ADA: 0.44,
    DOGE: 0.16,
    TRX: 0.13,
    LINK: 17,
    AVAX: 36,
    AAPL: 195,
    MSFT: 430,
    NVDA: 125,
    GOOGL: 170,
    AMZN: 185,
    META: 510,
    TSLA: 185,
    VOO: 490,
    SPY: 530,
    QQQ: 460,
    VTI: 260,
    GLD: 215,
    EUNL: 96,
    "SAP.DE": 185,
    "SXR8.DE": 515,
    "VWCE.DE": 122
  };
  if (known[asset.symbol]) return known[asset.symbol];
  if (asset.type === "Krypto") return Math.max(0.08, 900 / Math.max(asset.rank - 1, 1));
  if (asset.type === "ETF") return 45 + asset.rank * 2.1;
  return 55 + asset.rank * 4.2;
}

function currencyForAsset(asset) {
  if (asset.type === "Krypto") return "EUR";
  if (asset.symbol.endsWith(".DE") || asset.symbol.endsWith(".PA")) return "EUR";
  if (asset.symbol.endsWith(".SW")) return "CHF";
  if (asset.symbol.endsWith(".L")) return "GBP";
  return "USD";
}

function hashSeed(input) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed) {
  let value = seed || 1;
  return () => {
    value += 0x6D2B79F5;
    let mixed = value;
    mixed = Math.imul(mixed ^ (mixed >>> 15), mixed | 1);
    mixed ^= mixed + Math.imul(mixed ^ (mixed >>> 7), mixed | 61);
    return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
  };
}

function randomNormal(random) {
  const u = Math.max(random(), 0.000001);
  const v = Math.max(random(), 0.000001);
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function riskMultiplier(asset) {
  return {
    Niedrig: 0.7,
    Mittel: 1,
    Hoch: 1.45,
    "Sehr hoch": 1.9
  }[asset.risk] || 1;
}

function timeframePointCount(range) {
  return {
    "1d": 78,
    "1w": 84,
    "1m": 46,
    "6m": 96,
    "1y": 128,
    "5y": 180,
    max: 240
  }[range] || 78;
}

function timeframeVolatility(range) {
  return {
    "1d": 0.006,
    "1w": 0.009,
    "1m": 0.012,
    "6m": 0.017,
    "1y": 0.020,
    "5y": 0.026,
    max: 0.030
  }[range] || 0.006;
}

function generateChartData(asset, range, endPrice = basePriceForAsset(asset)) {
  const cfg = getRangeConfig(range);
  const points = timeframePointCount(range);
  const typeMultiplier = asset.type === "Krypto" ? 1.85 : asset.type === "ETF" ? 0.55 : 1;
  const volatilityBase = timeframeVolatility(range) * typeMultiplier * riskMultiplier(asset);
  const random = seededRandom(hashSeed(`${asset.symbol}:${range}:marketpilot`));
  const now = Date.now();
  const step = (cfg.days * 24 * 60 * 60 * 1000) / Math.max(points - 1, 1);
  const returns = Array.from({ length: points - 1 }, (_, index) => {
    const pullback = index > points * 0.35 && index < points * 0.48 ? -0.45 : index > points * 0.72 && index < points * 0.8 ? 0.28 : 0;
    const shock = random() > 0.93 ? randomNormal(random) * volatilityBase * 1.8 : 0;
    return randomNormal(random) * volatilityBase + pullback * volatilityBase + shock;
  });
  const targetMove = (random() - 0.45) * volatilityBase * Math.sqrt(points) * 3.8;
  const currentMove = returns.reduce((sum, value) => sum + value, 0);
  const adjustment = (targetMove - currentMove) / Math.max(returns.length, 1);
  const adjustedReturns = returns.map((value) => value + adjustment);
  const totalLogMove = adjustedReturns.reduce((sum, value) => sum + value, 0);
  const safeEndPrice = Math.max(Number(endPrice) || basePriceForAsset(asset), 0.000001);
  const startPrice = safeEndPrice / Math.exp(totalLogMove);
  const data = [];
  let close = startPrice;
  for (let index = 0; index < points; index += 1) {
    const open = index === 0 ? close * (1 - (adjustedReturns[0] || 0) * 0.25) : data[index - 1].close;
    if (index > 0) close *= Math.exp(adjustedReturns[index - 1]);
    if (index === points - 1) close = safeEndPrice;
    const body = Math.abs(close - open);
    const wick = Math.max(safeEndPrice * volatilityBase * (0.2 + random() * 0.9), body * (0.35 + random() * 0.8));
    const high = Math.max(open, close) + wick;
    const low = Math.max(0.000001, Math.min(open, close) - wick);
    const change = open ? (close - open) / open : 0;
    const baseVolume = asset.type === "Krypto" ? 90000000 : asset.type === "ETF" ? 12000000 : 24000000;
    const volume = Math.round(baseVolume * (1 + asset.rank / 70) * (0.45 + random() * 1.4 + Math.abs(change) * 18));
    data.push({
      time: now - (points - index - 1) * step,
      open,
      high,
      low,
      close,
      value: close,
      volume
    });
  }
  data.at(-1).value = safeEndPrice;
  data.at(-1).close = safeEndPrice;
  data.at(-1).high = Math.max(data.at(-1).high, safeEndPrice);
  data.at(-1).low = Math.min(data.at(-1).low, safeEndPrice);
  return data;
}

function demoSeries(asset, range, endPrice) {
  return generateChartData(asset, range, endPrice);
}

function demoChart(asset, range = "1d", endPrice = basePriceForAsset(asset)) {
  const series = demoSeries(asset, range, endPrice);
  const price = series.at(-1).value;
  const previous = series[0].value;
  return {
    asset,
    price,
    changePct: previous ? ((price - previous) / previous) * 100 : 0,
    currency: currencyForAsset(asset),
    updated: new Date(),
    source: "Fallback-Daten",
    health: "demo",
    series
  };
}

async function fetchJson(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

function parseYahoo(data, asset) {
  const result = data?.chart?.result?.[0];
  if (!result) throw new Error("Quelle nicht erreichbar");
  const meta = result.meta || {};
  const timestamps = result.timestamp || [];
  const closes = result.indicators?.quote?.[0]?.close || [];
  const series = timestamps
    .map((time, index) => ({ time: time * 1000, value: closes[index] }))
    .filter((point) => Number.isFinite(point.value));
  const price = Number.isFinite(meta.regularMarketPrice) ? meta.regularMarketPrice : series.at(-1)?.value;
  const previous = Number.isFinite(meta.chartPreviousClose) ? meta.chartPreviousClose : series[0]?.value;
  const changePct = Number.isFinite(price) && Number.isFinite(previous) && previous !== 0 ? ((price - previous) / previous) * 100 : null;
  return {
    asset,
    price,
    changePct,
    currency: meta.currency || "USD",
    updated: meta.regularMarketTime ? new Date(meta.regularMarketTime * 1000) : new Date(),
    source: "Yahoo Finance Chart",
    health: "delayed",
    series
  };
}

function parseGeckoMarket(item, asset) {
  if (!item) throw new Error("Quelle nicht erreichbar");
  return {
    asset,
    price: item.current_price,
    changePct: item.price_change_percentage_24h,
    currency: "EUR",
    updated: item.last_updated ? new Date(item.last_updated) : new Date(),
    source: "CoinGecko",
    health: "live",
    series: []
  };
}

async function fetchQuote(asset) {
  if (state.quoteCache.has(asset.symbol)) return state.quoteCache.get(asset.symbol);
  try {
    let quote;
    if (asset.type === "Krypto") {
      const data = await fetchJson(geckoMarketsUrl([asset.geckoId]));
      quote = parseGeckoMarket(data[0], asset);
    } else {
      quote = parseYahoo(await fetchJson(yahooUrl(asset, "1d")), asset);
    }
    state.quoteCache.set(asset.symbol, quote);
    state.statusCache.set(asset.symbol, quote.health);
    return quote;
  } catch (error) {
    const cached = state.quoteCache.get(asset.symbol);
    if (cached) {
      const quote = { ...cached, health: "cache" };
      state.statusCache.set(asset.symbol, "cache");
      return quote;
    }
    const demo = demoChart(asset, "1d");
    state.quoteCache.set(asset.symbol, demo);
    state.statusCache.set(asset.symbol, "demo");
    return demo;
  }
}

async function fetchChart(asset, range) {
  const cacheKey = `${asset.symbol}:${range}`;
  if (state.chartCache.has(cacheKey)) return state.chartCache.get(cacheKey);
  try {
    let chart;
    if (asset.type === "Krypto") {
      const quote = await fetchQuote(asset);
      const series = generateChartData(asset, range, quote.price);
      chart = { ...quote, changePct: periodChange(series, getRangeConfig(range).days), series };
    } else {
      const live = parseYahoo(await fetchJson(yahooUrl(asset, range)), asset);
      const series = generateChartData(asset, range, live.price);
      chart = { ...live, changePct: periodChange(series, getRangeConfig(range).days), series };
    }
    if (!chart.series?.length || chart.series.length < 2) {
      chart = demoChart(asset, range, chart.price);
    }
    state.chartCache.set(cacheKey, chart);
    if (range === "1d" || !state.quoteCache.has(asset.symbol)) {
      state.quoteCache.set(asset.symbol, { ...chart, series: undefined });
    }
    state.statusCache.set(asset.symbol, chart.health);
    return chart;
  } catch (error) {
    const cachedQuote = state.quoteCache.get(asset.symbol);
    const demo = demoChart(asset, range, cachedQuote?.price || basePriceForAsset(asset));
    state.chartCache.set(cacheKey, demo);
    if (range === "1d" || !state.quoteCache.has(asset.symbol)) {
      state.quoteCache.set(asset.symbol, { ...demo, series: undefined });
    }
    state.statusCache.set(asset.symbol, "demo");
    return demo;
  }
}

function periodChange(series, days) {
  if (!series?.length) return null;
  const last = series.at(-1);
  const target = last.time - days * 24 * 60 * 60 * 1000;
  const start = series.find((point) => point.time >= target) || series[0];
  if (!start || !Number.isFinite(start.value) || start.value === 0) return null;
  return ((last.value - start.value) / start.value) * 100;
}

function highLow(series, currency) {
  if (!series?.length) return "Live-Daten aktuell nicht verfügbar";
  const values = series.flatMap((point) => [point.high ?? point.value, point.low ?? point.value]).filter(Number.isFinite);
  return `${formatPrice(Math.max(...values), currency)} / ${formatPrice(Math.min(...values), currency)}`;
}

function volatility(series) {
  if (!series?.length || series.length < 3) return null;
  const returns = series.slice(1).map((point, index) => {
    const previous = series[index].value;
    if (!Number.isFinite(previous) || previous === 0) return 0;
    return ((point.value - previous) / previous) * 100;
  });
  const average = returns.reduce((sum, value) => sum + value, 0) / returns.length;
  const variance = returns.reduce((sum, value) => sum + (value - average) ** 2, 0) / returns.length;
  return Math.sqrt(variance);
}

function sentimentFromChange(changePct) {
  if (!Number.isFinite(changePct)) return "Neutral";
  if (changePct > 2) return "Auffällig positiv";
  if (changePct > 0.25) return "Konstruktiv";
  if (changePct < -2) return "Auffällig schwach";
  if (changePct < -0.25) return "Vorsichtig";
  return "Neutral";
}

function typeClass(asset) {
  if (asset.type === "Krypto") return "crypto";
  if (asset.type === "Aktie") return "stock";
  return "etf";
}

function sparkline(series, changePct) {
  if (!series?.length) {
    return `<svg class="sparkline" viewBox="0 0 160 44" role="img" aria-label="Mini-Chart nicht verfügbar"><path d="M4 22 H156" stroke="rgba(153,170,189,.35)" /></svg>`;
  }
  const sample = series.slice(-32);
  const values = sample.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const spread = max - min || 1;
  const points = sample
    .map((point, index) => {
      const x = 4 + (index / Math.max(sample.length - 1, 1)) * 152;
      const y = 38 - ((point.value - min) / spread) * 32;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const color = Number.isFinite(changePct) && changePct < 0 ? "#ff6b7d" : "#61df91";
  return `<svg class="sparkline" viewBox="0 0 160 44" role="img" aria-label="Mini-Chart"><polyline points="${points}" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
}

function filteredAssets() {
  const query = selectors.search.value.trim().toLowerCase();
  const rows = assets.filter((asset) => {
    const matchesFilter = state.activeFilter === "Alle" || asset.type === state.activeFilter;
    const matchesRegion = selectors.regionFilter.value === "Alle" || asset.region === selectors.regionFilter.value;
    const matchesRisk = selectors.riskFilter.value === "Alle" || asset.risk === selectors.riskFilter.value;
    const health = state.quoteCache.get(asset.symbol)?.health || state.statusCache.get(asset.symbol) || "loading";
    const matchesStatus = selectors.statusFilter.value === "Alle" || health === selectors.statusFilter.value;
    const matchesQuery = [asset.name, asset.symbol, asset.type, asset.region, assetSector(asset)].some((value) => value.toLowerCase().includes(query));
    return matchesFilter && matchesRegion && matchesRisk && matchesStatus && matchesQuery;
  });
  const sortBy = selectors.sort.value;
  return rows.sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "type") return a.type.localeCompare(b.type) || a.rank - b.rank;
    if (sortBy === "risk") return ["Niedrig", "Mittel", "Hoch", "Sehr hoch"].indexOf(b.risk) - ["Niedrig", "Mittel", "Hoch", "Sehr hoch"].indexOf(a.risk);
    if (sortBy === "change") return (state.quoteCache.get(b.symbol)?.changePct ?? -999) - (state.quoteCache.get(a.symbol)?.changePct ?? -999);
    return a.rank - b.rank;
  });
}

function renderAssets() {
  const rows = filteredAssets();
  document.querySelector("#assetCount").textContent = `${rows.length} Assets`;
  if (!rows.length) {
    selectors.assetGrid.innerHTML = `<div class="empty-state"><strong>Keine Assets gefunden.</strong><p>Ändere Suche oder Filter, um wieder Ergebnisse zu sehen.</p><button type="button" id="resetFilters">Filter zurücksetzen</button></div>`;
    selectors.assetTableBody.innerHTML = `<tr><td colspan="13"><div class="empty-state"><strong>Keine Assets gefunden.</strong><p>Ändere Suche oder Filter, um wieder Ergebnisse zu sehen.</p><button type="button" id="resetFiltersTable">Filter zurücksetzen</button></div></td></tr>`;
    selectors.heatmapGrid.innerHTML = `<div class="empty-state"><strong>Keine Heatmap-Daten</strong><p>Filter zurücksetzen, um Assets anzuzeigen.</p><button type="button" id="resetFiltersHeatmap">Filter zurücksetzen</button></div>`;
    updateViewMode();
    document.querySelector("#resetFilters")?.addEventListener("click", resetFilters);
    document.querySelector("#resetFiltersTable")?.addEventListener("click", resetFilters);
    document.querySelector("#resetFiltersHeatmap")?.addEventListener("click", resetFilters);
    return;
  }
  selectors.assetGrid.innerHTML = rows.map((asset) => renderAssetCard(asset)).join("");
  renderScreenerTable(rows);
  renderHeatmap(rows);
  updateViewMode();
  hydrateVisible(rows.slice(0, 12));
}

function queueRenderAssets() {
  if (state.renderQueued) return;
  state.renderQueued = true;
  window.requestAnimationFrame(() => {
    state.renderQueued = false;
    renderAssets();
  });
}

function resetFilters() {
  selectors.search.value = "";
  selectors.sort.value = "rank";
  selectors.regionFilter.value = "Alle";
  selectors.riskFilter.value = "Alle";
  selectors.statusFilter.value = "Alle";
  state.activeFilter = "Alle";
  selectors.segments.forEach((button) => button.classList.toggle("active", button.dataset.filter === "Alle"));
  showToast("Filter wurden zurückgesetzt.");
  renderAssets();
}

function renderScreenerTable(rows) {
  selectors.assetTableBody.innerHTML = rows.map((asset) => {
    const quote = state.quoteCache.get(asset.symbol);
    const chart = state.chartCache.get(`${asset.symbol}:1m`) || state.chartCache.get(`${asset.symbol}:1d`);
    const change7d = chart?.series ? periodChange(chart.series, 7) : null;
    const change1m = chart?.series ? periodChange(chart.series, 30) : null;
    const health = quote?.health || state.statusCache.get(asset.symbol) || "loading";
    const saved = state.savedSymbols.has(asset.symbol);
    const compared = state.compareSymbols.has(asset.symbol);
    return `
      <tr data-symbol="${asset.symbol}" tabindex="0">
        <td>${asset.name}</td>
        <td>${asset.symbol}</td>
        <td>${asset.type}</td>
        <td>${asset.region}</td>
        <td>${assetSector(asset)}</td>
        <td>${quote ? formatPrice(quote.price, quote.currency) : "Letzter Stand"}</td>
        <td class="${trendClass(quote?.changePct)}">${formatPercent(quote?.changePct)}</td>
        <td class="${trendClass(change7d)}">${formatPercent(change7d)}</td>
        <td class="${trendClass(change1m)}">${formatPercent(change1m)}</td>
        <td>${asset.risk}</td>
        <td>${sentimentFromChange(quote?.changePct)}</td>
        <td>${healthLabel(health)}</td>
        <td>
          <div class="table-actions">
            <button type="button" data-table-action="details" data-symbol="${asset.symbol}">Chart öffnen</button>
            <button type="button" data-table-action="watchlist" data-symbol="${asset.symbol}">${saved ? "In Watchlist" : "Watchlist"}</button>
            <button type="button" data-table-action="compare" data-symbol="${asset.symbol}">${compared ? "Im Vergleich" : "Vergleichen"}</button>
            <button type="button" data-table-action="alert" data-symbol="${asset.symbol}">Alarm</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function renderHeatmap(rows) {
  selectors.heatmapGrid.innerHTML = rows.slice(0, 50).map((asset) => {
    const quote = state.quoteCache.get(asset.symbol);
    const change = quote?.changePct;
    const intensity = Math.min(Math.abs(change || 0) / 4, 1);
    const neutral = !Number.isFinite(change);
    const color = neutral
      ? "rgba(153,170,189,0.14)"
      : change < 0
        ? `rgba(255,107,125,${0.20 + intensity * 0.52})`
        : `rgba(97,223,145,${0.18 + intensity * 0.52})`;
    const sizeClass = asset.rank <= 8 ? "large" : asset.rank <= 20 ? "medium" : "";
    return `
      <button type="button" class="heatmap-cell ${sizeClass} ${state.activeAsset.symbol === asset.symbol ? "active" : ""}" data-symbol="${asset.symbol}" style="background:${color}">
        <strong>${asset.name}</strong>
        <small>${asset.symbol} · ${asset.type}</small>
        <span class="${trendClass(change)}">${formatPercent(change)}</span>
      </button>
    `;
  }).join("");
}

function updateViewMode() {
  selectors.assetGrid.hidden = state.viewMode !== "cards";
  selectors.assetTableWrap.hidden = state.viewMode !== "table";
  selectors.heatmapGrid.hidden = state.viewMode !== "heatmap";
  selectors.viewButtons.forEach((button) => {
    const active = button.dataset.viewMode === state.viewMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderAssetCard(asset) {
  const quote = state.quoteCache.get(asset.symbol);
  const chart = state.chartCache.get(`${asset.symbol}:1m`) || state.chartCache.get(`${asset.symbol}:1d`);
  const health = quote?.health || state.statusCache.get(asset.symbol) || "loading";
  const change7d = chart?.series ? periodChange(chart.series, 7) : null;
  const change1m = chart?.series ? periodChange(chart.series, 30) : null;
  const saved = state.savedSymbols.has(asset.symbol);
  const compared = state.compareSymbols.has(asset.symbol);
  const sector = assetSector(asset);
  return `
    <article class="asset-card ${state.activeAsset.symbol === asset.symbol ? "active" : ""}" data-symbol="${asset.symbol}" tabindex="0" aria-label="${asset.name} öffnen">
      <div class="asset-card-head">
        <div class="asset-title">
          <strong>${asset.name}</strong>
          <small>${asset.symbol} · ${asset.region} · ${sector}</small>
        </div>
        <span class="type-pill ${typeClass(asset)}">${asset.type}</span>
      </div>
      <div class="asset-price">${quote ? formatPrice(quote.price, quote.currency) : "Letzter Stand"}</div>
      ${sparkline(chart?.series, quote?.changePct)}
      <div class="asset-stats">
        <span>24h <b class="${trendClass(quote?.changePct)}">${formatPercent(quote?.changePct)}</b></span>
        <span>7T <b class="${trendClass(change7d)}">${formatPercent(change7d)}</b></span>
        <span>1M <b class="${trendClass(change1m)}">${formatPercent(change1m)}</b></span>
      </div>
      <div class="asset-meta">
        <span class="health-badge health-${health}">${healthLabel(health)}</span>
        <span class="source-badge">${quote?.source || "Demo-Modus"}</span>
        <span class="source-badge">Risiko: ${asset.risk}</span>
        <span class="source-badge">Sektor: ${sector}</span>
        <span class="source-badge">AI: ${sentimentFromChange(quote?.changePct)}</span>
      </div>
      <div class="asset-card-actions">
        <button class="primary-mini" type="button" data-action="details" data-symbol="${asset.symbol}">Chart öffnen</button>
        <button type="button" data-action="watchlist" data-symbol="${asset.symbol}">${saved ? "In Watchlist" : "Zur Watchlist"}</button>
        <button type="button" data-action="compare" data-symbol="${asset.symbol}">${compared ? "Verglichen" : "Vergleichen"}</button>
        <button type="button" data-action="alert" data-symbol="${asset.symbol}">Alarm erstellen</button>
      </div>
    </article>
  `;
}

async function hydrateVisible(rows) {
  for (const asset of rows) {
    if (!state.quoteCache.has(asset.symbol) && !state.loadingQuotes.has(asset.symbol)) {
      state.loadingQuotes.add(asset.symbol);
      fetchQuote(asset)
        .then(() => {
          setStatus("Marktdaten verbunden", "live");
          queueRenderAssets();
          updateBriefing();
          renderTickerGrid();
          renderSavedWatchlist();
        })
        .catch(() => {
          setStatus("Eine Datenquelle ist aktuell limitiert", "failed");
          queueRenderAssets();
        })
        .finally(() => state.loadingQuotes.delete(asset.symbol));
    }
    const monthKey = `${asset.symbol}:1m`;
    if (!state.chartCache.has(monthKey) && !state.loadingCharts.has(monthKey)) {
      state.loadingCharts.add(monthKey);
      fetchChart(asset, "1m")
        .then(() => queueRenderAssets())
        .catch(() => queueRenderAssets())
        .finally(() => state.loadingCharts.delete(monthKey));
    }
    await new Promise((resolve) => setTimeout(resolve, 80));
  }
}

function drawHeroSparkline(canvas, series, color = "#61df91") {
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  const width = rect.width || 520;
  const height = rect.height || 140;
  canvas.width = Math.max(1, Math.floor(width * scale));
  canvas.height = Math.max(1, Math.floor(height * scale));
  ctx.scale(scale, scale);
  ctx.clearRect(0, 0, width, height);

  const gradientBg = ctx.createLinearGradient(0, 0, width, height);
  gradientBg.addColorStop(0, "rgba(53, 212, 208, 0.10)");
  gradientBg.addColorStop(1, "rgba(93, 169, 255, 0.03)");
  ctx.fillStyle = gradientBg;
  ctx.fillRect(0, 0, width, height);

  if (!series?.length || series.length < 2) return;

  const cleanSeries = series.slice(-72).filter((point) => Number.isFinite(point.value));
  if (cleanSeries.length < 2) return;
  const values = cleanSeries.map((point) => point.value);
  const rawMin = Math.min(...values);
  const rawMax = Math.max(...values);
  const rawSpread = rawMax - rawMin || Math.max(rawMax * 0.02, 1);
  const min = rawMin - rawSpread * 0.12;
  const max = rawMax + rawSpread * 0.12;
  const padding = 12;
  const xStep = (width - padding * 2) / Math.max(1, cleanSeries.length - 1);
  const yFor = (value) => padding + (1 - (value - min) / (max - min || 1)) * (height - padding * 2);

  ctx.beginPath();
  cleanSeries.forEach((point, index) => {
    const x = padding + index * xStep;
    const y = yFor(point.value);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(width - padding, height - padding);
  ctx.lineTo(padding, height - padding);
  ctx.closePath();
  const area = ctx.createLinearGradient(0, padding, 0, height - padding);
  area.addColorStop(0, color === "#ff6b7d" ? "rgba(255, 107, 125, 0.22)" : "rgba(97, 223, 145, 0.22)");
  area.addColorStop(1, "rgba(53, 212, 208, 0)");
  ctx.fillStyle = area;
  ctx.fill();

  ctx.beginPath();
  cleanSeries.forEach((point, index) => {
    const x = padding + index * xStep;
    const y = yFor(point.value);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.8;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
}

function drawChart(canvas, series, currency, color = "#61df91", options = {}) {
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  const isHeroChart = canvas === selectors.heroChart;
  const width = rect.width || (canvas === selectors.heroChart ? 360 : 920);
  const height = rect.height || (canvas === selectors.heroChart ? 210 : 360);
  canvas.width = Math.max(1, Math.floor(width * scale));
  canvas.height = Math.max(1, Math.floor(height * scale));
  ctx.scale(scale, scale);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = isHeroChart ? "rgba(8,16,28,0.18)" : "#081019";
  ctx.fillRect(0, 0, width, height);

  if (!series?.length || series.length < 2) {
    ctx.fillStyle = "#99aabd";
    ctx.font = "800 15px system-ui";
    ctx.fillText("Live-Daten aktuell nicht verfügbar", 18, 38);
    if (!isHeroChart) state.lastChart = { series: [], currency, plot: null };
    return;
  }

  const padding = isHeroChart
    ? { top: 16, right: 14, bottom: 18, left: 14 }
    : { top: 28, right: 24, bottom: state.activeIndicators.has("volume") ? 72 : 36, left: 64 };
  const values = series.flatMap((point) => [point.high ?? point.value, point.low ?? point.value]).filter(Number.isFinite);
  const rawMin = Math.min(...values);
  const rawMax = Math.max(...values);
  const rawSpread = rawMax - rawMin || Math.max(rawMax * 0.02, 1);
  const min = Math.max(0, rawMin - rawSpread * 0.08);
  const max = rawMax + rawSpread * 0.08;
  const spread = max - min || 1;
  const xStep = (width - padding.left - padding.right) / (series.length - 1);
  const yFor = (value) => padding.top + (1 - (value - min) / spread) * (height - padding.top - padding.bottom);
  const xFor = (index) => padding.left + index * xStep;

  ctx.strokeStyle = isHeroChart ? "rgba(153, 170, 189, 0.08)" : "rgba(153, 170, 189, 0.18)";
  ctx.lineWidth = 1;
  for (let i = 0; i < (isHeroChart ? 3 : 4); i += 1) {
    const y = padding.top + ((height - padding.top - padding.bottom) / 3) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
  }

  if (!isHeroChart && state.activeIndicators.has("volume")) {
    const volumeTop = height - 58;
    const maxVolume = Math.max(...series.map((point) => point.volume || 0), 1);
    series.forEach((point, index) => {
      if (index % Math.ceil(series.length / 80) !== 0) return;
      const x = xFor(index);
      const barHeight = Math.max(3, ((point.volume || 0) / maxVolume) * 46);
      ctx.fillStyle = (point.close ?? point.value) >= (point.open ?? point.value) ? "rgba(97, 223, 145, 0.34)" : "rgba(255, 107, 125, 0.34)";
      ctx.fillRect(x - 1.5, volumeTop + 46 - barHeight, 3, barHeight);
    });
  }

  if (!isHeroChart && state.chartType === "candle") {
    const candleStep = Math.max(1, Math.ceil(series.length / 70));
    for (let index = candleStep; index < series.length; index += candleStep) {
      const prev = series[index - candleStep]?.value ?? series[index].value;
      const open = series[index].open ?? prev;
      const close = series[index].close ?? series[index].value;
      const high = series[index].high ?? Math.max(open, close);
      const low = series[index].low ?? Math.min(open, close);
      const x = xFor(index);
      const openY = yFor(open);
      const closeY = yFor(close);
      ctx.strokeStyle = close >= open ? "#61df91" : "#ff6b7d";
      ctx.fillStyle = ctx.strokeStyle;
      ctx.beginPath();
      ctx.moveTo(x, yFor(high));
      ctx.lineTo(x, yFor(low));
      ctx.stroke();
      ctx.fillRect(x - 3, Math.min(openY, closeY), 6, Math.max(2, Math.abs(closeY - openY)));
    }
  } else {
    if (!isHeroChart && state.chartType === "area") {
      const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
      gradient.addColorStop(0, color === "#61df91" ? "rgba(97, 223, 145, 0.24)" : "rgba(255, 107, 125, 0.24)");
      gradient.addColorStop(1, "rgba(53, 212, 208, 0)");
      ctx.beginPath();
      series.forEach((point, index) => {
        const x = xFor(index);
        const y = yFor(point.value);
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.lineTo(width - padding.right, height - padding.bottom);
      ctx.lineTo(padding.left, height - padding.bottom);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
    }
    ctx.beginPath();
    series.forEach((point, index) => {
      const x = xFor(index);
      const y = yFor(point.value);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = isHeroChart ? 2.8 : 2.4;
    ctx.stroke();
  }

  function drawMovingAverage(windowSize, maColor) {
    if (series.length < Math.min(windowSize, 8)) return;
    ctx.beginPath();
    series.forEach((point, index) => {
      const start = Math.max(0, index - windowSize + 1);
      const chunk = series.slice(start, index + 1);
      const avg = chunk.reduce((sum, item) => sum + item.value, 0) / chunk.length;
      const x = xFor(index);
      const y = yFor(avg);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = maColor;
    ctx.lineWidth = 1.4;
    ctx.setLineDash([5, 4]);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  if (!isHeroChart && state.activeIndicators.has("ma50")) {
    if (series.length >= 50) drawMovingAverage(50, "#f7cf72");
  }
  if (!isHeroChart && state.activeIndicators.has("ma200")) {
    if (series.length >= 200) drawMovingAverage(200, "#5da9ff");
  }

  if (Number.isInteger(options.hoverIndex) && series[options.hoverIndex]) {
    const hoverPoint = series[options.hoverIndex];
    const hoverX = xFor(options.hoverIndex);
    const hoverY = yFor(hoverPoint.value);
    ctx.strokeStyle = "rgba(244, 248, 251, 0.42)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(hoverX, padding.top);
    ctx.lineTo(hoverX, height - padding.bottom);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(hoverX, hoverY, 4, 0, Math.PI * 2);
    ctx.fill();
  }
  if (!isHeroChart) {
    state.lastChart = { series, currency, plot: { left: padding.left, right: width - padding.right, top: padding.top, bottom: height - padding.bottom, xStep } };
  }
}

function updateDetailSkeleton(asset) {
  document.querySelector("#detailType").textContent = asset.type;
  document.querySelector("#detailName").textContent = asset.name;
  document.querySelector("#detailSymbol").textContent = asset.symbol;
  document.querySelector("#detailPrice").textContent = "Letzter Stand";
  document.querySelector("#detailChange").textContent = "Zeitraum: Heute";
  document.querySelector("#metricRegion").textContent = asset.region;
  document.querySelector("#metricRisk").textContent = asset.risk;
  document.querySelector("#metricHealth").textContent = "Demo-Modus";
  document.querySelector("#metricSource").textContent = "Demo-Modus";
  document.querySelector("#metricUpdated").textContent = "Aktualisiert";
  document.querySelector("#metricPeriodChange").textContent = "Heute";
  document.querySelector("#metricHighLow").textContent = "Letzter Stand";
  document.querySelector("#metricSentiment").textContent = "Neutral";
  document.querySelector("#assetAiSummary").textContent = "Kurzfazit, mögliche Treiber und Risiko-Hinweise erscheinen nach Asset-Auswahl.";
  document.querySelector("#assetOpportunities").textContent = "Wird nach Datenlage eingeordnet.";
  document.querySelector("#assetRisks").textContent = "Wird nach Volatilität und Asset-Typ eingeordnet.";
  document.querySelector("#assetWatch").textContent = "Achte auf Datenqualität, News-Kontext und ungewöhnliche Bewegungen.";
  document.querySelector("#assetMetrics").textContent = mockFundamentals(asset);
  document.querySelector("#assetNews").textContent = "News zu diesem Wert werden vorbereitet.";
  document.querySelector("#assetSimilar").textContent = "Ähnliche Assets werden vorbereitet.";
  document.querySelector("#assetMetricsDeep").textContent = mockFundamentals(asset);
  document.querySelector("#assetDataQuality").textContent = "Datenstatus, Quelle und Update-Zeit werden geprüft.";
  document.querySelector("#assetNewsDeep").textContent = "News Impact wird nach Relevanz, Assetklasse und Watchlist-Kontext eingeordnet.";
  document.querySelector("#assetNewsImpact").textContent = "Relevanz wird nach Marktbewegung und Watchlist-Kontext eingeordnet.";
  document.querySelector("#assetRiskDeep").textContent = "Risiko wird nach Volatilität, Assetklasse und Datenstatus eingeordnet.";
  document.querySelector("#assetRiskWatch").textContent = "Achte auf schnelle Bewegungen, Datenqualität und Zeithorizont.";
  document.querySelector("#assetNotePreview").textContent = state.notes[asset.symbol] || "Noch keine Notiz gespeichert.";
  document.querySelector("#assetAlertPreview").textContent = state.alerts[asset.symbol] || "Noch kein Alarm gespeichert.";
  document.querySelector("#heroAsset").textContent = asset.name;
  document.querySelector("#heroSymbol").textContent = asset.symbol;
  if (selectors.smartAlertAsset) selectors.smartAlertAsset.value = asset.name;
  selectors.chartLoading.textContent = "Chartdaten werden geladen";
  selectors.chartLoading.classList.remove("hidden");
  updateWatchlistButton();
}

function aiCopyForAsset(asset, chart) {
  const period = periodChange(chart.series, getRangeConfig(state.activeRange).days);
  const direction = Number.isFinite(period) && period >= 0 ? "zeigt im gewählten Zeitraum Stärke" : "steht im gewählten Zeitraum unter Druck";
  const movement = Math.abs(period || 0) > 4 ? "auffällige Bewegung" : Math.abs(period || 0) > 1 ? "relevante Bewegung" : "ruhige Bewegung";
  const dataQuality = `${healthLabel(chart.health)} über ${chart.source}, ${chart.series.length} Chartpunkte.`;
  const whatHappened = `${rangeLabel(state.activeRange)}: ${formatPercent(period)}, Kurs ${formatPrice(chart.price, chart.currency)}, Hoch/Tief ${highLow(chart.series, chart.currency)}.`;
  const whyRelevant = asset.type === "Krypto"
    ? "Relevanz entsteht vor allem durch Momentum, Liquidität und schnelle Sentimentwechsel."
    : asset.type === "ETF"
      ? "Relevanz entsteht durch Marktbreite, Indextrend und Makro-Sensitivität."
      : `Relevanz entsteht durch Sektor ${assetSector(asset)}, Unternehmens-/Sektornews und Bewertungsumfeld.`;
  return {
    summary: `Kurzfazit: ${asset.name} ${direction}. Was ist passiert: ${whatHappened} Warum relevant: ${whyRelevant} Datenqualität: ${dataQuality} Keine Anlageberatung.`,
    opportunities: asset.type === "ETF"
      ? `Mögliche Chance: Diversifikation kann die ${movement} breiter abbilden, besonders wenn mehrere Sektoren mitziehen.`
      : asset.type === "Krypto"
        ? `Mögliche Chance: Momentum kann Aufmerksamkeit erzeugen, wenn Volumen und Marktbreite die ${movement} bestätigen.`
        : `Mögliche Chance: Der Wert kann profitieren, wenn Sektortrend, News und Marktstimmung zur ${movement} passen.`,
    risks: asset.risk === "Hoch" || asset.risk === "Sehr hoch"
      ? "Mögliche Risiken: hohe Schwankungen, schnelle Trendwechsel, News-Risiko und mögliche Fehlsignale bei kurzen Zeiträumen."
      : "Mögliche Risiken: Zinsen, Bewertung, Indexdruck und Marktsentiment können auch ruhigere Werte belasten.",
    watch: `Worauf achten: ${asset.name} weiter mit ${rangeLabel(state.activeRange)}, Volumen, News-Kontext, Datenstatus und ähnlichen Assets vergleichen.`
  };
}

function heroInsightCopy(asset, period, health) {
  if (!Number.isFinite(period)) {
    return { label: "Neutral", text: "Datenlage wird geprüft." };
  }
  if (period > 2) {
    return { label: "Auffällig positiv", text: "Momentum und Datenqualität werden neutral eingeordnet." };
  }
  if (period < -2 || asset.risk === "Sehr hoch") {
    return { label: "Vorsichtig", text: "Hohe Volatilität, weitere Bestätigung nötig." };
  }
  return {
    label: sentimentFromChange(period),
    text: health === "live" ? "Ruhiger Verlauf mit aktiver Datenquelle." : "Signal stabil, Datenstatus im Blick behalten."
  };
}

function setDetailTab(tab, silent = false) {
  state.activeDetailTab = tab;
  const selectedButton = document.querySelector(`[data-detail-tab="${tab}"]`);
  document.querySelectorAll("#detailTabs button").forEach((button) => {
    button.classList.toggle("active", button === selectedButton);
  });
  document.querySelectorAll(".detail-tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.detailPanel === tab);
  });
  if (tab === "chart") {
    window.requestAnimationFrame(() => {
      const cached = state.chartCache.get(`${state.activeAsset.symbol}:${state.activeRange}`);
      if (cached) updateDetail(cached);
    });
  }
  if (!silent && selectedButton) showToast(`${selectedButton.textContent.trim()} geöffnet.`);
}

function scrollToDetailPanel() {
  window.requestAnimationFrame(() => {
    document.querySelector(".detail-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function updateChartIndicatorNote(series) {
  const note = document.querySelector("#chartIndicatorNote");
  if (!note) return;
  const messages = [];
  if (state.activeIndicators.has("ma50") && series.length < 50) messages.push("MA50 benötigt mindestens 50 Datenpunkte.");
  if (state.activeIndicators.has("ma200") && series.length < 200) messages.push("MA200 benötigt einen längeren Zeitraum.");
  note.hidden = messages.length === 0;
  note.textContent = messages.join(" ");
}

function updateDetailPanels(chart, period) {
  const { asset, price, changePct, currency, source, updated, series, health } = chart;
  const vol = volatility(series);
  const peers = assets
    .filter((item) => item.symbol !== asset.symbol && (item.type === asset.type || assetSector(item) === assetSector(asset)))
    .slice(0, 5)
    .map((item) => `${item.name} (${item.symbol})`)
    .join(", ");
  const note = state.notes[asset.symbol];
  const alert = state.alerts[asset.symbol];
  document.querySelector("#assetMetricsDeep").textContent =
    `${mockFundamentals(asset)} Aktueller Kurs: ${formatPrice(price, currency)}. Zeitraum ${state.activeRange.toUpperCase()}: ${formatPercent(period)}. Hoch/Tief: ${highLow(series, currency)}.`;
  document.querySelector("#assetDataQuality").textContent =
    `Quelle: ${source}. Status: ${healthLabel(health)}. Letztes Update: ${updated.toLocaleString("de-DE")}. Historie: ${series.length} Datenpunkte.`;
  document.querySelector("#assetNewsDeep").textContent =
    `${asset.name} wird mit ${asset.type === "Krypto" ? "Liquidität, Netzwerkaktivität und Krypto-Sentiment" : asset.type === "ETF" ? "Makrotrends, Sektorbreite und Fondsflüssen" : "Unternehmensdaten, Sektorimpulsen und Analystenstimmung"} verbunden.`;
  document.querySelector("#assetNewsImpact").textContent =
    `News-Impact: ${Math.abs(changePct || 0) > 2 ? "hoch" : "normal"} bei ${formatPercent(changePct)} Tagesbewegung. Watchlist-Kontext: ${state.savedSymbols.has(asset.symbol) ? "aktiv beobachtet" : "noch nicht gespeichert"}.`;
  document.querySelector("#assetRiskDeep").textContent =
    `Risikoprofil ${asset.risk}. Geschätzte Schwankung im geladenen Zeitraum: ${Number.isFinite(vol) ? `${vol.toFixed(2).replace(".", ",")}%` : "noch nicht verfügbar"}. Assetklasse: ${asset.type}, Sektor: ${assetSector(asset)}.`;
  document.querySelector("#assetRiskWatch").textContent =
    `Beobachte ${Number.isFinite(period) && period < 0 ? "Abwärtsdynamik und mögliche Unterstützungen" : "Momentum-Bestätigung und Rücksetzer"}, Datenstatus ${healthLabel(health)} sowie ähnliche Werte: ${peers || "keine passende Vergleichsgruppe geladen"}.`;
  document.querySelector("#assetNotePreview").textContent = note || "Noch keine Notiz gespeichert. Speichere eine These, ein Kursziel oder einen Beobachtungspunkt.";
  document.querySelector("#assetAlertPreview").textContent = alert || "Noch kein Alarm gespeichert. Lege eine Preis-, Risiko- oder News-Bedingung an.";
}

function updateDetail(chart) {
  const { asset, price, changePct, currency, source, updated, series, health } = chart;
  const period = periodChange(series, getRangeConfig(state.activeRange).days);
  const color = !Number.isFinite(period) || Math.abs(period) < 0.15 ? "#5da9ff" : period < 0 ? "#ff6b7d" : "#61df91";
  document.querySelector("#detailPrice").textContent = formatPrice(price, currency);
  document.querySelector("#detailChange").textContent = `${rangeLabel(state.activeRange)}: ${formatPercent(period)}`;
  document.querySelector("#detailChange").className = trendClass(period);
  document.querySelector("#metricHealth").textContent = healthLabel(health);
  document.querySelector("#metricHealth").className = `health-${health}`;
  document.querySelector("#metricSource").textContent = source;
  document.querySelector("#metricUpdated").textContent = updated.toLocaleString("de-DE");
  document.querySelector("#metricPeriodChange").textContent = formatPercent(period);
  document.querySelector("#metricPeriodChange").className = trendClass(period);
  document.querySelector("#metricHighLow").textContent = highLow(series, currency);
  document.querySelector("#metricSentiment").textContent = sentimentFromChange(changePct);
  document.querySelector("#heroPrice").textContent = formatPrice(price, currency);
  document.querySelector("#heroTrend").textContent = `${rangeLabel(state.activeRange)} ${formatPercent(period)}`;
  document.querySelector("#heroTrend").className = trendClass(period);
  document.querySelector("#heroSource").textContent = source;
  const heroInsight = heroInsightCopy(asset, period, health);
  document.querySelector("#heroInsight").textContent = heroInsight.label;
  document.querySelector("#heroInsightText").textContent = heroInsight.text;
  const ai = aiCopyForAsset(asset, chart);
  document.querySelector("#assetAiSummary").textContent = ai.summary;
  document.querySelector("#assetOpportunities").textContent = ai.opportunities;
  document.querySelector("#assetRisks").textContent = ai.risks;
  document.querySelector("#assetWatch").textContent = ai.watch;
  document.querySelector("#assetMetrics").textContent = mockFundamentals(asset);
  document.querySelector("#assetNews").textContent = `${asset.name} wird aktuell mit ${asset.type === "Krypto" ? "Krypto-Sentiment, Liquidität und Momentum" : asset.type === "ETF" ? "Makrotrends, Sektorbreite und Zinsumfeld" : "Unternehmens- und Sektornews"} verknüpft. News-Impact wird kuratiert angezeigt.`;
  document.querySelector("#assetSimilar").textContent = assets
    .filter((item) => item.symbol !== asset.symbol && (item.type === asset.type || item.region === asset.region))
    .slice(0, 4)
    .map((item) => `${item.name} (${item.symbol})`)
    .join(", ");
  updateDetailPanels(chart, period);
  updateChartIndicatorNote(series);
  drawChart(selectors.chart, series, currency, color);
  drawHeroSparkline(selectors.heroChart, series, color);
  selectors.chartLoading.classList.add("hidden");
  updateBriefing();
  updateWatchlistButton();
  renderSavedWatchlist();
  renderPremiumModules();
}

async function selectAsset(asset) {
  state.activeAsset = asset;
  setDetailTab("chart", true);
  trackViewedAsset(asset);
  updateDetailSkeleton(asset);
  queueRenderAssets();
  renderTodayStrip();
  try {
    const chart = await fetchChart(asset, state.activeRange);
    updateDetail(chart);
    setStatus("Marktdaten verbunden", chart.health);
    renderTickerGrid();
    queueRenderAssets();
  } catch {
    selectors.chartLoading.textContent = "Live-Daten aktuell nicht verfügbar. Quelle nicht erreichbar.";
    document.querySelector("#metricHealth").textContent = "Fehlgeschlagen";
    document.querySelector("#metricHealth").className = "health-failed";
    setStatus("Datenquelle aktuell nicht erreichbar", "failed");
  }
}

function cachedQuotes() {
  return [...state.quoteCache.values()].filter((quote) => Number.isFinite(quote.changePct));
}

function updateBriefing() {
  const quotes = cachedQuotes();
  if (!quotes.length) return;
  const sorted = [...quotes].sort((a, b) => b.changePct - a.changePct);
  const strongest = sorted[0];
  const weakest = sorted.at(-1);
  const average = quotes.reduce((sum, quote) => sum + quote.changePct, 0) / quotes.length;
  const volatile = quotes.filter((quote) => Math.abs(quote.changePct) >= 1.5).slice(0, 3).map((quote) => quote.asset.name);
  const watchlistHit = [...state.savedSymbols].map((symbol) => state.quoteCache.get(symbol)).filter(Boolean).sort((a, b) => Math.abs(b.changePct || 0) - Math.abs(a.changePct || 0))[0];
  const alertCount = Object.keys(state.alerts).length;
  document.querySelector("#dailyBriefing").textContent =
    `Heute wichtig: Geladene Märkte zeigen im Schnitt ${formatPercent(average)}. ${strongest.asset.name} fällt positiv auf, ${weakest.asset.name} steht unter Druck. ${watchlistHit ? `In deiner Watchlist braucht ${watchlistHit.asset.name} mit ${formatPercent(watchlistHit.changePct)} Aufmerksamkeit.` : "Noch keine Watchlist-Signale vorhanden."} ${alertCount ? `${alertCount} Alarm(e) aktiv.` : "Keine aktiven Alarme."} Keine Anlageberatung.`;
  document.querySelector("#briefWhat").textContent =
    `${strongest.asset.name} zeigt die stärkste positive Bewegung (${formatPercent(strongest.changePct)}). ${weakest.asset.name} ist aktuell der schwächste geladene Wert (${formatPercent(weakest.changePct)}). ${watchlistHit ? `Persönlicher Fokus: ${watchlistHit.asset.name}.` : ""}`;
  document.querySelector("#briefWhy").textContent =
    "Relevanz entsteht, wenn Bewegung, Assetklasse und Risiko zusammenkommen. Auffällige Bewegungen können Aufmerksamkeit verdienen, sind aber nicht automatisch Chancen.";
  document.querySelector("#briefOpportunities").textContent =
    "Mögliche Chance: Werte mit bestätigtem Momentum können für Beobachtung interessant sein, besonders wenn mehrere Zeiträume dieselbe Richtung zeigen.";
  document.querySelector("#briefRisks").textContent =
    `Mögliches Risiko: ${volatile.length ? volatile.join(", ") : "keine starken Ausreißer"} zeigen erhöhte Aufmerksamkeitspunkte. Schnelle Gegenbewegungen bleiben möglich.`;
  document.querySelector("#briefWatch").textContent =
    "Worauf achten: Datenquelle, letzte Aktualisierung, News-Kontext, Watchlist-Werte und ob die Bewegung breit oder nur ein einzelner Ausreißer ist.";
  document.querySelector("#sentimentScore").textContent = sentimentFromChange(average);
  document.querySelector("#sentimentText").textContent =
    `Durchschnitt der geladenen Werte: ${formatPercent(average)}. AI-Ausgaben bleiben erklärend und nicht beratend.`;
  updateDashboardWidgets();
}

async function renderTickerGrid() {
  const picks = ["BTC", "NVDA", "VOO", "EUNL.DE"].map((symbol) => assets.find((asset) => asset.symbol === symbol)).filter(Boolean);
  const cards = await Promise.all(picks.map(async (asset) => {
    try {
      const quote = await fetchQuote(asset);
      const chart = state.chartCache.get(`${asset.symbol}:1m`) || state.chartCache.get(`${asset.symbol}:1d`);
      return { quote, chart };
    } catch {
      return { quote: { asset, price: null, changePct: null, currency: asset.type === "Krypto" ? "EUR" : "USD", health: "failed", source: "Quelle nicht erreichbar" }, chart: null };
    }
  }));
  document.querySelector("#tickerGrid").innerHTML = cards.map(({ quote, chart }) => `
    <article data-symbol="${quote.asset.symbol}" tabindex="0" aria-label="${quote.asset.name} öffnen">
      <span>${quote.asset.name} · ${quote.asset.type}</span>
      <strong class="${trendClass(quote.changePct)}">${formatPercent(quote.changePct)}</strong>
      <small>${formatPrice(quote.price, quote.currency)} · ${healthLabel(quote.health)}</small>
      ${sparkline(chart?.series, quote.changePct)}
    </article>
  `).join("");
}

function updateWatchlistButton() {
  const saved = state.savedSymbols.has(state.activeAsset.symbol);
  const compared = state.compareSymbols.has(state.activeAsset.symbol);
  selectors.watchlistToggle.textContent = saved ? "In Watchlist" : "Zur Watchlist hinzufügen";
  selectors.watchlistToggle.setAttribute("aria-pressed", String(saved));
  selectors.compareToggle.textContent = compared ? "Im Vergleich" : "Vergleichen";
  selectors.compareToggle.setAttribute("aria-pressed", String(compared));
}

function saveWatchlist() {
  localStorage.setItem("marketpilot-watchlist", JSON.stringify([...state.savedSymbols]));
}

function renderSavedWatchlist() {
  const savedAssets = [...state.savedSymbols].map((symbol) => assets.find((asset) => asset.symbol === symbol)).filter(Boolean);
  document.querySelector("#widgetWatchlist").textContent = `${savedAssets.length} Assets`;
  if (!savedAssets.length) {
    selectors.savedWatchlist.innerHTML = `
      <article data-symbol="${asset.symbol}" tabindex="0">
        <span class="panel-label">Noch leer</span>
        <strong>Watchlist erstellen</strong>
        <p>Füge in „Märkte“ Werte hinzu. Später entstehen daraus persönliche Briefings, Preisalarme und News-Hinweise.</p>
      </article>
    `;
  document.querySelector("#watchlistBriefing").textContent = "Füge 3 Werte hinzu, um dein persönliches Marktbriefing zu starten.";
    document.querySelector("#watchlistStats").innerHTML = "";
    renderTodayStrip();
    return;
  }
  const quoteTexts = savedAssets.map((asset) => {
    const quote = state.quoteCache.get(asset.symbol);
    return `${asset.name}${quote ? ` (${formatPercent(quote.changePct)})` : ""}`;
  });
  document.querySelector("#watchlistBriefing").textContent =
    `Persönliches Briefing: Beobachte ${quoteTexts.join(", ")}. Relevante Bewegungen werden mit Risiko, Sentiment und Datenstatus eingeordnet.`;
  const quoted = savedAssets.map((asset) => state.quoteCache.get(asset.symbol)).filter(Boolean);
  const best = quoted.length ? [...quoted].sort((a, b) => b.changePct - a.changePct)[0] : null;
  const worst = quoted.length ? [...quoted].sort((a, b) => a.changePct - b.changePct)[0] : null;
  const avg = quoted.length ? quoted.reduce((sum, quote) => sum + quote.changePct, 0) / quoted.length : null;
  document.querySelector("#watchlistStats").innerHTML = `
    <article><span>Anzahl</span><strong>${savedAssets.length}</strong></article>
    <article><span>Gesamtperformance</span><strong class="${trendClass(avg)}">${formatPercent(avg)}</strong></article>
    <article><span>Stärkster Gewinner</span><strong>${best ? best.asset.name : "Noch kein Signal"}</strong></article>
    <article><span>Stärkster Verlierer</span><strong>${worst ? worst.asset.name : "Noch kein Signal"}</strong></article>
  `;
  selectors.savedWatchlist.innerHTML = savedAssets.map((asset) => {
    const quote = state.quoteCache.get(asset.symbol);
    const health = quote?.health || state.statusCache.get(asset.symbol) || "loading";
    return `
      <article>
        <span class="panel-label">${asset.type}</span>
        <strong>${asset.name}</strong>
        <p>${asset.symbol} · ${quote ? formatPrice(quote.price, quote.currency) : "Letzter Stand"} · <span class="${trendClass(quote?.changePct)}">${formatPercent(quote?.changePct)}</span></p>
        <p>Risiko: ${asset.risk} · Sentiment: ${sentimentFromChange(quote?.changePct)} · ${healthLabel(health)}</p>
        <button type="button" data-details-symbol="${asset.symbol}">Chart öffnen</button>
        <button type="button" data-alert-symbol="${asset.symbol}">Alarm erstellen</button>
        <button type="button" data-note-symbol="${asset.symbol}">${state.notes[asset.symbol] ? "Notiz bearbeiten" : "Notiz hinzufügen"}</button>
        <button type="button" data-remove-symbol="${asset.symbol}">Entfernen</button>
        ${state.notes[asset.symbol] ? `<p><b>Notiz:</b> ${state.notes[asset.symbol]}</p>` : ""}
      </article>
    `;
  }).join("");
  renderTodayStrip();
  renderNewsFilter(true);
}

function renderNewsFilter(silent = false) {
  const saved = [...state.savedSymbols];
  document.querySelectorAll(".news-card").forEach((card) => {
    const typeMatch = card.dataset.newsType.includes(state.activeNewsFilter);
    const highMatch = state.activeNewsFilter === "high" && card.dataset.newsRelevance === "high";
    const watchlistMatch = state.activeNewsFilter === "watchlist" && saved.some((symbol) => card.dataset.newsAssets.includes(symbol));
    const visible = state.activeNewsFilter === "all" || typeMatch || highMatch || watchlistMatch;
    card.hidden = !visible;
  });
  if (!silent) showToast("News-Filter aktualisiert.");
}

function renderNewsAssetActions() {
  document.querySelectorAll(".news-card").forEach((card) => {
    if (card.querySelector(".news-asset-actions")) return;
    const symbols = (card.dataset.newsAssets || "")
      .split(",")
      .map((symbol) => symbol.trim())
      .filter(Boolean);
    if (!symbols.length) return;
    const buttons = symbols.map((symbol) => {
      const asset = assets.find((item) => item.symbol === symbol);
      return asset ? `<button type="button" data-news-asset="${symbol}">${asset.symbol} Chart</button>` : "";
    }).join("");
    card.insertAdjacentHTML("beforeend", `<div class="news-asset-actions">${buttons}</div>`);
  });
}

function focusBriefing(tab) {
  const map = {
    overview: "overview",
    winners: "winners",
    losers: "overview",
    risk: "risk",
    watchlist: "watchlist",
    news: "sentiment"
  };
  const target = document.querySelector(`[data-briefing-card="${map[tab] || "overview"}"]`);
  if (!target) return;
  document.querySelectorAll(".briefing-module").forEach((item) => item.classList.remove("expanded"));
  target.classList.add("expanded");
  target.scrollIntoView({ behavior: "smooth", block: "center" });
}

function setupActiveNavigation() {
  const links = [...document.querySelectorAll(".nav a")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  }, { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.35, 0.6] });
  sections.forEach((section) => observer.observe(section));
}

function renderCompareTray() {
  const compared = [...state.compareSymbols].map((symbol) => assets.find((asset) => asset.symbol === symbol)).filter(Boolean);
  document.querySelector("#widgetCompare").textContent = `${compared.length} gewählt`;
  selectors.compareTray.hidden = compared.length === 0;
  selectors.compareTitle.textContent = compared.length ? `${compared.length} Assets im Vergleich` : "Keine Assets ausgewählt";
  selectors.compareList.innerHTML = compared.map((asset) => `<span>${asset.name}</span>`).join("");
  renderCompareWorkspace(compared);
  renderCompareBattle();
}

function renderCompareWorkspace(compared = [...state.compareSymbols].map((symbol) => assets.find((asset) => asset.symbol === symbol)).filter(Boolean)) {
  if (!compared.length) {
    selectors.compareSummary.textContent = "Wähle zwei Assets in der Market-Matrix, um Risiko, Momentum, Datenqualität und News Impact zu vergleichen.";
    selectors.compareGrid.innerHTML = "";
    return;
  }
  selectors.compareSummary.textContent =
    `AI-Vergleich: ${compared.map((asset) => asset.name).join(", ")} werden nach Performance, Risiko, Sentiment und Datenstatus gegenübergestellt. Keine Anlageberatung.`;
  selectors.compareGrid.innerHTML = compared.map((asset) => {
    const quote = state.quoteCache.get(asset.symbol);
    const health = quote?.health || state.statusCache.get(asset.symbol) || "loading";
    return `
      <article>
        <span class="panel-label">${asset.type}</span>
        <h3>${asset.name}</h3>
        <p>${asset.symbol} · ${asset.region} · ${assetSector(asset)}</p>
        <p><b>Kurs:</b> ${quote ? formatPrice(quote.price, quote.currency) : "Letzter Stand"}</p>
        <p><b>24h:</b> <span class="${trendClass(quote?.changePct)}">${formatPercent(quote?.changePct)}</span></p>
        <p><b>Risiko:</b> ${asset.risk} · <b>AI:</b> ${sentimentFromChange(quote?.changePct)}</p>
        <p><b>Status:</b> ${healthLabel(health)}</p>
        <p>${mockFundamentals(asset)}</p>
        <button type="button" data-compare-details="${asset.symbol}">Chart öffnen</button>
      </article>
    `;
  }).join("");
}

function toggleWatchlist(asset) {
  if (state.savedSymbols.has(asset.symbol)) {
    state.savedSymbols.delete(asset.symbol);
    showToast(`${asset.name} wurde aus der Watchlist entfernt.`);
  } else {
    state.savedSymbols.add(asset.symbol);
    showToast(`${asset.name} wurde zur Watchlist hinzugefügt.`);
  }
  saveWatchlist();
  updateWatchlistButton();
  queueRenderAssets();
  renderSavedWatchlist();
}

function toggleCompare(asset) {
  if (state.compareSymbols.has(asset.symbol)) {
    state.compareSymbols.delete(asset.symbol);
    showToast(`${asset.name} wurde aus dem Vergleich entfernt.`);
  } else {
    if (state.compareSymbols.size >= 4) {
      showToast("Maximal 4 Assets können gleichzeitig verglichen werden.");
      return;
    }
    state.compareSymbols.add(asset.symbol);
    showToast(`${asset.name} wurde zum Vergleich hinzugefügt.`);
  }
  saveCompare();
  updateWatchlistButton();
  renderCompareTray();
  queueRenderAssets();
  renderTodayStrip();
}

function openModal(mode, asset, meta = {}) {
  state.modalMode = mode;
  state.modalSymbol = asset.symbol;
  selectors.modal.hidden = false;
  selectors.modalChart.hidden = mode !== "chart";
  selectors.modalInput.value = mode === "note" ? state.notes[asset.symbol] || "" : mode === "alert" ? state.alerts[asset.symbol] || "" : "";
  selectors.modalInput.parentElement.hidden = mode === "chart" || mode === "pro" || mode === "learning";
  selectors.modalConfirm.hidden = mode === "chart" || mode === "pro" || mode === "learning";
  selectors.modalKicker.textContent = mode === "note" ? "Watchlist-Notiz" : mode === "chart" ? "Chart Workspace" : mode === "pro" ? "Pro Preview" : mode === "learning" ? "Mini-Lexikon" : "Preisalarm";
  selectors.modalTitle.textContent = mode === "note" ? `Notiz zu ${asset.name}` : mode === "chart" ? `${asset.name} im Analysemodus` : mode === "pro" ? `${meta.feature || "Pro"} freischalten` : mode === "learning" ? meta.term : `Alarm für ${asset.name}`;
  selectors.modalBody.textContent = mode === "note"
    ? "Speichere eine kurze lokale Notiz. Sie bleibt in diesem Browser verfügbar und unterstützt dein persönliches Briefing."
    : mode === "chart"
      ? `Großer Analysechart mit aktuellem Zeitraum ${state.activeRange.toUpperCase()}, Charttyp ${state.chartType} und aktiven Indikatoren.`
      : mode === "pro"
        ? `${meta.benefit || "Diese Premium-Funktion erweitert den AI-Kontext um Watchlist, News, Risiko und Vergleichsdaten."} Kaufe Pro oder nutze einen vorhandenen Promo-Code.`
        : mode === "learning"
          ? learningCopy(meta.term)
          : "Bereite einen Preisalarm vor. In dieser Demo wird der Zielwert lokal gespeichert.";
  if (mode === "pro") {
    selectors.modalBody.innerHTML = `
      <div class="upgrade-preview">
        <strong>${escapeHTML(meta.feature || "Pro Feature")}</strong>
        <p>${escapeHTML(meta.benefit || "Pro erweitert den AI-Kontext um Watchlist, News, Risiko und Vergleichsdaten.")}</p>
        <ul>
          <li>Kontext aus aktivem Asset, Watchlist, News und Alerts</li>
          <li>Deep-Dive-Preview mit Confidence/Data Quality</li>
          <li>Report-, Briefing- und Smart-Alert-Workflows</li>
        </ul>
        <div class="detail-actions">
          <button class="primary-action" type="button" data-open-checkout-from-modal>Pro kaufen</button>
          <button class="link-action" type="button" data-open-access-from-modal>Code einlösen</button>
        </div>
      </div>
    `;
  }
  selectors.modalInputLabel.textContent = mode === "note" ? "Notiz" : "Bedingung";
  selectors.modalInput.placeholder = mode === "note" ? "z. B. wegen Earnings beobachten" : "z. B. Preis über 65000 €";
  if (mode === "chart") {
    const cached = state.chartCache.get(`${asset.symbol}:${state.activeRange}`) || demoChart(asset, state.activeRange, state.quoteCache.get(asset.symbol)?.price || basePriceForAsset(asset));
    if (cached) {
      const previousChart = state.lastChart;
      const period = periodChange(cached.series, getRangeConfig(state.activeRange).days);
      const color = !Number.isFinite(period) || Math.abs(period) < 0.15 ? "#5da9ff" : period < 0 ? "#ff6b7d" : "#61df91";
      drawChart(selectors.modalChart, cached.series, cached.currency, color);
      state.lastChart = previousChart;
    }
  }
  if (mode === "note" || mode === "alert") selectors.modalInput.focus();
}

function closeModal() {
  selectors.modal.hidden = true;
  selectors.modalChart.hidden = true;
  selectors.modalInput.parentElement.hidden = false;
  selectors.modalConfirm.hidden = false;
  state.modalMode = null;
  state.modalSymbol = null;
}

function renderAlerts() {
  const entries = Object.entries(state.alerts);
  document.querySelector("#widgetAlerts").textContent = `${entries.length} aktiv`;
  if (!entries.length) {
    selectors.alertsList.innerHTML = `<article><span class="panel-label">Alarm Center</span><strong>Alarm erstellen</strong><p>Lege Preis-, Bewegungs-, News- oder Risikoalarme an. Sie bleiben lokal in deinem Browser sichtbar.</p></article>`;
    return;
  }
  selectors.alertsList.innerHTML = entries.map(([symbol, condition]) => {
    const asset = assets.find((item) => item.symbol === symbol);
    return `
      <article>
        <span class="panel-label">${asset?.type || "Asset"}</span>
        <strong>${asset?.name || symbol}</strong>
        <p>${condition}</p>
        <button type="button" data-details-symbol="${symbol}">Chart öffnen</button>
        <button type="button" data-delete-alert="${symbol}">Alarm löschen</button>
      </article>
    `;
  }).join("");
}

function updateDashboardWidgets() {
  const quotes = cachedQuotes();
  const savedCount = state.savedSymbols.size;
  document.querySelector("#widgetWatchlist").textContent = `${savedCount} Assets`;
  document.querySelector("#widgetCompare").textContent = `${state.compareSymbols.size} gewählt`;
  renderTodayStrip();
  if (!quotes.length) return;
  const sorted = [...quotes].sort((a, b) => b.changePct - a.changePct);
  const avg = quotes.reduce((sum, quote) => sum + quote.changePct, 0) / quotes.length;
  document.querySelector("#widgetSentiment").textContent = sentimentFromChange(avg);
  document.querySelector("#widgetTopMover").textContent = `${sorted[0].asset.symbol} ${formatPercent(sorted[0].changePct)}`;
  document.querySelector("#widgetRisk").textContent = sorted.some((quote) => Math.abs(quote.changePct) > 2) ? "Auffällige Bewegung" : "Keine Extremwerte";
  const demoCount = quotes.filter((quote) => quote.health === "demo").length;
  document.querySelector("#widgetDataHealth").textContent = demoCount ? `${demoCount} Fallback-Quellen` : "Quellen aktiv";
  document.querySelector("#retentionAlerts").textContent = `${Object.keys(state.alerts).length + state.smartAlerts.length} aktiv`;
  document.querySelector("#retentionWatchlist").textContent = state.savedSymbols.size ? `${state.savedSymbols.size} Werte im Fokus` : "3 Werte hinzufügen";
  renderTodayStrip();
}

function renderTodayStrip() {
  const quotes = cachedQuotes();
  const sorted = [...quotes].sort((a, b) => Math.abs(b.changePct || 0) - Math.abs(a.changePct || 0));
  const focus = sorted[0];
  const savedQuotes = [...state.savedSymbols].map((symbol) => state.quoteCache.get(symbol)).filter(Boolean);
  const watch = savedQuotes.sort((a, b) => Math.abs(b.changePct || 0) - Math.abs(a.changePct || 0))[0];
  const recent = state.lastViewed.map((symbol) => assets.find((asset) => asset.symbol === symbol)).filter(Boolean);
  document.querySelector("#todayFocus").textContent = focus ? `${focus.asset.name} ${formatPercent(focus.changePct)}` : "Marktdaten werden geladen";
  document.querySelector("#todayReason").textContent = focus
    ? `${focus.asset.type} · ${assetSector(focus.asset)} · ${healthLabel(focus.health)}. Auffälligkeit nach aktueller Bewegung, keine Anlageberatung.`
    : "Sobald Kurse geladen sind, wird die stärkste relevante Bewegung gezeigt.";
  document.querySelector("#todayWatchlist").textContent = watch ? `${watch.asset.name} braucht Aufmerksamkeit` : state.savedSymbols.size ? "Watchlist wird priorisiert" : "Watchlist starten";
  document.querySelector("#todayWatchlistReason").textContent = watch
    ? `Watchlist-Bewegung ${formatPercent(watch.changePct)}. Prüfe News, Risiko und gespeicherte Notizen.`
    : state.savedSymbols.size ? "Signale werden nach Bewegung, Risiko und Datenstatus priorisiert." : "Füge 3 Werte hinzu, um persönliche Daily Checks zu erhalten.";
  document.querySelector("#todayRecent").textContent = recent.length ? recent.slice(0, 3).map((asset) => asset.symbol).join(" · ") : state.activeAsset.symbol;
  document.querySelector("#todayRecentReason").textContent = recent.length
    ? `Zuletzt angesehen: ${recent.slice(0, 3).map((asset) => asset.name).join(", ")}.`
    : "Geöffnete Assets erscheinen hier als Schnellzugriff.";
  document.querySelector("#retentionVisit").textContent = focus
    ? `${focus.asset.symbol} ist jetzt relevant`
    : state.lastVisit ? "Marktstatus aktualisiert" : "Willkommen im Cockpit";
  document.querySelector("#heroToday").textContent = focus ? `${focus.asset.symbol} ${formatPercent(focus.changePct)}` : "Briefing lädt";
  document.querySelector("#heroPulse").textContent = `${state.savedSymbols.size} Assets`;
  if (!state.lastChart) {
    document.querySelector("#heroInsight").textContent = focus ? sentimentFromChange(focus.changePct) : "Neutral";
  }
}

function renderPremiumModules() {
  renderMarketRadar();
  renderRiskMap();
  renderWatchlistPulse();
  renderNewsImpactScanner();
  renderCompareBattle();
  renderSmartAlerts();
  renderAssistantMessages();
  updateProUI();
  const cached = state.chartCache.get(`${state.activeAsset.symbol}:${state.activeRange}`);
  if (cached) {
    const confidence = cached.health === "live" ? "Hoch" : cached.health === "delayed" ? "Mittel" : "Niedrig";
    selectors.confidenceBox.textContent = `Datenlage: ${confidence}. Verwendet: Kursbewegung, Volatilität, Asset-Typ ${state.activeAsset.type}, Watchlist-Kontext, News Impact und Quelle ${cached.source}.`;
  }
}

function renderMarketRadar() {
  const symbols = state.marketRadarFilter === "Watchlist" ? [...state.savedSymbols] : null;
  const rows = assets
    .filter((asset) => state.marketRadarFilter === "Alle" || asset.type === state.marketRadarFilter || symbols?.includes(asset.symbol))
    .slice(0, 28);
  selectors.marketRadar.innerHTML = rows.map((asset) => {
    const quote = state.quoteCache.get(asset.symbol);
    const momentum = Math.max(-8, Math.min(8, quote?.changePct || (asset.rank % 7) - 3));
    const risk = ["Niedrig", "Mittel", "Hoch", "Sehr hoch"].indexOf(asset.risk) + 1;
    const x = 50 + momentum * 5.2;
    const y = 88 - risk * 17 - (asset.rank % 5);
    const color = momentum >= 0 ? "var(--green)" : "var(--red)";
    return `<button class="radar-dot" type="button" data-symbol="${asset.symbol}" style="left:${Math.max(8, Math.min(92, x))}%;top:${Math.max(10, Math.min(88, y))}%;background:${color}" title="${asset.name}: Momentum ${formatPercent(momentum)}, Risiko ${asset.risk}">${asset.symbol.replace(".DE", "")}</button>`;
  }).join("");
}

function renderRiskMap() {
  const rows = assets.slice(0, 12).map((asset) => {
    const quote = state.quoteCache.get(asset.symbol);
    const change = quote?.changePct ?? ((asset.rank % 9) - 4);
    const risk = ["Niedrig", "Mittel", "Hoch", "Sehr hoch"].indexOf(asset.risk);
    const color = change >= 0 ? "rgba(97,223,145,.12)" : "rgba(255,107,125,.12)";
    return `<button class="risk-tile" type="button" data-symbol="${asset.symbol}" style="background:${color}"><strong>${asset.symbol}</strong><small>${asset.name}</small><small>${formatPercent(change)} · Risiko ${asset.risk} · ${risk > 1 ? "höhere" : "ruhigere"} Bewegung</small></button>`;
  });
  selectors.riskMap.innerHTML = rows.join("");
}

function renderWatchlistPulse() {
  const saved = [...state.savedSymbols].map((symbol) => assets.find((asset) => asset.symbol === symbol)).filter(Boolean);
  if (!saved.length) {
    selectors.watchlistPulse.innerHTML = `<article><strong>Starte mit 3 Assets</strong><p>Füge Werte hinzu, um Gewinner, Verlierer, Risiko, News Impact und offene Alerts als Watchlist Intelligence zu sehen.</p></article>`;
    return;
  }
  const quoted = saved.map((asset) => state.quoteCache.get(asset.symbol) || { asset, changePct: null }).sort((a, b) => Math.abs(b.changePct || 0) - Math.abs(a.changePct || 0));
  const highestRisk = saved.sort((a, b) => ["Niedrig", "Mittel", "Hoch", "Sehr hoch"].indexOf(b.risk) - ["Niedrig", "Mittel", "Hoch", "Sehr hoch"].indexOf(a.risk))[0];
  selectors.watchlistPulse.innerHTML = [
    `<article><strong>Stärkster Impuls</strong><p>${quoted[0].asset.name}: ${formatPercent(quoted[0].changePct)} · ${quoted[0].asset.risk}</p></article>`,
    `<article><strong>Höchstes Risiko</strong><p>${highestRisk.name}: ${highestRisk.risk} · ${assetSector(highestRisk)}</p></article>`,
    `<article><strong>Offene Alerts</strong><p>${Object.keys(state.alerts).length + state.smartAlerts.length} aktiv · Preis, News oder Risiko prüfen</p></article>`,
    ...quoted.slice(0, 3).map((quote) => `<article><strong>${quote.asset.name}</strong><p>${formatPercent(quote.changePct)} · ${quote.asset.risk} · ${state.alerts[quote.asset.symbol] ? "Alarm aktiv" : "kein Alarm"}</p></article>`)
  ].join("");
}

function renderNewsImpactScanner() {
  const news = [...document.querySelectorAll(".news-card")].slice(0, 4);
  selectors.newsImpactScanner.innerHTML = news.map((card, index) => {
    const score = card.dataset.newsRelevance === "high" ? 86 - index * 4 : 62 - index * 3;
    const assetsText = card.dataset.newsAssets || "Markt";
    const pro = state.isProUser ? `Watchlist-Impact: ${[...state.savedSymbols].some((symbol) => assetsText.includes(symbol)) ? "direkt betroffen" : "indirekt prüfen"}.` : "Pro zeigt Watchlist-Impact.";
    return `<article class="impact-item"><strong>Impact ${score}/100</strong><small>${card.querySelector("h3")?.textContent || "News"}</small><p>Direkt: ${assetsText}. Indirekt: ${card.dataset.newsType}. Warum relevant: mögliche Bewegung bei Risikoappetit, Sektor oder Liquidität. ${pro}</p></article>`;
  }).join("");
}

function renderCompareBattle() {
  const compared = [...state.compareSymbols].map((symbol) => assets.find((asset) => asset.symbol === symbol)).filter(Boolean);
  const rows = (compared.length ? compared : [state.activeAsset, assets.find((asset) => asset.symbol === "NVDA")].filter(Boolean)).slice(0, state.isProUser ? 4 : 2);
  selectors.compareBattle.innerHTML = rows.map((asset) => {
    const quote = state.quoteCache.get(asset.symbol);
    const label = asset.type === "ETF" ? "breitere Streuung" : asset.risk === "Niedrig" ? "defensiver" : Math.abs(quote?.changePct || 0) > 2 ? "volatiler" : "ruhigeres Momentum";
    const score = Math.max(12, Math.min(96, 58 + (quote?.changePct || 0) * 6 - (asset.risk === "Sehr hoch" ? 12 : asset.risk === "Hoch" ? 6 : 0)));
    return `<article><strong>${asset.name}</strong><small>${asset.symbol} · ${asset.type} · ${label}</small><p>${formatPercent(quote?.changePct)} · Risiko ${asset.risk} · ${mockFundamentals(asset).split("·")[0]}</p><div class="score-bar"><span style="width:${score}%"></span></div></article>`;
  }).join("");
}

function renderSmartAlerts() {
  if (!state.smartAlerts.length) {
    selectors.smartAlertsList.innerHTML = `<article><strong>Noch keine Smart Alerts</strong><p>Free: Preisalarme. Pro: Volatilität, News Impact und Trendabweichungen.</p></article>`;
    return;
  }
  selectors.smartAlertsList.innerHTML = state.smartAlerts.map((alert, index) => `<article><strong>${alert.asset}</strong><p>${alert.type} · ${alert.condition || "Auffällige Bewegung beobachten"}</p><small>${alert.created} · Pro prüft Bewegung, News-Kontext, Risikoänderung und Watchlist-Bezug.</small><button type="button" data-delete-smart-alert="${index}">Löschen</button></article>`).join("");
}

function proDashboardHTML(action) {
  const context = assistantContext();
  const watchQuotes = context.watchlist.map((asset) => state.quoteCache.get(asset.symbol) || { asset, changePct: null }).sort((a, b) => Math.abs(b.changePct || 0) - Math.abs(a.changePct || 0));
  const top = watchQuotes[0] || { asset: context.asset, changePct: context.quote?.changePct };
  const weak = watchQuotes.at(-1) || top;
  const smartCount = state.smartAlerts.length;
  if (action === "watchlist") {
    return `<span class="panel-label">Watchlist Intelligence</span><strong>${context.watchlist.length ? `${top.asset.name} ist am auffälligsten` : "Watchlist aufbauen"}</strong><p>Gewinner: ${top.asset.symbol} ${formatPercent(top.changePct)} · Schwächer: ${weak.asset.symbol} ${formatPercent(weak.changePct)} · Smart Alerts: ${smartCount}. ${context.watchlist.length ? "Pro priorisiert News, Risiko und offene Alerts." : "Füge Werte hinzu, damit Pro dein tägliches Pulse-Briefing erstellt."}</p>`;
  }
  if (action === "deep") {
    return `<span class="panel-label">Deep Asset Analysis</span><strong>${context.asset.name} Deep Dive</strong><p>${proDeepDive(context.asset, context)} Confidence: ${confidenceScore(context)}. Basis: Kursdaten, Volatilität, Asset-Typ, Watchlist-Kontext, News Impact und Quelle ${context.dataHealth}.</p>`;
  }
  if (action === "news") {
    const news = context.newsItems[0];
    return `<span class="panel-label">News Impact Pro</span><strong>${news?.title || "Watchlist-News im Fokus"}</strong><p>Direkt betroffen: ${news?.assets || context.asset.symbol}. Indirekt relevant: ${assetSector(context.asset)}. Pro zeigt mögliche Chancen, Risiken und Beobachtungspunkte für deine Watchlist.</p>`;
  }
  if (action === "compare") {
    const pair = (context.compareList.length ? context.compareList : [context.asset, assets.find((asset) => asset.symbol === "NVDA")]).filter(Boolean).slice(0, 2);
    return `<span class="panel-label">Compare Battle Pro</span><strong>${pair.map((asset) => asset.symbol).join(" vs ")}</strong><p>${pair.map((asset) => `${asset.symbol}: Risiko ${asset.risk}, ${sentimentFromChange(state.quoteCache.get(asset.symbol)?.changePct)}, ${assetSector(asset)}`).join(" · ")}. Pro ergänzt Momentum-, Defensive- und Datenqualitäts-Scores.</p>`;
  }
  if (action === "report") {
    return `<span class="panel-label">Reports & Export</span><strong>Report vorbereitet</strong><p>Assets: ${[context.asset, ...context.watchlist.slice(0, 4)].map((asset) => asset.symbol).join(", ")}. Zeitraum: ${context.activeTimeframe}. AI-Fazit, Risiken, News Impact und Datenqualität wurden als Report-Preview zusammengestellt.</p><button class="secondary-action" type="button" data-report-export>Als PDF exportieren</button>`;
  }
  return `<span class="panel-label">AI Assistant Pro</span><strong>Kontextanalyse bereit</strong><p>${generateAssistantResponse("Generiere mein Tagesbriefing", context).replace(/\n/g, "<br>")}</p>`;
}

function runProDashboardAction(action) {
  if (!state.isProUser) {
    openModal("pro", state.activeAsset, {
      feature: "Pro Dashboard",
      benefit: "Das Pro Dashboard verbindet AI Assistant, Watchlist Intelligence, Smart Alerts, News Impact, Deep Asset Analysis und Reports in einer Arbeitsfläche."
    });
    return;
  }
  selectors.proDashboardOutput.innerHTML = proDashboardHTML(action);
  showToast("Pro-Modul aktualisiert.");
}

function learningCopy(term) {
  const base = {
    KGV: "KGV zeigt, wie das Verhältnis von Aktienkurs zu Gewinn aussieht. Niedriger ist nicht automatisch besser.",
    TER: "TER sind laufende ETF-Kosten pro Jahr. Pro-Kontext vergleicht sie mit ähnlichen ETFs.",
    Volatilität: "Volatilität beschreibt Schwankung. Hohe Volatilität bedeutet größere Bewegungen in beide Richtungen.",
    "Market Cap": "Market Cap ist der Marktwert eines Unternehmens oder Kryptoassets.",
    Drawdown: "Drawdown beschreibt den Rückgang vom Hochpunkt bis zum Tiefpunkt.",
    ATH: "ATH bedeutet All Time High, also historisches Hoch."
  }[term] || "Begriff wird erklärt.";
  return state.isProUser ? `${base} Beispiel zu ${state.activeAsset.name}: Risiko ${state.activeAsset.risk}, Asset-Typ ${state.activeAsset.type}.` : `${base} Pro ergänzt Beispiele zum aktiven Asset.`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function assistantContext() {
  const asset = state.activeAsset;
  const quote = state.quoteCache.get(asset.symbol);
  const chart = state.chartCache.get(`${asset.symbol}:${state.activeRange}`);
  const watchlist = [...state.savedSymbols].map((symbol) => assets.find((item) => item.symbol === symbol)).filter(Boolean);
  const compareList = [...state.compareSymbols].map((symbol) => assets.find((item) => item.symbol === symbol)).filter(Boolean);
  const newsItems = [...document.querySelectorAll(".news-card")].map((card) => ({
    title: card.querySelector("h3")?.textContent || "News",
    assets: card.dataset.newsAssets || "",
    relevance: card.dataset.newsRelevance || "medium",
    type: card.dataset.newsType || "Markt"
  }));
  return {
    asset,
    quote,
    chart,
    watchlist,
    compareList,
    newsItems,
    activeTimeframe: rangeLabel(state.activeRange),
    chartPerformance: chart?.series ? periodChange(chart.series, getRangeConfig(state.activeRange).days) : quote?.changePct,
    sentiment: sentimentFromChange(quote?.changePct),
    dataHealth: healthLabel(quote?.health),
    isProUser: state.isProUser
  };
}

function findAssetsInMessage(message) {
  const lower = message.toLowerCase();
  return assets.filter((asset) =>
    lower.includes(asset.symbol.toLowerCase()) ||
    lower.includes(asset.name.toLowerCase()) ||
    asset.name.toLowerCase().split(" ").some((part) => part.length > 4 && lower.includes(part))
  ).slice(0, 4);
}

function confidenceScore(context) {
  if (context.quote?.health === "live") return "Hoch";
  if (context.quote?.health === "delayed" || context.quote?.health === "cache") return "Mittel";
  return "Niedrig";
}

function proDeepDive(asset, context) {
  if (asset.type === "ETF") {
    return `ETF-Fokus: Kosten/TER, Indexbreite, Regionen, Sektoren, Replikation und Tracking-Risiko prüfen. ${asset.name} wirkt als ${asset.region}-Baustein; relevante Vergleichswerte sind ähnliche globale oder sektorale ETFs.`;
  }
  if (asset.type === "Krypto") {
    return `Krypto-Fokus: Volatilität, Liquidität, Volume, ATH-Distanz, Trendstatus und Sentiment sind wichtiger als klassische Fundamentaldaten. Bei ${asset.name} ist schnelles Risikomanagement zentral.`;
  }
  return `Aktien-Fokus: Bewertung, Momentum, Volatilität, Sektorvergleich, Earnings-Kontext, News Impact und ähnliche Aktien prüfen. ${assetSector(asset)} ist der wichtigste Vergleichsrahmen.`;
}

function formatAssistantSections(sections) {
  return sections.map(([title, body]) => `${title}: ${body}`).join("\n\n");
}

function generateAssistantResponse(message, context = assistantContext()) {
  const lower = message.toLowerCase();
  const mentioned = findAssetsInMessage(message);
  const active = mentioned[0] || context.asset;
  const quote = state.quoteCache.get(active.symbol) || context.quote;
  const movement = formatPercent(quote?.changePct);
  const relevantNews = context.newsItems.filter((item) => item.assets.includes(active.symbol) || item.type.includes(active.type)).slice(0, 2);
  const proLine = context.isProUser
    ? `Pro-Kontext aktiv: Watchlist (${context.watchlist.length}), Compare (${context.compareList.length}), Alerts (${Object.keys(state.alerts).length + state.smartAlerts.length}), News Impact und Datenqualität werden einbezogen.`
    : "Free-Kontext: kurze Basisantwort. Pro ergänzt Watchlist-Kontext, News Impact, Deep Dive, Compare und Reports.";

  if (lower.includes("watchlist")) {
    if (!context.watchlist.length) {
      return formatAssistantSections([
        ["Kurzfazit", "Deine Watchlist ist noch leer. Füge zuerst 3 bis 5 Werte hinzu, damit ich Bewegungen, Risiko und News sinnvoll priorisieren kann."],
        ["Nächster Schritt", "Öffne die Market-Matrix und speichere Werte über „Zur Watchlist“."],
        ["Hinweis", "Keine Anlageberatung."]
      ]);
    }
    const quoted = context.watchlist.map((asset) => state.quoteCache.get(asset.symbol) || { asset, changePct: null }).sort((a, b) => Math.abs(b.changePct || 0) - Math.abs(a.changePct || 0));
    return formatAssistantSections([
      ["Kurzfazit", `${quoted[0].asset.name} ist aktuell am auffälligsten (${formatPercent(quoted[0].changePct)}). ${quoted.at(-1).asset.name} wirkt im Vergleich ruhiger oder schwächer.`],
      ["Was die Daten zeigen", quoted.slice(0, context.isProUser ? 6 : 3).map((item) => `${item.asset.symbol}: ${formatPercent(item.changePct)} · Risiko ${item.asset.risk}`).join(" · ")],
      ["Worauf achten", context.isProUser ? "Prüfe offene Alerts, News Impact und Werte mit hoher Bewegung zuerst." : "Free zeigt nur die Kurzsicht. Pro priorisiert News, Alerts und Risiko automatisch."],
      ["Hinweis", "Keine Anlageberatung."]
    ]);
  }

  if (lower.includes("vergleich") || lower.includes("compare") || lower.includes(" vs ") || mentioned.length >= 2) {
    const pair = (mentioned.length >= 2 ? mentioned : context.compareList.length >= 2 ? context.compareList : [active, assets.find((asset) => asset.symbol === "NVDA")]).filter(Boolean).slice(0, 4);
    return formatAssistantSections([
      ["Kurzfazit", `${pair.map((asset) => asset.name).join(" vs ")} unterscheiden sich vor allem nach Risiko, Asset-Typ, Momentum und Datenqualität.`],
      ["Vergleich", pair.map((asset) => {
        const itemQuote = state.quoteCache.get(asset.symbol);
        return `${asset.symbol}: ${asset.type}, ${assetSector(asset)}, Risiko ${asset.risk}, Bewegung ${formatPercent(itemQuote?.changePct)}, AI ${sentimentFromChange(itemQuote?.changePct)}`;
      }).join(" · ")],
      ["Pro-Einordnung", context.isProUser ? "Pro bewertet zusätzlich defensive Wirkung, Volatilität, Watchlist-Rolle und News Impact." : "Pro schaltet Compare Battle mit Score-Cards und AI-Zusammenfassung frei."],
      ["Hinweis", "Kein Gewinner-Ranking und keine Kauf-/Verkaufsempfehlung."]
    ]);
  }

  if (["risiko", "volatil", "drawdown", "gefahr"].some((word) => lower.includes(word))) {
    return formatAssistantSections([
      ["Kurzfazit", `${active.name} hat Risiko-Level ${active.risk}. Die aktuelle Bewegung beträgt ${movement}.`],
      ["Mögliche Risikotreiber", active.type === "Krypto" ? "Liquidität, Sentimentwechsel, starke Intraday-Bewegungen und regulatorische Nachrichten." : active.type === "ETF" ? "Indexkonzentration, Zinsen, Währung, Sektorlastigkeit und Tracking-Differenz." : "Bewertung, Earnings, Sektorrotation, News und Gesamtmarkt."],
      ["Datenqualität", `${confidenceScore(context)} · Quelle ${healthLabel(quote?.health)} · Zeitraum ${context.activeTimeframe}.`],
      ["Hinweis", "Keine Anlageberatung."]
    ]);
  }

  if (["news", "nachricht", "impact", "ereignis"].some((word) => lower.includes(word))) {
    return formatAssistantSections([
      ["Kurzfazit", relevantNews.length ? `${relevantNews[0].title} ist für ${active.name} möglicherweise relevant.` : `Für ${active.name} gibt es aktuell keinen direkten News-Treffer; indirekte Marktimpulse bleiben möglich.`],
      ["News Impact", relevantNews.length ? relevantNews.map((item) => `${item.relevance === "high" ? "Hoher" : "Mittlerer"} Impact · ${item.assets}`).join(" · ") : "Pro würde Watchlist- und Sektorbezug genauer prüfen."],
      ["Worauf achten", "Reaktion im Kurs, Volumen, ähnliche Assets und ob die Nachricht nur kurzfristiges Sentiment oder fundamentalen Kontext betrifft."],
      ["Hinweis", "Keine Anlageberatung."]
    ]);
  }

  if (["ter", "index", "ausschütt", "replikation", "etf"].some((word) => lower.includes(word))) {
    return formatAssistantSections([
      ["Kurzfazit", "ETF-Kennzahlen helfen zu verstehen, ob ein Fonds günstig, breit gestreut und passend zum gewünschten Markt ist."],
      ["TER", "TER sind laufende jährliche Kosten. Niedriger ist gut, aber Index, Tracking und Diversifikation sind ebenfalls wichtig."],
      ["Pro-Kontext", active.type === "ETF" ? proDeepDive(active, context) : "Bei ETFs prüft Pro Kosten, Index, Regionen, Sektoren, Replikation und ähnliche ETFs."],
      ["Hinweis", "Keine Anlageberatung."]
    ]);
  }

  if (["bitcoin", "ethereum", "altcoin", "ath", "supply", "krypto"].some((word) => lower.includes(word))) {
    return formatAssistantSections([
      ["Kurzfazit", `${active.name} wird im Krypto-Kontext vor allem über Momentum, Liquidität, Volatilität und Sentiment eingeordnet.`],
      ["Was die Daten zeigen", `Aktueller Zeitraum ${context.activeTimeframe}, Bewegung ${movement}, Risiko ${active.risk}, Datenstatus ${healthLabel(quote?.health)}.`],
      ["Worauf achten", "ATH-Distanz, Volumen, große Marktbewegungen, News Impact und schnelle Gegenbewegungen."],
      ["Hinweis", "Keine Anlageberatung."]
    ]);
  }

  return formatAssistantSections([
    ["Kurzfazit", `${active.name} (${active.symbol}) ist im Fokus. Bewegung ${movement}, Risiko ${active.risk}, AI-Sentiment ${sentimentFromChange(quote?.changePct)}.`],
    ["Was die Daten zeigen", `${active.type} · ${assetSector(active)} · Zeitraum ${context.activeTimeframe} · Datenqualität ${confidenceScore(context)}.`],
    ["Mögliche Gründe", relevantNews.length ? `News-Kontext: ${relevantNews.map((item) => item.title).join(" · ")}.` : "Mögliche Treiber sind Marktstimmung, Sektorbewegung, Volatilität und Datenqualität."],
    ["Pro-Kontext", proLine],
    ["Hinweis", "Keine Anlageberatung."]
  ]);
}

function renderAssistantMessages() {
  selectors.assistantMessages.innerHTML = state.assistantMessages.map((message) => `<div class="assistant-message ${message.role}"><strong>${message.role === "user" ? "Du" : "Nexus AI"}</strong><p>${escapeHTML(message.text).replace(/\n/g, "<br>")}</p></div>`).join("") || `<div class="assistant-message"><strong>Nexus AI</strong><p>Frag mich nach Bewegungen, Risiken, Watchlist, News, ETFs, Krypto oder Vergleichen. Ich nutze den aktuellen Website-Kontext.</p></div>`;
  selectors.assistantMessages.scrollTop = selectors.assistantMessages.scrollHeight;
}

function askAssistant(question) {
  const key = todayKey();
  if (!state.isProUser && (state.assistantDaily[key] || 0) >= 3) {
    requirePro("AI Assistant", "Pro schaltet unbegrenzte Fragen, Watchlist-Analyse, News Impact und Risiko-Erklärungen frei.");
    updateProUI();
    return;
  }
  if (!state.isProUser) state.assistantDaily[key] = (state.assistantDaily[key] || 0) + 1;
  state.assistantMessages.push({ role: "user", text: question });
  state.assistantMessages.push({ role: "ai", text: "Nexus AI analysiert Kontext, Watchlist, News und Datenqualität..." });
  renderAssistantMessages();
  window.setTimeout(() => {
    state.assistantMessages[state.assistantMessages.length - 1] = { role: "ai", text: generateAssistantResponse(question) };
    saveAssistant();
    renderAssistantMessages();
    updateProUI();
  }, 420);
  saveAssistant();
  updateProUI();
}

selectors.segments.forEach((button) => {
  button.addEventListener("click", () => {
    selectors.segments.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.activeFilter = button.dataset.filter;
    renderAssets();
  });
});

selectors.viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.viewMode = button.dataset.viewMode;
    updateViewMode();
    showToast(`Screener-Ansicht: ${button.textContent.trim()}`);
  });
});

selectors.rangeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectors.rangeButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.activeRange = button.dataset.range;
    showToast(`Zeitraum: ${button.textContent.trim()}`);
    selectAsset(state.activeAsset);
  });
});

selectors.assetGrid.addEventListener("click", (event) => {
  const watchlistButton = event.target.closest("[data-action='watchlist']");
  const compareButton = event.target.closest("[data-action='compare']");
  const alertButton = event.target.closest("[data-action='alert']");
  const detailsButton = event.target.closest("[data-action='details']");
  const card = event.target.closest("[data-symbol]");
  const symbol = watchlistButton?.dataset.symbol || compareButton?.dataset.symbol || alertButton?.dataset.symbol || detailsButton?.dataset.symbol || card?.dataset.symbol;
  const asset = assets.find((item) => item.symbol === symbol);
  if (!asset) return;
  if (watchlistButton) {
    event.stopPropagation();
    toggleWatchlist(asset);
    return;
  }
  if (compareButton) {
    event.stopPropagation();
    toggleCompare(asset);
    return;
  }
  if (alertButton) {
    event.stopPropagation();
    openModal("alert", asset);
    return;
  }
  if (detailsButton) {
    event.stopPropagation();
    selectAsset(asset);
    scrollToDetailPanel();
    showToast(`${asset.name} geöffnet.`);
    return;
  }
  selectAsset(asset);
  scrollToDetailPanel();
  showToast(`${asset.name} ausgewählt.`);
});

selectors.assetGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-symbol]");
  if (!card) return;
  event.preventDefault();
  const asset = assets.find((item) => item.symbol === card.dataset.symbol);
  if (asset) {
    selectAsset(asset);
    scrollToDetailPanel();
  }
});

document.querySelector("#tickerGrid").addEventListener("click", (event) => {
  const card = event.target.closest("[data-symbol]");
  if (!card) return;
  const asset = assets.find((item) => item.symbol === card.dataset.symbol);
  if (asset) {
    selectAsset(asset);
    scrollToDetailPanel();
  }
});

selectors.watchlistToggle.addEventListener("click", () => {
  toggleWatchlist(state.activeAsset);
});

selectors.compareToggle.addEventListener("click", () => {
  toggleCompare(state.activeAsset);
});

selectors.alertButton.addEventListener("click", () => {
  openModal("alert", state.activeAsset);
});

selectors.detailNoteButton.addEventListener("click", () => {
  openModal("note", state.activeAsset);
});

selectors.detailAlertButton.addEventListener("click", () => {
  openModal("alert", state.activeAsset);
});

selectors.savedWatchlist.addEventListener("click", (event) => {
  const remove = event.target.closest("[data-remove-symbol]");
  const details = event.target.closest("[data-details-symbol]");
  const alert = event.target.closest("[data-alert-symbol]");
  const note = event.target.closest("[data-note-symbol]");
  if (remove) {
    state.savedSymbols.delete(remove.dataset.removeSymbol);
    saveWatchlist();
    showToast("Asset wurde aus der Watchlist entfernt.");
    updateWatchlistButton();
    queueRenderAssets();
    renderSavedWatchlist();
    return;
  }
  if (alert || note) {
    const symbol = alert?.dataset.alertSymbol || note?.dataset.noteSymbol;
    const asset = assets.find((item) => item.symbol === symbol);
    if (asset) openModal(alert ? "alert" : "note", asset);
    return;
  }
  if (details) {
    const asset = assets.find((item) => item.symbol === details.dataset.detailsSymbol);
    if (asset) {
      selectAsset(asset);
      scrollToDetailPanel();
    }
  }
});

selectors.search.addEventListener("input", renderAssets);
selectors.sort.addEventListener("change", renderAssets);
selectors.regionFilter.addEventListener("change", renderAssets);
selectors.riskFilter.addEventListener("change", renderAssets);
selectors.statusFilter.addEventListener("change", renderAssets);

selectors.assetTableBody.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-table-action]");
  if (actionButton) {
    event.stopPropagation();
    const asset = assets.find((item) => item.symbol === actionButton.dataset.symbol);
    if (!asset) return;
    const action = actionButton.dataset.tableAction;
    if (action === "details") {
      selectAsset(asset);
      scrollToDetailPanel();
      showToast(`${asset.name} geöffnet.`);
      return;
    }
    if (action === "watchlist") {
      toggleWatchlist(asset);
      return;
    }
    if (action === "compare") {
      toggleCompare(asset);
      return;
    }
    if (action === "alert") {
      openModal("alert", asset);
      return;
    }
  }
  const row = event.target.closest("tr[data-symbol]");
  if (!row) return;
  const asset = assets.find((item) => item.symbol === row.dataset.symbol);
  if (asset) {
    selectAsset(asset);
    scrollToDetailPanel();
    showToast(`${asset.name} ausgewählt.`);
  }
});

selectors.heatmapGrid.addEventListener("click", (event) => {
  const cell = event.target.closest("[data-symbol]");
  if (!cell) return;
  const asset = assets.find((item) => item.symbol === cell.dataset.symbol);
  if (asset) {
    selectAsset(asset);
    scrollToDetailPanel();
    showToast(`${asset.name} aus der Heatmap geöffnet.`);
  }
});

document.querySelector("#detailTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-detail-tab]");
  if (!button) return;
  setDetailTab(button.dataset.detailTab);
});

document.querySelector(".chart-controls").addEventListener("click", (event) => {
  const typeButton = event.target.closest("[data-chart-type]");
  const indicator = event.target.closest("[data-indicator]");
  if (typeButton) {
    document.querySelectorAll("[data-chart-type]").forEach((button) => button.classList.remove("active"));
    typeButton.classList.add("active");
    state.chartType = typeButton.dataset.chartType;
    const cached = state.chartCache.get(`${state.activeAsset.symbol}:${state.activeRange}`);
    if (cached) updateDetail(cached);
    if (state.modalMode === "chart") openModal("chart", state.activeAsset);
    showToast(`Chart-Typ: ${typeButton.textContent.trim()}`);
  }
  if (indicator) {
    indicator.classList.toggle("active");
    if (indicator.classList.contains("active")) state.activeIndicators.add(indicator.dataset.indicator);
    else state.activeIndicators.delete(indicator.dataset.indicator);
    const cached = state.chartCache.get(`${state.activeAsset.symbol}:${state.activeRange}`);
    if (cached) updateDetail(cached);
    if (state.modalMode === "chart") openModal("chart", state.activeAsset);
    showToast(`${indicator.textContent.trim()} ${indicator.classList.contains("active") ? "aktiviert" : "deaktiviert"}.`);
  }
});

document.querySelector("#expandChart").addEventListener("click", () => {
  openModal("chart", state.activeAsset);
});

selectors.clearCompare.addEventListener("click", () => {
  state.compareSymbols.clear();
  saveCompare();
  renderCompareTray();
  queueRenderAssets();
  updateWatchlistButton();
  renderTodayStrip();
  showToast("Vergleich wurde geleert.");
});

document.querySelectorAll("#compareGrid, #compareBattle").forEach((area) => {
  area.addEventListener("click", (event) => {
    const card = event.target.closest("[data-symbol], article");
    if (!card) return;
    const symbol = card.dataset.symbol || card.querySelector("small")?.textContent.trim().split(/\s+/)[0];
    const asset = assets.find((item) => item.symbol === symbol);
    if (!asset) return;
    selectAsset(asset);
    scrollToDetailPanel();
    showToast(`${asset.name} Chart geöffnet.`);
  });
});

selectors.createGlobalAlert.addEventListener("click", () => {
  openModal("alert", state.activeAsset);
});

selectors.clearAlerts.addEventListener("click", () => {
  state.alerts = {};
  saveAlerts();
  renderAlerts();
  document.querySelector("#assetAlertPreview").textContent = "Noch kein Alarm gespeichert.";
  showToast("Alle Alarme wurden gelöscht.");
});

selectors.alertsList.addEventListener("click", (event) => {
  const del = event.target.closest("[data-delete-alert]");
  const details = event.target.closest("[data-details-symbol]");
  if (del) {
    delete state.alerts[del.dataset.deleteAlert];
    saveAlerts();
    renderAlerts();
    if (del.dataset.deleteAlert === state.activeAsset.symbol) {
      document.querySelector("#assetAlertPreview").textContent = "Noch kein Alarm gespeichert.";
    }
    showToast("Alarm wurde gelöscht.");
  }
  if (details) {
    const asset = assets.find((item) => item.symbol === details.dataset.detailsSymbol);
    if (asset) {
      selectAsset(asset);
      scrollToDetailPanel();
    }
  }
});

document.querySelector("#watchlistGroups").addEventListener("click", (event) => {
  const button = event.target.closest("[data-group]");
  if (!button) return;
  document.querySelectorAll("#watchlistGroups button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  state.activeGroup = button.dataset.group;
  showToast(`Watchlist-Gruppe: ${state.activeGroup}`);
});

document.querySelector("#watchlistStarter")?.addEventListener("click", (event) => {
  const symbol = event.target.closest("[data-suggest-watchlist]")?.dataset.suggestWatchlist;
  const asset = assets.find((item) => item.symbol === symbol);
  if (!asset) return;
  if (!state.savedSymbols.has(asset.symbol)) {
    state.savedSymbols.add(asset.symbol);
    saveWatchlist();
    renderSavedWatchlist();
    queueRenderAssets();
    updateWatchlistButton();
    showToast(`${asset.name} wurde zur Watchlist hinzugefügt.`);
  } else {
    selectAsset(asset);
    scrollToDetailPanel();
  }
});

document.querySelector("#dashboardWidgets").addEventListener("click", (event) => {
  const widget = event.target.closest("[data-widget-target]");
  if (!widget) return;
  document.querySelector(widget.dataset.widgetTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("Dashboard-Widget geöffnet.");
});

selectors.retentionGrid?.addEventListener("click", (event) => {
  const widget = event.target.closest("[data-widget-target]");
  if (!widget) return;
  document.querySelector(widget.dataset.widgetTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("Persönliches Cockpit geöffnet.");
});

function handleQuickAction(action) {
  if (!action) return;
  if (action === "search") {
    document.querySelector("#markets").scrollIntoView({ behavior: "smooth", block: "start" });
    selectors.search.focus();
  }
  if (action === "watchlist") document.querySelector("#watchlist").scrollIntoView({ behavior: "smooth", block: "start" });
  if (action === "alert") openModal("alert", state.activeAsset);
  if (action === "compare") document.querySelector("#compare").scrollIntoView({ behavior: "smooth", block: "start" });
  if (action === "briefing") {
    showToast("Briefing wird neu generiert.");
    window.setTimeout(() => {
      updateBriefing();
      showToast("Briefing wurde aktualisiert.");
    }, 700);
  }
  if (action === "news") document.querySelector("#news").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll(".quick-actions, .hero-cockpit-grid, .onboarding-steps").forEach((area) => {
  area.addEventListener("click", (event) => {
    const action = event.target.closest("[data-quick-action]")?.dataset.quickAction;
    handleQuickAction(action);
  });
});

selectors.dataSourceButton.addEventListener("click", () => {
  selectors.dataDrawer.hidden = false;
});

selectors.drawerClose.addEventListener("click", () => {
  selectors.dataDrawer.hidden = true;
});

selectors.modalClose.addEventListener("click", closeModal);
selectors.modalCancel.addEventListener("click", closeModal);
selectors.modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-open-access-from-modal]")) {
    closeModal();
    openAccessModal();
    return;
  }
  if (event.target.closest("[data-open-checkout-from-modal]")) {
    closeModal();
    openCheckout(state.checkoutPlan);
    return;
  }
  if (event.target === selectors.modal) closeModal();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !selectors.modal.hidden) closeModal();
  if (event.key === "Escape" && !selectors.accessModal.hidden) closeAccessModal();
  if (event.key === "Escape" && !selectors.checkoutModal.hidden) closeCheckout();
  if (event.key === "Escape" && !selectors.assistantDrawer.hidden) selectors.assistantDrawer.hidden = true;
});

selectors.modalConfirm.addEventListener("click", () => {
  const asset = assets.find((item) => item.symbol === state.modalSymbol);
  if (!asset) return closeModal();
  if (state.modalMode === "note") {
    state.notes[asset.symbol] = selectors.modalInput.value.trim();
    if (!state.notes[asset.symbol]) delete state.notes[asset.symbol];
    saveNotes();
    if (asset.symbol === state.activeAsset.symbol) {
      document.querySelector("#assetNotePreview").textContent = state.notes[asset.symbol] || "Noch keine Notiz gespeichert.";
    }
    showToast(`Notiz für ${asset.name} gespeichert.`);
  }
  if (state.modalMode === "alert") {
    state.alerts[asset.symbol] = selectors.modalInput.value.trim() || "Bewegung beobachten";
    saveAlerts();
    renderAlerts();
    if (asset.symbol === state.activeAsset.symbol) {
      document.querySelector("#assetAlertPreview").textContent = state.alerts[asset.symbol] || "Noch kein Alarm gespeichert.";
    }
    showToast(`Alarm für ${asset.name} vorbereitet.`);
  }
  renderSavedWatchlist();
  closeModal();
});

document.querySelector("#newsFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-news-filter]");
  if (!button) return;
  document.querySelectorAll("#newsFilters button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  state.activeNewsFilter = button.dataset.newsFilter;
  renderNewsFilter();
});

document.querySelector("#newsGrid").addEventListener("click", (event) => {
  const assetButton = event.target.closest("[data-news-asset]");
  if (assetButton) {
    event.stopPropagation();
    const asset = assets.find((item) => item.symbol === assetButton.dataset.newsAsset);
    if (asset) {
      selectAsset(asset);
      scrollToDetailPanel();
      showToast(`${asset.name} Chart geöffnet.`);
    }
    return;
  }
  const card = event.target.closest(".news-card");
  if (!card) return;
  card.classList.toggle("open");
  showToast(card.classList.contains("open") ? "News-Details geöffnet." : "News-Details geschlossen.");
});

document.querySelector("#briefing").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-briefing-tab]");
  const card = event.target.closest(".briefing-module");
  if (tab) {
    document.querySelectorAll(".briefing-tabs button").forEach((button) => button.classList.remove("active"));
    tab.classList.add("active");
    focusBriefing(tab.dataset.briefingTab);
    return;
  }
  if (card) {
    document.querySelectorAll(".briefing-module").forEach((item) => item.classList.remove("expanded"));
    card.classList.add("expanded");
    showToast("Briefing-Modul fokussiert.");
  }
});

document.querySelectorAll(".plan-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.plan === "Pro") {
      if (state.isProUser) {
        document.querySelector("#proDashboard")?.scrollIntoView({ behavior: "smooth", block: "start" });
        runProDashboardAction("assistant");
      } else {
        openCheckout(state.checkoutPlan);
      }
    } else {
      showToast(`${button.dataset.plan}: Zugang und Kontofunktionen werden vorbereitet.`);
    }
  });
});

selectors.pricingAccessCode?.addEventListener("click", openAccessModal);

selectors.billingToggle?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-plan-cycle]");
  if (!button) return;
  state.checkoutPlan = button.dataset.planCycle;
  localStorage.setItem("selectedBillingCycle", state.checkoutPlan);
  localStorage.setItem("marketpilot-billing-cycle", state.checkoutPlan);
  localStorage.setItem("marketpilot-checkout-plan", state.checkoutPlan);
  updateCheckoutUI();
});

selectors.checkoutClose?.addEventListener("click", closeCheckout);
selectors.checkoutModal?.addEventListener("click", (event) => {
  if (event.target === selectors.checkoutModal) closeCheckout();
});
selectors.checkoutAccessCode?.addEventListener("click", () => {
  closeCheckout();
  openAccessModal();
});
selectors.completeCheckout?.addEventListener("click", () => {
  if (state.isProUser) {
    closeCheckout();
    document.querySelector("#proDashboard")?.scrollIntoView({ behavior: "smooth", block: "start" });
    runProDashboardAction("assistant");
    return;
  }
  if (state.checkoutLoading) return;
  state.checkoutLoading = true;
  selectors.completeCheckout.disabled = true;
  selectors.completeCheckout.textContent = "Pro wird aktiviert...";
  selectors.checkoutMessage.textContent = "Pro wird aktiviert...";
  window.setTimeout(() => {
    activatePro("purchase");
    selectors.checkoutMessage.textContent = "Pro aktiviert.";
    selectors.completeCheckout.textContent = "Zum Pro Dashboard";
    selectors.completeCheckout.disabled = false;
    state.checkoutLoading = false;
    showToast("Pro aktiviert");
  }, 900);
});

function openAccessModal() {
  selectors.accessModal.hidden = false;
  selectors.accessCodeMessage.textContent = "";
  selectors.accessCodeInput.value = "";
  selectors.accessCodeInput.type = "password";
  selectors.toggleAccessCode.textContent = "Anzeigen";
  selectors.toggleAccessCode.setAttribute("aria-pressed", "false");
  selectors.accessCodeInput.focus();
}

function closeAccessModal() {
  selectors.accessModal.hidden = true;
}

selectors.accessCodeButton.addEventListener("click", openAccessModal);
selectors.openCheckout?.addEventListener("click", () => {
  if (state.isProUser) {
    document.querySelector("#proDashboard")?.scrollIntoView({ behavior: "smooth", block: "start" });
    runProDashboardAction("assistant");
  } else {
    openCheckout(state.checkoutPlan);
  }
});
selectors.openAccessModal.addEventListener("click", openAccessModal);
selectors.accessClose.addEventListener("click", closeAccessModal);
selectors.accessCancel.addEventListener("click", closeAccessModal);
selectors.toggleAccessCode.addEventListener("click", () => {
  const visible = selectors.accessCodeInput.type === "text";
  selectors.accessCodeInput.type = visible ? "password" : "text";
  selectors.toggleAccessCode.textContent = visible ? "Anzeigen" : "Verbergen";
  selectors.toggleAccessCode.setAttribute("aria-pressed", String(!visible));
});
selectors.accessModal.addEventListener("click", (event) => {
  if (event.target === selectors.accessModal) closeAccessModal();
});
async function redeemAccessCode() {
  const code = selectors.accessCodeInput.value.trim();
  if (await validateAccessCode(code)) {
    activatePro("code");
    closeAccessModal();
    showToast("Pro-Zugang aktiviert.");
  } else {
    selectors.accessCodeMessage.textContent = "Code nicht gültig.";
  }
}

function resetDemoAccess() {
  state.isProUser = false;
  state.proAccessMethod = "";
  saveProState();
  updateProUI();
  renderPremiumModules();
  showToast("Demo-Zugang zurückgesetzt.");
}

selectors.redeemAccessCode.addEventListener("click", redeemAccessCode);
selectors.accessCodeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") redeemAccessCode();
});
selectors.resetDemoAccess.addEventListener("click", resetDemoAccess);
selectors.resetDemoAccessLegal.addEventListener("click", resetDemoAccess);
selectors.openProDashboard?.addEventListener("click", () => {
  if (!state.isProUser) {
    openCheckout(state.checkoutPlan);
    showToast("Pro kaufen. Code optional im Checkout.");
    return;
  }
  runProDashboardAction("assistant");
});
selectors.proDashboard?.addEventListener("click", (event) => {
  const action = event.target.closest("[data-pro-dashboard-action]")?.dataset.proDashboardAction;
  if (action) runProDashboardAction(action);
  if (event.target.closest("[data-report-export]")) showToast("Export vorbereitet. PDF-Export ist als Preview markiert.");
});

selectors.premiumGrid?.addEventListener("click", (event) => {
  if (state.isProUser) return;
  const card = event.target.closest(".premium-card.requires-pro");
  if (!card || event.target.closest("select")) return;
  openCheckout(state.checkoutPlan);
  showToast(`${card.dataset.featureCard || "Pro"} mit Pro freischalten.`);
});

selectors.assistantFab.addEventListener("click", () => {
  selectors.assistantDrawer.hidden = false;
  renderAssistantMessages();
  updateProUI();
});
selectors.assistantClose.addEventListener("click", () => {
  selectors.assistantDrawer.hidden = true;
});
selectors.assistantSuggestions.addEventListener("click", (event) => {
  const question = event.target.closest("[data-question]")?.dataset.question;
  if (question) askAssistant(question);
});
selectors.assistantForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = selectors.assistantInput.value.trim();
  if (!question) return;
  selectors.assistantInput.value = "";
  askAssistant(question);
});
selectors.assistantInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    selectors.assistantForm.requestSubmit();
  }
});

selectors.radarTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-radar-filter]");
  if (!button) return;
  selectors.radarTabs.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  state.marketRadarFilter = button.dataset.radarFilter;
  renderMarketRadar();
});
selectors.marketRadar.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-symbol]");
  const asset = dot && assets.find((item) => item.symbol === dot.dataset.symbol);
  if (asset) {
    selectAsset(asset);
    scrollToDetailPanel();
  }
});
selectors.riskMap.addEventListener("click", (event) => {
  const tile = event.target.closest("[data-symbol]");
  const asset = tile && assets.find((item) => item.symbol === tile.dataset.symbol);
  if (asset) {
    selectAsset(asset);
    scrollToDetailPanel();
  }
});
selectors.generateWatchlistBriefing.addEventListener("click", () => {
  if (!requirePro("Watchlist Briefing", "Pro generiert persönliche Briefings aus Watchlist, News, Risiken und Alarmen.")) return;
  selectors.watchlistPulseBriefing.textContent = "Briefing wird generiert...";
  window.setTimeout(() => {
    const saved = [...state.savedSymbols].map((symbol) => assets.find((asset) => asset.symbol === symbol)).filter(Boolean);
    selectors.watchlistPulseBriefing.textContent = `${new Date().toLocaleTimeString("de-DE")}: ${saved.length ? saved.map((asset) => asset.name).join(", ") : "Noch keine Watchlist"} geprüft. Fokus: auffällige Bewegung, aktive Alarme, Datenqualität und News Impact. Keine Anlageberatung.`;
  }, 650);
});
selectors.createSmartAlert.addEventListener("click", () => {
  const type = selectors.smartAlertType.value;
  if (type !== "price" && !requirePro("Smart Alerts", "Pro schaltet Volatilitäts-, News-Impact- und Trendalarme frei.")) return;
  const assetName = selectors.smartAlertAsset.value.trim() || state.activeAsset.name;
  const condition = selectors.smartAlertCondition.value.trim() || "Auffällige Bewegung beobachten";
  state.smartAlerts.unshift({ asset: assetName, type, condition, created: new Date().toLocaleString("de-DE") });
  saveSmartAlerts();
  renderSmartAlerts();
  selectors.smartAlertCondition.value = "";
  showToast("Smart Alert gespeichert.");
});
selectors.smartAlertsList.addEventListener("click", (event) => {
  const del = event.target.closest("[data-delete-smart-alert]");
  if (!del) return;
  state.smartAlerts.splice(Number(del.dataset.deleteSmartAlert), 1);
  saveSmartAlerts();
  renderSmartAlerts();
});
selectors.generatePremiumBriefing.addEventListener("click", () => {
  if (!requirePro("AI Briefing Generator", "Pro erstellt fokussierte Briefings für Markt, Watchlist, ETFs, Krypto oder hohe Relevanz.")) return;
  const scope = selectors.briefingScope.value;
  selectors.generatedBriefing.innerHTML = `<article><strong>Briefing wird generiert...</strong><p>Scope: ${scope}</p></article>`;
  window.setTimeout(() => {
    const context = assistantContext();
    const top = cachedQuotes().sort((a, b) => Math.abs(b.changePct || 0) - Math.abs(a.changePct || 0))[0];
    selectors.generatedBriefing.innerHTML = `
      <article>
        <strong>${new Date().toLocaleString("de-DE")}: Pro Briefing</strong>
        <p><b>Kurzfazit:</b> ${scope}: Marktstimmung ${document.querySelector("#widgetSentiment").textContent}. Top Bewegung ${top ? `${top.asset.name} ${formatPercent(top.changePct)}` : document.querySelector("#widgetTopMover").textContent}.</p>
        <p><b>Watchlist-Hinweise:</b> ${context.watchlist.length ? context.watchlist.slice(0, 5).map((asset) => asset.symbol).join(", ") : "Noch keine Watchlist. Werte hinzufügen, um persönliche Signale zu erhalten."}</p>
        <p><b>Risiken:</b> ${document.querySelector("#widgetRisk").textContent}. Prüfe Volatilität, News Impact, offene Alerts und Datenqualität.</p>
        <p><b>News Impact:</b> ${context.newsItems.slice(0, 2).map((item) => item.title).join(" · ")}.</p>
        <p><b>Datenqualität:</b> ${confidenceScore(context)} · ${context.dataHealth}. Keine Anlageberatung.</p>
      </article>`;
  }, 700);
});
selectors.learningLayer.addEventListener("click", (event) => {
  const term = event.target.closest("[data-term]")?.dataset.term;
  if (term) openModal("learning", state.activeAsset, { term });
});
selectors.proPreview.addEventListener("click", (event) => {
  const feature = event.target.closest("[data-pro-feature]")?.dataset.proFeature;
  if (feature) openModal("pro", state.activeAsset, { feature, benefit: `${feature} erweitert MarketPilot um kontextbezogene AI-Auswertung, gespeicherte Workflows und tägliche Rückkehrsignale.` });
});

selectors.mobileMenuButton.addEventListener("click", () => {
  const open = selectors.mainNav.classList.toggle("open");
  selectors.mobileMenuButton.setAttribute("aria-expanded", String(open));
});

selectors.mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    selectors.mainNav.classList.remove("open");
    selectors.mobileMenuButton.setAttribute("aria-expanded", "false");
  }
});

selectors.chart.addEventListener("mousemove", (event) => {
  const chart = state.lastChart;
  if (!chart?.series?.length || !chart.plot) return;
  const rect = selectors.chart.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const index = Math.max(0, Math.min(chart.series.length - 1, Math.round((x - chart.plot.left) / chart.plot.xStep)));
  const point = chart.series[index];
  const previous = chart.series[Math.max(0, index - 1)];
  const move = previous?.value ? ((point.value - previous.value) / previous.value) * 100 : 0;
  const cached = state.chartCache.get(`${state.activeAsset.symbol}:${state.activeRange}`);
  if (cached) {
    const period = periodChange(cached.series, getRangeConfig(state.activeRange).days);
    const color = !Number.isFinite(period) || Math.abs(period) < 0.15 ? "#5da9ff" : period < 0 ? "#ff6b7d" : "#61df91";
    drawChart(selectors.chart, cached.series, cached.currency, color, { hoverIndex: index });
  }
  selectors.chartTooltip.hidden = false;
  selectors.chartTooltip.style.left = `${Math.min(rect.width - 190, Math.max(8, x + 14))}px`;
  selectors.chartTooltip.style.top = `${Math.max(8, event.clientY - rect.top - 42)}px`;
  selectors.chartTooltip.innerHTML = `
    ${new Date(point.time).toLocaleString("de-DE", { dateStyle: "short", timeStyle: state.activeRange === "1d" ? "short" : undefined })}<br>
    <b>${formatPrice(point.value, chart.currency)}</b><br>
    <span class="${trendClass(move)}">${formatPercent(move)}</span>${point.volume ? `<br>Volumen ${formatCompactNumber(point.volume)}` : ""}
  `;
});

selectors.chart.addEventListener("mouseleave", () => {
  selectors.chartTooltip.hidden = true;
  const cached = state.chartCache.get(`${state.activeAsset.symbol}:${state.activeRange}`);
  if (cached) {
    const period = periodChange(cached.series, getRangeConfig(state.activeRange).days);
    const color = !Number.isFinite(period) || Math.abs(period) < 0.15 ? "#5da9ff" : period < 0 ? "#ff6b7d" : "#61df91";
    drawChart(selectors.chart, cached.series, cached.currency, color);
  }
});

window.addEventListener("resize", () => {
  const cached = state.chartCache.get(`${state.activeAsset.symbol}:${state.activeRange}`);
  if (cached) updateDetail(cached);
});

setStatus("Daten werden aktualisiert", "loading");
bootInterfaceEffects();
setupActiveNavigation();
setDetailTab("chart", true);
renderAssets();
renderSavedWatchlist();
renderCompareTray();
renderAlerts();
updateDashboardWidgets();
renderPremiumModules();
renderNewsFilter(true);
renderNewsAssetActions();
renderTickerGrid();
selectAsset(state.activeAsset);
