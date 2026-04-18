# Guia de Execução Passo a Passo: Portfólio Minimalista

Este guia foi elaborado para que você possa construir, a partir do zero, o portfólio conceitual usando **Next.js (App Router), Tailwind CSS e Shadcn UI**.

## 1. Inicialização do Next.js

Começaremos instalando a versão mais recente do Next.js com todas as configurações padrão otimizadas para TypeScript e Tailwind.

```bash
npx create-next-app@latest meu-portfolio
```

Ao rodar o comando, responda às perguntas exatamente nesta ordem:
- **What is your project named?** `meu-portfolio`
- **Would you like to use TypeScript?** `Yes`
- **Would you like to use ESLint?** `Yes`
- **Would you like to use Tailwind CSS?** `Yes`
- **Would you like to use `src/` directory?** `Yes` (Apesar da nossa arquitetura base sugerir `app/` na raiz, o Next 14+ encapsula tudo no `src/` por organização, use `Yes`).
- **Would you like to use App Router? (recommended)** `Yes`
- **Would you like to customize the default import alias (@/*)?** `Yes`
- **What import alias would you like configured?** `@/*`

Entre na pasta do projeto recém-criado:
```bash
cd meu-portfolio
```

## 2. Configuração Inicial do Shadcn UI

O Shadcn UI é uma coleção de componentes reusáveis que são instalados **no seu projeto** (não como dependência npm obscura). Isso te dá o poder de alterar o código de cada botão, input, etc.

Execute o comando de inicialização do Shadcn:
```bash
npx shadcn-ui@latest init
```

Responda para configurar seu design system base (o mais neutro possível, já que o foco é Black/White):
- **Which style would you like to use?** `New York` (Ele possui botões menores, mais próximos ao estilo minimalista).
- **Which color would you like to use as base color?** `Zinc` (Garante um tom monocromático neutro sem saturações coloridas).
- **Would you like to use CSS variables for colors?** `Yes` (Crucial para o Dark/Light Mode automático).

Após a inicialização, modifique as variáveis no arquivo `src/app/globals.css`. Para o visual estrito Black/White, garanta que os backgrounds, foregrounds e borders sigam o padrão:

```css
@layer base {
  :root {
    --background: 0 0% 100%; /* Branco absoluto */
    --foreground: 0 0% 0%; /* Preto absoluto */
    --border: 0 0% 90%;
    /* ... outras variáveis padrão mantidas do Zinc ... */
    --radius: 0.5rem;
  }
  .dark {
    --background: 0 0% 0%; /* Preto absoluto */
    --foreground: 0 0% 100%; /* Branco absoluto */
    --border: 0 0% 15%;
    /* ... outras variáveis padrão mantidas do Zinc ... */
  }
}
```

## 3. Adicionando os Componentes Shadcn

Vamos instalar apenas os blocos que usaremos para montar a interface. O Shadcn fará o download do código-fonte de cada um para a pasta `src/components/ui`.

```bash
# 1. O botão principal e as formas esféricas
npx shadcn-ui@latest add button

# 2. O Accordion para a página de FAQ
npx shadcn-ui@latest add accordion

# 3. Formulário e Inputs para a rota de Contato
npx shadcn-ui@latest add form input textarea label

# 4. Elemento de ícone centralizado (lucide-react já vem instalado pelo Next/Shadcn)
npm install lucide-react

