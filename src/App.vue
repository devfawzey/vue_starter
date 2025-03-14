<template>
  <UApp>
    <Header/>
    <div style="height:var(--ui-header-height)"/>
    <RouterView v-slot="{ Component }">
      <Transition name="scale" mode="out-in">
        <KeepAlive exclude="HomeView">
          <component :is="Component" style="min-height: var(--ui-content-without-header)"/>
        </KeepAlive>
      </Transition>
    </RouterView>
  </UApp>
</template>

<style scoped>
.scale-enter-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  transform: translateY(10px) scale(.9);
  opacity: 0;
}
</style>