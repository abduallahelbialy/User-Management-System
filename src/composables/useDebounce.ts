import { ref, watch, type Ref } from "vue";

export const useDebounce = <T>(value: Ref<T>, delay = 300) => {
  const debouncedValue = ref<T>(value.value) as Ref<T>;

  let timeoutId: ReturnType<typeof setTimeout>;

  watch(value, (newValue) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      debouncedValue.value = newValue;
    }, delay);
  });

  return debouncedValue;
};
