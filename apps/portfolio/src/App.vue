<script setup lang="ts">
</script>

<template>
  <div data-testid='app'>
      <h1 data-testid='app-title'>Ben Turner</h1>
      <h3>Senior Frontend Developer</h3>
          <a href="https://territories.ai" target="__blank">Territories.ai</a>
      <ul>
        <li>
          <a href="https://github.com/bbgrabbag" target="__blank">GitHub</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/ben-b-turner" target="__blank">LinkedIn</a>
        </li>
      </ul>
    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
