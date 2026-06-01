const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || process.argv[2] || 8765);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": "*",
    "cache-control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

async function proxyJson(res, url) {
  try {
    const response = await fetch(url, {
      headers: {
        "accept": "application/json",
        "user-agent": "MarketPilot-Nexus/1.0"
      }
    });
    const text = await response.text();
    res.writeHead(response.status, {
      "content-type": response.headers.get("content-type") || "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "cache-control": "no-store"
    });
    res.end(text);
  } catch (error) {
    sendJson(res, 502, { error: "proxy_failed", message: error.message });
  }
}

function serveStatic(req, res) {
  const requestPath = decodeURIComponent(new URL(req.url, `http://localhost:${port}`).pathname);
  const safePath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath === "/" ? "index.html" : safePath);
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "content-type": mimeTypes[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`);

  if (url.pathname === "/api/yahoo-chart") {
    const symbol = url.searchParams.get("symbol");
    const range = url.searchParams.get("range") || "1d";
    const interval = url.searchParams.get("interval") || "5m";
    if (!symbol) {
      sendJson(res, 400, { error: "missing_symbol" });
      return;
    }
    const target = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=${encodeURIComponent(range)}&interval=${encodeURIComponent(interval)}&includePrePost=false&events=div%2Csplits`;
    await proxyJson(res, target);
    return;
  }

  if (url.pathname === "/api/coingecko-markets") {
    const ids = url.searchParams.get("ids");
    const currency = url.searchParams.get("currency") || "eur";
    if (!ids) {
      sendJson(res, 400, { error: "missing_ids" });
      return;
    }
    const target = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${encodeURIComponent(currency)}&ids=${encodeURIComponent(ids)}&price_change_percentage=24h`;
    await proxyJson(res, target);
    return;
  }

  if (url.pathname === "/api/coingecko-chart") {
    const id = url.searchParams.get("id");
    const days = url.searchParams.get("days") || "1";
    const currency = url.searchParams.get("currency") || "eur";
    if (!id) {
      sendJson(res, 400, { error: "missing_id" });
      return;
    }
    const target = `https://api.coingecko.com/api/v3/coins/${encodeURIComponent(id)}/market_chart?vs_currency=${encodeURIComponent(currency)}&days=${encodeURIComponent(days)}`;
    await proxyJson(res, target);
    return;
  }

  serveStatic(req, res);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`MarketPilot Nexus running at http://127.0.0.1:${port}/`);
});
