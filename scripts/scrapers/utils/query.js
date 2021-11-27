'use strict'

const chalk = require('chalk');

const createSiteGenerators = async (name, stars, forks, issues, description, language, template, license, deployLink, scraper) => {

  try {
    const entry = await strapi.query('site-generator').create({
      name: name,
      stars: stars,
      forks: forks,
      issues: issues,
      description: description,
      language: language,
      templates: template,
      license: license,
      deploy_to_netlify_link: deployLink,
      scraper: scraper.id
    })
  } catch (e) {
    console.log(e);
  }
}

const updateScraper = async (scraper, report, errors) => {
  await strapi.query('scraper').update({
    id: scraper.id
  }, {
    report: report,
    error: errors,
  });

  console.log(`Job done for: ${chalk.green(scraper.name)}`);
}

const createTransportes = async (titulo, descripcion, fecha, scraper) => {

  try {
    const entry = await strapi.query('transporte').create({
      titulo: titulo,
      descripcion: descripcion,
      fecha: fecha,
      scraper: scraper.id
    })
  } catch (e) {
    console.log(e);
  }
}


module.exports = {
  createSiteGenerators,
  updateScraper,
  createTransportes
}
