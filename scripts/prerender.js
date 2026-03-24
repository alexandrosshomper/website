const { run } = require("react-snap");
const puppeteer = require("puppeteer");
const pkg = require("../package.json");

run({
  ...pkg.reactSnap,
  puppeteerExecutablePath: puppeteer.executablePath(),
}).catch(console.error);
