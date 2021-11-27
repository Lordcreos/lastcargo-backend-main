const axios = require('axios');
const chalk = require("chalk");

module.exports = async () => {
  const { data } = await axios.get('https://google-search3.p.rapidapi.com/api/v1/search/q=carga+aerea&num=100&lr=lang_es&hl=es&cr=ES', {headers: {
      'x-user-agent': 'desktop',
      'x-rapidapi-host': 'google-search3.p.rapidapi.com',
      'x-rapidapi-key': '9d9acc5135msh9b5cd45e13ac912p168c48jsnf7a6c2693eee'
    }});
  const getAllRapidapi = async () => {
    const existingTrans = await strapi.query('rapidapi').find({
      _limit: 1000,
    }, ["titulo"]);
    return existingTrans.map(x => x.titulo);
  }
    for (const element of data.results) {
      const allRapidapi = await getAllRapidapi();
      if (allRapidapi.includes(element.title))
        return;
      await strapi.query('rapidapi').create({
      titulo: element.title,
      detalle: element.description,
      link: element.link,
    });
  }
};
