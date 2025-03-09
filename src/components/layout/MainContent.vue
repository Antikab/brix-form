<script setup>
import StepsMain from '@/views/StepsMain.vue'
</script>

<template>
  <div class="flex pt-9 lg:pt-13 pb-8 lg:pb-25 flex-col items-center text-center">
    <div class="md:max-w-[500px] sm:max-w-[400px] flex flex-col items-center">
      <h1 class="mb-4 title-34-700 text-neutral-800">Get a project quote</h1>
      <div class="flex flex-col items-center title-18-400_167">
        <p class="lg:max-w-[566px]">
          Please fill the form below to receive a quote for your project. Feel free to add as much
          detail as needed.
        </p>

        <StepsMain />
      </div>
    </div>
  </div>
</template>
