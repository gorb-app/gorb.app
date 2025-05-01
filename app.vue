<template>
  <nav id="navbar">
    <div id="navbar-left">
      <a href="/">Home</a>
    </div>
    <div id="navbar-right">
      <NuxtLink href="/"><s>Register</s></NuxtLink>
      <NuxtLink href="/"><s>Login</s></NuxtLink>
    </div>
  </nav>
  <NuxtPage />
</template>

<script lang="ts" setup>

const gorbBase = ref<string>(useAppConfig().gorbClientBaseURL);

</script>

<style>
html,
body {
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  color: whitesmoke;
  background-color: rgb(30, 30, 30);
  height: 100%;
  margin: 0;
}

#main {
  text-align: center;
}

#navbar {
  display: flex;
  justify-content: space-between;
  margin-left: 3dvw;
  margin-right: 3dvw;
  margin-top: 2dvh;
}

#navbar a {
  text-decoration: none;
  color: inherit;
}

#navbar-left,
#navbar-right {
  display: flex;
  gap: 2dvw;
}

.link {
  color: inherit;
}
</style>