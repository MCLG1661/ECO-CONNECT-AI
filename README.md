# 🌱 ECO CONNECT AI

*Protótipo de plataforma B2B desenvolvido para apoiar empresas na organização, visualização e acompanhamento de indicadores relacionados a ESG — Environmental, Social and Governance*

![HTML5](https://img.shields.io/badge/HTML5-Frontend-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-Data%20Visualization-FF6384?logo=chartdotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-API-000000?logo=express&logoColor=white)
![ESG](https://img.shields.io/badge/ESG-Sustainability-2E8B57)

A solução combina uma landing page responsiva com um dashboard interativo, permitindo visualizar métricas, explorar indicadores por empresa e período e apresentar informações relacionadas à gestão sustentável de forma estruturada.
O projeto também explora uma arquitetura web integrada, utilizando JavaScript e Chart.js no Front-end e um backend desenvolvido com Node.js e Express para processamento das solicitações enviadas pelo formulário.

---

## 🌐 Aplicação Online

Acesse o Eco Connect AI

[eco-connect-ai-esg-plataform.vercel.app](https://eco-connect-ai-esg-plataform.vercel.app/)

**Nota : Os indicadores apresentados no dashboard utilizam dados simulados para fins de demonstração do projeto**

---

## 💼 Problema de Negócio

A crescente relevância dos critérios ESG aumenta a necessidade de organizações estruturarem informações relacionadas ao seu desempenho ambiental, social e de governança.
Quando esses dados estão dispersos ou são apresentados sem uma camada adequada de visualização, torna-se mais difícil acompanhar indicadores, comparar resultados e comunicar iniciativas de sustentabilidade.
O Eco Connect AI foi concebido como um protótipo para explorar como uma plataforma digital pode centralizar essas informações e facilitar sua interpretação.

---

## 🎯 Objetivo

Desenvolver uma experiência web B2B capaz de apresentar indicadores ESG por meio de uma interface moderna, responsiva e interativa.
A solução busca demonstrar conceitos relacionados a :

- Gestão e visualização de indicadores ESG
- Data Visualization
- Dashboards interativos
- Experiência digital B2B
- Desenvolvimento Front-end
- Integração Front-end e Back-end
- Aplicações web responsivas

---

## ✨ Funcionalidades

📊 Dashboard ESG

O dashboard apresenta indicadores utilizando dados estruturados em JSON e visualizações desenvolvidas com Chart.js.
Entre os recursos disponíveis estão :

- Visualização dinâmica de métricas
- Gráficos interativos
- Filtro por empresa
- Filtro por período
- Atualização das informações exibidas

🌱 Apresentação da Solução

A landing page apresenta a proposta de valor do Eco Connect AI e organiza as principais funcionalidades da plataforma em uma experiência voltada ao contexto B2B.

🧩 Modais Interativos

Os cards de funcionalidades permitem acessar informações adicionais por meio de modais, proporcionando uma experiência mais dinâmica sem necessidade de abandonar a página principal.

📱 Design Responsivo

A interface foi desenvolvida para adaptação a diferentes tamanhos de tela :

```text
Desktop
   ↓
Tablet
   ↓
Smartphone

```

📬 Solicitação de Demonstração

O projeto possui formulário para solicitação de demonstração da plataforma.
No ambiente local, os dados enviados pelo formulário podem ser recebidos por um servidor desenvolvido em **Node.js + Express**.

---

## 🔄 Fluxo da Aplicação

```text
Usuário
   ↓
Landing Page
   ↓
Exploração da Solução
   ↓
Dashboard ESG
   ↓
Seleção de Empresa / Período
   ↓
Leitura dos Dados JSON
   ↓
Processamento com JavaScript
   ↓
Visualização com Chart.js
   ↓
Análise dos Indicadores

```

---

## 🏗️ Arquitetura

```text
                  ┌───────────────────┐
                  │      Usuário      │
                  └─────────┬─────────┘
                            ↓
                  ┌───────────────────┐
                  │     Front-end     │
                  │ HTML / CSS / JS   │
                  └─────────┬─────────┘
                            │
              ┌─────────────┴─────────────┐
              ↓                           ↓
      ┌───────────────┐           ┌───────────────┐
      │   data.json   │           │   Formulário  │
      └───────┬───────┘           └───────┬───────┘
              ↓                           ↓
      ┌───────────────┐           ┌───────────────┐
      │   Chart.js    │           │ Node / Express│
      └───────┬───────┘           └───────────────┘
              ↓
      ┌───────────────┐
      │ Dashboard ESG │
      └───────────────┘

```

---

📊 Data Visualization

A camada de visualização utiliza **Chart.js** para transformar os dados armazenados em data.json em gráficos dinâmicos.
O dashboard permite explorar os indicadores por diferentes dimensões, proporcionando uma representação visual mais adequada para análise e acompanhamento dos resultados.

---

## 🛠️ Tecnologias

**HTML5** -	Estrutura da aplicação

**CSS3** -	Interface e responsividade

**JavaScript ES6+** - Lógica e interatividade

**Chart.js** -	Visualização gráfica dos indicadores

**JSON** -	Estruturação dos dados simulados

**Node.js** -	Ambiente de execução do backend

**Express.js** -	Recebimento e processamento do formulário

**Font Awesome** - Elementos visuais e ícones

**Vercel** -	Deploy da interface web

---

## 📂 Estrutura do Projeto

```text
ECO-CONNECT-AI-ESG-PLATAFORM/
│
├── index.html
├── style.css
├── script.js
├── server.js
├── data.json
└── README.md

```

---

## 🚀 Executando Localmente

Pré-requisitos

**Node.js**

**npm**

**Git**

1) Clone o repositório:

git clone https://github.com/MCLG1661/ECO-CONNECT-AI-ESG-PLATAFORM.git

2) Entre no diretório:

cd ECO-CONNECT-AI-ESG-PLATAFORM

3) Instale o Express:

