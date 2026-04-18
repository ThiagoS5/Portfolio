# Guia Definitivo: Passo a Passo Completo do Zero à Produção

Este documento é o seu mapa detalhado para construir o portfólio minimalista do absoluto zero, utilizando **Next.js (App Router), Tailwind CSS, TypeScript, Shadcn UI e Framer Motion**, gerenciados pelo **pnpm**.

A arquitetura seguirá rigorosamente a metodologia **Atomic Design** (Átomos > Moléculas > Organismos > Templates > Páginas).

---

## Fase 1: Setup e Inicialização do Projeto

O primeiro passo é criar o alicerce do projeto. Utilizaremos o `pnpm` por ser extremamente rápido e eficiente.

### 1.1 Criar o projeto Next.js
No seu terminal, execute:
```bash
pnpm create next-app@latest meu-portfolio
```
**Responda aos prompts exatamente assim:**
- Would you like to use TypeScript? **Yes**
- Would you like to use ESLint? **Yes**
- Would you like to use Tailwind CSS? **Yes**
- Would you like to use `src/` directory? **Yes**
- Would you like to use App Router? (recommended) **Yes**
- Would you like to customize the default import alias? **Yes** (`@/*`)

### 1.2 Entrar na pasta e inicializar o Shadcn UI
```bash
cd meu-portfolio
pnpm dlx shadcn@latest init
```
**Responda aos prompts:**
- Which style would you like to use? **New York** (componentes mais compactos)
- Which color would you like to use as base color? **Zinc** (tons neutros puros)
- Do you want to use CSS variables for colors? **Yes**

---

## Fase 2: Instalação de Dependências e Componentes Base

Vamos instalar as bibliotecas de animação, ícones, controle de tema e os blocos base do Shadcn UI.

### 2.1 Instalar Bibliotecas Essenciais
```bash
# Animações (Motion), Ícones (Lucide) e Controle de Tema Dark/Light
pnpm add motion lucide-react next-themes
```

### 2.2 Adicionar Componentes Base do Shadcn UI
O Shadcn vai baixar o código fonte destes componentes para a sua pasta `src/components/ui`.
```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add accordion
pnpm dlx shadcn@latest add form
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add textarea
pnpm dlx shadcn@latest add label
```

---

## Fase 3: Configuração do Design System (Preto e Branco)

Abra o arquivo `src/app/globals.css`. Substitua o conteúdo das variáveis de cor para forçar o contraste extremo (Minimalismo B&W) e adicione utilitários para esconder a scrollbar na navegação mobile.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%; /* Branco */
    --foreground: 0 0% 0%;   /* Preto */
    --card: 0 0% 100%;
    --card-foreground: 0 0% 0%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 0%;
    --primary: 0 0% 0%;
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 96%;
    --secondary-foreground: 0 0% 0%;
    --muted: 0 0% 96%;
    --muted-foreground: 0 0% 40%;
    --accent: 0 0% 96%;
    --accent-foreground: 0 0% 0%;
    --border: 0 0% 90%;
    --input: 0 0% 90%;
    --ring: 0 0% 0%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 0%;   /* Preto */
    --foreground: 0 0% 100%; /* Branco */
    --card: 0 0% 0%;
    --card-foreground: 0 0% 100%;
    --popover: 0 0% 0%;
    --popover-foreground: 0 0% 100%;
    --primary: 0 0% 100%;
    --primary-foreground: 0 0% 0%;
    --secondary: 0 0% 10%;
    --secondary-foreground: 0 0% 100%;
    --muted: 0 0% 10%;
    --muted-foreground: 0 0% 60%;
    --accent: 0 0% 10%;
    --accent-foreground: 0 0% 100%;
    --border: 0 0% 15%;
    --input: 0 0% 15%;
    --ring: 0 0% 100%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground antialiased font-light;
  }
}

