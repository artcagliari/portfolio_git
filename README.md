# 🚀 Portfolio Pessoal - Artur Cagliari

Um portfólio moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS, apresentando projetos e habilidades de desenvolvimento front-end.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional com animações suaves
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Performance**: Construído com Vite para carregamento rápido
- **Acessibilidade**: Componentes acessíveis e navegação intuitiva
- **Animações**: Efeitos visuais com Framer Motion
- **Tema Escuro**: Design elegante com tema dark

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos

### UI Components
- **Shadcn/ui** - Componentes de interface reutilizáveis
- **Radix UI** - Primitivos acessíveis
- **Class Variance Authority** - Gerenciamento de variantes CSS

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Terser** - Minificação de código

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes de interface (Shadcn/ui)
│   ├── About.tsx        # Seção sobre
│   ├── CodeWindow.tsx   # Janela de código animada
│   ├── Contact.tsx      # Seção de contato
│   ├── Header.tsx       # Cabeçalho da aplicação
│   ├── Hero.tsx         # Seção principal
│   └── Portfolio.tsx    # Galeria de projetos
├── assets/              # Recursos estáticos
│   ├── projects/        # Imagens dos projetos
│   └── profile.jpg      # Foto de perfil
├── hooks/               # Hooks customizados
├── lib/                 # Utilitários e configurações
└── pages/               # Páginas da aplicação
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/artcagliari/portfolio_git.git
cd portfolio_git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

### Build para Produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

## 📱 Seções do Portfolio

### 🏠 Hero
- Apresentação pessoal
- Animações interativas
- Links para redes sociais
- Janela de código animada

### 👨‍💻 Sobre
- Informações pessoais
- Habilidades técnicas
- Experiência profissional
- Educação e certificações

### 💼 Portfólio
- Galeria de projetos
- Demonstrações interativas
- Tecnologias utilizadas
- Links para demos e repositórios

### 📞 Contato
- Informações de contato
- Links para redes sociais
- Download do currículo
- Formulário de contato

## 🎨 Customização

### Cores
As cores principais podem ser customizadas no arquivo `tailwind.config.ts`:

```typescript
colors: {
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))",
  accent: "hsl(var(--accent))",
  // ...
}
```

### Conteúdo
Para personalizar o conteúdo:

1. **Projetos**: Edite o array `projects` em `src/components/Portfolio.tsx`
2. **Informações pessoais**: Atualize os dados em `src/components/About.tsx`
3. **Contato**: Modifique as informações em `src/components/Contact.tsx`

## 📦 Scripts Disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint

## 🌐 Deploy

O projeto pode ser facilmente deployado em:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

Para deploy na Vercel:

1. Conecte seu repositório GitHub
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Contato

**Artur Cagliari**
- 📧 Email: arturcagliari2018@gmail.com
- 💼 LinkedIn: [Artur Cagliari](https://www.linkedin.com/in/artur-cagliari-206b0936b)
- 🐙 GitHub: [@artcagliari](https://github.com/artcagliari)
- 📱 Instagram: [@artur.cagliari](https://www.instagram.com/artur.cagliari)

---

⭐ Se você gostou do projeto, considere dar uma estrela no repositório!
