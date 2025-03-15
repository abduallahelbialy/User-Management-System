<template>
  <div class="mt-3 d-flex justify-content-center gap-2 align-items-center">
    <button
      @click="$emit('prev')"
      :disabled="currentPage === 1"
      class="btn btn-primary"
    >
      Previous
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button
      @click="$emit('next')"
      :disabled="currentPage >= totalPages"
      class="btn btn-primary"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

defineEmits(["prev", "next"]);
</script>
