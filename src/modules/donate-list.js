import { getFormattedTime as formatDate } from "../core/utils";

export class DonateList {
  #donates;
  #donateListElement;
  #donateListContainer;

  constructor(donates) {
    this.#donates = donates;
    this.#donateListElement = document.createElement("div");
    this.#donateListContainer = document.createElement("div");
  }

  #renderItems(donates) {
    donates.forEach((donate) => {
      const donateDate = formatDate(donate.date);
      const donateItemElement = document.createElement("div");
      donateItemElement.className = "donate-item";
      donateItemElement.innerHTML = `${donateDate} - <b>${donate.amount}$</b>`;

      this.#donateListContainer.append(donateItemElement);
    });
  }

  render() {
    this.#donateListElement.className = "donates-container";
    this.#donateListElement.innerHTML = `<h2 class="donates-container__title">Список донатов</h2>`;
    this.#donateListContainer.className = "donates-container__donates";
    this.#donateListElement.append(this.#donateListContainer);

    this.#renderItems(this.#donates);

    return this.#donateListElement;
  }

  updateDonates(updatedDonates) {
    this.#donateListContainer.innerHTML = "";

    this.#renderItems(updatedDonates);
  }
}
