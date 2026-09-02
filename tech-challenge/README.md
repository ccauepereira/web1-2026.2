# Tech Challenge 2026&trade; &ndash; Programação Web I (IFCE)

Projeto acadêmico correspondente ao Trabalho 3 (Tech Challenge) da disciplina de Programação Web I, ministrada pelo Prof. Daniel Ferreira no Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE) &ndash; Campus Maracanaú.

---

## Identificação Institucional e Autoria
- **Instituição:** Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)
- **Campus:** Maracanaú
- **Disciplina:** Programação Web I
- **Docente Orientador:** Prof. Daniel Ferreira
- **Desenvolvido por:** Cauê Cavalcante Pereira.
- **Tema do Projeto:** Portal Oficial do Evento "Tech Challenge 2026&trade;" &mdash; Edição Especial com os Astros e Lendas da Computação (Alan Gaúcho / Alan Turing, Turing Stallman Gaúcho, Ada Lovelace, Linus Torvalds, Tim Berners-Lee e Neymar Jr).

---

## Diretrizes e Restrições Técnicas Rigorosamente Atendidas
1. **Ausência Total de Emojis:** Não há nenhum emoji em nenhuma das páginas, títulos, comentários ou links do projeto, respeitando a estética acadêmica formal e o uso exclusivo de entidades HTML padronizadas (&bull;, &rarr;, &uarr;, &copy;, &trade;, &mdash;).
2. **Autoria Obrigatória Declarada:** Em todas as páginas (no rodapé institucional &lt;footer&gt;) e nesta documentação consta expressamente: "Desenvolvido por: Cauê Cavalcante Pereira."
3. **HTML Puro Exclusivamente:** Não há nenhuma linha de CSS no projeto (sem arquivos externos, sem tags &lt;style&gt; e sem atributos inline style="...").
4. **Ausência Total de JavaScript:** Não existem arquivos .js, tags &lt;script&gt; ou manipuladores inline de eventos (onclick, onsubmit, etc.). Toda a interatividade e dinamismo baseiam-se em recursos semânticos nativos do HTML5 (&lt;details&gt;, &lt;summary&gt;, &lt;progress&gt;, &lt;meter&gt;, âncoras de salto e validação nativa de formulários).
5. **Banner Principal do Evento:** Utilização da imagem oficial "imagens/Banner.jpeg" dentro de &lt;figure&gt; com &lt;figcaption&gt; associada ao link do IFCE.
6. **Reprodutor de Áudio com audio/audio.mp4:** O reprodutor de áudio foi configurado com suporte nativo aos tipos audio/mp4 e audio/mpeg apontando para o arquivo oficial "audio/audio.mp4".
7. **Vídeo Oficial Incorporado:** Utilização do arquivo oficial de vídeo "video/videotech.mp4" com controles e mensagem de fallback acessível.
8. **Semântica e Acessibilidade W3C/WAI:** Inclusão de atalhos de acessibilidade ("Skip Link") no topo de todas as páginas (&lt;a href="#conteudo-principal"&gt;), barra de navegação com marcador de página ativa (aria-current="page"), alinhamento profissional do formulário via tabelas limpas sem borda e semântica rigorosa.

---

## Estrutura Atualizada de Diretórios e Arquivos

```text
tech-challenge/
|-- index.html           # Pagina principal com todas as secoes, abas e requisitos RF01 a RF26
|-- confirmacao.html     # Pagina de retorno com checklist e orientacoes apos o envio do formulario
|-- palestrantes.html    # Apresentacao detalhada das 6 lendas da computacao
|-- faq.html             # Central interativa de duvidas frequentes (details / summary)
|-- README.md            # Documentacao tecnica e matriz de rastreabilidade dos requisitos
|-- imagens/             # Recursos de imagem do projeto com nomes oficiais
|   |-- .gitkeep
|   |-- AdaLovelace.jpeg
|   |-- AlanGaucho.png
|   |-- AlanTuring.jpeg
|   |-- Banner.jpeg
|   |-- LinusTorvalds.jpeg
|   |-- NeymarJr.jpeg
|   |-- TimBernersLee.jpeg
|   `-- logo-ifce.png
|-- audio/               # Audio oficial do evento
|   |-- .gitkeep
|   `-- audio.mp4
`-- video/               # Video promocional oficial
    |-- .gitkeep
    `-- videotech.mp4
```

