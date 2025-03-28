<script setup lang="ts">
import {ref} from "vue";
import {MaybeRef} from "@vueuse/core";
import {UiPageHeaderAction} from "@/types/ui-pro";

const links: MaybeRef<UiPageHeaderAction[]> = ref([
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageHeader.vue',
    target: '_blank'
  }
])
</script>
<template>
  <UWrapper class="flex items-center justify-center">
    <div class="p-4 flex justify-center border border-(--ui-border-muted) rounded-md max-w-fit">

      <PageHeader :links="links" title="PageHeader"
                  description="A responsive page header with title, description and actions." headline="Components"/>
    </div>
  </UWrapper>
</template>