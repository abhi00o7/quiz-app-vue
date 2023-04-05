import { defineStore } from "pinia";

export const useOptionStore = defineStore("optionSelect", {
  state: () => {
    return { optionSelection: false };
  },
  getters: {
    getOption: (state) => {
      return state.optionSelection;
    },
  },
  actions: {
    setOption(option) {
      this.optionSelection = option;
    },
  },
});
