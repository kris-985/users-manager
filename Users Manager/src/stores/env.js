import { defineStore } from "pinia";

export const EnvStore = defineStore("env", {
  state: () => ({
    dialogs: {
      users: {
        save: false,
      }
    },
  }),
});
