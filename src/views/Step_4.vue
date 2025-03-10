<script setup>
import BaseButton from '../components/BaseButton.vue'

import IconCheckMark from '/image/IconCheckMark.svg?url'

defineModel({
  type: Object,
  default: () => ({})
})
</script>

<template>
  <div class="lg:-mt-16 flex flex-col items-center">
    <inline-svg class="h-[143px] mt-10" :src="IconCheckMark" aria-label="check mark" role="img" />
    <h2 class="mt-[18px] title-24-700 text-neutral-800">Submit your quote request</h2>
    <p class="lg:max-w-[494px] max-w-[300px] mt-[7.5px] text-pretty">
      Please review all the information you previously typed in the past steps, and if all is okay,
      submit your message to receive a project quote in 24 - 48 hours.
    </p>

    <BaseButton
      class="w-[100px] h-10 lg:w-[144px] lg:h-[61px] mt-7 p-3 lg:py-5 lg:px-10 title-18-700 text-nowrap shadow-3-12"
      label="Submit"
      type="submit"
    />
  </div>
</template>
