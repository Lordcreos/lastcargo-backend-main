const puppeteer = require('puppeteer');
const browser = await puppeteer.launch()
const page = await browser.newPage()
const navigationPromise = page.waitForNavigation()

await page.goto('https://blog.logismarket.es/transporte-logistica/')

await page.setViewport({ width: 1280, height: 609 })

await page.waitForSelector('#content > #primary > #main > #post-1890 > .inside-article')
await page.click('#content > #primary > #main > #post-1890 > .inside-article')

await page.waitForSelector('#content > #primary > #main > #post-1951 > .inside-article')
await page.click('#content > #primary > #main > #post-1951 > .inside-article')

await page.waitForSelector('#content > #primary > #main > #post-1618 > .inside-article')
await page.click('#content > #primary > #main > #post-1618 > .inside-article')

await page.waitForSelector('#content > #primary > #main > #post-1917 > .inside-article')
await page.click('#content > #primary > #main > #post-1917 > .inside-article')

await page.waitForSelector('#content > #primary > #main > #post-1819 > .inside-article')
await page.click('#content > #primary > #main > #post-1819 > .inside-article')

await page.waitForSelector('#content > #primary > #main > #post-1561 > .inside-article')
await page.click('#content > #primary > #main > #post-1561 > .inside-article')

await page.waitForSelector('#primary > #main > #nav-below > .nav-links > .next')
await page.click('#primary > #main > #nav-below > .nav-links > .next')

await navigationPromise

await page.waitForSelector('#content > #primary > #main > #post-1726 > .inside-article')
await page.click('#content > #primary > #main > #post-1726 > .inside-article')

await page.waitForSelector('#content > #primary > #main > #post-1640 > .inside-article')
await page.click('#content > #primary > #main > #post-1640 > .inside-article')

await browser.close()
