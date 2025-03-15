<template>
  <div class="d-flex gap-3 align-items-center mt-2">
    <button @click="$emit('export-csv')" class="btn btn-success">Export to CSV</button>
    <button @click="$emit('export-pdf')" class="btn btn-danger">Export to PDF</button>
  </div>
</template>

<script setup lang="ts">
defineEmits(['export-csv', 'export-pdf']);
</script>