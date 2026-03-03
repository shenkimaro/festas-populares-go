<template>
  <q-page class="contato-page">
    <!-- Contato Section -->
    <section class="contact-section gradient-primary-secondary">
      <div class="container">
        <h2>Fique Conectado</h2>
        <p>
          Acompanhe as principais datas das festas populares de Goiás e não
          perca nenhuma celebração importante.
        </p>

        <!-- Contact Form -->
        <q-form class="contact-form" @submit.prevent="submitForm">
          <div class="form-grid">
            <q-input
              v-model="form.name"
              class="form-field"
              filled
              dense
              label="Nome completo"
              type="text"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Nome é obrigatório',
              ]"
            />

            <q-input
              v-model="form.email"
              class="form-field"
              filled
              dense
              label="Email"
              type="email"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Email é obrigatório',
                (val) => /^[^@]+@[^@]+\.[^@]+$/.test(val) || 'Email inválido',
              ]"
            />
          </div>

          <q-input
            v-model="form.message"
            class="form-field"
            filled
            dense
            label="Mensagem"
            type="textarea"
            rows="6"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Mensagem é obrigatória',
            ]"
          />

          <div class="form-actions">
            <q-btn
              type="submit"
              label="Enviar Mensagem"
              color="secondary"
              size="lg"
              class="btn-submit"
            />
          </div>
        </q-form>

        <!-- Contact Info -->
        <div class="contact-info q-mt-xl">
          <h3>Conecte-se com a gente</h3>
          <div class="info-grid">
            <div class="info-item">
              <q-icon name="email" size="lg" color="secondary" />
              <p>contato@festasdeoias.com.br</p>
            </div>

            <div class="info-item">
              <q-icon name="phone" size="lg" color="secondary" />
              <p>(62) 3000-0000</p>
            </div>

            <div class="info-item">
              <q-icon name="location_on" size="lg" color="secondary" />
              <p>Goiás, Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useQuasar } from 'quasar'

const $q = useQuasar()

const form = ref({
  name: '',
  email: '',
  message: '',
})

function submitForm() {
  $q.notify({
    type: 'positive',
    message: 'Mensagem enviada com sucesso!',
    position: 'top',
  })

  // Reset form
  form.value = {
    name: '',
    email: '',
    message: '',
  }
}
</script>

<style scoped lang="scss">
.contato-page {
  padding: 0;
}

.contact-section {
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;

  .container {
    max-width: 600px;
    margin: 0 auto;
    width: 100%;

    h2 {
      color: white;
      margin-bottom: 1rem;
      font-size: 2.5rem;
    }

    p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  }
}

.contact-form {
  margin: 2rem 0;
  text-align: left;

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .form-field {
    margin-bottom: 1rem;
  }

  :deep(.q-field__control) {
    color: white;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }

  :deep(.q-field__label) {
    color: rgba(255, 255, 255, 0.8);
  }

  :deep(.q-field--filled .q-field__control) {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

.form-actions {
  text-align: center;
  margin-top: 2rem;

  .btn-submit {
    padding: 0.75rem 3rem;
  }
}

.contact-info {
  h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .info-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 8px;
    backdrop-filter: blur(10px);

    p {
      color: rgba(255, 255, 255, 0.9);
      margin-top: 1rem;
      font-size: 1rem;
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .contact-section {
    padding: 2rem 1rem;

    .container {
      h2 {
        font-size: 1.75rem;
      }
    }
  }
}
</style>
