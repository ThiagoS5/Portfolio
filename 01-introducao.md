# Introdução ao Projeto: Portfólio Minimalista

## Visão Geral do Projeto
Este projeto consiste na criação de um portfólio pessoal altamente refinado, projetado para se destacar pela ausência de ruído visual. A aplicação suporta nativamente os modos Claro (White) e Escuro (Dark), mantendo sempre uma paleta monocromática estrita baseada puramente em preto e branco (ou escalas extremas de cinza). O foco primário está na fluidez da navegação, no uso inteligente e generoso de espaços em branco (negative space) e em uma tipografia meticulosamente ajustada.

## O Conceito Visual e de Interface
Analisando a proposta de design, o portfólio rompe com padrões tradicionais ao adotar uma estética "reducionista", onde menos é inegavelmente mais. 

Os pilares visuais identificados são:
1. **Navegação Esférica e Linear:** A interface principal de roteamento abandona textos (títulos/subtítulos) em prol de 5 esferas (ícones) dispostas horizontalmente. O detalhe de "genialidade" do design é uma linha fina, sutil e elegante que atravessa exatamente o centro geométrico (eixo Y) de todos os botões, criando uma sensação de linha do tempo ou trilha de conexão.
2. **Pílulas (Pills) para Tags:** Tecnologias e habilidades não são listadas em texto corrido ou bullets, mas encapsuladas em formas de "pílula" (`border-radius` máximo), criando blocos visuais de alto contraste que quebram a linearidade dos textos.
3. **Tipografia como Arte:** Sem o uso de cores para criar hierarquia, o peso recai sobre a tipografia. Títulos grandes, finos (`font-light`) e com tracking ajustado (`tracking-tight`) contrastam com textos de corpo menores, legíveis e com altura de linha (line-height) relaxada.
4. **Microinterações:** Botões e cards respondem ao hover com transformações sutis (escala, sombras suaves e transições de cor), essenciais para uma interface que não possui cores de destaque.

## Stack Tecnológica Escolhida
Para replicar este design de forma manual, escalável e moderna, a stack selecionada é a melhor do ecossistema React atual:
- **Framework:** Next.js (com App Router) - Para roteamento baseado em pastas, performance (RSC) e SEO.
- **Linguagem:** TypeScript - Para segurança de tipagem e autocompletar inteligente.
- **Estilização:** Tailwind CSS - Perfeito para aplicar o design system monocromático e utilitário de forma rápida.
- **Componentes Base:** Shadcn UI - Fornece componentes acessíveis (Radix UI) que você possui total controle sobre o código, facilitando a customização para a estética minimalista.
- **Animações (Opcional, mas recomendado):** Framer Motion - Para a suavidade na entrada dos elementos e microinterações.

## Arquitetura de Pastas Sugerida
Aproveitando o App Router do Next.js, estruturaremos o projeto para separar lógica de roteamento de componentes visuais:

```text
meu-portfolio/
├── app/
│   ├── layout.tsx         # Layout global, provedor de tema e navegação principal
│   ├── page.tsx           # Home (Apenas a linha com os botões)
│   ├── sobre-mim/         # Rota /sobre-mim
│   ├── projetos/          # Rota /projetos
│   ├── experiencia/       # Rota /experiencia
│   ├── contatos/          # Rota /contatos
│   └── faq/               # Rota /faq
├── components/
│   ├── ui/                # (Gerado pelo Shadcn UI) Button, Accordion, Input, etc.
│   ├── layout/            # NavigationBar.tsx, ThemeToggle.tsx
│   └── sections/          # ExperienceCard.tsx, ProjectCard.tsx, ContactForm.tsx
├── lib/
│   └── utils.ts           # Utilitários (ex: função `cn` do Shadcn)
├── styles/
│   └── globals.css        # Variáveis CSS do tema (preto/branco) e Tailwind
└── public/                # Assets estáticos (SVGs, imagens, se houver)
```