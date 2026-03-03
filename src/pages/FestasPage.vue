<template>
  <q-page class="festas-page">
    <!-- Festas Featured -->
    <section class="festas-section">
      <div class="container">
        <h2>Categoria de Festas</h2>
        <p class="section-description">
          Explore as principais categorias das manifestações festivas populares
          em Goiás
        </p>
        <div class="festas-list">
          <event-card
            v-for="festa in festas"
            :key="festa.id"
            :title="festa.title"
            :description="festa.description"
            :date="festa.date"
            :location="festa.location"
          />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import EventCard from 'components/EventCard.vue'

const festas = ref([
  {
    id: 1,
    title: 'Festas Religiosas',
    description:
      'Celebrações ligadas à fé e devoção popular, com procissões, novenas e rituais tradicionais.',
    date: 'Ano todo',
    location: 'Diversos municípios',
  },
  {
    id: 2,
    title: 'Festas Juninas',
    description:
      'Comemorações com quadrilhas, comidas típicas, música regional e forte participação comunitária.',
    date: 'Junho e Julho',
    location: 'Bairros e comunidades',
  },
  {
    id: 3,
    title: 'Festas do Divino e Folias',
    description:
      'Tradições com cortejos, cantorias e visitas festivas que preservam práticas culturais seculares.',
    date: 'Calendário local',
    location: 'Regiões urbanas e rurais',
  },
  {
    id: 4,
    title: 'Cavalhadas e Encenações',
    description:
      'Apresentações tradicionais com forte simbolismo histórico-cultural e participação de grupos locais.',
    date: 'Maio a Junho',
    location: 'Cidades históricas',
  },
  {
    id: 5,
    title: 'Festas de Padroeiros',
    description:
      'Celebrações ligadas aos santos padroeiros, unindo dimensão religiosa e atividades culturais.',
    date: 'Conforme município',
    location: 'Paróquias e comunidades',
  },
  {
    id: 6,
    title: 'Festas Culturais Locais',
    description:
      'Eventos que valorizam música, dança, culinária e saberes populares de cada território.',
    date: 'Calendário regional',
    location: 'Todo o estado',
  },
])
</script>

<style scoped lang="scss">
.festas-page {
  padding: 0;
}

.festas-section {
  padding: 4rem 2rem;
  backdrop-filter: blur(10px);
  min-height: 100vh;

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
    }

    .festas-list {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 2rem;
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .festas-section {
    padding: 2rem 1rem;
  }
}

@media (max-width: 1100px) {
  .festas-section .container .festas-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .festas-section .container .festas-list {
    grid-template-columns: 1fr;
  }
}
</style>
