<script setup>
import MainHeader from '@/components/layout/MainHeader.vue'
import MainFooter from '@/components/layout/MainFooter.vue'
import MainContent from '@/components/layout/MainContent.vue'
</script>

<template>
  <div
    class="w-full max-w-[1440px] m-auto px-4 py-2 lg:p-[32px_100px_57px] min-h-dvh flex flex-col bg-neutral-100"
  >
    <MainHeader />
    <MainContent />
    <MainFooter />
  </div>
</template>
