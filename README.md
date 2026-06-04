# Portfolio Minimalista - Thiago

Portfolio front-end minimalista desenvolvido para apresentar projetos, experiencia e formas de contato em uma interface limpa, responsiva e acessivel. O projeto prioriza UI/UX objetiva, navegacao sem ruido, tema charcoal com microinteracoes suaves e uma arquitetura modular baseada em componentes, rotas reais e boas praticas de manutencao.

## Comecando

Estas instrucoes permitem obter uma copia do projeto em operacao na maquina local para exploracao do codigo e testes.

### Pre-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/pt/)

### Instalacao e Execucao

Siga os passos abaixo para rodar o ambiente de desenvolvimento local:

1. Clone o repositorio:

```bash
git clone [URL_DO_SEU_REPOSITORIO]
```

2. Instale as dependencias:

```bash
pnpm install
```

3. Inicie o servidor de desenvolvimento:

```bash
pnpm run dev
```

4. Abra o navegador e acesse `http://localhost:5173`.

## Qualidade de Codigo

Este projeto utiliza o [Biome](https://biomejs.dev/) para manter consistencia, formatacao e verificacao de boas praticas no codigo.

```bash
pnpm exec biome check src
```

## Implantacao

Para gerar os arquivos estaticos de producao:

```bash
pnpm run build
```

A pasta `dist/` sera gerada com os arquivos prontos para deploy.

## Construido com

- [React](https://react.dev/) - Biblioteca para construcao da interface.
- [Vite](https://vite.dev/) - Ferramenta de build e servidor de desenvolvimento.
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estatica para maior previsibilidade.
- [Tailwind CSS](https://tailwindcss.com/) - Sistema utilitario para composicao visual responsiva.
- [Framer Motion](https://www.framer.com/motion/) - Transicoes de rota e microinteracoes.
- [React Router](https://reactrouter.com/) - Roteamento entre paginas reais.
- [Radix UI](https://www.radix-ui.com/) - Primitivos acessiveis para componentes de UI.
- [shadcn/ui](https://ui.shadcn.com/) - Base de componentes e tokens visuais.
- [Lucide React](https://lucide.dev/) - Iconografia consistente e leve.

## Autor

- **Thiago** - Desenvolvedor Front-end - [GitHub](https://github.com/) / [LinkedIn](https://www.linkedin.com/)

Meu objetivo e me aprimorar constantemente, com foco em cyberseguranca, acessibilidade e arquitetura SOLID.

## Licenca

Este projeto esta sob a licenca MIT.

## Agradecimentos

- Obrigado por visitar meu portfolio. Fique a vontade para explorar o codigo.
- Se gostou do que viu, me chame para um cafe ou para uma vaga.
