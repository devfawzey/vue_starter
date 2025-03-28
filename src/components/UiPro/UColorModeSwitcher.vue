<script setup lang="ts">
import {refDebounced, useDark, useToggle} from "@vueuse/core";
import {shallowRef, watch} from "vue";

const isDark = useDark()
const toggleDarkMode = useToggle(isDark)
const model = shallowRef<boolean>(false)
const debounced = refDebounced<boolean>(model, 100)

function switchColorMode() {
  console.log('switching')
  // setTimeout(() => {
  //   toggleDarkMode()
  // })
}

watch(debounced, (value) => {
  toggleDarkMode(value)
})
</script>

<template>
  <USwitch
      :default-value="isDark"
      unchecked-icon="i-ph-moon"
      @update:modelValue="switchColorMode"
      checked-icon="i-ph-sun"
      v-model.lazy="model"
  />
</template>