/* Ocultar barra de rolagem mas permitir scroll (Mobile Navigation) */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
```

Em `src/app/layout.tsx`, envolva o `children` com o `ThemeProvider` do `next-themes` (Crie um componente de provider conforme a documentação do next-themes se necessário).

---

## Fase 4: Desenvolvimento dos Átomos (Atoms)

Estes são os menores blocos do sistema. Crie a pasta `src/components/atoms`.

### 4.1 `Pill.tsx`
- **O que é:** Um span arredondado com fundo invertido.
- **Onde será usado:** Na página "Sobre Mim" (Tecnologias Core), Cards de Projetos e Cards de Experiência.
- **Dica de Tailwind:** `px-4 py-1.5 rounded-full bg-foreground text-background text-xs font-medium tracking-wide`.

### 4.2 `IconButton.tsx`
- **O que é:** Botão circular perfeito que recebe um ícone. Deve incluir animação com `motion.button` (hover e tap).
- **Onde será usado:** É o núcleo da `NavigationBar` (molécula `NavItem`).
- **Dica de Tailwind:** `w-14 h-14 rounded-full flex items-center justify-center transition-all`. Se ativo (`isActive`), recebe `bg-foreground text-background`.

### 4.3 `ThemeToggle.tsx` (Pode ficar direto em components)
- **O que é:** O botão flutuante que alterna entre Sol e Lua.
- **Onde será usado:** No `PageLayout`.
- **Lógica:** Usa `useTheme` do `next-themes` para dar toggle em `theme === 'dark' ? 'light' : 'dark'`.

---

## Fase 5: Desenvolvimento das Moléculas (Molecules)

Moléculas são conjuntos de Átomos. Crie a pasta `src/components/molecules`.

### 5.1 `NavItem.tsx`
- **O que é:** Junta o `IconButton` com um texto descritivo abaixo dele (que fica visível ou sutil).
- **Onde será usado:** Dentro da `NavigationBar`.
- **Lógica:** Recebe `name`, `icon`, `isActive`, e `onClick`. Envolva tudo em um `motion.li` para animar a entrada em cascata.

### 5.2 `ProjectCard.tsx`
- **O que é:** O card para os projetos. Tem uma área grande (aspect-ratio 4/3) cinza clara no topo simulando uma imagem, o título, descrição, e uma lista de `Pill`s na base, além de links de código/demo.
- **Onde será usado:** Na tela `/projetos`.
- **Dica de Tailwind:** No wrapper da imagem use `aspect-[4/3] w-full rounded-2xl bg-foreground/5 relative overflow-hidden group`.

### 5.3 `ExperienceCard.tsx`
- **O que é:** Um layout geralmente horizontal (no desktop) e vertical (no mobile). Lado esquerdo o ano, lado direito cargo, empresa, descrição e `Pill`s de tecnologia.
- **Onde será usado:** Na tela `/experiencia`.

### 5.4 `FormField.tsx`
- **O que é:** Um wrapper para `<Input>` ou `<Textarea>` do Shadcn junto com a `<Label>`. Estilizado para ter apenas a borda inferior (`border-b border-foreground/20 bg-transparent rounded-none`).
- **Onde será usado:** Dentro do `ContactForm`.

### 5.5 `FaqAccordionItem.tsx`
- **O que é:** Integra o componente de Accordion do Shadcn, simplificando as bordas e adicionando uma fonte maior, fina e elegante na pergunta.
- **Onde será usado:** Na tela `/faq`.

---

## Fase 6: Desenvolvimento dos Organismos (Organisms)

Organismos agrupam moléculas para formar seções completas. Crie `src/components/organisms`.

### 6.1 `NavigationBar.tsx` (O Componente Mais Crítico)
- **O que é:** A barra de navegação com as 5 esferas cruzadas por uma linha no meio.
- **Onde será usado:** No `PageLayout` (visível em todas as telas).
- **Construção Passo a Passo:**
  1. Use `<nav className="w-full max-w-4xl mx-auto md:px-4">`
  2. Dentro, uma `div` com `position: relative` e `overflow-hidden` (para o mobile não vazar).
  3. **A Linha:** `<div className="absolute top-[28px] left-12 right-12 h-[1px] bg-foreground/15 -translate-y-1/2 z-0" />`. (Ajuste o `top` exatamente para o raio da sua esfera).
  4. **A Lista:** Um `<ul>` flexível que faz um `map` no array de rotas (Sobre, Projetos, Experiência, etc.), renderizando os `NavItem`s por cima da linha (`z-10`).
  5. Lógica de roteamento: Importe `usePathname` de `next/navigation` para verificar qual rota está ativa e passar a prop `isActive` pro `NavItem`.

### 6.2 `ContactForm.tsx`
- **O que é:** O formulário completo de contato. Agrupa os `FormField`s de Nome, Email, Mensagem e um `Button` final (com o ícone de Send do Lucide).
- **Onde será usado:** Na tela `/contatos`.

---

## Fase 7: O Template Base (Templates)

Crie a pasta `src/components/templates`.

### 7.1 `PageLayout.tsx`
- **O que é:** O invólucro (Wrapper) que todas as páginas usarão. Ele garante consistência visual, posiciona a navegação e o botão de tema.
- **Onde será usado:** Importado em toda `page.tsx`.
- **Estrutura:**
  ```tsx
  <div className="min-h-screen bg-background font-sans text-foreground pb-12 flex flex-col items-center overflow-hidden">
    {/* Link Acessibilidade: Pular para conteúdo */}
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute ...">Pular</a>
    
    <div className="fixed top-6 right-8 z-50"><ThemeToggle /></div>
    
    <header className="w-full pt-16 pb-12"><NavigationBar /></header>
    
    <main id="main-content" className="container mx-auto px-6 max-w-4xl w-full outline-none" tabIndex={-1}>
      {children}
    </main>
  </div>
  ```

---

## Fase 8: Construção das Páginas (Pages)

No App Router do Next.js, as rotas são definidas pela estrutura de pastas dentro de `src/app`.

### 8.1 Home (`src/app/page.tsx`)
- A Home é diferenciada. Ela pode ser apenas o `PageLayout` *sem* o componente `NavigationBar` do header, exibindo a `NavigationBar` solta exatamente no meio da tela (`top-1/2 left-1/2 -translate-y-1/2`), usando Framer Motion para uma entrada dramática. Pode incluir o "brilho" ao fundo (um `div` com `blur-[120px] bg-foreground/5 rounded-full`).

### 8.2 Sobre Mim (`src/app/sobre-mim/page.tsx`)
- Crie a pasta e o arquivo `page.tsx`.
- Envolva tudo em `<PageLayout>`.
- Use um Header grande: `<h1 className="text-4xl md:text-5xl font-light tracking-tight">Sobre Mim</h1>`.
- Crie um Grid (`grid-cols-1 md:grid-cols-12`). Lado esquerdo (col-span-7) textos de descrição (`text-foreground/80 leading-relaxed font-light`). Lado direito (col-span-5) a seção de "Tecnologias Core" chamando as `Pill`s criadas no passo 4.

### 8.3 Projetos (`src/app/projetos/page.tsx`)
- Header text ("Projetos" e subtítulo).
- Renderize um Grid (ex: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`).
- Faça um array com mock de projetos e faça um `.map()` renderizando os componentes `ProjectCard`.

