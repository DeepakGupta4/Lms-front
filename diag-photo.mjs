import puppeteer from "puppeteer-core";
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const OUT =
  "C:/Users/USER/AppData/Local/Temp/claude/e--MyPortfolio/add333d5-5552-42f3-8da8-d44fd74026be/scratchpad";
const URL = "http://localhost:5176";
const errors = [];
const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: false,
  args: ["--window-size=1460,960", "--enable-webgl", "--ignore-gpu-blocklist", "--use-gl=angle"],
});
try {
  const page = await browser.newPage();
  page.on("console", (m) => { if (m.type() === "error") errors.push("CONSOLE: " + m.text()); });
  page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: "load", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 5500));
  await page.screenshot({ path: OUT + "/q-desktop.png" });
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
  await page.goto(URL, { waitUntil: "load", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 5500));
  await page.screenshot({ path: OUT + "/q-mobile.png" });
  console.log("ERRORS:\n" + (errors.join("\n") || "none"));
} finally {
  await browser.close();
}
