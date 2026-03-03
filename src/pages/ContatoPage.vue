<template>
  <q-page class="contato-page">
    <!-- Contato Section -->
    <section class="contact-section">
      <div class="container">
        <h2>Fique Conectado</h2>
        <p>
          Acompanhe as principais datas das festas populares de Goiás e não
          perca nenhuma celebração importante.
        </p>

        <!-- Contact Form -->

        <!-- Contact Info -->
        <div class="contact-info q-mt-xl">
          <h3>Conecte-se com a gente</h3>
          <div class="info-grid">
            <div class="info-item">
              <q-icon name="email" size="lg" class="info-icon" />
              <p>
                <a href="mailto:festaspopulares@ueg.br"
                  >festaspopulares@ueg.br</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<style scoped lang="scss">
.contato-page {
  padding: 0;
}

.contact-section {
  padding: 4rem 2rem;
  text-align: center;
  color: var(--color-dark);
  min-height: 100vh;
  display: flex;
  align-items: center;

  .container {
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    background: rgba(255, 255, 255, 0.84);
    border: 1px solid rgba(44, 62, 80, 0.12);
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(8px);
    padding: 2rem;

    h2 {
      color: var(--color-primary);
      margin-bottom: 1rem;
      font-size: 2.5rem;
      line-height: 1.2;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
    }

    p {
      color: rgba(44, 62, 80, 0.9);
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
    color: var(--color-accent);
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
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(196, 30, 58, 0.18);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(44, 62, 80, 0.12);
    backdrop-filter: blur(10px);

    p {
      color: rgba(44, 62, 80, 0.95);
      margin-top: 1rem;
      font-size: 1rem;
      margin-bottom: 0;
    }

    a {
      color: var(--color-primary);
      font-weight: 600;
      text-decoration: none;

      &:hover {
        color: #a01830;
        text-decoration: underline;
      }
    }
  }

  .info-icon {
    color: var(--color-primary);
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
      padding: 1.5rem;

      h2 {
        font-size: 1.75rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
}
</style>
