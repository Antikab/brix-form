<script setup>
import BaseRadio from '@/components/BaseRadio.vue'

const stepData = defineModel({
  type: Object,
  default: () => ({})
})
</script>

<template>
  <div class="flex flex-col items-center justify-center lg:items-start lg:justify-start">
    <div class="flex flex-col lg:items-start justify-center gap-2">
      <h2 class="title-24-700 text-neutral-800">What’s your project budget?</h2>
      <p class="w-[250px] lg:w-fit title-18-400_167 text-pretty">
        Please select the project budget range you have in mind.
      </p>
    </div>
    <div
      class="flex flex-col gap-3.5 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-7 lg:-mx-3.5 relative mt-7 lg:mt-10"
    >
      <BaseRadio
        v-model="stepData.projectBudget"
        value="$5.000 - $10.000"
        id="5.000-10.000"
        label="$5.000 - $10.000"
        name="radio-group"
        classContainer="border-neutral-300"
      />
      <BaseRadio
        v-model="stepData.projectBudget"
        id="10.000-20.000"
        value="$10.000 - $20.000"
        label="$10.000 - $20.000"
        name="radio-group"
        classContainer="border-neutral-300"
      />
      <BaseRadio
        v-model="stepData.projectBudget"
        value="$20.000 - $50.000"
        id="20.000-50.000"
        label="$20.000 - $50.000"
        name="radio-group"
        classContainer="border-neutral-300"
      />
      <BaseRadio
        v-model="stepData.projectBudget"
        value="$50.000 +"
        id="50.000+"
        label="$50.000 +"
        name="radio-group"
        classContainer="border-neutral-300"
      />
    </div>
  </div>
</template>