# 5. Opcional: Provedor de Tema para Dark/Light
npm install next-themes
```

*(Lembre-se de configurar o `ThemeProvider` no seu `app/layout.tsx` conforme a documentação oficial do Next-Themes).*

## 4. Estruturação do Layout e Blocos Fundamentais

Agora, você deve posicionar os elementos estruturais no seu `src/app/layout.tsx`. A Navegação e o Theme Toggle são globais, logo, ficarão fora das páginas (`page.tsx` de cada rota).

### 4.1 Navegação Esférica (O Coração Visual do Projeto)

Você criará o componente `src/components/layout/NavigationBar.tsx`. O truque aqui é a **linha cruzando o eixo central dos botões**. 

**Como posicionar a linha tecnicamente:**
- A barra de navegação principal (`<nav>`) será relativa (`relative`).
- O container (`<ul>`) terá a classe `flex justify-between items-start w-full relative z-10`.
- A linha fina será absoluta com um valor `top` fixo que representa a metade exata do botão esférico. Se o botão tem `h-14` (56px), o meio é `top-[28px]`.

```tsx
<div className="absolute top-[28px] left-12 right-12 h-[1px] bg-border z-0 -translate-y-1/2"></div>
```

- Cada item do menu (`<li>`) conterá um componente de botão esférico do Shadcn (`<Button variant="outline" size="icon" className="rounded-full w-14 h-14">`) com o ícone no meio. Abaixo dele, uma tag invisível (`sr-only` ou oculta pro visual limpo) ou um span que só aparece no hover, caso queira nomear. No seu protótipo os nomes foram removidos, deixando apenas o ícone.

### 4.2 Botões e Pílulas

Para as tecnologias nos cards de experiência/projetos, você criará pílulas, que não precisam ser componentes Shadcn complexos. Você os construirá em `src/components/ui/pill.tsx` (ou os escreverá direto no código usando Tailwind):

**Classe Tailwind da Pílula:**
```tsx
<span className="px-4 py-1.5 bg-foreground text-background rounded-full text-sm font-medium tracking-wide">React</span>
```
Perceba a inversão de cores: O fundo da pílula é a cor primária de texto (`bg-foreground`) e o texto dela é a cor do fundo da página (`text-background`), garantindo um contraste extremo que chama atenção, sem fugir da paleta.

### 4.3 Formulário de Contato e FAQ

- **Contatos:** Utilize o componente `<Form>`, `<FormField>`, `<Input>` e `<Textarea>` gerado pelo Shadcn. Estilize os inputs alterando as classes padrões do Shadcn no arquivo `components/ui/input.tsx` para algo mais "clean", como remover as bordas laterais e superiores e deixar apenas a borda inferior (`border-b`, `border-t-0`, `border-x-0`, `rounded-none`), que é muito popular em design estrito.
- **FAQ:** Use o `<Accordion>` padrão. No arquivo `components/ui/accordion.tsx`, você pode remover as linhas que dividem todos os itens para que fiquem flutuando em texto, com um hover sutil na esquerda, reforçando a leveza.

## 5. Estilização Tailwind (O Segredo do Minimalismo)

A estética da interface minimalista se apoia no uso preciso destas classes utilitárias:

- **Espaçamento Positivo e Negativo (Whitespace):** Ao invés de blocos contidos em bordas pesadas, use paddings e margins gigantes para separar seções. Use `gap-16` ou `mb-24`.
- **Tipografia Esculpida:** Use `font-light` ou `font-thin` para títulos grandes e `tracking-tight` (letras juntas). Para subtítulos pequenos que indicam seções (ex: "Tecnologias Core"), use `text-xs uppercase tracking-widest font-semibold text-muted-foreground` (um cinza elegante).
- **Sombras Sutis (Shadows):** Para botões que não devem ser completamente opacos, use `shadow-sm` ou `shadow-[0_0_0_1px_rgba(0,0,0,0.05)]` para uma linha quase imperceptível de contorno ao invés de usar a tag `border` tradicional.
- **Transições Macias (Microinterações):** Adicione `transition-all duration-500 ease-out hover:scale-105` em imagens de cards e pílulas.

## 6. Considerações Finais até a Entrega

Siga este workflow de implementação:
1. Monte a moldura vazia (`layout.tsx`) instalando o roteamento sem conteúdo e fixando a Navegação esférica com a linha. Teste a precisão milimétrica da linha cruzando os botões.
2. Adicione o botão flutuante para Dark/Light Mode. Teste se a linha e os ícones respondem ao preto/branco perfeitamente.
3. Preencha o corpo (`main`) da página "Sobre Mim" focando puramente na Tipografia e no formato Pill (Pílula).
4. Siga para os Cards de Projetos (onde a imagem receberá cantos arredondados grandes e a tag `aspect-[4/3]`) e Experiência.
5. Instale o formulário e os accordions e dê o acabamento final na remoção de bordas ruidosas trazidas como padrão pelos componentes de bibliotecas.
6. Acesso o projeto via celular para garantir que o contêiner `overflow-x-auto` no layout principal não quebre a linha horizontal.

Ao finalizar, a interface parecerá flutuar perfeitamente sobre a tela, guiando o olho do usuário exatamente pelos caminhos que o design minimalista pretendeu desde o início. Mãos à obra!