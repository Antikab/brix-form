<script setup>
import { computed } from 'vue'

const {
  label,
  variant = 'primary',
  disabled
} = defineProps({
  label: {
    type: String,
    required: false
  },
  variant: {
    type: String,
    required: false
  },
  disabled: {
    type: Boolean,
    required: false
  }
})

const buttonBase = computed(() => [
  'buttonBase',
  variant === 'primary' ? 'buttonPrimary' : '',
  variant === 'secondary' ? 'buttonSecondary' : '',
  disabled ? 'text-neutral-200 bg-neutral-600  cursor-not-allowed' : 'hover:brightness-120'
])
</script>

<template>
  <button class="select-none" :class="buttonBase" :disabled="disabled">
    <slot>
      {{ label }}
    </slot>
  </button>
</template>
