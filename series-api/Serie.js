class Card {
  serie;
  lista;
  card;

  constructor(serie, lista) {
    this.serie = serie;
    this.lista = lista;
    this.createCard();
  }

  createCard() {
    this.card = document.createElement("li");
    this.card.className = "serie";
    this.card.innerHTML = `  <img
                  class="serie__poster"
                  src=${this.serie.poster}
                  alt="The Sopranos poster"
                />
                <h4 class="serie__title">${this.serie.name}</h4>
                <p class="serie__info">${this.serie.creator} ${this.serie.year}</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>`;
    this.lista.append(this.card);
  }
}

export default Card;
