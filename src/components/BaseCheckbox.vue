<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
    required: true
  },
  value: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'checkbox',
    required: false
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: '',
    required: false
  },
  icon: {
    type: String,
    default: '',
    required: false
  },
  classContainer: {
    type: String,
    required: false
  },
  onTouch: {
    type: Function,
    default: () => {},
    required: false
  }
})

const emit = defineEmits(['update:modelValue'])

const isChecked = computed(() => props.modelValue.includes(props.value))

const toggleValue = (event) => {
  props.onTouch()
  const updated = [...props.modelValue]
  if (event.target.checked) {
    if (!updated.includes(props.value)) {
      updated.push(props.value)
    }
  } else {
    const index = updated.indexOf(props.value)
    if (index !== -1) {
      updated.splice(index, 1)
    }
  }
  emit('update:modelValue', updated)
}
</script>

<template>
  <label :for="id" class="relative cursor-pointer">
    <input
      @change="toggleValue"
      :id="id"
      :type="type"
      :name="name"
      :value="value"
      :checked="isChecked"
      class="hidden peer"
    />
    <div
      :class="[
        classContainer,
        'w-[215px] h-[105px] lg:w-[284px] lg:h-[114px] flex flex-nowrap items-center gap-x-[23px] p-4  border-2 rounded-2xl transition-all  peer-checked:border-primary-color-1 peer-checked:shadow-4-10 shadow-2-6'
      ]"
    >
      <div class="size-[66px] bg-primary-color-1/15 rounded-full flex items-center justify-center">
        <inline-svg :src="icon" :aria-label="`Icon for ${name}`" role="img" />
      </div>
      <span class="title-18-500 text-neutral-800 select-none">
        {{ label }}
      </span>
    </div>
  </label>
</template>
