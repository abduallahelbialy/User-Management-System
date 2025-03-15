<template>
  <div class="py-3 px-0">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-between">
          <div>
            <span v-if="authStore.user">
              Welcome, {{ authStore.user.username }} ({{ authStore.user.role }})
              <button @click="authStore.logout" class="btn btn-danger">
                Logout
              </button>
            </span>
          </div>
          <div>
            <button @click="toggleDarkMode" class="btn btn-dark">
              {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../../stores/authStore";
const authStore = useAuthStore();
import { ref, computed, onMounted } from "vue";

const isDarkMode = ref(localStorage.getItem("darkMode") === "true");

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem("darkMode", isDarkMode.value.toString());
  document.body.classList.toggle("dark-mode", isDarkMode.value);
};

onMounted(() => {
  document.body.classList.toggle("dark-mode", isDarkMode.value);
});
</script>

<style></style>