---

## Matriz de Rastreabilidade dos Requisitos Funcionais (RF01 a RF26)

| Requisito | Descrição Oficial | Arquivo | Elementos / Tags Utilizadas | Evidência de Implementação |
| :--- | :--- | :--- | :--- | :--- |
| **RF01** | Identificação do evento e proposta | `index.html` | `<header>`, `<h1>`, `<h2>`, `<p>` | Título "Tech Challenge 2026&trade;", subtítulo, data, local e proposta acadêmica. |
| **RF02** | Menu de navegação interna e páginas | `index.html` | `<nav>`, `<p>`, `<a>` | Barra superior de abas (`aria-current="page"`) e barra interna de âncoras separadas por `&bull;`. |
| **RF03** | Imagem representativa com figura e link | `index.html` | `<figure>`, `<figcaption>`, `<img>`, `<a>` | Banner oficial `imagens/Banner.jpeg` com texto alternativo e link acessível para o IFCE. |
| **RF04** | Pelo menos 2 links externos com nova aba | `index.html` | `<a href="..." target="_blank" rel="noopener noreferrer">` | Links externos para o portal do IFCE (`ifce.edu.br`) e consórcio W3C (`w3.org`). |
| **RF05** | Tabela com pelo menos 8 atividades e cabeçalhos | `index.html` | `<table border="1" width="100%" cellpadding="8" cellspacing="0">` | Grade completa de horários com os astros da computação e cabeçalhos bem delimitados. |
| **RF06** | Mesclagem de células na tabela | `index.html` | `<td colspan="3" align="center">` e `<td rowspan="2">` | Intervalo mesclando 3 colunas e oficina técnica mesclando 2 linhas. |
| **RF07** | Listas de competições, oficinas e regras | `index.html` | `<ul>`, `<ol>`, `<li>`, `<blockquote>`, `<details>` | Competições, 5 oficinas práticas com os astros, 5 regras numeradas e destaques. |
| **RF08** | Recursos multimídia e entidades HTML | `index.html` | `<video>`, `<audio>`, entidades `&trade;`, `&bull;`, `&copy;`, `&rarr;`, `&mdash;` | Incorporação de mídias e aplicação uniforme de entidades HTML sem nenhum emoji. |
| **RF09** | Vídeo promocional com largura e fallback | `index.html` | `<video controls width="500">`, `<source src="video/videotech.mp4">` | Vídeo oficial `videotech.mp4` incorporado com mensagem de fallback e link para download. |
| **RF10** | Áudio de boas-vindas com fallback | `index.html` | `<audio controls>`, `<source src="audio/audio.mp4">` | Áudio oficial `audio/audio.mp4` com controles nativos e opções de reprodução. |
| **RF11** | Formulário: Dados pessoais com labels | `index.html` | `<fieldset>`, `<legend>`, `<table border="0">`, `<label for="...">`, `<input>` | Nome, Nascimento, CPF, E-mail, Telefone e Senha alinhados verticalmente via tabela sem borda. |
| **RF12** | Formulário: Endereço completo | `index.html` | `<fieldset>`, `<legend>`, `<table border="0">`, `<input>`, `<select>`, `<option>` | CEP, Rua, Número, Complemento, Bairro, Cidade e Estado em menu suspenso alinhados. |
| **RF13** | Formulário: Situação do participante | `index.html` | `<input type="radio" name="situacao">` | Radio buttons agrupados: Estudante, Professor, Profissional da área, Outro. |
| **RF14** | Formulário: Áreas de interesse | `index.html` | `<input type="checkbox" name="interesses">` | Checkboxes para IA, Teoria da Computação, Web Semântica, Kernel, Criptografia, etc. |
| **RF15** | Formulário: Oficinas temáticas | `index.html` | `<input type="checkbox" name="oficinas">` | 5 oficinas práticas com Linus Torvalds, Tim Berners-Lee, Ada Lovelace, Alan Turing e Stallman. |
| **RF16** | Formulário: Palestra principal | `index.html` | `<input type="radio" name="palestra_principal">` | Seleção única entre Lovelace, Turing, Berners-Lee, Stallman e Neymar Jr. |
| **RF17** | Formulário: Nível de experiência | `index.html` | `<input type="radio" name="nivel_experiencia">` | Radio buttons: Nenhuma experiência, Iniciante, Intermediário e Avançado. |
| **RF18** | Formulário: Tempo de experiência | `index.html` | `<input type="range" min="0" max="10" step="1">` | Controle deslizante nativo de 0 a 10 anos. |
| **RF19** | Formulário: Sistema operacional | `index.html` | `<select name="sistema_operacional">` | Menu suspenso com Linux, Windows, macOS e Outro. |
| **RF20** | Formulário: Origem da divulgação | `index.html` | `<input type="radio" name="origem_divulgacao">` | 4 canais de comunicação com radio buttons. |
| **RF21** | Formulário: Informações adicionais | `index.html` | `<textarea rows="5" cols="50">` | Justificativa técnica e expectativas de aprendizado. |
| **RF22** | Formulário: 3 autorizações independentes | `index.html` | `<input type="checkbox">` | Aceite obrigatório das regras, autorização de imagem e recebimento de novidades. |
| **RF23** | Formulário: Botões de envio e limpeza | `index.html` | `<input type="submit">`, `<input type="reset">` | Botões nativos devidamente alinhados na tabela. |
| **RF24** | Seção de informações importantes | `index.html` | `<section id="informacoes">`, `<blockquote>`, `<article>`, `<a href="mailto:...">` | Prazos, credenciamento (07:30), documentos necessários e canal institucional `mailto:`. |
| **RF25** | Seção de termo de participação detalhada | `index.html` | `<section id="termo">`, `<h3>`, `<p>`, `<ul>`, `<ol>`, `<a>` | 4 cláusulas formais com embasamento na LGPD (Lei Federal 13.709/2018). |
| **RF26** | Navegação cruzada form &harr; termo e topo | `index.html` | `<a href="#termo">`, `<a href="#inscricao" aria-label="...">`, `<a href="#inicio">` | Links bidirecionais entre formulário e termo com WAI-ARIA e retornos ao início. |

