# 🚀 Quick Start - Festas Populares MVP

## 5 passos para começar

### 1️⃣ Instalar dependências

```bash
cd /home/ibanez/projetos/festas_populares/site
npm install
```

**Tempo esperado**: 2-5 minutos (primeira vez)

### 2️⃣ Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Seu navegador abrirá automaticamente em `http://localhost:8080`

### 3️⃣ Explorar o código

Abra os arquivos em seu editor favorito:
- `src/App.vue` - Componente principal do site
- `src/css/app.scss` - Estilos globais
- `quasar.conf.js` - Configuração do Quasar

### 4️⃣ Fazer alterações

Toda alteração é refletida instantaneamente no navegador (hot-reload).

### 5️⃣ Fazer build para produção

```bash
npm run build
```

Arquivos prontos em `dist/spa/` - pronto para fazer deploy!

---

## 📂 Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| `App.vue` | SPA principal com todas as seções |
| `css/app.scss` | Estilos com tema de cores |
| `components/EventCard.vue` | Componente reutilizável de eventos |
| `assets/` | Logo e background |
| `quasar.conf.js` | Config de tema e build |

---

## 🎨 Cores do Projeto

```
Primary:   #C41E3A  (Vermelho - Energia)
Secondary: #FFD700  (Ouro - Celebração)
Accent:    #8B4513  (Marrom - Autenticidade)
```

---

## 💡 Próximas Ações

Depois que tudo estiver rodando:

1. **Customizar conteúdo** - Edite textos em `App.vue`
2. **Adicionar eventos** - Modifique array `eventos` em `App.vue`
3. **Conectar API** - Prepare para v0.2.0
4. **Deploy** - Siga instruções em `README.md`

---

## ⚠️ Troubleshooting

### Porta 8080 já está em uso
```bash
npm run dev -- --port 8081
```

### Erro de dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors no editor
Recarregue window (Ctrl+R) ou reinicie VS Code

---

## 📞 Próximos Passos

- Leia [DEVELOPMENT.md](./DEVELOPMENT.md) para guia completo
- Consulte [README.md](./README.md) para mais informações
- Veja `quasar.conf.js` para opções de configuração avançadas

**Boa sorte! 🎉**
