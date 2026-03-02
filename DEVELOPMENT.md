# Guia de Desenvolvimento - Festas Populares MVP

## 🛠️ Setup Inicial

### 1. Clonar e Instalar

```bash
# Instalar dependências do projeto
npm install

# Ou com gerenciador alternativo
yarn install
pnpm install
bun install
```

### 2. Iniciar Desenvolvimento

```bash
npm run dev
```

Isso abrirá o site em `http://localhost:8080` com hot-reload automático.

## 📝 Estrutura de Desenvolvimento

### Componentes Vue

Todos os componentes estão em `src/components/` e são importados automaticamente no Quasar.

**Exemplo de novo componente:**

```vue
<!-- src/components/MeuComponente.vue -->
<template>
  <div class="meu-componente">
    <h2>{{ titulo }}</h2>
  </div>
</template>

<script setup lang="ts">
interface Props {
  titulo?: string
}

withDefaults(defineProps<Props>(), {
  titulo: 'Título padrão'
})
</script>

<style scoped lang="scss">
.meu-componente {
  // seus estilos aqui
}
</style>
```

### Pages (Páginas SPA)

Para agora, estamos usando uma única página principal (App.vue). Para expandir para múltiplas páginas, usar Vue Router:

```typescript
// src/router/routes.ts
const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
  },
  {
    path: '/sobre',
    component: () => import('pages/Sobre.vue')
  }
]
```

### Estilos

- **Globais**: `src/css/app.scss` - importado automaticamente
- **Componentes**: Use `<style scoped lang="scss">` em cada `.vue`

### Tipagem TypeScript

Sempre use tipos explícitos:

```typescript
interface Evento {
  id: number
  nome: string
  descricao: string
  mes: string
  localizacao: string
}

const eventos = ref<Evento[]>([
  {
    id: 1,
    nome: 'Festa de São João',
    descricao: 'Celebração junina',
    mes: 'Junho',
    localizacao: 'Goiás'
  }
])
```

## 🎨 Customização de Tema

### Cores

Editar em `quasar.conf.js`:

```javascript
brand: {
  primary: '#C41E3A',
  secondary: '#FFD700',
  accent: '#8B4513'
}
```

Usar nos componentes:

```vue
<q-btn color="primary" label="Botão" />
<div class="text-secondary">Texto em ouro</div>
```

### Fontes

Quasar já inclui Roboto. Para adicionar outra fonte:

1. Adicionar em `quasar.conf.js` under `extras`
2. Usar via CSS: `font-family: 'Nome da Fonte'`

## 📦 Build e Deploy

### Build para Produção

```bash
npm run build
```

Isso gera:
- TypeScript compilado para JavaScript
- HTML, CSS e JS minimizados em `dist/spa/`
- Pronto para ser servido como site estático

### Preview Local

```bash
npm run preview
```

### Deploy

#### GitHub Pages
```bash
npm run build
# Copiar conteúdo de dist/spa para gh-pages branch
```

#### Netlify
1. Conecte o repositório
2. Build command: `npm run build`
3. Publish directory: `dist/spa`

#### Servidor próprio (Apache/Nginx)
```bash
npm run build
# Copiar dist/spa/* para document root do servidor
```

## 🔌 Integração com API (Próximas versões)

Quando preparar para integração com backend:

1. **Criar serviço API:**

```typescript
// src/services/api.ts
import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000'
})

export const fetchEventos = async () => {
  const response = await apiClient.get('/eventos')
  return response.data
}
```

2. **Usar no componente:**

```typescript
import { onMounted } from 'vue'
import { fetchEventos } from '@/services/api'

onMounted(async () => {
  eventos.value = await fetchEventos()
})
```

## 🐛 Debugging

### VS Code

Adicionar em `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch against localhost",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

### Vue DevTools

Extensão Chrome para VS Code:
- Inspecionar componentes
- Ver estado reativo
- Profiler de performance

## 📚 Referências

- [Vue 3 Docs](https://vuejs.org/)
- [Quasar Framework](https://quasar.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)

## ✅ Checklist de Desenvolvimento

- [ ] Feature implementada
- [ ] Testes unitários (se aplicável)
- [ ] TypeScript sem erros
- [ ] Responsivo em mobile/tablet/desktop
- [ ] Acessibilidade (a11y) verificada
- [ ] Performance otimizada
- [ ] Documentação atualizada
- [ ] Pronto para merge

---

**Perguntas?** Abra uma issue ou entre em contato com o time de desenvolvimento.
