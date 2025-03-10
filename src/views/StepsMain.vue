<script setup>
import { ref, reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, email, minLength } from '@vuelidate/validators'

import Step_1 from '@/views/Step_1.vue'
import Step_2 from '@/views/Step_2.vue'
import Step_3 from '@/views/Step_3.vue'
import Step_4 from '@/views/Step_4.vue'
import BaseButton from '@/components/BaseButton.vue'
import StepProgressBar from '@/components/StepProgressBar.vue'

// Текущий шаг формы
const currentStep = ref(1)

// Данные формы
const formData = reactive({})

// Динамическая валидация для каждого шага
const checkboxOneChecked = helpers.withMessage(
  'Выберите хотя бы одну услугу',
  () => formData.development || formData.webDesign || formData.marketing || formData.other
)

// Кастомный валидатор для телефона +7 (999) 999-99-99
const phoneValidator = helpers.withMessage('Введите корректный номер телефона', (value) =>
  /^(\+7|8)\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/.test(value)
)

const rulesByStep = {
  1: {
    name: {
      required: helpers.withMessage('Обязательное поле', required),
      minLength: helpers.withMessage('Минимальная длина: 3 символа', minLength(3))
    },
    email: {
      required: helpers.withMessage('Обязательное поле', required),
      email: helpers.withMessage('Вы ввели неверный email', email),
      minLength: helpers.withMessage('Минимальная длина: 6 символов', minLength(6))
    },
    phone: {
      required: helpers.withMessage('Обязательное поле', required),
      phoneValidator
    },
    company: {
      required: helpers.withMessage('Обязательное поле', required),
      minLength: helpers.withMessage('Минимальная длина: 4 символа', minLength(4))
    }
  },
  2: {
    checkboxValidate: { checkboxOneChecked }
  },
  3: {
    projectBudget: { required }
  }
}

const validationRules = computed(() => rulesByStep[currentStep.value] || {})
const v$ = useVuelidate(validationRules, formData, { $autoDirty: true })

// Функция перехода к следующему шагу, если шаг валиден
const StepNext = async () => {
  await v$.value.$validate()
  if (!v$.value.$invalid) {
    currentStep.value++
  }
}

// Функция перехода к предыдущему шагу
const StepBack = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

// Обработка финального сабмита
const handleSubmit = async () => {
  await v$.value.$validate()
  if (!v$.value.$invalid) {
    const filterFormData = Object.keys(formData).reduce((acc, key) => {
      if (formData[key] && formData[key] !== '') acc[key] = formData[key]
      return acc
    }, {})

    localStorage.setItem('myFormData', JSON.stringify(filterFormData))
    const getMyFrormData = localStorage.getItem('myFormData')
    const savedData = JSON.stringify(JSON.parse(getMyFrormData), null, 4)

    alert(`Данные успешно сохранены! \n ${savedData}`)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="lg:w-[698px] w-full">
    <div
      class="lg:h-[606px] h-[690px] min-w-[calc(100%-32px)] mt-7 pt-5 pb-12 px-1.5 lg:mt-[42px] lg:py-[32px] lg:pl-[46px] lg:pr-[55px] bg-neutral-100 border border-neutral-300 rounded-[34px] shadow-5-16"
    >
      <StepProgressBar :currentStep="currentStep" :totalSteps="4" />
      <Step_1 v-if="currentStep === 1" v-model="formData" :v="v$" />
      <Step_2 v-if="currentStep === 2" v-model="formData" :v="v$" />
      <Step_3 v-if="currentStep === 3" v-model="formData" :v="v$" />
      <Step_4 v-if="currentStep === 4" v-model="formData" />
    </div>

    <div
      class="flex mt-8"
      :class="{
        'justify-end': currentStep === 1,
        'justify-between': currentStep > 1 && currentStep < 4
      }"
    >
      <BaseButton
        v-if="currentStep > 1"
        variant="secondary"
        class="w-fit h-10 lg:w-[193px] lg:h-[61px] p-3 lg:py-5 lg:px-10 title-18-700 text-nowrap"
        label="Previous step"
        type="button"
        @click="StepBack"
      />
      <BaseButton
        v-if="currentStep < 4"
        class="w-fit h-10 lg:w-[165px] lg:h-[61px] p-3 lg:py-5 lg:px-10 title-18-700 text-nowrap shadow-3-12"
        label="Next step"
        type="button"
        :disabled="v$.$invalid"
        @click="StepNext"
      />
    </div>
  </form>
</template>
