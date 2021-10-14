class Form {
  element;
  parentElement;
  constructor(parentElement, className, tag = "form") {
    this.element = document.createElement(tag);
    this.element.className = className;
    this.parentElement = parentElement;
    this.parentElement.append(this.element);
    this.element.innerHTML = `
            <div class="form-block">
              <label for="title">Title:</label>
              <input type="text" id="title">
            </div>
            <div class="form-block">
              <label for="creator">Creator:</label>
              <input type="text" id="creator">
            </div>
            <div class="form-block">
              <label for="image">Image URL:</label>
              <input type="url" id="image">
            </div>
            <div class="form-block">
              <label for="emmies">Emmies:</label>
              <input type="number" id="emmies">
            </div>
            <div class="form-block">
              <button type="submit">Create</button>
            </div>
          `;
  }
}

export default Form;
