<template>
  <q-page class="objetivos-page">
    <section class="objetivos-section">
      <div class="container">
        <h2>Objetivos</h2>
        <p class="section-description">
          Esta iniciativa busca fortalecer a memória cultural e ampliar o acesso
          às informações sobre as festas populares de Goiás.
        </p>

        <div class="cards-grid">
          <div class="card-container">
            <h3>📚 Preservação Cultural</h3>
            <p>
              Registrar e divulgar tradições festivas para valorizar o
              patrimônio imaterial goiano.
            </p>
          </div>

          <div class="card-container">
            <h3>🧭 Organização de Conteúdo</h3>
            <p>
              Estruturar dados por categorias e temas para facilitar a consulta
              da comunidade.
            </p>
          </div>

          <div class="card-container">
            <h3>🌎 Acesso Público</h3>
            <p>
              Disponibilizar informações em linguagem acessível para estudantes,
              pesquisadores e população.
            </p>
          </div>

          <div class="card-container">
            <h3>🤝 Integração Social</h3>
            <p>
              Aproximar comunidades, instituições e agentes culturais em torno
              das celebrações locais.
            </p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
// Objetivos do projeto
</script>

<style scoped lang="scss">
.objetivos-page {
  padding: 0;
}

.objetivos-section {
  padding: 4rem 2rem;
  min-height: 100vh;
  backdrop-filter: blur(10px);

  .container {
    max-width: 1200px;
    margin: 0 auto;

    h2 {
      text-align: center;
      margin-bottom: 1rem;
      color: var(--color-primary);
    }

    .section-description {
      text-align: center;
      font-size: 1.1rem;
      margin-bottom: 3rem;
      color: #555;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;

      .card-container h3 {
        font-size: 1.15rem;
        line-height: 1.3;
        margin-bottom: 0.75rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .objetivos-section {
    padding: 2rem 1rem;
  }
}
</style>
