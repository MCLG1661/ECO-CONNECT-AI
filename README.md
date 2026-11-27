# 🌱 ECO CONNECT AI — ESG Data & Sustainability Platform

> Protótipo B2B para visualização, acompanhamento e exploração de indicadores ESG, conectando sustentabilidade, dados, tecnologia e Product Thinking.

![HTML5](https://img.shields.io/badge/HTML5-Frontend-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-Data%20Visualization-FF6384?logo=chartdotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend%20Prototype-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-API%20Prototype-000000?logo=express&logoColor=white)
![ESG](https://img.shields.io/badge/ESG-Sustainability-00A86B)
![Status](https://img.shields.io/badge/Status-Prototype-orange)

---

## 📌 Sobre o Projeto

O **Eco Connect AI** é um protótipo de produto digital B2B criado para explorar como **dados, visualização e tecnologia** podem apoiar empresas no acompanhamento de indicadores relacionados a:

- Environmental;
- Social;
- Governance.

A aplicação organiza dados ESG simulados em uma experiência interativa, permitindo explorar indicadores por empresa e período através de cards e visualizações gráficas.

Além das funcionalidades implementadas, o projeto apresenta uma **visão de evolução do produto** envolvendo Analytics, automação, Inteligência Artificial, Digital Twin, Compliance ESG e criação de um possível ecossistema B2B.

---

## ⚠️ Escopo da Versão Atual

O Eco Connect AI é um **projeto educacional, demonstrativo e de portfólio**.

A versão atual utiliza **dados simulados** e não representa uma plataforma ESG comercial em produção.

### Implementado

- Dashboard ESG;
- indicadores demonstrativos;
- dataset estruturado em JSON;
- filtro por empresa;
- filtro por período;
- atualização dinâmica dos indicadores;
- visualização gráfica com Chart.js;
- interface responsiva;
- modais informativos;
- fluxo demonstrativo de solicitação de contato;
- backend experimental em Node.js/Express para ambiente compatível.

### Roadmap

Os seguintes recursos representam **visão de produto e não estão implementados nesta versão**:

- Inteligência Artificial;
- Digital Twin;
- monitoramento regulatório;
- Compliance ESG automatizado;
- geração automatizada de certificações;
- blockchain;
- Marketplace ESG;
- integrações corporativas;
- autenticação;
- área do cliente;
- processamento de dados ESG em tempo real.

---

# 🎯 Problema

Organizações podem acompanhar diferentes indicadores relacionados a sustentabilidade, impacto ambiental, diversidade, governança e conformidade.

Quando esses dados estão distribuídos entre diferentes sistemas, planilhas e departamentos, a tomada de decisão pode se tornar mais complexa.

Uma possível jornada é:

```text
Dados Operacionais
       ↓
Indicadores ESG
       ↓
Consolidação
       ↓
Visualização
       ↓
Análise
       ↓
Insight
       ↓
Decisão
       ↓
Ação
```

O Eco Connect AI explora uma questão de produto:

> **Como transformar diferentes indicadores ESG em uma experiência digital simples, visual e orientada à tomada de decisão?**

---

# 💡 Proposta de Solução

A proposta do Eco Connect AI é funcionar como uma camada digital para organização e visualização de indicadores ESG.

```text
Empresa
   ↓
Dados ESG
   ↓
Estruturação
   ↓
Dashboard
   ↓
Indicadores
   ↓
Data Visualization
   ↓
Análise
   ↓
Decisão
```

Na versão atual, esse fluxo é demonstrado através de um dataset simulado armazenado em JSON.

---

# 📊 Dashboard ESG

O principal componente funcional do projeto é o **Dashboard ESG Interativo**.

O usuário pode selecionar:

```text
Empresa
   +
Período
```

A aplicação atualiza dinamicamente os indicadores apresentados.

Entre os exemplos demonstrativos estão:

- pegada de CO₂;
- energia renovável;
- diversidade;
- conformidade;
- score ESG.

---

# 🏭 Segmentação por Empresa

O protótipo possui diferentes empresas/categorias simuladas para demonstrar a capacidade de segmentação dos dados.

Entre os recortes disponíveis estão:

```text
Indústria Geral
Indústria Automotiva
Indústria Têxtil
Indústria de Alimentos
Indústria Farmacêutica
Varejo
Tecnologia
```

Somente Indústria Geral e Tecnologia possuem dados no dataset atual. As outras cinco categorias (incluindo Varejo) permanecem visíveis, mas desabilitadas. A alteração da categoria disponível modifica os indicadores do dashboard.

---

# 📅 Análise por Período

Também é possível alterar o período analisado.

```text
Último Mês
     ↓
Último Trimestre
     ↓
Último Ano
```

Isso permite demonstrar uma experiência típica de dashboards corporativos, nos quais diferentes dimensões podem ser utilizadas para explorar os dados.

---

# 📈 Data Visualization

O projeto utiliza **Chart.js** para apresentar visualmente a evolução dos indicadores.

Fluxo simplificado:

```text
data.json
    ↓
JavaScript
    ↓
Filtro
    ↓
Processamento
    ↓
Chart.js
    ↓
Visualização
```

A aplicação destrói e recria a instância do gráfico quando necessário, permitindo atualizar a visualização conforme os filtros selecionados.

---

# 🗃️ Estrutura de Dados

Os dados demonstrativos são armazenados em:

```text
data.json
```

A estrutura permite organizar informações por:

```text
Empresa
   ↓
Período
   ↓
Métricas
   +
Série Temporal
```

Isso separa os dados da camada de apresentação e permite que o Front-end atualize a interface dinamicamente.

---

# 🧠 Product Thinking

O Eco Connect AI não foi estruturado apenas como um exercício de Front-end.

O projeto procura representar uma ideia de produto B2B:

```text
Problema
   ↓
Usuário Corporativo
   ↓
Dados
   ↓
Indicadores
   ↓
Experiência
   ↓
Visualização
   ↓
Insight
   ↓
Decisão
```

Essa abordagem permite explorar conceitos relacionados a:

- Product Thinking;
- Data Products;
- ESG;
- Business Intelligence;
- Data Visualization;
- experiência do usuário;
- dashboards corporativos;
- evolução de produto;
- roadmap tecnológico.

---

# 🌱 ESG

ESG representa três dimensões:

## 🌎 Environmental

Indicadores relacionados ao impacto ambiental das organizações.

Exemplos:

- emissões;
- energia;
- recursos naturais;
- resíduos;
- sustentabilidade operacional.

## 👥 Social

Indicadores relacionados ao impacto das organizações sobre pessoas e sociedade.

Exemplos:

- diversidade;
- inclusão;
- segurança;
- desenvolvimento humano;
- responsabilidade social.

## 🏛️ Governance

Indicadores relacionados a governança e práticas corporativas.

Exemplos:

- compliance;
- transparência;
- gestão de riscos;
- controles;
- políticas corporativas.

O Eco Connect AI utiliza esse contexto como domínio de negócio para o protótipo.

---

# 🧩 Produto Atual e Visão de Evolução

A interface diferencia explicitamente as funcionalidades atuais das funcionalidades previstas para futuras versões.

## ✅ Dashboard ESG — Implementado

Inclui:

- indicadores simulados;
- filtros;
- visualização gráfica;
- atualização dinâmica;
- dataset JSON.

## 🛣️ ESG Digital Twin — Roadmap

Uma futura arquitetura poderia permitir simulações de cenários relacionados a:

- emissões;
- energia;
- operações;
- recursos;
- impactos ambientais.

Fluxo conceitual:

```text
Dados Operacionais
       ↓
Modelo Digital
       ↓
Simulação
       ↓
Cenários
       ↓
Impacto ESG
       ↓
Decisão
```

---

# 🤖 Inteligência Artificial — Roadmap

Apesar do nome **Eco Connect AI**, a versão atual **não utiliza modelos de Inteligência Artificial**.

A IA representa uma possível evolução futura do produto.

Uma arquitetura futura poderia combinar:

```text
Dados ESG
   ↓
Data Pipeline
   ↓
Banco de Dados
   ↓
Analytics
   ↓
Machine Learning / IA
   ↓
Detecção de Padrões
   ↓
Alertas
   ↓
Recomendações
   ↓
Dashboard
```

Possíveis aplicações:

- detecção de anomalias;
- análise de tendências;
- previsão de indicadores;
- classificação de riscos;
- geração de insights;
- processamento de documentos;
- análise de requisitos;
- recomendações;
- geração de relatórios.

---

# ⚖️ Compliance ESG — Roadmap

Outra possibilidade de evolução seria a utilização de tecnologia para apoiar processos relacionados a Compliance ESG.

Arquitetura conceitual:

```text
Fontes Externas
      ↓
Coleta
      ↓
Processamento
      ↓
Regras
      ↓
IA / NLP
      ↓
Classificação
      ↓
Alertas
      ↓
Dashboard
```

A versão atual **não monitora legislação, bases regulatórias ou fontes governamentais**.

---

# 📑 Relatórios ESG — Roadmap

Uma futura versão poderia transformar os dados consolidados em relatórios estruturados.

```text
Indicadores
     ↓
Análise
     ↓
Template
     ↓
Relatório
     ↓
Revisão
     ↓
Publicação
```

Poderiam ser explorados frameworks e padrões aplicáveis conforme o contexto do produto.

Nenhuma certificação oficial é emitida pela versão atual.

---

# 🛒 Marketplace ESG — Roadmap

O projeto também explora conceitualmente a possibilidade de criação de um ecossistema B2B.

```text
Empresas
   ↕
Eco Connect AI
   ↕
Fornecedores
   ↕
Soluções ESG
```

Esse modelo poderia conectar organizações a:

- consultorias;
- tecnologia;
- energia;
- sustentabilidade;
- gestão ambiental;
- soluções corporativas.

O Marketplace não está implementado na versão atual.

---

# 🖥️ Arquitetura Atual

```text
┌──────────────────────────┐
│         Usuário          │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│        index.html        │
│        Interface         │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│        script.js         │
│ Interação + Regras + DOM │
└─────────┬────────┬───────┘
          │        │
          ▼        ▼
┌──────────────┐  ┌──────────────┐
│  data.json   │  │   Chart.js   │
│ Dados ESG    │  │ Visualização │
└──────────────┘  └──────────────┘

          +

┌──────────────────────────┐
│        server.js         │
│     Node.js / Express    │
│   Backend Experimental   │
└──────────────────────────┘
```

---

# 🔮 Arquitetura Futura

Uma possível evolução para uma plataforma corporativa poderia assumir a seguinte estrutura:

```text
                 Usuários
                    │
                    ▼
              ┌───────────┐
              │ Front-end │
              └─────┬─────┘
                    │
                    ▼
              ┌───────────┐
              │    API    │
              └─────┬─────┘
                    │
        ┌───────────┼───────────┐
        │           │           │
        ▼           ▼           ▼
   ┌─────────┐ ┌─────────┐ ┌─────────┐
   │Database │ │Analytics│ │ AI / ML │
   └────┬────┘ └────┬────┘ └────┬────┘
        │           │           │
        └───────────┼───────────┘
                    │
                    ▼
             ┌────────────┐
             │ ESG Engine │
             └─────┬──────┘
                   │
                   ▼
          ┌─────────────────┐
          │ Insights/Alerts │
          └─────────────────┘
```

---

# 📨 Fluxo Demonstrativo B2B

O projeto inclui um formulário para demonstrar uma possível jornada de geração de leads.

```text
Visitante
    ↓
Nome
    ↓
E-mail
    ↓
Empresa
    ↓
Porte
    ↓
Solicitação
```

Existe um backend experimental em Node.js/Express com endpoint para receber uma solicitação de demonstração em ambientes compatíveis.

No deploy estático atual, caso o backend não esteja disponível, a aplicação informa explicitamente que:

```text
Nenhum dado foi enviado
```

em vez de apresentar uma confirmação falsa de processamento.

---

# 🔐 Tratamento de Dados

O formulário possui finalidade demonstrativa.

No ambiente público atual, quando o backend não está disponível:

- nenhum cadastro é realizado;
- nenhum lead é armazenado;
- nenhuma mensagem é enviada;
- nenhuma transação ocorre.

O projeto não deve ser interpretado como um sistema de produção para processamento de dados pessoais.

---

# 🛠️ Tecnologias

| Tecnologia | Aplicação |
|---|---|
| **HTML5** | Estrutura da interface |
| **CSS3** | Layout e experiência visual |
| **JavaScript** | Interatividade e lógica do Front-end |
| **JSON** | Dataset demonstrativo |
| **Chart.js** | Data Visualization |
| **Node.js** | Backend experimental |
| **Express** | Endpoint demonstrativo |
| **Git** | Controle de versão |
| **GitHub** | Versionamento e documentação |
| **Vercel** | Deploy do Front-end |

---

# 📂 Estrutura do Projeto

```text
ECO-CONNECT-AI/
│
├── index.html
├── style.css
├── script.js
├── data.json
├── server.js
└── README.md
```

---

# ▶️ Executando o Front-end

## 1. Clone o repositório

```bash
git clone https://github.com/MCLG1661/ECO-CONNECT-AI.git
```

## 2. Entre no diretório

```bash
cd ECO-CONNECT-AI
```

## 3. Execute

Como o dashboard carrega `data.json` através de `fetch()`, prefira executar o projeto através de um servidor local.

Uma opção é utilizar a extensão **Live Server** no VS Code.

---

# 🖥️ Backend Experimental

O repositório também contém:

```text
server.js
```

com uma implementação experimental em Node.js/Express para demonstrar como uma futura camada de backend poderia receber solicitações do formulário.

Essa camada não deve ser interpretada como uma API de produção.

---

# 🌐 Aplicação Online

O protótipo está publicado na Vercel:

**Eco Connect AI — ESG Platform**

https://eco-connect-ai-esg-plataform.vercel.app/

---

# 🧪 Testes Funcionais Realizados

O protótipo foi validado manualmente nos principais fluxos:

- carregamento da interface;
- carregamento dos dados JSON;
- seleção de empresa;
- seleção de período;
- atualização dos indicadores;
- atualização do gráfico;
- navegação;
- modais;
- formulário demonstrativo;
- tratamento da indisponibilidade do backend no deploy.

---

# 💼 Competências Demonstradas

## Data Visualization

- organização de indicadores;
- dashboards;
- séries temporais;
- filtros;
- Chart.js;
- comunicação visual de dados.

## Front-end Development

- HTML;
- CSS;
- JavaScript;
- DOM;
- eventos;
- manipulação dinâmica da interface;
- responsividade.

## Dados

- JSON;
- dados estruturados;
- seleção de recortes;
- transformação de dados em visualização.

## Backend

- Node.js;
- Express;
- endpoint REST demonstrativo;
- JSON;
- integração Front-end/Backend conceitual.

## Product Thinking

- problema de negócio;
- proposta de valor;
- experiência do usuário;
- funcionalidades;
- roadmap;
- arquitetura futura;
- produto B2B.

## ESG

- indicadores ambientais;
- indicadores sociais;
- governança;
- sustentabilidade;
- contexto corporativo.

## Engenharia de Software

- Git;
- GitHub;
- separação de responsabilidades;
- tratamento de erros;
- documentação;
- deploy.

---

# 📈 Visão de Negócio

O Eco Connect AI procura demonstrar uma abordagem na qual tecnologia começa pelo problema de negócio.

```text
ESG
 ↓
Dados
 ↓
Contexto
 ↓
Visualização
 ↓
Análise
 ↓
Insight
 ↓
Decisão
 ↓
Resultado
```

A proposta é explorar como **dados deixam de ser apenas registros e passam a funcionar como suporte à tomada de decisão**.

---

# 🚀 Roadmap

## Fase 1 — Protótipo

- [x] Interface web
- [x] Dataset ESG demonstrativo
- [x] Dashboard
- [x] Filtros
- [x] Chart.js
- [x] Modais
- [x] Formulário demonstrativo
- [x] Deploy

## Fase 2 — Data Platform

- [ ] Backend persistente
- [ ] Banco de dados
- [ ] API REST
- [ ] Autenticação
- [ ] Histórico
- [ ] ETL / ELT
- [ ] integrações externas

## Fase 3 — Analytics

- [ ] KPIs configuráveis
- [ ] benchmarking
- [ ] alertas
- [ ] análise de tendências
- [ ] previsão de indicadores
- [ ] dashboards customizáveis

## Fase 4 — Inteligência Artificial

- [ ] Machine Learning
- [ ] NLP
- [ ] LLM
- [ ] RAG
- [ ] detecção de anomalias
- [ ] classificação de risco
- [ ] recomendações
- [ ] geração de insights

## Fase 5 — Ecossistema

- [ ] Digital Twin
- [ ] Compliance inteligente
- [ ] relatórios avançados
- [ ] Marketplace ESG
- [ ] integrações corporativas

---

# ⚠️ Disclaimer

Este projeto possui finalidade exclusivamente **educacional, demonstrativa e de portfólio**.

Os dados apresentados são simulados.

O Eco Connect AI:

- não representa dados reais de empresas;
- não fornece certificação ESG;
- não realiza auditoria;
- não substitui consultoria especializada;
- não monitora legislação;
- não garante conformidade regulatória;
- não utiliza Inteligência Artificial na versão atual;
- não implementa Digital Twin na versão atual;
- não possui Marketplace funcional;
- não deve ser utilizado para tomada de decisão empresarial real.

As funcionalidades avançadas apresentadas como **Roadmap** representam possibilidades de evolução do produto.

---

# 👨‍💻 Autor

**Marcus Guedes**

Marketing | Data Science | Inteligência Artificial | Gestão de Projetos

**GitHub:** [MCLG1661](https://github.com/MCLG1661)

**LinkedIn:** [Marcus Guedes](https://www.linkedin.com/in/marcusguedes/)

---

# ⭐ Sobre este Projeto

O Eco Connect AI representa a exploração de uma ideia desde o **problema de negócio até um protótipo funcional**, conectando:

**ESG + Data Visualization + JavaScript + Product Thinking + visão de evolução para Analytics e Inteligência Artificial.**

---

🌱 **Transformando dados ESG em informação visual para apoiar decisões mais sustentáveis.**
