import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";
import { calculateSumOfNumbers as calcSum } from "../core/utils";

const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];

export default class App {
  #state;
  #donateForm;
  #donateList;

  constructor() {
    this.#state = {
      donates: mockDonates,
      totalAmount: 0,
    };

    if (this.#state.donates.length) {
      // this.#state.donates.map((donate) => {
      //   this.#state.totalAmount += donate.amount;
      // })
      const amountsArr = [];
      this.#state.donates.map((donate) => {
        amountsArr.push(donate.amount);
      });
      this.#state.totalAmount = calcSum(amountsArr);
    } else {
      this.#state.totalAmount = 0;
    }

    this.#donateForm = new DonateForm(
      this.#state.totalAmount,
      this.#createNewDonate.bind(this),
    );
    this.#donateList = new DonateList(this.#state.donates);
  }

  run() {
    // document.body.textContent = "Hello World";
    const donateFormElement = this.#donateForm.render();
    document.body.append(donateFormElement);

    const donateListElement = this.#donateList.render();
    document.body.append(donateListElement);
  }

  #createNewDonate(newDonate) {
    this.#state.donates.push(newDonate);
    this.#state.totalAmount += newDonate.amount;
    this.#donateList.updateDonates(this.#state.donates);
    this.#donateForm.updateTotalAmount(this.#state.totalAmount);
  }
}
