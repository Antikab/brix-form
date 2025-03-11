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

const inputFields = [
  {
    id: 'name',
    label: 'Name',
    placeholder: 'John Carter',
    type: 'text',
    autocomplete: 'name',
    icon: IconName,
    name: 'name'
  },
  {
    id: 'email',
    label: 'Email',
    placeholder: 'Email address',
    type: 'email',
    autocomplete: 'email',
    icon: IconEmail,
    name: 'email'
  },
  {
    id: 'phone',
    label: 'Phone Number',
    placeholder: '+7 (999) 999-99-99',
    type: 'tel',
    autocomplete: 'tel',
    icon: IconPhone,
    name: 'phone',
    mask: '+7 (###) ###-##-##'
  },
  {
    id: 'company',
    label: 'Company',
    placeholder: 'Company name',
    type: 'text',
    autocomplete: 'organization',
    icon: IconCompany,
    name: 'company'
  }
]
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
      <label
        v-for="inputField in inputFields"
        :key="inputField.id"
        :for="inputField.id"
        class="cursor-text lg:w-[calc(50%-13px)]"
      >
        <div
          class="bg-neutral-100 shadow-2-6 border border-neutral-300 rounded-[46px] transition"
          :class="
            v[inputField.name].$error
              ? 'has-[input:focus-within]:ring-2 has-[input:focus-within]:-ring-offset-2 has-[input:focus-within]:ring-primary-error shadow-4-10-error'
              : 'has-[input:focus-within]:ring-2 has-[input:focus-within]:-ring-offset-2 has-[input:focus-within]:ring-primary-color-1 shadow-4-10'
          "
        >
          <InputItem
            v-model="stepData[inputField.name]"
            :error="v[inputField.name].$errors"
            :srcImage="inputField.IconName"
            :contentClass="[
              v[inputField.name].$error
                ? 'group-focus-within:text-primary-error'
                : 'group-focus-within:text-indigo-500',
              'text-neutral-500 w-[23px] h-[28px]'
            ]"
            class="group outline-none"
            :placeholder="inputField.placeholder"
            :label="inputField.label"
            :name="inputField.name"
            :id="inputField.id"
            :type="inputField.type"
            :autocomplete="inputField.autocomplete"
            :aria-label="`${inputField.label} input field`"
          />
        </div>
      </label>
    </div>
  </div>
</template>
