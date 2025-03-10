<script setup>
const model = defineModel({ type: String, default: '' })

defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'radio',
    required: false
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: false
  },
  label: {
    type: String,
    default: '',
    required: false
  },
  classContainer: {
    type: String,
    required: false
  }
})
</script>

<template>
  <label :for="id" class="cursor-pointer">
    <div
      :class="[
        classContainer,
        'w-[215px] h-[105px] lg:w-[284px] lg:h-[114px] flex items-center gap-4 p-4  border-2 rounded-2xl transition-all  has-checked:border-primary-color-1 has-checked:shadow-4-10 shadow-2-6'
      ]"
    >
      <input
        v-model="model"
        :id="id"
        :type="type"
        :value="value"
        :name="name"
        :label="label"
        class="h-[25px] w-[25px] appearance-none outline-none rounded-full shadow-3-7-inset bg-white border-neutral-400 border-[1.2px] checked:border-[8px] checked:border-primary-color-1 duration-150"
      />
      <span class="title-18-400_111 text-neutral-800 select-none">
        {{ label }}
      </span>
    </div>
  </label>
</template>
