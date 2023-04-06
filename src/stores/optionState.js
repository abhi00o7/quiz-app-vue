import { defineStore } from "pinia";

export const useOptionStore = defineStore("optionSelect", {
  id: "optionSelect",
  state: () => {
    return {
      showAnswer: false,
      optionSelection: false,
      nextQuestion: false,
    };
  },
  getters: {
    getOption: (state) => {
      return state.optionSelection;
    },
  },
  actions: {
    // setOption(option = false, next = false) {
    setOption(option, next, showAnswer) {
      this.optionSelection = option;
      this.nextQuestion = next;
      this.showAnswer = showAnswer;
    },
  },
});
