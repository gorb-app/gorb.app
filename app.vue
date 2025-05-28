<template>
  <div id="app">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts" setup>

const gorbBase = ref<string>(useAppConfig().gorbClientBaseURL);

</script>

<style>
html, body {
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  color: var(--text-colour);
  background-color: var(--background-colour);
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  text-align: center;
  margin-bottom: 32px;
}

.link, a {
  color: inherit;
}
</style>