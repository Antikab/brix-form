<script setup>
import InputItem from '@/components/BaseInput.vue'

import IconName from '@/assets/icon/IconName.svg'
import IconEmail from '@/assets/icon/IconEmail.svg'
import IconPhone from '@/assets/icon/IconPhone.svg'
import IconCompany from '@/assets/icon/IconCompany.svg'

const stepData = defineModel({
  type: Object,
  default: () => ({})
})

defineProps({
  v: Object // Валидация
})
</script>

<template>
  <div
    class="flex flex-col gap-16 lg:gap-[78px] items-center justify-center lg:items-start lg:justify-start"
  >
    <div class="flex flex-col lg:items-start justify-center gap-2">
      <h2 class="title-24-700 text-neutral-800">Contact details</h2>
      <p class="title-18-400_167">Lorem ipsum dolor sit amet consectetur adipisc.</p>
    </div>
    <div
      class="flex flex-col lg:flex-row lg:w-full lg:justify-between lg:flex-wrap gap-y-16 lg:gap-y-20"
    >
      <label for="name" class="cursor-text lg:w-[calc(50%-13px)]">
        <div
          class="bg-neutral-100 shadow-2-6 border border-neutral-300 rounded-[46px] transition"
          :class="
            v.name.$error
              ? 'has-[input:focus-within]:ring-2 has-[input:focus-within]:-ring-offset-2 has-[input:focus-within]:ring-primary-error shadow-4-10-error'
              : 'has-[input:focus-within]:ring-2 has-[input:focus-within]:-ring-offset-2 has-[input:focus-within]:ring-primary-color-1 shadow-4-10'
          "
        >
          <InputItem
            v-model="stepData.name"
            :error="v.name.$errors"
            :srcImage="IconName"
            :contentClass="[
              v.name.$error
                ? 'group-focus-within:text-primary-error'
                : 'group-focus-within:text-indigo-500',
              'text-neutral-500 w-[23px] h-[28px]'
            ]"
            class="group outline-none"
            placeholder="John Carter"
            label="Name"
            name="name"
            id="name"
            type="text"
            autocomplete="name"
            aria-label="Name input field"
          />
        </div>
      </label>
      <label for="email" class="cursor-text lg:w-[calc(50%-13px)]">
        <div
          class="bg-neutral-100 shadow-2-6 border border-neutral-300 rounded-[46px] transition"
          :class="
            v.email.$error
              ? 'has-[input:focus-within]:ring-2 has-[input:focus-within]:-ring-offset-2 has-[input:focus-within]:ring-primary-error shadow-4-10-error'
              : 'has-[input:focus-within]:ring-2 has-[input:focus-within]:-ring-offset-2 has-[input:focus-within]:ring-primary-color-1 shadow-4-10'
          "
        >
          <InputItem
            v-model="stepData.email"
            :error="v.email.$errors"
            :srcImage="IconEmail"
            :contentClass="[
              v.email.$error
                ? 'group-focus-within:text-primary-error'
                : 'group-focus-within:text-primary-color-1',
              'text-neutral-500 w-[23px] h-[28px]'
            ]"
            class="group outline-none"
            placeholder="Email address"
            label="Email"
            name="email"
            id="email"
            type="email"
            autocomplete="email"
            aria-label="Email input field"
          />
        </div>
      </label>
      <label for="phone" class="cursor-text lg:w-[calc(50%-13px)]">
        <div
          class="bg-neutral-100 shadow-2-6 border border-neutral-300 rounded-[46px] transition"
          :class="
            v.phone.$error
              ? 'has-[input:focus-within]:ring-2 has-[input:focus-within]:-ring-offset-2 has-[input:focus-within]:ring-primary-error shadow-4-10-error'
              : 'has-[input:focus-within]:ring-2 has-[input:focus-within]:-ring-offset-2 has-[input:focus-within]:ring-primary-color-1 shadow-4-10'
          "
        >
          <InputItem
            v-model="stepData.phone"
            v-mask="'+7 (###) ###-##-##'"
            :error="v.phone.$errors"
            :srcImage="IconPhone"
            :contentClass="[
              v.phone.$error
                ? 'group-focus-within:text-primary-error'
                : 'group-focus-within:text-indigo-500',
              'text-neutral-500 w-[23px] h-[28px]'
            ]"
            class="group outline-none"
            placeholder="+7 (999) 999-99-99"
            label="Phone Number"
            name="phone"
            id="phone"
            type="tel"
            autocomplete="tel"
            aria-label="Phone input field"
          />
        </div>
      </label>
      <label for="company" class="cursor-text lg:w-[calc(50%-13px)]">
        <div
          class="bg-neutral-100 shadow-2-6 border border-neutral-300 rounded-[46px] transition"
          :class="
            v.company.$error
              ? 'has-[input:focus-within]:ring-2 has-[input:focus-within]:-ring-offset-2 has-[input:focus-within]:ring-primary-error shadow-4-10-error'
              : 'has-[input:focus-within]:ring-2 has-[input:focus-within]:-ring-offset-2 has-[input:focus-within]:ring-primary-color-1 shadow-4-10'
          "
        >
          <InputItem
            v-model="stepData.company"
            :error="v.company.$errors"
            :srcImage="IconCompany"
            :contentClass="[
              v.company.$error
                ? 'group-focus-within:text-primary-error'
                : 'group-focus-within:text-indigo-500',
              'text-neutral-500 w-[23px] h-[28px]'
            ]"
            class="group outline-none"
            placeholder="Company name"
            label="Company"
            name="company"
            id="company"
            type="text"
            autocomplete="organization"
            aria-label="Company input field"
          />
        </div>
      </label>
    </div>
  </div>
</template>
