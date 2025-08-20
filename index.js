const axios = require("axios");
const cheerio = require("cheerio");

async function acompanharPreco() {
  try {
    const url =
      "https://www.mercadolivre.com.br/estocasa-cadeira-ergonometra-escritorio-estofado-confortavel-premium-cor-preto-material-do-estofamento-tecido/p/MLB28467432#polycard_client=search-nordic&searchVariation=MLB28467432&wid=MLB3678290879&position=4&search_layout=grid&type=product&tracking_id=26065c4c-e7d0-4f4b-b642-95ee98a294fa&sid=search";

    const seletorPreco = ".andes-money-amount__fraction";

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    let precoTexto = $(seletorPreco).last().text().trim();
    console.log("Texto capturado bruto:", precoTexto);

    precoTexto = precoTexto.replace(/[^\d]/g, "");
    const preco = parseInt(precoTexto, 10);

    console.log(`💺 Preço atual da cadeira: R$ ${preco}`);
  } catch (error) {
    console.error("Erro ao buscar preço:", error.message);
  }
}

acompanharPreco();
