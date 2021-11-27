'use strict'

const chalk = require('chalk');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const {
  getReport,
  getDate,
  getAllTrans,
  scraperCanRun
} = require('./utils/utils.js')
const {
  createTransportes,
  updateScraper
} = require('./utils/query.js')

let report = {}
let errors = []
let newTrans = 0

const scrape = async (allTrans, scraper) => {
  const url = "https://blog.logismarket.es/transporte-logistica/"
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox','--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  try {
    await page.goto(url)
  } catch (e) {
    console.log(`${chalk.red("Error")}: (${url})`);
    errors.push({
      context: "Page navigation",
      url: url,
      date: await getDate()
    })
    return
  }

  const expression = "//article"
  const elements = await page.$x(expression);
  await page.waitForXPath(expression, { timeout: 3000 })

  const promise = new Promise((resolve, reject) => {
    elements.forEach(async (element) => {
      let card = await page.evaluate(el => el.innerHTML, element);
      let $ = cheerio.load(card)
      const titulo = $('.inside-article > .entry-header > .entry-title').text().trim() || null;
      // Skip this iteration if the sg is already in db
      if (allTrans.includes(titulo))
        return;
      const descripcion = $(".inside-article > .entry-summary > p:nth-child(1)" ).text().trim() || null;
      const fecha = $('.inside-article > .entry-header > .entry-meta').text().trim() || null;
      await createTransportes(
        titulo,
        descripcion,
        fecha,
        scraper
      )
      newTrans += 1;
    });
  });

  promise.then(async () => {
    await page.close()
    await browser.close();
  });
}

const main = async () => {
  // Fetch the correct scraper thanks to the slug
  const slug = "transporte"
  const scraper = await strapi.query('scraper').findOne({
    slug: slug
  });

  // If the scraper doesn't exists, is disabled or doesn't have a frequency then we do nothing
  if (scraper == null || !scraper.enabled || !scraper.frequency){
    console.log(`${chalk.red("Exit")}: (Your scraper may does not exist, is not activated or does not have a frequency field filled in)`);
    return
  }

  const canRun = await scraperCanRun(scraper);
  if (canRun && scraper.enabled){
    const allTrans = await getAllTrans(scraper)
    await scrape(allTrans, scraper)
    report = await getReport(newTrans);
    await updateScraper(scraper, report, errors)
  }
}

exports.main = main;
