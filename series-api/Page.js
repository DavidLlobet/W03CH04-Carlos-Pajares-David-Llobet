import Form from "./Form.js";
class Page {
  section;

  constructor(personajes) {
    this.personajes = personajes;
    this.createSection();
    /* this.createList();
    this.createCommunicationsDiv(); */
    this.printForm();
  }

  createSection() {
    this.section = document.createElement("section");
    this.section.className = "form";
    document.querySelector(".main").prepend(this.section);
  }

  printForm() {
    new Form(this.section, "form-series", "form");
  }
}

export default Page;
