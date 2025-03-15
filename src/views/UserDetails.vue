<template>
  <div class="py-4 px-0 d-flex justify-content-center main">
    <div class="container">
      <div class="row">
        <h1 class="d-flex justify-content-center text-danger">User Details</h1>
        <form
          @submit.prevent="updateUser"
          class="d-flex flex-column align-items-center gap-2"
        >
          <label>Name:</label>
          <input v-model="user.name" required />

          <label>Role:</label>
          <select v-model="user.role">
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Viewer">Viewer</option>
          </select>

          <label>status:</label>
          <select v-model="user.status">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <div class="d-flex gap-2 align-items-center mt-2">
            <button type="submit" class="btn btn-primary">Save Changes</button>
            <button type="button" @click="goBack" class="btn btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/userStore";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const user = ref({ id: 0, name: "", role: "", status: "" });

onMounted(() => {
  const userId = Number(route.params.id);
  const foundUser = userStore.getUserById(userId);
  if (foundUser) {
    user.value = { ...foundUser };
  } else {
    alert("user not found!");
    router.push("/users");
  }
});

const updateUser = () => {
  userStore.updateUser(user.value);
  router.push("/users");
};

const goBack = () => {
  router.push("/users");
};
</script>
<style>
.main {
  width: 80vw;
  margin: auto;
}
input,
select {
  width: 50%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;

  display: block;
  text-align: end;
}
</style>
