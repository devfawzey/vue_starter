<script setup lang="ts">
import type {SelectMenuItem} from "@nuxt/ui"
import {ref} from "vue";
import {BasicColorSchema, useColorMode} from "@vueuse/core";

interface IColorMode extends SelectMenuItem {
  value: BasicColorSchema
}

const colorMode = useColorMode()

const items = ref<IColorMode[]>(
    [
      {
        label: "System",
        icon: "material-symbols-light:computer-outline",
        value: "auto"
      },
      {
        label: "Light",
        icon: "i-ph-sun",
        value: "light"
      },
      {
        label: "Dark",
        icon: "i-ph-moon",
        value: "dark"
      },
    ])

const value = ref(items.value[0])

function onColorModeChange(mode: IColorMode) {
  colorMode.value = mode.value
}
</script>

<template>
  <USelectMenu v-model="value" :search-input="false" @update:modelValue="onColorModeChange" class="w-30"
               :icon="value.icon"
               :items="items"/>
</template>
