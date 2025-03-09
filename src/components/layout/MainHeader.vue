<script setup>
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <header
    class="relative min-h-22 lg:min-h-[126px] top-0 flex flex-col lg:flex-row items-center justify-between z-10"
  >
    <div class="flex lg:shrink-0 w-60 h-8 lg:w-[305px] lg:h-[42px]">
      <img src="/image/Logo.svg" alt="logo" />
    </div>
    <BaseButton
      label="Clone now"
      class="w-fit h-10 lg:w-43 lg:h-15 mt-4 lg:mt-0 p-3 lg:py-5 lg:px-10 title-18-700"
    />
  </header>
</template>
