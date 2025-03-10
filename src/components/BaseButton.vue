<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, required: false },
  variant: { type: String, required: false, default: 'primary' },
  disabled: { type: Boolean, required: false }
})

const buttonBase = computed(() => [
  'buttonBase',
  props.variant === 'primary' ? 'buttonPrimary' : '',
  props.variant === 'secondary' ? 'buttonSecondary' : '',
  props.disabled ? 'text-neutral-200 bg-neutral-600  cursor-not-allowed' : 'hover:brightness-120'
])
</script>

<template>
  <button class="select-none" :class="buttonBase" :disabled="disabled">
    {{ label }}
  </button>
</template>
