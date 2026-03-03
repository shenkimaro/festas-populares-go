<template>
  <q-page class="index-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content animate-fadeInUp">
        <h1>Festas Populares de Goiás</h1>
        <p class="subtitle">Celebrações Culturais que Marcam Gerações</p>
        <q-btn
          color="secondary"
          size="lg"
          label="Explorar Festas"
          to="/festas"
          class="btn-custom btn-primary"
        />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
// Home Page - Hero Section
</script>

<style scoped lang="scss">
.index-page {
  padding: 0;
}

.hero-section {
  background: linear-gradient(135deg, var(--color-primary) 0%, #8b4513 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: rgba(255, 215, 0, 0.1);
    border-radius: 50%;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;

    h1 {
      color: white;
      font-size: 3.5rem;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    .subtitle {
      color: var(--color-secondary);
      font-size: 1.5rem;
      margin-bottom: 2rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
}

.btn-custom {
  transition: all 0.3s ease;

  &.btn-primary {
    background-color: var(--color-primary);
    color: #ffffff;

    &:hover {
      background-color: #a01830;
      transform: scale(1.05);
    }
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 1rem;
  }
}
</style>
