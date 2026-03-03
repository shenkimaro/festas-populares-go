<template>
  <q-page class="festas-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content animate-fadeInUp">
        <h1>Festas Populares de Goiás</h1>
        <p class="subtitle">Celebrações Culturais que Marcam Gerações</p>
        <q-btn
          color="primary"
          size="lg"
          label="Explorar Festas"
          class="btn-custom btn-primary"
        />
      </div>
    </section>

    <!-- Sobre Section -->
    <section class="about-section" id="about">
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

    <!-- Festas Featured -->
    <section class="festas-section" id="events">
      <div class="container">
        <h2>Principais Celebrações</h2>
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

    <!-- Contato Section -->
    <section class="contact-section gradient-primary-secondary" id="contact">
      <div class="container">
        <h2 class="text-white">Fique Conectado</h2>
        <p class="text-white">
          Acompanhe as principais datas das festas populares de Goiás e não
          perca nenhuma celebração importante.
        </p>
        <q-btn
          color="secondary"
          size="lg"
          label="Enviar Contato"
          class="btn-custom btn-secondary"
        />
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

.hero-section {
  background: linear-gradient(135deg, var(--color-primary) 0%, #8b4513 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

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
    }
  }
}

.about-section {
  padding: 4rem 2rem;
  background-color: rgba(255, 255, 255, 0.90);
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
    }
  }
}

.festas-section {
  padding: 4rem 2rem;
  background: rgba(255, 248, 220, 0.85);
  backdrop-filter: blur(10px);

  .container {
    max-width: 1200px;
    margin: 0 auto;

    h2 {
      text-align: center;
      margin-bottom: 3rem;
      color: var(--color-primary);
    }

    .festas-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }
  }
}

.contact-section {
  padding: 4rem 2rem;
  text-align: center;
  color: white;

  .container {
    max-width: 1200px;
    margin: 0 auto;

    h2 {
      color: white;
      margin-bottom: 1rem;
    }

    p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.1rem;
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 1rem;

    .hero-content h1 {
      font-size: 1.75rem;
    }

    .subtitle {
      font-size: 1rem;
    }
  }

  .about-section,
  .festas-section,
  .contact-section {
    padding: 2rem 1rem;
  }
}
</style>
