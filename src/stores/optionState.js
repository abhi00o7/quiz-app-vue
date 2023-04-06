import { defineStore } from "pinia";

export const useOptionStore = defineStore("optionSelect", {
  id: "optionSelect",
  state: () => {
    return {
      showAnswer: false,
      selectedOption: null,
      nextQuestion: false,
    };
  },
  getters: {
    getOption: (state) => {
      return state.selectedOption;
    },
  },
  actions: {
    setOption(option, next, showAnswer) {
      this.selectedOption = option;
      this.nextQuestion = next;
      this.showAnswer = showAnswer;
    },
  },
});
