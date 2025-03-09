<script setup>
const model = defineModel({ type: String, default: '' })

const props = defineProps({
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
  trueValue: {
    type: String,
    required: false
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

// Обработчик изменения чекбокса
const handleInputChange = () => props.onTouch()
</script>

<template>
  <label :for="id" class="relative cursor-pointer">
    <input
      @change="handleInputChange"
      v-model="model"
      :id="id"
      :type="type"
      :name="name"
      :true-value="trueValue"
      false-value=""
      class="hidden peer"
    />
    <div
      :class="[
        classContainer,
        'w-[284px] h-[114px] flex flex-wrap items-center gap-x-[23px] p-4  border-2 rounded-2xl transition-all  peer-checked:border-primary-color-1 peer-checked:shadow-4-10 shadow-2-6'
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
