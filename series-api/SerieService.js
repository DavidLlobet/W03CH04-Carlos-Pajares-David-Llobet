import Page from "./Page.js";

class SerieService {
  urlApi = "http://localhost:3001/series";
  async getSeries() {
    const response = await fetch(this.urlApi);
    const series = await response.json();
    return series;
  }
}

export default SerieService;
