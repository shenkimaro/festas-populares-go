<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <div class="logo-container">
          <img
            src="/logo-festas.svg"
            alt="Festas Populares de Goiás"
            class="logo-img"
          />
          <q-toolbar-title>Festas Populares de Goiás</q-toolbar-title>
        </div>

        <q-space />

        <div class="text-weight-bold">v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Navegação</q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import EssentialLink, {
  type EssentialLinkProps,
} from 'components/EssentialLink.vue'

const linksList: EssentialLinkProps[] = [
  {
    title: 'Home',
    caption: 'Página inicial',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Sobre',
    caption: 'Conheça as festas',
    icon: 'info',
    link: '#about',
  },
  {
    title: 'Festas',
    caption: 'Lista de celebrações',
    icon: 'celebration',
    link: '#events',
  },
  {
    title: 'Contato',
    caption: 'Entre em contato',
    icon: 'mail',
    link: '#contact',
  },
  {
    title: 'Github',
    caption: 'Código-fonte',
    icon: 'code',
    link: 'https://github.com',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
