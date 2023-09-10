import { defineStore } from "pinia";

export const UserStore = defineStore("user", {
  state: () => ({
    item: {},
    items: []
  }),
  actions: {
    saveItem(cb) {
      this.items.push(this.item);
      localStorage.setItem("users", JSON.stringify(this.items));
      if (cb) cb();
    },
    getItems() {
      this.items = JSON.parse(localStorage.getItem("users")) || [];
    }
  }
});
