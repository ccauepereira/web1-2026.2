# Tech Challenge 2026&trade; &ndash; Programação Web I (IFCE)

Projeto acadêmico e prático correspondente ao **Trabalho 3 (Tech Challenge)** da disciplina de **Programação Web I**, ministrada pelo **Prof. Daniel Ferreira** no **Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE) &ndash; Campus Maracanaú**.

---

## 🏛️ Identificação Institucional e Acadêmica
- **Instituição:** Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)
- **Campus:** Maracanaú
- **Disciplina:** Programação Web I
- **Docente Orientador:** Prof. Daniel Ferreira
- **Tema do Projeto:** Portal do Evento "Tech Challenge 2026&trade;" (3º Encontro Anual de Tecnologia, Padrões Abertos e Desenvolvimento de Software)

---

## 🎯 Objetivos do Projeto
Desenvolver uma aplicação web estática completa, acessível e semanticamente estruturada com foco na excelência da linguagem **HTML5**. O projeto comprova que uma estruturação semântica rica segundo as recomendações do consórcio **W3C** é capaz de oferecer navegação fluida, formulários interativos, elementos de mídia e caixas expansíveis nativas sem depender de estilização CSS ou scripts JavaScript.

---

## ⚠️ Regras Estritas e Restrições Técnicas Atendidas
1. **HTML Puro Exclusivamente:** Não há nenhuma linha de CSS no projeto (nenhuma inclusão externa `<link rel="stylesheet">`, nenhuma tag `<style>` e nenhum atributo inline `style="..."`).
2. **Ausência Total de JavaScript:** Não existem arquivos `.js`, tags `<script>` ou manipuladores de eventos inline (`onclick`, `onsubmit`, etc.). Toda a interatividade baseia-se em recursos e atributos nativos do HTML5 (âncoras de navegação, validação de formulários com `required`/`pattern`/`min`/`max`, e tags interativas `<details>`/`<summary>`).
3. **Sem Frameworks ou Bibliotecas Externas:** Sem Bootstrap, Tailwind, FontAwesome ou geradores de código.
4. **Semântica e Acessibilidade W3C:** Uso rigoroso e apropriado das tags estruturais (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<fieldset>`, `<legend>`, `<label>`, `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<time>`, `<address>`, etc.).

---

## 📁 Estrutura de Diretórios e Arquivos

```text
tech-challenge/
├── index.html           # Página principal com todas as seções e requisitos RF01 a RF26
├── confirmacao.html     # Página de retorno e orientações após a submissão do formulário
├── palestrantes.html    # Apresentação dos convidados, minibiografias e tópicos
├── faq.html             # Central interativa de dúvidas frequentes (details / summary)
├── README.md            # Documentação técnica e matriz de rastreabilidade dos requisitos
├── imagens/             # Imagens otimizadas do evento e palestrantes
│   ├── .gitkeep
│   ├── evento.jpg
│   ├── palestrante1.jpg
│   ├── palestrante2.jpg
│   ├── palestrante3.jpg
│   └── palestrante4.jpg
├── audio/               # Áudio oficial de boas-vindas
│   ├── .gitkeep
│   └── boas-vindas.mp3
└── video/               # Vídeo promocional de apresentação
    ├── .gitkeep
    └── apresentacao.mp4
```

---

## 📊 Matriz de Rastreabilidade dos Requisitos Funcionais (RF01 a RF26)

A tabela abaixo detalha onde e de que forma cada requisito funcional especificado pelo docente foi implementado no código:

| Requisito | Descrição Oficial | Arquivo | Elementos / Tags Utilizadas | Evidência de Implementação |
| :--- | :--- | :--- | :--- | :--- |
| **RF01** | Identificação do evento e proposta | `index.html` | `<header>`, `<h1>`, `<h2>`, `<p>` | Título "Tech Challenge 2026&trade;", subtítulo descritivo, data, local e proposta pedagógica do evento. |
| **RF02** | Menu de navegação interna e páginas | `index.html` | `<nav>`, `<ul>`, `<li>`, `<a href="#id">` | Menu com 7 âncoras internas (`#sobre`, `#multimidia`, etc.) e links para `palestrantes.html` e `faq.html`. |
| **RF03** | Imagem representativa com figura e link | `index.html` | `<figure>`, `<figcaption>`, `<img>`, `<a>` | Imagem do evento com texto alternativo (`alt`), legenda explicativa e link clicável para o portal do IFCE. |
| **RF04** | Pelo menos 2 links externos com nova aba | `index.html` | `<a href="..." target="_blank" rel="noopener noreferrer">` | Links externos para o portal do IFCE (`ifce.edu.br`) e consórcio W3C (`w3.org`). |
| **RF05** | Tabela com pelo menos 8 atividades e cabeçalhos | `index.html` | `<table border="1" cellpadding="8" cellspacing="0">`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` | Grade de horários com Horário, Atividade, Local e Responsável, contendo 8 atividades obrigatórias. |
| **RF06** | Mesclagem de células na tabela | `index.html` | `<td colspan="3">` e `<td rowspan="2">` | Célula de Coffee Break ocupando 3 colunas e horário estendido de práticas ocupando 2 linhas. |
| **RF07** | Listas de competições, oficinas e regras | `index.html` | `<ul>`, `<ol>`, `<li>` | Lista não ordenada de competições, 4 oficinas temáticas e lista ordenada com 5 regras numeradas. |
| **RF08** | Recursos multimídia e entidades HTML | `index.html` | `<video>`, `<audio>`, entidades `&trade;`, `&bull;`, `&copy;`, `&rarr;`, `&amp;` | Incorporação de mídias e aplicação uniforme de entidades de caracteres especiais. |
| **RF09** | Vídeo promocional com largura e fallback | `index.html` | `<video controls width="500">`, `<source>` | Vídeo incorporado de `video/apresentacao.mp4` com mensagem de fallback e link para download. |
| **RF10** | Áudio de boas-vindas com fallback | `index.html` | `<audio controls>`, `<source>` | Áudio de `audio/boas-vindas.mp3` com controles e mensagem de fallback com link para download. |
| **RF11** | Formulário: Dados pessoais com labels | `index.html` | `<fieldset>`, `<legend>`, `<label for="...">`, `<input>` | Campos de Nome (`text`), Nascimento (`date`), CPF (`text` com pattern), E-mail (`email`), Telefone (`tel`) e Senha (`password`). |
| **RF12** | Formulário: Endereço completo | `index.html` | `<fieldset>`, `<legend>`, `<input>`, `<select>`, `<option>` | CEP, Rua, Número (`number`), Complemento, Bairro, Cidade e Estado com `<select>` de estados brasileiros. |
| **RF13** | Formulário: Situação do participante | `index.html` | `<input type="radio" name="situacao">` | Radio buttons agrupados: Estudante, Professor, Profissional da área, Outro. |
| **RF14** | Formulário: Áreas de interesse | `index.html` | `<input type="checkbox" name="interesses">` | Checkboxes para IA, Desenvolvimento Web, Redes, Segurança, Banco de Dados, Computação Gráfica e Programação. |
| **RF15** | Formulário: Oficinas temáticas | `index.html` | `<input type="checkbox" name="oficinas">` | Seleção múltipla contemplando 4 oficinas técnicas especializadas. |
| **RF16** | Formulário: Palestra principal | `index.html` | `<input type="radio" name="palestra_principal">` | Seleção única entre 4 palestras magnas no Auditório Central. |
| **RF17** | Formulário: Nível de experiência | `index.html` | `<input type="radio" name="nivel_experiencia">` | Radio buttons: Nenhuma experiência, Iniciante, Intermediário e Avançado. |
| **RF18** | Formulário: Tempo de experiência | `index.html` | `<input type="range" min="0" max="10" step="1">` | Controle deslizante nativo para mensurar o tempo de experiência de 0 a 10 anos. |
| **RF19** | Formulário: Sistema operacional | `index.html` | `<select name="sistema_operacional">` | Menu suspenso com 4 opções (Linux, Windows, macOS e Outro). |
| **RF20** | Formulário: Origem da divulgação | `index.html` | `<input type="radio" name="origem_divulgacao">` | 4 opções de canais: Professores/Murais, Redes Sociais, Indicação de Colegas, Cartazes/Banners. |
| **RF21** | Formulário: Informações adicionais | `index.html` | `<textarea rows="5" cols="50">` | Campo de texto multilinha para justificativa de interesse e expectativas do participante. |
| **RF22** | Formulário: 3 autorizações independentes | `index.html` | `<input type="checkbox">` | Checkboxes independentes: aceite de regras (obrigatório), autorização de imagem e recebimento de novidades. |
| **RF23** | Formulário: Botões de envio e limpeza | `index.html` | `<input type="submit">`, `<input type="reset">` | Botões nativos para submissão dos dados e redefinição de todos os campos. |
| **RF24** | Seção de informações importantes | `index.html` | `<section id="informacoes">`, `<article>`, `<a href="mailto:...">` | Prazos, horário de credenciamento (07:30), documentos necessários, conduta e canal oficial via `mailto:`. |
| **RF25** | Seção de termo de participação detalhada | `index.html` | `<section id="termo">`, `<h3>`, `<p>`, `<ul>`, `<ol>`, `<a>` | Termo jurídico-acadêmico com 4 cláusulas detalhadas, regras de conduta, direitos, LGPD e links externos. |
| **RF26** | Navegação cruzada form &harr; termo e topo | `index.html` | `<a href="#termo">`, `<a href="#inscricao">`, `<a href="#inicio">` | Links bidirecionais entre formulário e termo, e links de retorno ao início em todas as seções. |

---

## 📄 Páginas Complementares

### `confirmacao.html` (Confirmação de Inscrição)
- Exibida ao submeter o formulário de `index.html` via método `GET`.
- Informa o status de sucesso da vaga com tabela resumida de protocolo.
- Orientações detalhadas para os dias do evento (horários, credenciamento, uso de laboratórios).
- Lista ordenada com os 5 próximos passos obrigatórios para o participante.
- Navegação de retorno para `index.html`, `palestrantes.html` e `faq.html`.

### `palestrantes.html` (Apresentação dos Convidados)
- Apresenta 4 especialistas convidados:
  1. **Dra. Helena Vasconcelos** (Inteligência Artificial e LLMs)
  2. **Prof. Carlos Eduardo Silveira** (Padrões W3C e Acessibilidade Digital)
  3. **Eng. Sofia Mendes** (Cibersegurança Defensiva e Redes)
  4. **Msc. Lucas Pinheiro** (Arquitetura de Software e Cloud Computing)
- Cada palestrante conta com foto na pasta `imagens/` dentro de `<figure>` e `<figcaption>`, minibiografia acadêmica, áreas de atuação (`<ul>`) e tópicos que serão abordados (`<ol>`).

### `faq.html` (Perguntas Frequentes Interativas)
- Central de dúvidas com 8 perguntas e respostas completas.
- Utiliza **exclusivamente** as tags nativas `<details>` e `<summary>`, permitindo expansão e recolhimento nativos em qualquer navegador sem necessidade de JavaScript.
- Seção de contato com suporte para dúvidas remanescentes.

---

## 🚀 Como Visualizar o Projeto
Como o projeto é construído em **HTML5 puro**, não há necessidade de compilação, instalação de pacotes npm ou configuração de servidor web backend.

1. Abra qualquer navegador moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari ou Opera).
2. Abra diretamente o arquivo `index.html` localizado na pasta `tech-challenge/`:
   - No terminal (Linux):
     ```bash
     xdg-open tech-challenge/index.html
     # ou
     google-chrome tech-challenge/index.html
     # ou
     firefox tech-challenge/index.html
     ```
   - Ou simplesmente dê um duplo clique no arquivo `index.html` pelo gerenciador de arquivos.
3. Navegue entre as páginas e teste o envio do formulário, as âncoras de navegação e as caixas expansíveis de FAQ.
