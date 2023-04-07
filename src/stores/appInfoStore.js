import { defineStore } from "pinia";

export const useAppInfoStore = defineStore("appInfo", {
  id: "appInfo",
  state: () => {
    return {
      appName: "Quiz App",
      appVersion: "0.2.1",
    };
  },
  getters: {
    getAppName: (state) => {
      return state.appName;
    }
  },
  actions: {
    setAppName(name, version) {
      this.appName = name;
      this.appVersion = version;
    }
  }
});
