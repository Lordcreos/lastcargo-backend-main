'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#cron-tasks
 */

const jamstack = require('../../scripts/scrapers/jamstack.js')
const transporte = require('../../scripts/scrapers/transporte-logistica.js')

module.exports = {
  '* * * * *': () => {
    console.log("Executed");
    jamstack.main();
    strapi.config.functions.docker();
    transporte.main();
  }
};
