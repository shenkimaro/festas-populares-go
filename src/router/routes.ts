import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'objetivos', component: () => import('pages/ObjetivosPage.vue') },
      { path: 'categorias', component: () => import('pages/FestasPage.vue') },
      { path: 'equipe', component: () => import('pages/EquipePage.vue') },
      { path: 'mapa', component: () => import('pages/MapaPage.vue') },
      { path: 'contato', component: () => import('pages/ContatoPage.vue') },
      { path: 'sobre', redirect: '/' },
      { path: 'festas', redirect: '/categorias' },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
