<script setup>
const props = defineProps({
  currentStep: {
    type: Number,
    default: 1
  },
  totalSteps: {
    type: Number,
    default: 4
  }
})

// Вид номера шага
function classNumberStep_(i) {
  return i <= props.currentStep ? 'currentNumber' : 'notCurrentNumber'
}

// Вид прогресс бара шага
function progressBarStep_(i) {
  if (props.currentStep > i) return 'w-full'
  if (props.currentStep === i) return 'w-1/2'
  return 'w-0'
}
</script>

<template>
  <div class="mb-4 lg:mb-16 border-b border-neutral-400">
    <div class="flex flex-nowrap justify-center items-center gap-[18px] px-[30px] mb-2.5 lg:mb-8">
      <template v-for="i in totalSteps" :key="i">
        <div :class="['baseNumber', classNumberStep_(i)]">
          <span class="title-16-500">{{ i }}</span>
        </div>
        <div
          v-if="i < totalSteps"
          class="hidden lg:flex relative w-[98px] h-[6px] bg-neutral-300 rounded-[40px]"
        >
          <div
            :class="progressBarStep_(i)"
            class="absolute left-0 h-[6px] bg-primary-color-1 rounded-[40px]"
          ></div>
        </div>
      </template>
    </div>
  </div>
</template>
