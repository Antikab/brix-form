<script setup>
import { useTemplateRef } from 'vue'

const input = useTemplateRef('inputRef')
const model = defineModel({ type: String, default: '' })

defineExpose({
  focus() {
    input.value.focus()
  }
})

defineProps({
  id: {
    type: String,
    default: '',
    required: true
  },
  type: {
    type: String,
    default: 'text',
    required: false
  },

  name: {
    type: String,
    default: '',
    required: true
  },
  placeholder: {
    type: String,
    default: '',
    required: true
  },
  label: {
    type: String,
    default: '',
    required: false
  },
  autocomplete: {
    type: String,
    default: '',
    required: false
  },
  ariaLabel: {
    type: String,
    default: '',
    required: false
  },
  error: {
    type: Array,
    default: () => [],
    required: false
  },
  width: {
    type: String,
    default: '230px',
    required: false
  },
  height: {
    type: String,
    default: '50px',
    required: false
  },
  srcImage: {
    type: String,
    required: false
  },

  contentType: {
    type: String,
    default: 'svg',
    validator: (value) => ['img', 'svg'].includes(value),
    required: false
  },
  contentClass: {
    type: Array,
    required: false
  }
})
</script>

<template>
  <div class="h-[66px] w-[284px] relative flex justify-between items-center gap-1 p-5 outline-none">
    <TransitionGroup
      name="element"
      tag="div"
      class="absolute left-[20%] right-[20%] bottom-[calc(100%+10px)] flex flex-col-reverse gap-1.5 z-10"
    >
      <div
        v-for="(element, index) of error"
        :key="index"
        class="text-pretty bg-red-200/80 text-xs text-red-800 px-2 py-0.5 rounded-md shadow-sm"
      >
        {{ element.$message }}
      </div>
    </TransitionGroup>
    <label
      v-if="label"
      :for="id"
      class="absolute left-0 -top-9 title-18-500 text-neutral-800 select-none"
    >
      {{ label }}
    </label>
    <input
      ref="inputRef"
      v-model="model"
      :style="{ width: width, height: height }"
      :id="id"
      :name="name"
      :label="label"
      :placeholder="placeholder"
      :error="error"
      :type="type"
      :autocomplete="autocomplete"
      :aria-label="ariaLabel"
      class="text-neutral-800 placeholder-neutral-600 focus:placeholder-neutral-600/50"
    />
    <div :class="contentClass">
      <inline-svg v-if="contentType === 'svg' && srcImage" :src="srcImage" :class="contentClass" />
      <img
        v-else-if="contentType === 'img' && srcImage"
        :src="srcImage"
        alt="Icon"
        class="absolute right-4 top-1/2 -translate-y-1/2"
      />
    </div>
  </div>
</template>

<style>
.element-move,
.element-enter-active,
.element-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.element-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.element-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.element-leave-active {
  position: absolute;
  width: 100%;
}
</style>
