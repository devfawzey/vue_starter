<script setup lang="ts">
import {routeWithoutComponents} from "@/router/index.ts"
</script>

<template>
  <header class="fixed top-0 left-0 bg-(--ui-secondary) w-full z-50" style="height: var(--ui-header-height)">
    <UWrapper class="flex items-center gap-3 justify-center h-full py-2">
      <template v-for="({name,path},index) in routeWithoutComponents()">
        <UButton :label="name?.toString()" color="primary" :to="path" :variant="index%2!==0?'outline':'solid'"/>
      </template>
    </UWrapper>
  </header>
</template>