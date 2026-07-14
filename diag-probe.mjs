import puppeteer from "puppeteer-core";
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const URL = "http://localhost:5176";
const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: false,
  args: ["--window-size=1460,960", "--enable-webgl", "--ignore-gpu-blocklist", "--use-gl=angle"],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: "load", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 5000));
  const info = await page.evaluate(() => {
    const h1 = document.querySelector("#home h1");
    const inner = h1 ? h1.parentElement : null;
    const overlay = inner ? inner.parentElement : null;
    const cs = (el) => (el ? getComputedStyle(el) : {});
    const t = document.createElement("div");
    t.className = "max-w-6xl px-10";
    document.body.appendChild(t);
    const tMax = getComputedStyle(t).maxWidth;
    const tPad = getComputedStyle(t).paddingLeft;
    t.remove();
    return {
      winW: window.innerWidth,
      h1Left: h1 ? Math.round(h1.getBoundingClientRect().left) : "no-h1",
      innerLeft: inner ? Math.round(inner.getBoundingClientRect().left) : null,
      innerClass: inner ? inner.className : null,
      overlayClass: overlay ? overlay.className : null,
      overlayLeft: overlay ? Math.round(overlay.getBoundingClientRect().left) : null,
      overlayWidth: overlay ? Math.round(overlay.getBoundingClientRect().width) : null,
      overlayMaxW: cs(overlay).maxWidth,
      overlayPadLeft: cs(overlay).paddingLeft,
      overlayMarginLeft: cs(overlay).marginLeft,
      overlayDisplay: cs(overlay).display,
      testMax6xl: tMax,
      testPx10: tPad,
    };
  });
  console.log(JSON.stringify(info, null, 2));
} finally {
  await browser.close();
}
