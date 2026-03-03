<template>
  <q-page class="festas-page">
    <!-- Festas Featured -->
    <section class="festas-section">
      <div class="container">
        <h2>Principais Celebrações</h2>
        <p class="section-description">
          Conheça as principais festas populares que movem Goiás ao longo do ano
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
    title: 'Festa de São Jorge',
    description:
      'Celebração do padroeiro com procissões, missas e festividades populares.',
    date: 'Abril',
    location: 'Várias cidades de Goiás',
  },
  {
    id: 2,
    title: 'Festa de Nossa Senhora Aparecida',
    description:
      'Devoção à padroeira do Brasil com celebrações religiosas e culturais.',
    date: 'Outubro',
    location: 'Todo o estado',
  },
  {
    id: 3,
    title: 'Festas Juninas',
    description:
      'Tradicionais festas juninas com quadrilhas, comidas típicas e danças.',
    date: 'Junho',
    location: 'Várias comunidades',
  },
  {
    id: 4,
    title: 'Festa de Nossa Senhora do Rosário',
    description:
      'Celebração centenária com procissões e manifestações culturais.',
    date: 'Outubro',
    location: 'Várias regiões',
  },
  {
    id: 5,
    title: 'Bumba Meu Boi',
    description:
      'Manifestação cultural que mistura dança, música e teatro popular.',
    date: 'Junho a Julho',
    location: 'Norte de Goiás',
  },
  {
    id: 6,
    title: 'Cavalhadas',
    description:
      'Dramatização tradicional de origem medieval com cavaleiros e músicos.',
    date: 'Maio a Junho',
    location: 'Pirenópolis e região',
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
