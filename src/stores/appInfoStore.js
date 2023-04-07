import { defineStore } from "pinia";

export const useAppInfoStore = defineStore("appInfo", {
  id: "appInfo",
  state: () => {
    return {
      appName: "Quiz App",
      appVersion: "0.2.2",
      creator: "Abhishek Kumar",
      creatorEmail: "abhishek.ak.vii@gmail.com",
      creatorGithub: "https://github.com/abhi00o7/",
      projectGithub: "https://github.com/abhi00o7/quiz-app-vue/",
    };
  },
  getters: {
    getAppName: (state) => {
      return state.appName;
    },
  },
  actions: {
    setAppName(
      name,
      version,
      creator,
      creatorEmail,
      creatorGithub,
      projectGithub
    ) {
      this.appName = name;
      this.creator = creator;
      this.appVersion = version;
      this.creatorEmail = creatorEmail;
      this.creatorGithub = creatorGithub;
      this.projectGithub = projectGithub;
    },
  },
});
