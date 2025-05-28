<template>
  <nav id="header">
    <div id="header-left">
      <a href="/">Home</a>
    </div>
    <div id="header-right">
      <NuxtLink href="/"><s>Register</s></NuxtLink>
      <NuxtLink href="/"><s>Login</s></NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
#header {
  --horizontal-padding: 25%;
  padding: 2dvh var(--horizontal-padding);

  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: var(--background-secondary-colour);
  color: var(--text-colour);
  border-bottom: 1px solid var(--secondary-colour);
}

@media screen and (max-width: 1000px) {
  #header {
    --horizontal-padding: 5%;
  }
}

#header a {
  text-decoration: none;
  color: inherit;
}

#header-left, #header-right {
  display: flex;
  gap: 2dvw;
}
</style>
