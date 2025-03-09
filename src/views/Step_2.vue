<script setup>
import BaseCheckbox from '@/components/BaseCheckbox.vue'

import IconDev from '/image/IconDev.svg'
import IconWeb from '/image/IconWeb.svg'
import IconMar from '/image/IconMar.svg'
import IconOth from '/image/IconOth.svg'

const stepData = defineModel({
  type: Object,
  default: () => ({})
})

const { v } = defineProps({
  v: Object // Валидация
})

const touchValidate = () => {
  v.checkboxValidate.$touch()
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center lg:items-start lg:justify-start border-t border-neutral-400"
  >
    <div class="flex flex-col lg:items-start justify-center gap-2">
      <h2 class="mt-16 title-24-700 text-neutral-800">Our services</h2>
      <p class="title-18-400_167">Please select which service you are interested in.</p>
    </div>
    <div
      class="flex flex-col gap-3.5 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-7 lg:-mx-3.5 relative mt-10"
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
        trueValue="Development"
        v-model="stepData.development"
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
        trueValue="Web Design"
        v-model="stepData.webDesign"
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
        :onTouch="touchValidate"
        v-model="stepData.marketing"
        trueValue="Marketing"
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
        v-model="stepData.other"
        trueValue="Other"
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
