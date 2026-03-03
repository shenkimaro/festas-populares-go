<template>
  <q-card class="event-card full-height">
    <!-- Card Header com Gradient -->
    <div class="event-card__header gradient-primary-secondary"></div>

    <!-- Card Content -->
    <q-card-section>
      <h3 class="event-card__title q-mt-none text-primary">{{ title }}</h3>

      <p class="event-card__description text-grey-8">
        {{ description }}
      </p>

      <!-- Detalhes do evento -->
      <div class="event-card__details q-mt-md">
        <div class="event-card__detail-item">
          <q-icon name="event" size="sm" color="primary" />
          <span class="q-ml-sm text-caption">{{ date }}</span>
        </div>

        <div class="event-card__detail-item q-mt-sm">
          <q-icon name="location_on" size="sm" color="primary" />
          <span class="q-ml-sm text-caption">{{ location }}</span>
        </div>
      </div>
    </q-card-section>

    <!-- Card Actions (opcional) -->
    <q-card-actions align="right" v-if="showActions">
      <q-btn flat label="Saiba Mais" color="primary" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
interface Props {
  id?: number
  title: string
  description: string
  date: string
  location: string
  showActions?: boolean
}

withDefaults(defineProps<Props>(), {
  showActions: false,
})
</script>

<style scoped lang="scss">
.event-card {
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(196, 30, 58, 0.2);
  }

  &__header {
    height: 200px;
    background: linear-gradient(
      135deg,
      var(--q-primary) 0%,
      var(--q-secondary) 100%
    );
  }

  &__title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    line-height: 1.35;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  &__description {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 0;
  }

  &__details {
    border-top: 1px solid #e0e0e0;
    padding-top: 1rem;
  }

  &__detail-item {
    display: flex;
    align-items: center;
    color: #666;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    &__title {
      font-size: 1.1rem;
    }
  }
}
</style>
