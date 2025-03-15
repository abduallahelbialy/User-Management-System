<template>
  <div class="py-2 px-0 d-flex justify-content-center main">
    <div class="container">
      <div class="row">
        <h1 class="text-danger d-flex justify-content-center align-items-center mb-3">
          User Management
        </h1>

        <input
          v-model="searchQuery"
          placeholder="Find the user..."
          @input="resetPagination"
          class="searchQuery"
        />

        <ExportButtons @export-csv="exportToCSV" @export-pdf="exportToPDF" />

        <UserTable
          :users="paginatedUsers"
          :can-edit="canEdit"
          :can-delete="canDelete"
          @sort="sortBy"
          @edit="editUser"
          @delete="deleteUser"
        />

        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @prev="prevPage"
          @next="nextPage"
        />
      </div>
    </div>
  </div>

  <DeleteModal ref="deleteModal" @confirm="handleConfirmDelete" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useUserStore } from "../stores/userStore";
import { useAuthStore } from "../stores/authStore";
import { useRouter } from "vue-router";
import UserTable from "../components/UserTable.vue";
import ExportButtons from "../components/ExportButtons.vue";
import Pagination from "../components/Pagination.vue";
import DeleteModal from "../components/DeleteModal.vue";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const userStore = useUserStore();
const authStore = useAuthStore();
const router = useRouter();
const searchQuery = ref("");
const sortKey = ref("name");

const deleteModal = ref<InstanceType<typeof DeleteModal> | null>(null);
const selectedUserId = ref<number | null>(null);

onMounted(() => {
  userStore.fetchUsers();
});

const canEdit = computed(() => {
  return authStore.user?.role === "admin" || authStore.user?.role === "manager";
});

const canDelete = computed(() => {
  return authStore.user?.role === "admin";
});

const showDeleteConfirmation = (id: number) => {
  if (authStore.user?.role === "manager") {
    alert("You are not allowed to delete users.");
    return;
  }
  selectedUserId.value = id;
  deleteModal.value?.show();
};

const handleConfirmDelete = () => {
  if (selectedUserId.value) {
    userStore.deleteUser(selectedUserId.value);
    deleteModal.value?.hide();
    selectedUserId.value = null;
  }
};

const deleteUser = (id: number) => {
  showDeleteConfirmation(id);
};

const filteredUsers = computed(() => {
  return userStore.users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const resetPagination = () => {
  currentPage.value = 1;
};

const sortBy = (key: "id" | "name" | "role" | "status" | "joined") => {
  userStore.sortUsers(key);
};

const editUser = (id: number) => {
  if (!canEdit.value) {
    alert("You do not have permission to edit users.");
    return;
  }
  router.push(`/users/${id}`);
};

const currentPage = ref(1);
const pageSize = 10;

const totalPages = computed(() =>
  Math.ceil(filteredUsers.value.length / pageSize)
);

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredUsers.value.slice(start, start + pageSize);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const exportToCSV = () => {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Name,Role,Status,Joined\n";

  userStore.users.forEach((user) => {
    csvContent += `${user.name},${user.role},${user.status},${user.joined}\n`;
  });
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "users.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const exportToPDF = () => {
  const doc = new jsPDF();
  doc.text("User List", 10, 10);

  const tableColumn = ["Name", "Role", "Status", "Joined"];
  const tableRows: string[][] = userStore.users.map((user) => [
    user.name,
    user.role,
    user.status,
    user.joined,
  ]);

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 20,
  });

  doc.save("users.pdf");
};
</script>

<style  >

.searchQuery{
  width: 350px !important;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  margin: auto;
  display: block;
  text-align: end;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

</style>
