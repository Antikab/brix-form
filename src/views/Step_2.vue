<script setup>
import { computed } from 'vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'

import IconDev from '/image/IconDev.svg'
import IconWeb from '/image/IconWeb.svg'
import IconMar from '/image/IconMar.svg'
import IconOth from '/image/IconOth.svg'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  v: Object // Валидация
})

const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const touchValidate = () => {
  props.v.checkboxValidate.$touch()
}
</script>

<template>
  <div class="flex flex-col items-center justify-center lg:items-start lg:justify-start">
    <div class="flex flex-col lg:items-start justify-center gap-2">
      <h2 class="title-24-700 text-neutral-800">Our services</h2>
      <p class="w-[250px] lg:w-fit title-18-400_167">
        Please select which service you are interested in.
      </p>
    </div>
    <p class="text-red-500">проверка: {{ modelValue }}</p>
    <div
      class="flex flex-col gap-3.5 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-7 lg:-mx-3.5 relative mt-7 lg:mt-10"
    >
      <Transition
        name="fade"
        tag="div"
        class="absolute w-fit m-auto left-0 right-0 bottom-[calc(100%+10px)] z-10"
      >
        <div
          v-if="v.checkboxValidate.$error"
          class="text-pretty bg-red-200/80 text-xs text-red-800 px-2 py-0.5 rounded-md shadow-sm"
        >
          {{ v.checkboxValidate.$errors[0].$message }}
        </div>
      </Transition>
      <BaseCheckbox
        :classContainer="
          v.checkboxValidate.$error
            ? 'border-primary-error shadow-4-10-error'
            : 'border-neutral-300'
        "
        :onTouch="touchValidate"
        v-model="localValue"
        value="Development"
        id="development"
        name="development"
        label="Development"
        :icon="IconDev"
      />
      <BaseCheckbox
        :classContainer="
          v.checkboxValidate.$error
            ? 'border-primary-error shadow-4-10-error'
            : 'border-neutral-300'
        "
        :onTouch="touchValidate"
        v-model="localValue"
        value="Web Design"
        id="webDesign"
        name="webDesign"
        label="Web Design"
        :icon="IconWeb"
      />
      <BaseCheckbox
        :classContainer="
          v.checkboxValidate.$error
            ? 'border-primary-error shadow-4-10-error'
            : 'border-neutral-300'
        "
        v-model="localValue"
        value="Marketing"
        id="marketing"
        name="marketing"
        label="Marketing"
        :icon="IconMar"
      />
      <BaseCheckbox
        :classContainer="
          v.checkboxValidate.$error
            ? 'border-primary-error shadow-4-10-error'
            : 'border-neutral-300'
        "
        :onTouch="touchValidate"
        v-model="localValue"
        value="Other"
        id="other"
        name="other"
        label="Other"
        :icon="IconOth"
      />
    </div>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
