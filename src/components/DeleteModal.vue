<template>
  <div class="modal fade" ref="modalElement" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark">Confirm Delete</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body text-dark">Are you sure you want to delete this user?</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-danger" @click="$emit('confirm')">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Modal } from "bootstrap";

const modalElement = ref<HTMLElement | null>(null);
let modalInstance: InstanceType<typeof Modal> | null = null;

onMounted(() => {
  if (modalElement.value) {
    modalInstance = new Modal(modalElement.value);
  }
});

const show = () => {
  modalInstance?.show();
};

const hide = () => {
  modalInstance?.hide();
};

defineExpose({ show, hide });
</script>