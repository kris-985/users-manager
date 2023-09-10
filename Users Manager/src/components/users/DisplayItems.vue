<template>
  <div class="container mx-auto mt-6">
    <div v-if="user.items.length > 0">
      <ul>
        <li v-for="(item, index) in user.items" :key="index">
          <div class="p-5 mb-4 border rounded bg-gray-200">
            <div>
              <span class="font-bold">First Name:</span>
              <span>{{ item.first_name }}</span>
            </div>
            <div>
              <span class="font-bold">Last Name:</span>
              <span>{{ item.last_name }}</span>
            </div>
            <div>
              <span class="font-bold">Email:</span>
              <span>{{ item.email }}</span>
            </div>
            <div>
              <span class="font-bold">City:</span>
              <span>{{ item.city }}</span>
            </div>
            <div>
              <span class="font-bold">Phone:</span>
              <span>{{ item.phone }}</span>
            </div>
            <div>
              <span class="font-bold">Company:</span>
              <span>{{ item.company }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="p-6 bg-gray-200">No Users Yet!</div>
  </div>
</template>

<script>
import { UserStore } from "../../stores/user";

export default {
  setup() {
    const user = UserStore();
    return { user };
  },
};
</script>