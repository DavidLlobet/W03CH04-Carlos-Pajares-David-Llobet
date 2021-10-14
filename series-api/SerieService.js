import Page from "./Page";

class SerieService {
  urlApi = "http://localhost:3001/series";
  async getSeries() {
    const response = await fetch(this.urlApi);
    const series = await response.json();
    return series;
  }
}

const listaSeries = new SerieService();

(async () => {
  const data = await listaSeries.getSeries();
  new Page(data);
})();

/* const getData = async () => {
  const data = await seriePromise.getSerie();
  data.forEach((pelicula) => {
    new Serie(series, "serie", "li", {
      name: pelicula.name,
      creator: pelicula.creator,
      year: pelicula.year,
      poster: pelicula.poster,
      watched: pelicula.watched,
      score: pelicula.score,
      emmies: pelicula.emmies,
    });
  });
}; */

export default SerieService;
