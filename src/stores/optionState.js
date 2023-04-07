import { defineStore } from "pinia";

export const useOptionStore = defineStore("optionSelect", {
  id: "optionSelect",
  state: () => {
    return {
      showAnswer: false,
      selectedOption: null,
      nextQuestion: false,
      disableSelection: false,
      finalQuestion: false,
    };
  },
  actions: {
    update(finalQuestion = false) {
      // to make the final questions reactive
      this.finalQuestion = finalQuestion;
    },

    setOption(option, next, showAnswer, disableSelection, finalQuestion) {
      // to make the final questions reactive
      this.finalQuestion = finalQuestion;
      this.selectedOption = option;
      this.nextQuestion = next;
      this.showAnswer = showAnswer;
      this.disableSelection = disableSelection;
    },
  },
});
