<template>
  <q-page class="placeholder-page">
    <section class="placeholder-section">
      <div class="container">
        <h2>Mapa</h2>
        <p>Em breve</p>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
// Página Mapa - em breve
</script>

<style scoped lang="scss">
.placeholder-page {
  padding: 0;
}

.placeholder-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;

  .container {
    background: rgba(255, 255, 255, 0.86);
    border-radius: 16px;
    padding: 2rem;
    border: 1px solid rgba(44, 62, 80, 0.1);

    h2 {
      color: var(--color-primary);
      margin-bottom: 0.75rem;
    }

    p {
      font-size: 1.1rem;
      color: #2c3e50;
      margin: 0;
    }
  }
}
</style>