---

## Galeria de Palestrantes (palestrantes.html)
1. **Alan Gaúcho / Alan Turing:** `imagens/AlanGaucho.png` &mdash; "Fundamentos da Teoria da Computação e Algoritmos Clássicos".
2. **Turing Stallman Gaúcho:** `imagens/AlanGaucho.png` &mdash; "A Filosofia GNU, Software Livre e a Liberdade do Usuário na Web".
3. **Ada Lovelace:** `imagens/AdaLovelace.jpeg` &mdash; "A Origem dos Algoritmos e Programação Pioneira".
4. **Linus Torvalds:** `imagens/LinusTorvalds.jpeg` &mdash; "Arquitetura do Kernel Linux e Controle de Versão com Git".
5. **Tim Berners-Lee:** `imagens/TimBernersLee.jpeg` &mdash; "A Criação da World Wide Web e a Semântica do HTML".
6. **Neymar Jr:** `imagens/NeymarJr.jpeg` &mdash; "Neymar Jr pai da ciencia da computação: Dribles Lógicos, Otimização de Performance e Controle de Bola em Tempo Real".

---

## Como Visualizar e Testar o Projeto
Abra diretamente os arquivos HTML em qualquer navegador web moderno:
- No terminal (Linux):
  ```bash
  xdg-open tech-challenge/index.html
  ```
- Ou execute um duplo clique em `index.html` através do gerenciador de arquivos do sistema operacional.
