<template>
  <table>
    <thead>
      <tr>
        <th @click="$emit('sort', 'name')">Name</th>
        <th @click="$emit('sort', 'role')">Role</th>
        <th @click="$emit('sort', 'status')">Status</th>
        <th @click="$emit('sort', 'joined')">Joined</th>
        <th>Procedures</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.role }}</td>
        <td>{{ user.status }}</td>
        <td>{{ user.joined }}</td>
        <td>
          <div class="d-flex gap-2 align-items-center">
            <button
              @click="$emit('edit', user.id)"
              class="btn btn-primary"
              :disabled="!canEdit"
            >
              Edit
            </button>
            <button
              @click="$emit('delete', user.id)"
              class="btn btn-danger"
              :disabled="!canDelete"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps({
  users: {
    type: Array as () => {
      id: number;
      name: string;
      role: string;
      status: string;
      joined: string;
    }[],
    required: true,
  },
  canEdit: Boolean,
  canDelete: Boolean,
});

defineEmits(["sort", "edit", "delete"]);
</script>
