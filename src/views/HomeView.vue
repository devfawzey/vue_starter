<script setup lang="ts">
import {onMounted, ref, useTemplateRef} from "vue";

const input = ref()
const el = useTemplateRef<{ inputRef: HTMLInputElement | null }>("myInputRef")

onMounted(async () => {
  el.value?.inputRef?.focus()
})
</script>
<template>
  <UWrapper>
    <h1>HOME_VIEW</h1>
    <UInput v-model="input" ref="myInputRef" as="main"/>
  </UWrapper>
</template>