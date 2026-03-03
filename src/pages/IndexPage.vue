<template>
  <q-page class="index-page">
    <section class="about-section">
      <div class="container">
        <h1>Sobre o Projeto</h1>
        <p class="section-description">
          O projeto Festas Populares de Goiás tem como propósito valorizar,
          organizar e dar visibilidade às celebrações culturais do estado,
          reunindo informações de forma acessível para a comunidade.
        </p>

        <div class="cards-grid">
          <div class="card-container animate-slideInLeft">
            <h3>🎉 Tradição</h3>
            <p>
              Registro e valorização das manifestações populares que preservam a
              identidade cultural goiana.
            </p>
          </div>

          <div class="card-container animate-slideInRight">
            <h3>🗂️ Organização</h3>
            <p>
              Estruturação das informações por categorias para facilitar busca,
              consulta e divulgação.
            </p>
          </div>

          <div class="card-container animate-slideInLeft">
            <h3>📍 Territorialidade</h3>
            <p>
              Conexão entre festas, municípios e regiões para ampliar o
              conhecimento sobre a cultura local.
            </p>
          </div>

          <div class="card-container animate-slideInRight">
            <h3>🤝 Comunidade</h3>
            <p>
              Fortalecimento do vínculo entre pesquisadores, população e
              organizadores das festividades.
            </p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
// Home Page - Sobre o Projeto
</script>

<style scoped lang="scss">
.index-page {
  padding: 0;
}

.about-section {
  padding: 4rem 2rem;
  min-height: 100vh;
  backdrop-filter: blur(10px);

  .container {
    max-width: 1200px;
    margin: 0 auto;

    h1 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: var(--color-primary);
      font-size: 3rem;
    }

    .section-description {
      text-align: center;
      font-size: 1.1rem;
      margin-bottom: 3rem;
      color: #3a4a5a;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.7;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;

      .card-container h3 {
        font-size: 1.2rem;
        line-height: 1.25;
        margin-bottom: 0.75rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 2rem 1rem;

    .container h1 {
      font-size: 2rem;
    }

    .cards-grid .card-container h3 {
      font-size: 1.05rem;
    }
  }
}
</style>