npm install express

4) Execute o backend:

node server.js

---

## 💡 Competências Demonstradas

O projeto explora conhecimentos relacionados a :

- ESG
- Data Visualization
- Desenvolvimento Front-end
- JavaScript
- HTML5
- CSS3
- Chart.js
- Manipulação de JSON
- Desenvolvimento responsivo
- Node.js
- Express.js
- Integração Front-end / Back-end
- UX para aplicações B2B
- Deploy de aplicações web
- Git e GitHub

---

## Evolução para Inteligência Artificial

O nome Eco Connect AI representa também a visão de evolução da plataforma.
A versão atual concentra-se na experiência web, estruturação dos indicadores e visualização dos dados. Uma próxima geração da solução poderá incorporar recursos de Inteligência Artificial.


Possíveis evoluções :

```text
Dados ESG
   ↓
Tratamento e Estruturação
   ↓
Analytics
   ↓
Machine Learning / IA
   ↓
Detecção de Padrões
   ↓
Insights Automatizados
   ↓
Recomendações
   ↓
Apoio à Tomada de Decisão

```
Entre as possibilidades estão :

- Geração automática de insights sobre indicadores ESG
- Identificação de tendências e anomalias
- Comparação inteligente de desempenho
- Recomendações baseadas nos indicadores
- Uso de IA Generativa para interpretação dos resultados
- Assistente conversacional para consulta dos indicadores
- Integração com bases ESG reais
- APIs para ingestão automatizada de dados
- Persistência em banco de dados
- Autenticação e ambientes individualizados por empresa

---

## ⚠️ Escopo do Projeto

O Eco Connect AI é um protótipo demonstrativo.
Os dados utilizados no dashboard são simulados e não representam indicadores reais de empresas.
A versão atual demonstra principalmente conceitos de desenvolvimento web, visualização de dados, experiência B2B e integração Front-end/Back-end.
Os recursos de Inteligência Artificial apresentados no roadmap representam evoluções futuras da solução e não funcionalidades implementadas na versão atual.

---

## ## 🤝 Como Contribuir

Contribuições, sugestões e melhorias são bem-vindas.

Para contribuir com o projeto:

1. Faça um **Fork** do repositório
2. Crie uma branch para sua funcionalidade:

```bash
git checkout -b feature/nova-funcionalidade

```

Faça o commit das alterações:

```bash
git commit -m "Adiciona nova funcionalidade"

```

Envie a branch para o seu repositório:

```bash
git push origin feature/nova-funcionalidade

```

Abra um **Pull Request** descrevendo as alterações realizadas.

Sugestões relacionadas a ESG, Data Visualization, Analytics, Inteligência Artificial e experiência de usuário são especialmente bem-vindas.

---

## 👨‍💻 Autor

Marcus Guedes

Marketing | Data Science | Inteligência Artificial | Gestão de Projetos

GitHub: MCLG1661

LinkedIn: Marcus Guedes

---

⭐ Eco Connect AI — Tecnologia, dados e sustentabilidade aplicados à gestão ESG.
