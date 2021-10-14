import Page from "./Page.js";
import SerieService from "./SerieService.js";

const listaSeries = new SerieService();

(async () => {
  const data = await listaSeries.getSeries();
  new Page(data);
})();
