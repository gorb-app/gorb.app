<template>
  <div id="main">
    <h2>
      <span class="pansexual-gradient">Source Code</span>
    </h2>

    <div id="card-container">
      <div class="card">
        <a href="https://git.gorb.app/gorb/backend">
          <h3>Backend</h3>
          <p>Gorb's official backend</p>
        </a>
      </div>
      <div class="card">
        <a href="https://git.gorb.app/gorb/frontend">
          <h3>Frontend</h3>
          <p>Gorb's official frontend</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
#card-container {
  --flex-direction: row;

  display: flex;
  flex-direction: var(--flex-direction);
  justify-content: space-between;
  gap: 48px;
  width: fit-content;
  max-width: 60vw;
  margin: 48px auto;
}

@media screen and (max-width: 1000px) {
  #card-container {
    --flex-direction: column;
  }
}

.card {
  flex: 1;
  padding: 32px;
  border: 1px solid var(--accent-colour);
  background-color: var(--primary-colour);
  border-radius: 8px;
  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
}

.card a {
  text-decoration: none;
}

.card:hover {
  background-color: var(--secondary-colour);
}
</style>