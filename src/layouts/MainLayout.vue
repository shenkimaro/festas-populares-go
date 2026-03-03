<template>
  <!-- Desktop Layout -->
  <q-layout view="hHh lpR fFf">
    <!-- Desktop Header com Menu Horizontal -->
    <q-header elevated class="header-desktop gt-sm">
      <q-toolbar>
        <div class="logo-container">
          <img
            src="/logo.jpeg"
            alt="Festas Populares de Goiás"
            class="logo-img"
          />
          <q-toolbar-title class="title-desktop"
            >Festas Populares de Goiás</q-toolbar-title
          >
        </div>

        <q-space />

        <!-- Menu Horizontal Desktop -->
        <div class="desktop-menu">
          <q-btn
            v-for="link in linksList"
            :key="link.title"
            flat
            no-caps
            :label="link.title"
            size="md"
            class="menu-btn"
            @click="handleNavigation(link.link)"
          />
        </div>

        <q-separator vertical class="q-mx-md" />
        <div class="text-weight-bold">v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- Mobile Layout com Drawer -->
    <q-header elevated class="header-mobile lt-md">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <div class="mobile-logo">
          <img
            src="/logo.jpeg"
            alt="Festas Populares de Goiás"
            class="logo-img-mobile"
          />
        </div>

        <q-toolbar-title>Festas Populares</q-toolbar-title>

        <q-space />
      </q-toolbar>
    </q-header>

    <!-- Drawer Mobile -->
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="lt-md"
      elevated
    >
      <q-list>
        <q-item-label header class="text-primary text-weight-bold"
          >Navegação</q-item-label
        >

        <q-item
          v-for="link in linksList"
          :key="link.title"
          clickable
          class="menu-item-mobile"
          @click="handleNavigation(link.link)"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
            <q-item-label caption>{{ link.caption }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface MenuLink {
  title: string
  caption: string
  icon: string
  link: string
}

const linksList: MenuLink[] = [
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

function handleNavigation(link: string) {
  leftDrawerOpen.value = false

  if (link.startsWith('#')) {
    const element = document.querySelector(link)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    window.location.href = link
  }
}
</script>

<style scoped lang="scss">
.header-desktop {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-mobile {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 60px;
}

.logo-img {
  height: 100%;
  width: auto;
  max-width: 150px;
  object-fit: contain;
}

.title-desktop {
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.desktop-menu {
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .menu-btn {
    color: white;
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(255, 215, 0, 0.2);
      color: var(--color-secondary);
    }
  }
}

.mobile-logo {
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
}

.logo-img-mobile {
  height: 50px;
  width: auto;
  max-width: 100px;
  object-fit: contain;
}

.menu-item-mobile {
  &:hover {
    background-color: rgba(196, 30, 58, 0.05);
  }
}

// Responsive
@media (max-width: 600px) {
  .title-desktop {
    font-size: 0.9rem;
  }
}
</style>
