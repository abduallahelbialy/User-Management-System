<template>
  <div class="position-relative m-auto mt-5">
    <div class="container">
      <div class="row">
        <div class=" d-flex `` flex-column align-items-center mt-5">
            <h1 class=" text-danger">Login</h1>
          <form @submit.prevent="handleLogin">
            <div>
              <label>Username</label>
              <input v-model="username" type="text" required />
            </div>
            <div>
              <label>Password</label>
              <input v-model="password" type="password" required />
            </div>
            <button type="submit" class="btn btn-danger">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore();
const username = ref("");
const password = ref("");

const handleLogin = () => {
  authStore.login(username.value, password.value);
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #ccc;

  padding: 20px;
  border-radius: 5px;
  margin: auto;
}
input {
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  width: 300px;
}

</style>
