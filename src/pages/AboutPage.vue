<template>
  <q-page class="about-page">
    <!-- Sobre Section -->
    <section class="about-section">
      <div class="container">
        <h2>Sobre as Festas Populares</h2>
        <p class="section-description">
          As festas populares de Goiás representam a riqueza cultural, as
          tradições ancestrais e a alegria do povo goiano. São celebrações que
          refletem a história, a fé e a identidade da região, unindo comunidades
          em momentos de confraternização e partilha.
        </p>

        <div class="cards-grid">
          <div class="card-container animate-slideInLeft">
            <h3>🎉 Tradição</h3>
            <p>
              Heranças culturais passadas por gerações que mantêm viva a
              identidade goiana.
            </p>
          </div>

          <div class="card-container animate-slideInRight">
            <h3>🎭 Diversidade</h3>
            <p>
              Múltiplas manifestações culturais que expressam a riqueza e
              pluralismo regional.
            </p>
          </div>

          <div class="card-container animate-slideInLeft">
            <h3>👥 Comunidade</h3>
            <p>
              Encontros que fortalecem os laços sociais e celebram a vida em
              conjunto.
            </p>
          </div>

          <div class="card-container animate-slideInRight">
            <h3>✨ Alegria</h3>
            <p>
              Momentos de felicidade e celebração que marcam as memórias
              coletivas.
            </p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
// About Page Component
</script>

<style scoped lang="scss">
.about-page {
  padding: 0;
}

.about-section {
  padding: 4rem 2rem;
  backdrop-filter: blur(10px);

  .container {
    max-width: 1200px;
    margin: 0 auto;

    h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: var(--color-primary);
    }

    .section-description {
      text-align: center;
      font-size: 1.1rem;
      margin-bottom: 3rem;
      color: #555;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;

      .card-container h3 {
        font-size: 1.2rem;
        line-height: 1.25;
        margin-bottom: 0.75rem;
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
      }
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .about-section {
    padding: 2rem 1rem;

    .cards-grid .card-container h3 {
      font-size: 1.05rem;
    }
  }
}
</style>
