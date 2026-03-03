<template>
  <q-page class="equipe-page">
    <section class="equipe-section">
      <div class="container">
        <h2>Equipe</h2>
        <p class="intro-text">
          Mestrado Profissional em Estudo Culturais, Memória e Patrimônio
          (PROMEP)
        </p>

        <div class="team-grid">
          <div v-for="membro in equipe" :key="membro.nome" class="team-card">
            <div class="team-card__content">
              <q-icon
                name="person"
                size="3rem"
                color="primary"
                class="team-card__icon"
              />
              <h3 class="team-card__name">{{ membro.nome }}</h3>
              <p class="team-card__instituicao">{{ membro.instituicao }}</p>
              <q-btn
                v-if="membro.lattes"
                :href="membro.lattes"
                target="_blank"
                flat
                dense
                color="primary"
                icon="open_in_new"
                label="Currículo Lattes"
                class="team-card__link"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Membro {
  nome: string
  instituicao: string
  lattes: string
}

const equipe = ref<Membro[]>([
  {
    nome: 'Luana Nunes Martins de Lima',
    instituicao: 'Universidade Estadual de Goiás (UEG)',
    lattes: 'http://lattes.cnpq.br/2105017701418889',
  },
  {
    nome: 'José Henrique Rodrigues Machado',
    instituicao: 'Instituto Federal Goiano (IF Goiano)',
    lattes: 'http://lattes.cnpq.br/9613638157766770',
  },
  {
    nome: 'Raquel Miranda Barbosa',
    instituicao: 'Universidade Estadual de Goiás (UEG)',
    lattes: 'http://lattes.cnpq.br/2046954800280192',
  },
  {
    nome: 'Alison Carlos Filgueiras',
    instituicao: 'Universidade Estadual de Goiás (UEG)',
    lattes: 'http://lattes.cnpq.br/2264806467504828',
  },
  {
    nome: "Maria Idelma Vieira D'Abadia",
    instituicao: 'Universidade Estadual de Goiás (UEG)',
    lattes: 'http://lattes.cnpq.br/1268723080079894',
  },
  {
    nome: 'João Guilherme da Trindade Curado',
    instituicao: 'Secretaria Estadual de Educação de Goiás (SEDUC)',
    lattes: 'http://lattes.cnpq.br/1363363883113612',
  },
  {
    nome: 'Nayrhainne Souza Duarte Araujo',
    instituicao: 'Secretaria Estadual de Educação de Goiás (SEDUC)',
    lattes: 'http://lattes.cnpq.br/5108461026504006',
  },
])
</script>

<style scoped lang="scss">
.equipe-page {
  padding: 0;
}

.equipe-section {
  min-height: 100vh;
  padding: 4rem 2rem;

  .container {
    max-width: 1400px;
    margin: 0 auto;

    h2 {
      color: var(--color-primary);
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 0.5rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .intro-text {
      text-align: center;
      font-size: 1.1rem;
      color: #2c3e50;
      margin-bottom: 3rem;
      font-weight: 500;
      background: rgba(255, 255, 255, 0.8);
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.team-card {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 16px;
  padding: 2rem;
  border: 2px solid rgba(196, 30, 58, 0.15);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-color: var(--color-primary);
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__icon {
    margin-bottom: 1rem;
    opacity: 0.8;
  }

  &__name {
    color: var(--color-primary);
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.75rem 0;
    line-height: 1.3;
  }

  &__instituicao {
    color: #2c3e50;
    font-size: 0.95rem;
    margin: 0 0 1.25rem 0;
    line-height: 1.4;
    min-height: 2.8rem;
  }

  &__link {
    margin-top: 0.5rem;
    font-size: 0.9rem;

    &:hover {
      background: rgba(196, 30, 58, 0.1);
    }
  }
}
</style>
