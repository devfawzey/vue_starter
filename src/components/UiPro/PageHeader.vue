<script setup lang="ts">
import {UiPageHeader} from "@/types/ui-pro";

const {title, description, headline, links} = defineProps<UiPageHeader>()

</script>

<template>
  <div>
    <div v-text="headline" class="font-semibold text-sm mb-2.5"/>
    <div class="flex items-center">
      <h1 v-text="title" class="text-3xl sm:text-4xl font-bold text-(--ui-text-highlighted)"/>
      <div class="flex-1"/>
      <div>
        <UButton v-for="link in links" :label="link.label"/>
      </div>
    </div>
    <div v-text="description" class="text-lg text-(--ui-text-muted) mt-4"/>
  </div>
</template>