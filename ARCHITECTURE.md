# 🏗️ Arquitetura do Projeto

## 📊 Estrutura Visual

```
festas_populares/site/
│
├── 📄 Configuração Principal
│   ├── quasar.conf.js          ← Config do Quasar (tema, build, plugins)
│   ├── vite.config.ts          ← Config do bundler Vite
│   ├── tsconfig.json           ← Config TypeScript
│   ├── tsconfig.node.json      ← Config TS para build
│   ├── package.json            ← Dependências npm
│   ├── index.html              ← Template HTML (entry point)
│   └── .env.example            ← Variáveis de ambiente
│
├── 📁 src/ (Código Fonte)
│   │
│   ├── 📄 main.ts              ← Entry point Vue (Quasar init)
│   ├── 📄 App.vue              ← SPA Principal (única página)
│   ├── 📄 env.d.ts             ← Tipagem global TypeScript
│   │
│   ├── 📁 components/          ← Componentes reutilizáveis
│   │   └── EventCard.vue       ← Card de evento
│   │
│   ├── 📁 pages/               ← (Para futuro com router)
│   │   └── (vazio por enquanto)
│   │
│   ├── 📁 layouts/             ← (Para futuro com router)
│   │   └── (vazio por enquanto)
│   │
│   ├── 📁 css/                 ← Estilos Globais
│   │   └── app.scss            ← SCSS com tema e animações
│   │
│   └── 📁 assets/              ← Imagens e recursos estáticos
│       ├── logo.jpeg           ← Logo do projeto
│       └── background.jpg      ← Background (referência de cores)
│
├── 📁 public/                  ← Assets estáticos (não processados)
│   └── favicon.svg             ← Favicon do site
│
├── 📁 documentacao/            ← Documentação original
│   ├── Anexo 4_INFORMAÇÕES...pdf
│   ├── background.jpg          (original)
│   └── logo.jpeg               (original)
│
├── 📁 dist/                    ← (Gerado após build)
│   └── spa/                    ← Site compilado + transpilado
│
├── 📝 Documentação
│   ├── README.md               ← Guia principal
│   ├── QUICKSTART.md           ← 5 passos rápidos
│   ├── DEVELOPMENT.md          ← Guia de desenvolvimento
│   └── ARCHITECTURE.md         ← Este arquivo
│
└── 🔍 Configuração
    ├── .gitignore              ← Git ignore
    └── .prettierrc              ← Formatter config
```

## 🔄 Fluxo de Dados

```
index.html
    ↓
main.ts (inicializa Quasar + Vue)
    ↓
App.vue (SPA principal)
    ├─→ Header (navbar global)
    ├─→ Seção Hero
    ├─→ Seção Eventos
    │   └─→ EventCard (componente reutilizável)
    ├─→ Seção Sobre
    ├─→ Seção Contato
    ├─→ Modal Inscrição
    └─→ Footer
```

## 🎨 Sistema de Design

### Cores
- **Primary**: `#C41E3A` (Vermelho) - Usado em títulos, botões, ênfase
- **Secondary**: `#FFD700` (Ouro) - Usado em destaques, gradientes
- **Accent**: `#8B4513` (Marrom) - Reservado para acentos
- **Neutral**: Cinzas (#2C3E50, #555555, #ECF0F1) - Textos e backgrounds

### Tipografia
- **Font Principal**: Roboto (incluída via Quasar extras)
- **Tamanhos**: h1 (3.5rem), h2 (2.5rem), body (1rem), caption (0.75rem)
- **Peso**: 400 (regular), 600 (heading), 700 (bold)

### Componentes
- **Cards**: Hover com elevação (translateY + shadow)
- **Botões**: Quasar built-in (filled, flat, outline)
- **Ícones**: Material Icons (incluído via Quasar)
- **Layouts**: Grid responsivo (col-12, col-md-6, col-lg-4)

## 🚀 Fluxo de Build

```
src/ (TypeScript + Vue 3)
    ↓
vite build (otimizar + bundle)
    ↓
Transpile TypeScript → JavaScript
    ↓
Minify HTML, CSS, JS
    ↓
dist/spa/ (Site estático pronto!)
    ↓
Deploy (GitHub Pages, Netlify, servidor web, etc)
```

## 📦 Dependências Principais

### Produção
- `vue@3.3+` - Framework reativo
- `quasar@2.13+` - UI components + utilities

### Desenvolvimento
- `@quasar/app@4+` - CLI e build tools
- `typescript@5+` - Type checking
- `vite@4+` - Bundler moderno

## 🔌 Pontos de Extensão

### Para Adicionar Router (múltiplas páginas)
1. Criar arquivo `src/router/routes.ts`
2. Importar em `main.ts`
3. Adicionar `<router-view />` em `App.vue`

### Para Adicionar API
1. Criar `src/services/api.ts` com axios/fetch
2. Usar em componentes com `onMounted` + `async/await`
3. Remover dados mockados

### Para Adicionar Store (Pinia)
1. Instalar `pinia`
2. Criar stores em `src/stores/`
3. Usar em componentes com `useStore()`

### Para Adicionar PWA
1. Habilitar em `quasar.conf.js`
2. Criar `src/service-worker.js`
3. Adicionar manifest

## 📊 Estatísticas

| Métrica | Valor |
|---------|-------|
| Componentes Vue | 1 (App.vue) + 1 (EventCard.vue) = 2 |
| Linhas de código Vue | ~350 |
| Linhas de CSS/SCSS | ~250 |
| Configurações | 5 arquivos |
| Documentação | 4 arquivos .md |
| Build size (estimado) | ~60-80KB (minified) |
| Sem gzip compressão | ~180-200KB |

## 🔐 Variáveis de Ambiente

```typescript
// Definidas em .env.local
VITE_API_URL      // URL da API (quando conectar)
VITE_APP_TITLE    // Título da aplicação

// Acessar no código:
import.meta.env.VITE_API_URL
```

## 🌐 Responsividade

Breakpoints utilizados:
- **xs**: < 600px (celular)
- **sm**: 600px - 1023px (tablet)
- **md**: 1024px+ (desktop)

Usar em Quasar:
```vue
<div class="col-12 col-md-6 col-lg-4">
  <!-- 12 colunas mobile, 6 tablet, 4 desktop -->
</div>
```

## 🎯 Roadmap de Arquitetura

### MVP (v0.1) ✅ ATUAL
- [x] SPA single-page
- [x] Componentes Base
- [x] Tema customizado
- [x] Responsivo

### v0.2
- [ ] Vue Router (múltiplas páginas)
- [ ] Axios/fetch (API integration)
- [ ] Store com Pinia

### v0.3
- [ ] Formulário real (inscrição)
- [ ] Validação de dados
- [ ] Toast notifications

### v1.0
- [ ] PWA (offline support)
- [ ] Mobile app (React Native)
- [ ] Admin panel

---

**Última atualização**: Março 2026  
**Versão**: MVP 0.1.0
