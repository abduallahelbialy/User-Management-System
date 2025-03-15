import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const user = ref<{ username: string; role: string } | null>(null);

  const login = (username: string, password: string) => {
    const users = [
      { username: "admin", password: "admin123", role: "admin" },
      { username: "manager", password: "manager123", role: "manager" },
      { username: "viewer", password: "viewer123", role: "viewer" },
    ];

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      user.value = { username: foundUser.username, role: foundUser.role };
      sessionStorage.setItem("user", JSON.stringify(user.value)); 
      router.push("/users");
    } else {
      alert("Invalid credentials!");
    }
  };

  const logout = () => {
    user.value = null;
    sessionStorage.removeItem("user");
    router.push("/");
  };

  const checkAuth = () => {
    const storedUser = sessionStorage.getItem("user"); 
    if (storedUser) {
      user.value = JSON.parse(storedUser);
    }
  };

  return { user, login, logout, checkAuth };
});
