<template>
  <UiText
    :class="[
      'ui-text--body-2-comfortable ui-form-field-character-counter',
      { 'ui-form-field-character-counter--has-error': hasError }
    ]"
  >
    {{ length }}/{{ max }}
  </UiText>
</template>

<script setup lang="ts">
import {
  computed,
  watch,
} from 'vue';
import UiText from '../../../atoms/UiText/UiText.vue';
import type { DefineAttrsProps } from '../../../../types/attrs';

export interface FormFieldCharacterCounterProps {
  /**
   * Use this props to pass value of input.
   */
  value?: string;
  /**
   * Use this props to set max of characters.
   */
  max?: number;
}
export type FormFieldCharacterCounterAttrsProps = DefineAttrsProps<FormFieldCharacterCounterProps>
export interface FormFieldCharacterCounterEmits {
  (e: 'error', value: string | null): void;
}

const props = withDefaults(defineProps<FormFieldCharacterCounterProps>(), {
  value: '',
  max: 240,
});
const length = computed(() => (props.value.length));
const hasError = computed(() => (length.value > props.max));
const emit = defineEmits<FormFieldCharacterCounterEmits>();
watch(
  hasError,
  (error) => {
    if (error) {
      emit('error', 'max length exceeds');
      return;
    }
    emit('error', null);
  },
  { immediate: true },
);
</script>

<style lang="scss">
@use "../../../../styles/functions";

.ui-form-field-character-counter {
  $element: form-field-character-counter;

  --text-color: #{functions.var($element, color, var(--color-text-body))};

  &--has-error {
    --text-color: #{functions.var($element, color, var(--color-text-error))};
  }
}
</style>
