<script setup>
import { computed, ref, useTemplateRef } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, email, minLength } from '@vuelidate/validators'

// Компоненты
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'

const emailField = ref('')
const input = useTemplateRef('inputRef')
const subscribe = () => {
  v$.value.$touch()
  if (v$.value.$invalid) {
    input.value.focus()

    return
  }

  alert(`Subscribed with: ${emailField.value}`)
}

const rules = computed(() => ({
  emailField: {
    required: helpers.withMessage('Обязательное поле', required),
    email: helpers.withMessage('Вы ввели неверный email', email),
    minLength: helpers.withMessage('Минимальная длина: 6 символов', minLength(6))
  }
}))
const v$ = useVuelidate(rules, { emailField }, { $autoDirty: true, $lazy: true })
</script>

<template>
  <footer
    class="relative min-h-24 lg:min-h-[195px] flex flex-col-reverse lg:flex-row items-center justify-between gap-5 lg:gap-3 bottom-0 border-t-[1px] border-neutral-400 z-10"
  >
    <div
      class="h-22 lg:w-[448px] lg:h-[82px] flex lg:shrink-0 flex-col items-center lg:items-start justify-center gap-[17px]"
    >
      <img class="w-[264px] h-[36px]" src="/image/Logo.svg" alt="logo" />
      <span class="text-center lg:text-start title-18-400_167"
        >Copyright © 2021 BRIX Templates | All Rights Reserved</span
      >
    </div>
    <label for="emailField" class="cursor-text">
      <form
        class="w-[330px] lg:w-[507px] lg:h-[73px] flex justify-between items-center gap-4 mt-4 lg:mt-0 bg-neutral-100 shadow-8-25 border border-neutral-300 rounded-[60px] pr-2 lg:pl-[30px] lg:pr-[18px] lg:py-3 transition"
        @submit.prevent="subscribe"
        :class="
          v$.emailField.$error
            ? 'has-[input:focus-within]:ring-2 has-[input:focus-within]:-ring-offset-2 has-[input:focus-within]:ring-primary-error'
            : 'has-[input:focus-within]:ring-2 has-[input:focus-within]:-ring-offset-2 has-[input:focus-within]:ring-indigo-600'
        "
      >
        <BaseInput
          :error="v$.emailField.$errors"
          class="w-[240px] lg:w-[300px] p-2 text-neutral-800 title-18-400_111 outline-none"
          ref="inputRef"
          v-model="v$.emailField.$model"
          width="100%"
          height="50px"
          id="emailField"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="Input your email"
          aria-label="Email input field"
        />
        <BaseButton
          type="submit"
          label="Subscribe"
          class="w-fit h-10 lg:w-32 lg:h-12 p-3 lg:py-4 lg:px-6"
          :disabled="v$.emailField.$error"
        >
          <span class="title-18-500">Subscribe</span>
        </BaseButton>
      </form>
    </label>
  </footer>
</template>
