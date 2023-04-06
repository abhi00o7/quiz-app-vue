import { defineStore } from "pinia";

export const useOptionStore = defineStore("optionSelect", {
  id: "optionSelect",
  state: () => {
    return {
      showAnswer: false,
      selectedOption: null,
      nextQuestion: false,
      disableSelection: false,
    };
  },
  getters: {
    getOption: (state) => {
      return state.selectedOption;
    },
  },
  actions: {
    setOption(option, next, showAnswer, disableSelection) {
      this.selectedOption = option;
      this.nextQuestion = next;
      this.showAnswer = showAnswer;
      this.disableSelection = disableSelection;
    },
  },
});
