import { Settings as AppSettings } from "../core/constants/settings";

export class DonateForm {
  #donateFormElement;
  #totalAmount;
  #totalAmountElement;
  #createNewDonate;

  constructor(totalAmount, createNewDonate) {
    this.#donateFormElement = document.createElement("form");
    this.#totalAmountElement = document.createElement("h1");
    this.#totalAmount = totalAmount;

    this.#createNewDonate = createNewDonate;
  }

  #addEventOnSubmit() {
    this.#donateFormElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const inputElement = event.target.querySelector("input");
      const newDonate = {
        date: new Date(),
        amount: Number(inputElement.value),
      };
      inputElement.value = "";

      this.#createNewDonate(newDonate);
    });
  }

  render() {
    this.#donateFormElement.className = "donate-form";
    this.#totalAmountElement.id = "total-amount";
    this.#totalAmountElement.textContent = `${this.#totalAmount}${
      AppSettings.currency
    }`;
    this.#donateFormElement.append(this.#totalAmountElement);
    this.#donateFormElement.innerHTML += `<label class="donate-form__input-label">Введите сумму в ${AppSettings.currency}
    <input class="donate-form__donate-input" name="amount" type="number" max="100" min="0" required="">
    </label>
    <button class="donate-form__submit-button" type="submit">Задонатить</button>`;

    this.#addEventOnSubmit();

    return this.#donateFormElement;
  }

  updateTotalAmount(newAmount) {
    const totalAmountElement = document.querySelector("#total-amount");
    totalAmountElement.textContent = `${newAmount}${AppSettings.currency}`;
  }
}
