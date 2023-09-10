<template>
  <div class="dialog container mx-auto">
    <div class="p-5 shadow-lg rounded">
      <form @submit.prevent="submit">
        <div class="mb-4">
          <label for="first_name">First Name</label>
          <input
            type="text"
            v-model="user.item.first_name"
            id="first_name"
            class="outline-none mt-2 w-full p-3 border rounded bg-gray-200"
          />
        </div>
        <div class="mb-4">
          <label for="last_name">Last Name</label>
          <input
            type="text"
            v-model="user.item.last_name"
            id="first_name"
            class="outline-none mt-2 w-full p-3 border rounded bg-gray-200"
          />
        </div>
        <div class="mb-4">
          <label for="email">Email</label>
          <input
            type="email"
            v-model="user.item.email"
            id="email"
            class="outline-none mt-2 w-full p-3 border rounded bg-gray-200"
          />
        </div>
        <div class="mb-4">
          <label for="city">City</label>
          <input
            type="text"
            v-model="user.item.city"
            id="city"
            class="outline-none mt-2 w-full p-3 border rounded bg-gray-200"
          />
        </div>
        <div class="mb-4">
          <label for="phone">Phone</label>
          <input
            type="tel"
            v-model="user.item.phone"
            id="phone"
            class="outline-none mt-2 w-full p-3 border rounded bg-gray-200"
          />
        </div>
        <div class="mb-4">
          <label for="company">Company</label>
          <input
            type="text"
            v-model="user.item.company"
            id="company"
            class="outline-none mt-2 w-full p-3 border rounded bg-gray-200"
          />
        </div>
        <div>
          <button
            type="submit"
            class="border px-6 py-4 rounded text-xl text-white bg-blue-600"
          >
            Create User
          </button>
          <button
            type="button"
            class="border px-6 py-4 rounded text-xl text-white bg-gray-200"
            @click="close"
          >
            Close Dialog
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { EnvStore } from "../../stores/env";
import { UserStore } from "../../stores/user";

export default {
  setup() {
    const env = EnvStore();
    const user = UserStore();

    const functions = {
      close() {
        env.dialogs.users.save = false;
      },
      submitCallBack() {
        env.dialogs.users.save = false;
      },
      submit() {
        user.saveItem(functions.submitCallBack);
      },
    };

    return { user, ...functions };
  },
};
</script>

<style>
.dialog {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  height: 70vh;
  overflow-y: scroll;
  box-shadow: 0 0 20px #999;
  width: 100%;
  max-width: 800px;
}
</style>
