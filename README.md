# ECO CONNECT AI
Plataforma de Governança e Otimização Sustentável
---
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
---
Este projeto é a landing page da **Eco Connect AI**, uma plataforma B2B fictícia projetada para revolucionar a forma como as empresas gerenciam, otimizam e comprovam suas práticas de **ESG (Ambiental, Social e Governança)**. A página é moderna, responsiva e interativa, servindo como a principal vitrine da solução.
---
## ✨ Funcionalidades

A landing page implementa diversas funcionalidades para criar uma experiência de usuário rica e informativa:

- **Design Responsivo:** Totalmente adaptável para desktops, tablets e dispositivos móveis.
- **Navegação Fixa e Suave:** O menu de navegação permanece no topo da página e os links internos possuem rolagem suave.
- **Dashboard Interativo:** Uma seção de dashboard que carrega dados de um arquivo `data.json` e exibe métricas e um gráfico dinâmico (usando Chart.js) que pode ser filtrado por empresa e período.
- **Modais de Funcionalidades:** Cards de funcionalidades que, ao serem clicados, abrem um modal com informações detalhadas sobre cada recurso da plataforma.
- **Formulário Funcional:** Um formulário de "Solicitar Demonstração" que envia os dados para um back-end local.
- **Back-end Simples:** Um servidor Node.js com Express para receber e processar as solicitações do formulário.
---
## 🚀 Tecnologias Utilizadas

O projeto foi construído com tecnologias web modernas e populares:

- **Front-end:**
  - HTML5
  - CSS3 (com Variáveis CSS para fácil customização)
  - JavaScript (ES6+)
  - Chart.js para a visualização de gráficos.
  - Font Awesome para os ícones.

- **Back-end:**
  - Node.js
  - Express.js

## ⚙️ Instalação e Execução

Para rodar este projeto localmente, siga os passos abaixo.

## Pré-requisitos

- Node.js instalado em sua máquina.

## Passos

1.  **Clone o repositório (ou baixe os arquivos):**
    ```bash
    # Se estiver usando Git
    git clone https://github.com/seu-usuario/eco-connect-ai.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Agente ECO - CONNECT
    ```

3.  **Instale as dependências do back-end:**
    O único pacote necessário para o servidor é o `express`.
    ```bash
    npm install express
    ```

4.  **Inicie o servidor back-end:**
    Abra um terminal na pasta do projeto e execute:
    ```bash
    node server.js
    ```
    Você deverá ver a mensagem `Servidor rodando em http://localhost:3000` no seu terminal.

5.  **Abra o front-end:**
    Abra o arquivo `index.html` diretamente no seu navegador de preferência (ex: Google Chrome, Firefox).

Agora a aplicação estará totalmente funcional! Você pode navegar pela página, interagir com o dashboard e testar o envio do formulário de demonstração.

## 📁 Estrutura de Arquivos

```
Agente ECO - CONNECT/
├── 📄 index.html       # Estrutura principal da página
├── 🎨 style.css        # Estilos visuais
├── ⚙️ script.js        # Lógica de interatividade do front-end
├── 🖥️ server.js        # Servidor back-end (Node.js/Express)
├── 📊 data.json        # Dados simulados para o dashboard
└── 📖 README.md        # Este arquivo
```
---
## 📬 Contato

Projeto desenvolvido por Marcus  
📧 Email: mclguedes@gmail.com  
📱 LinkedIn: https://www.linkedin.com/in/marcusguedes

Este projeto foi desenvolvido como uma demonstração de uma aplicação web moderna e completa, integrando front-end e back-end para uma funcionalidade de ponta a ponta.
