<script setup>
import BaseCheckbox from '@/components/BaseCheckbox.vue'

import IconDev from '/image/IconDev.svg'
import IconWeb from '/image/IconWeb.svg'
import IconMar from '/image/IconMar.svg'
import IconOth from '/image/IconOth.svg'

const modelValue = defineModel({ type: Array, default: () => [] })

const props = defineProps({
  v: Object // Валидация
})

const touchValidate = () => {
  props.v.checkboxValidate.$touch()
}

const options = [
  {
    value: 'Development',
    label: 'Development',
    icon: IconDev,
    id: 'dev',
    name: 'development'
  },
  { value: 'Web Design', label: 'Web Design', icon: IconWeb, id: 'web', name: 'webDesign' },
  { value: 'Marketing', label: 'Marketing', icon: IconMar, id: 'mar', name: 'marketing' },
  { value: 'Other', label: 'Other', icon: IconOth, id: 'oth', name: 'other' }
]
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
        v-for="option in options"
        :key="option.id"
        :classContainer="
          v.checkboxValidate.$error
            ? 'border-primary-error shadow-4-10-error'
            : 'border-neutral-300'
        "
        :onTouch="touchValidate"
        :value="option.value"
        :id="option.id"
        :name="option.name"
        :label="option.label"
        :icon="option.icon"
        v-model="modelValue"
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