### 8.4 Experiência (`src/app/experiencia/page.tsx`)
- Header text ("Experiência").
- Crie uma seção vertical (`flex flex-col space-y-24`).
- Mapeie um array de histórico profissional e renderize múltiplos `ExperienceCard`.

### 8.5 Contatos (`src/app/contatos/page.tsx`)
- Layout dividido em duas colunas.
- Coluna da esquerda: Informações em texto (Email enorme, endereço), envolvidos em tags `<address>`.
- Coluna da direita: Renderize o organismo `ContactForm`.

### 8.6 FAQ (`src/app/faq/page.tsx`)
- Layout de coluna central (`max-w-3xl mx-auto`).
- Importe o componente Accordion principal do Shadcn e renderize uma lista com `FaqAccordionItem`s.

---

## Fase 9: Refinamento e Revisão de Acessibilidade (a11y)

Para finalizar a entrega como um sênior, revise os pontos críticos que foram definidos no conceito do projeto:

1. **Testar com o Teclado (Tab):** Navegue pelo site usando apenas a tecla Tab. O anel de foco (`focus-visible:ring-2`) deve aparecer de forma nítida em botões, campos de input, links do card de projetos e accordions.
2. **Checar Atributos ARIA:** Certifique-se de que a `NavigationBar` possui `aria-label="Navegação Principal"`, que botões de ícone (Theme Toggle) possuem `aria-label="Mudar tema"`, e que os ícones `lucide-react` possuam `aria-hidden="true"`.
3. **Responsividade Mobile:** Abra o Developer Tools em dimensões de iPhone SE e iPad. A navegação horizontal deve permitir scroll (`overflow-x-auto`) caso os itens não caibam, e a "linha" deve se manter alinhada com os ícones. Os Grids de Projetos/Sobre devem quebrar para `grid-cols-1` empilhando os conteúdos suavemente.

Seguindo esse fluxo exato — das configurações de bibliotecas, construção meticulosa dos átomos (cores e bordas), montagem da navegação centralizada até a injeção nas páginas roteadas —, você alcançará o resultado perfeito do design minimalista desejado! Mãos ao código!