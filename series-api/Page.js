import Form from "./Form.js";
import Card from "./Serie.js";
class Page {
  section;
  list;

  constructor(series) {
    this.series = series;
    this.createSection();
    /* this.createList();
    this.createCommunicationsDiv(); */
    this.printForm();
    this.createList();
    this.printCard();
  }

  createSection() {
    this.section = document.createElement("section");
    this.section.className = "form";
    document.querySelector(".main").prepend(this.section);
  }

  printForm() {
    new Form(this.section, "form-series", "form");
  }

  createList() {
    this.list = document.createElement("ul");
    this.list.className = "series-list";
    document.querySelector(".series-pending").append(this.list);
  }

  printCard() {
    this.series.map((serie) => {
      console.log(serie);
      new Card(serie, this.list);
    });
  }
}

export default Page;
