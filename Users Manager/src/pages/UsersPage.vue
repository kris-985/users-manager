<template>
  <div class="container mx-auto">
    <div class="flex justify-between items-center">
      <div class="text-4xl">Users</div>
      <button
        @click="openUserDialog"
        class="text-xl px-6 py-4 border rounded text-white bg-blue-600"
      >
        Create User
      </button>
    </div>
  </div>
  <save-user v-if="env.dialogs.users.save" />
  <display-items />
</template>

<script>
import { EnvStore } from "../stores/env";
import { UserStore } from "../stores/user";

import SaveUser from "../components/users/SaveUser.vue";
import DisplayItems from "../components/users/DisplayItems.vue";

export default {
  components: {
    SaveUser,
    DisplayItems,
  },
  setup() {
    const env = EnvStore();
    const user = UserStore();

    user.getItems();

    const functions = {
      openUserDialog() {
        env.dialogs.users.save = true;
      },
    };

    return { env, ...functions };
  },
};
</script>