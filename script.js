document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    // Seleciona o hamburger e o menu de navegação
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // --- Menu Hamburger ---
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // --- Conteúdo do Modal para Funcionalidades ---
    const featureDetails = {
        dashboard: {
            title: "Dashboard ESG Autônomo",
            content: `
                <p>Nossa plataforma centraliza e automatiza a coleta de dados de diversas fontes, como sistemas ERP, sensores IoT, planilhas e diretamente de seus fornecedores. A Inteligência Artificial entra em ação para:</p>
                <ul>
                    <li><strong>Padronizar Informações:</strong> Converte dados de formatos variados em um padrão único e consistente.</li>
                    <li><strong>Analisar e Cruzar Dados:</strong> Identifica correlações, tendências e anomalias que seriam impossíveis de detectar manualmente.</li>
                    <li><strong>Gerar Indicadores Chave:</strong> Calcula automaticamente KPIs essenciais, como pegada de carbono, consumo de água, taxa de diversidade e conformidade regulatória.</li>
                    <li><strong>Alertar sobre Falhas:</strong> Notifica proativamente sobre desvios de metas ou possíveis problemas, permitindo uma ação rápida.</li>
                </ul>
                <p>Tenha uma visão 360º do seu desempenho ESG em tempo real, com gráficos interativos e relatórios personalizáveis.</p>
            `
        },
        twin: {
            title: "ESG Digital Twin",
            content: `
                <p>O Digital Twin (Gêmeo Digital) é uma réplica virtual de suas operações. Com ele, você pode simular cenários futuros sem impactar o mundo real, tomando decisões mais seguras e estratégicas.</p>
                <ul>
                    <li><strong>Simulação de Impacto Ambiental:</strong> Teste o efeito de novas tecnologias na redução de CO₂, consumo de energia e geração de resíduos.</li>
                    <li><strong>Análise de Impacto Social:</strong> Projete como mudanças em políticas de contratação ou programas de desenvolvimento comunitário afetarão seus indicadores sociais.</li>
                    <li><strong>Avaliação de Riscos de Governança:</strong> Simule o impacto de novas regulamentações ou mudanças na estrutura de governança para garantir a resiliência do negócio.</li>
                </ul>
                <p>Apresente projeções baseadas em dados para investidores e stakeholders, demonstrando um planejamento ESG robusto e visionário.</p>
            `
        },
        compliance: {
            title: "IA para Prevenção de Multas e Riscos",
            content: `
                <p>Manter-se em conformidade com a legislação é um desafio constante. Nossa IA atua como um vigilante incansável para proteger sua empresa.</p>
                <ul>
                    <li><strong>Monitoramento Contínuo:</strong> A IA varre bancos de dados de legislações ambientais, normas trabalhistas (NRs), leis de governança e exigências setoriais em tempo real.</li>
                    <li><strong>Alertas Preditivos:</strong> O sistema não apenas informa sobre uma nova lei, mas também analisa suas operações e alerta sobre quais processos precisam de ajuste para evitar infrações.</li>
                    <li><strong>Gestão de Documentação:</strong> Centraliza e gerencia licenças, certificados e outros documentos, alertando sobre prazos de renovação e pendências.</li>
                </ul>
                <p>Reduza drasticamente os riscos legais e financeiros, transformando o compliance de um centro de custo em uma vantagem competitiva.</p>
            `
        },
        certification: {
            title: "Certificação ESG Automatizada com Blockchain",
            content: `
                <p>A confiança é a moeda do ESG. Nossa plataforma garante a veracidade e a imutabilidade das suas informações, combatendo o greenwashing.</p>
                <ul>
                    <li><strong>Trilha de Evidência Auditável:</strong> Cada dado coletado e cada indicador gerado possui uma trilha de auditoria completa, mostrando sua origem e todas as transformações sofridas.</li>
                    <li><strong>Relatórios Automatizados:</strong> Gere relatórios para GRI, SASB, TCFD e outros frameworks com apenas alguns cliques, com dados já validados.</li>
                    <li><strong>Segurança com Blockchain:</strong> Os certificados e principais marcos de desempenho podem ser registrados em blockchain, criando uma prova pública, inviolável e antifraude de suas conquistas ESG.</li>
                </ul>
                <p>Aumente a credibilidade da sua marca perante o mercado, clientes e investidores com dados que resistem a qualquer escrutínio.</p>
            `
        },
        marketplace: {
            title: "Marketplace de Soluções ESG",
            content: `
                <p>Acelere sua jornada ESG conectando-se com os parceiros certos. Nosso marketplace é um ecossistema de fornecedores e soluções sustentáveis, todos previamente verificados.</p>
                <ul>
                    <li><strong>Fornecedores Certificados:</strong> Encontre empresas de energia renovável, gestão de resíduos, logística reversa, consultorias especializadas e muito mais.</li>
                    <li><strong>Inteligência de Compras:</strong> A plataforma pode sugerir fornecedores com base nas suas metas de redução de emissões ou necessidades de economia circular.</li>
                    <li><strong>Homologação Simplificada:</strong> Acesse a documentação e certificações dos fornecedores diretamente na plataforma, agilizando o processo de contratação.</li>
                </ul>
                <p>Transforme sua cadeia de suprimentos em uma rede de valor sustentável, otimizando custos e impacto positivo.</p>
            `
        }
    };

    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove a classe 'active' de todos os cards
            featureCards.forEach(c => c.classList.remove('active'));
            // Adiciona a classe 'active' apenas no card clicado
            card.classList.add('active');
        });
    });

    // --- Lógica do Modal ---
    const modal = document.getElementById('featureModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.getElementById('closeModal');
    const featureButtons = document.querySelectorAll('.btn-feature');

    featureButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede que o evento de clique do card seja disparado
            const featureKey = button.getAttribute('data-feature');
            const details = featureDetails[featureKey];

            if (details) {
                modalTitle.textContent = details.title;
                modalContent.innerHTML = details.content;
                modal.classList.add('active');
            }
        });
    });

    const closeModal = () => modal.classList.remove('active');

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    // --- Funcionalidade de Scroll Suave para Botões ---

    // Função para rolar para um elemento
    const scrollToSection = (elementId) => {
        const section = document.getElementById(elementId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Botões que levam para o formulário de demonstração
    const demoButtons = ['ctaBtn', 'solicitarDemo'];
    demoButtons.forEach(id => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', (e) => { e.preventDefault(); scrollToSection('demo-form-section'); });
        }
    });

    // Botão "Saiba Mais" que leva para as funcionalidades
    const saibaMaisBtn = document.getElementById('saibaMaisBtn');
    if (saibaMaisBtn) {
        saibaMaisBtn.addEventListener('click', (e) => { e.preventDefault(); scrollToSection('features'); });
    }

    // --- Lógica do Dashboard Interativo ---
    const companySelect = document.getElementById('companySelect');
    const timeframeSelect = document.getElementById('timeframeSelect');
    const refreshButton = document.getElementById('refreshData');
    const metricsContainer = document.querySelector('.dashboard-metrics');
    const chartCanvas = document.getElementById('esgChart');
    let esgChart; // Variável para armazenar a instância do gráfico

    // Função para buscar os dados do JSON
    async function fetchData() {
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Não foi possível carregar os dados do dashboard:", error);
            metricsContainer.innerHTML = `<p style="color: var(--red-color);">Erro ao carregar dados. Tente novamente.</p>`;
        }
    }

    // Função para atualizar as métricas na tela
    function updateMetrics(metrics) {
        metricsContainer.innerHTML = ''; // Limpa as métricas existentes
        if (!metrics || metrics.length === 0) {
            metricsContainer.innerHTML = `<p>Nenhum dado disponível para esta seleção.</p>`;
            return;
        }

        metrics.forEach(metric => {
            const trendIcon = metric.trend === 'up' ? 'fa-arrow-up' : (metric.trend === 'down' ? 'fa-arrow-down' : 'fa-minus');
            const trendColor = metric.trend === 'up' ? 'var(--primary-color)' : (metric.trend === 'down' ? 'var(--red-color)' : 'var(--yellow-color)');

            const metricHTML = `
                <div class="metric">
                    <div class="metric-title">${metric.label}</div>
                    <div class="metric-value">${metric.value}</div>
                    <div class="metric-trend" style="color: ${trendColor};">
                        <i class="fas ${trendIcon}"></i> ${metric.change}
                    </div>
                </div>
            `;
            metricsContainer.innerHTML += metricHTML;
        });
    }

    // Função para atualizar o gráfico
    function updateChart(chartData, timeframe) {
        const labels = {
            monthly: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
            quarterly: ['Mês 1', 'Mês 2', 'Mês 3', 'Mês 4'],
            yearly: ['Trimestre 1', 'Trimestre 2', 'Trimestre 3', 'Trimestre 4']
        };

        if (esgChart) {
            esgChart.destroy(); // Destrói o gráfico anterior para criar um novo
        }

        esgChart = new Chart(chartCanvas, {
            type: 'line',
            data: {
                labels: labels[timeframe] || [],
                datasets: [{
                    label: 'Evolução do Principal Indicador',
                    data: chartData,
                    borderColor: 'var(--primary-color)',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Função principal que orquestra as atualizações
    async function updateDashboard() {
        const allData = await fetchData();
        if (!allData) return;

        const selectedCompanyKey = companySelect.value.split('_')[0]; // Pega a chave principal (ex: 'manufacturing')
        const selectedTimeframe = timeframeSelect.value;

        const data = allData[selectedCompanyKey]?.[selectedTimeframe];

        updateMetrics(data?.metrics || []);
        updateChart(data?.chartData || [], selectedTimeframe);
    }

    // Adiciona os event listeners para os controles
    companySelect.addEventListener('change', updateDashboard);
    timeframeSelect.addEventListener('change', updateDashboard);
    refreshButton.addEventListener('click', updateDashboard);

    // Carga inicial dos dados do dashboard
    updateDashboard();

    // --- Lógica do Formulário de Demonstração ---
    const demoForm = document.querySelector('.demo-form');
    const solicitarDemoBtn = document.getElementById('solicitarDemo');

    solicitarDemoBtn.addEventListener('click', async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do botão

        // Coleta os dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const empresa = document.getElementById('empresa').value;
        const funcionarios = document.getElementById('funcionarios').value;

        // Validação simples
        if (!nome || !email || !empresa || !funcionarios) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            // Envia os dados para o back-end (que deve estar rodando em http://localhost:3000)
            const response = await fetch('http://localhost:3000/solicitar-demo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email, empresa, funcionarios }),
            });

            const result = await response.json();

            alert(result.message); // Exibe a mensagem de sucesso do servidor
            demoForm.reset(); // Limpa o formulário
        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
            alert('Não foi possível enviar sua solicitação. Verifique se o servidor está ativo e tente novamente.');
        }
    });

    // --- Lógica do Botão de Login/Cadastro (Placeholder) ---
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('A funcionalidade de Login/Cadastro será implementada em breve!');
        });
    }
});