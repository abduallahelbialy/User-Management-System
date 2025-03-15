import { defineStore } from "pinia";
import { getUsers } from "../api/mockApi";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [] as Array<{
      id: number;
      name: string;
      role: string;
      status: string;
      joined: string;
    }>,
  }),

  actions: {
    async fetchUsers() {
      const storedUsers = sessionStorage.getItem("users");
      if (storedUsers) {
        this.users = JSON.parse(storedUsers);
      } else {
        this.users = await getUsers();
        sessionStorage.setItem("users", JSON.stringify(this.users));
      }
    },

    deleteUser(userId: number) {
      this.users = this.users.filter((user) => user.id !== userId);
      sessionStorage.setItem("users", JSON.stringify(this.users));
    },

    getUserById(id: number) {
      return this.users.find((user) => user.id === id);
    },

   updateUser(updatedUser: {
  id: number;
  name: string;
  role: string;
  status: string;
  joined?: string;
}) {
  const index = this.users.findIndex((user) => user.id === updatedUser.id);
  if (index !== -1) {
    this.users[index] = {
      ...updatedUser,
      joined: updatedUser.joined ?? "N/A", 
    };
    sessionStorage.setItem("users", JSON.stringify(this.users));
  }
},

    sortUsers(key: "id" | "name" | "role" | "status" | "joined") {
      this.users.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      });
    },
  },
});
