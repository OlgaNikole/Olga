/* globals gauge*/
"use strict";
const path = require("path");
const { openBrowser, closeBrowser, screenshot } = require("taiko");
const headless = process.env.headless_chrome.toLowerCase() === "true";

beforeSuite(async () => {
  await openBrowser({
    headless: headless,
  });
});

afterSuite(async () => {
  await closeBrowser();
});

// beforeStep(async () => {
//   const screenshotFilePath = path.join(
//     `reports/screenshots`,
//     `screenshot-${process.hrtime.bigint()}.png`
//   );

//   await screenshot({
//     path: screenshotFilePath,
//   });
// });

// afterStep(async () => {
//   const screenshotFilePath = path.join(
//     `reports/screenshots`,
//     `screenshot-${process.hrtime.bigint()}.png`
//   );

//   await screenshot({
//     path: screenshotFilePath,
//   });
// });

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
  const screenshotFilePath = path.join(
    process.env["gauge_screenshots_dir"],
    `screenshot-${process.hrtime.bigint()}.png`
  );

  await screenshot({
    path: screenshotFilePath,
  });
  return path.basename(screenshotFilePath);
};
