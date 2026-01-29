document.addEventListener('DOMContentLoaded', () => {
    // --- Navegação Mobile ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // --- Scroll Suave ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Botões CTA ---
    document.getElementById('ctaBtn').addEventListener('click', () => {
        document.getElementById('demo-form-section').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('saibaMaisBtn').addEventListener('click', () => {
        document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
    });

    // --- Dashboard Logic ---
    let dashboardData = {};
    let esgChart = null;

    // Carregar dados
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            dashboardData = data;
            updateDashboard();
        })
        .catch(error => console.error('Erro ao carregar dados:', error));

    // Elementos do Dashboard
    const companySelect = document.getElementById('companySelect');
    const timeframeSelect = document.getElementById('timeframeSelect');
    const refreshBtn = document.getElementById('refreshData');

    refreshBtn.addEventListener('click', () => {
        refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Atualizando...';
        setTimeout(() => {
            updateDashboard();
            refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Atualizar Dados';
        }, 800);
    });

    companySelect.addEventListener('change', updateDashboard);
    timeframeSelect.addEventListener('change', updateDashboard);

    function updateDashboard() {
        if (!dashboardData.companies) return;

        const company = companySelect.value;
        const timeframe = timeframeSelect.value;
        const data = dashboardData.companies[company][timeframe];

        // Atualizar Métricas
        const metricsContainer = document.querySelector('.dashboard-metrics');
        metricsContainer.innerHTML = '';

        data.metrics.forEach(metric => {
            const trendIcon = metric.trend === 'up' ? 'fa-arrow-up' : (metric.trend === 'down' ? 'fa-arrow-down' : 'fa-minus');
            const trendClass = metric.trend === 'up' ? 'up' : (metric.trend === 'down' ? 'down' : 'steady');
            
            // Lógica simples para cor da tendência (verde se for bom)
            let colorClass = 'steady';
            if (metric.goodTrend === 'up' && metric.trend === 'up') colorClass = 'up';
            else if (metric.goodTrend === 'down' && metric.trend === 'down') colorClass = 'up'; // Redução de algo ruim é bom (verde)
            else if (metric.trend !== 'steady') colorClass = 'down'; // Tendência ruim (vermelho - usando classe down que definiremos no CSS se precisar, ou reusando classes existentes)
            
            // Ajuste visual rápido: up = verde, steady = amarelo. Vamos simplificar usando as classes do CSS existente
            const visualClass = (metric.goodTrend === metric.trend) ? 'up' : 'steady';

            const html = `
                <div class="metric">
                    <div class="metric-title">${metric.name}</div>
                    <div class="metric-value">${metric.value}</div>
                    <div class="metric-trend ${visualClass}"><i class="fas ${trendIcon}"></i> ${metric.change}</div>
                </div>
            `;
            metricsContainer.innerHTML += html;
        });

        // Atualizar Gráfico
        updateChart(data.chart);
    }

    function updateChart(chartData) {
        const ctx = document.getElementById('esgChart').getContext('2d');
        
        if (esgChart) {
            esgChart.destroy();
        }

        esgChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Score ESG',
                    data: chartData.values,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Evolução do Score ESG'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    // --- Modal Logic ---
    const modal = document.getElementById('featureModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    const featureDetails = {
        dashboard: {
            title: "Dashboard ESG Autônomo",
            content: "<p>Nosso dashboard centraliza todas as suas métricas ESG em um único lugar. Conecte-se via API a seus sistemas ERP, CRM e IoT para ingestão automática de dados.</p><p><strong>Benefícios:</strong></p><ul><li>Visão holística da sustentabilidade</li><li>Eliminação de planilhas manuais</li><li>Rastreabilidade de dados para auditoria</li></ul>"
        },
        twin: {
            title: "ESG Digital Twin",
            content: "<p>Crie uma réplica digital de suas operações para simular cenários de impacto ambiental. Teste mudanças em processos produtivos antes de implementá-los fisicamente.</p><p><strong>Funcionalidades:</strong></p><ul><li>Simulação de pegada de carbono</li><li>Otimização de consumo energético</li><li>Análise de ciclo de vida do produto</li></ul>"
        },
        compliance: {
            title: "IA para Prevenção de Multas",
            content: "<p>Nossa IA monitora continuamente diários oficiais e legislações ambientais em mais de 50 países, cruzando com seus dados operacionais para identificar riscos de não-conformidade.</p>"
        },
        certification: {
            title: "Certificação ESG Automatizada",
            content: "<p>Gere relatórios prontos para auditoria (GRI, SASB, TCFD) com um clique. Utilizamos Blockchain para garantir a imutabilidade e veracidade dos dados apresentados aos stakeholders.</p>"
        },
        marketplace: {
            title: "Marketplace de Soluções ESG",
            content: "<p>Acesse uma rede curada de fornecedores sustentáveis. De compra de créditos de carbono a fornecedores de embalagens biodegradáveis, encontre parceiros alinhados com seus valores.</p>"
        }
    };

    document.querySelectorAll('.btn-feature').forEach(btn => {
        btn.addEventListener('click', () => {
            const feature = btn.getAttribute('data-feature');
            if (featureDetails[feature]) {
                modalTitle.innerText = featureDetails[feature].title;
                modalContent.innerHTML = featureDetails[feature].content;
                modal.classList.add('active');
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // --- Form Submission ---
    const demoForm = document.querySelector('.demo-form');
    const submitBtn = document.getElementById('solicitarDemo');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        if(nome && email) {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado com Sucesso!';
            submitBtn.style.backgroundColor = '#059669';
            setTimeout(() => {
                submitBtn.innerText = 'Solicitar Demonstração';
                submitBtn.style.backgroundColor = '';
                document.querySelectorAll('.form-input').forEach(input => input.value = '');
            }, 3000);
            // Aqui você adicionaria a chamada fetch para o backend
        } else {
            alert('Por favor, preencha os campos obrigatórios.');
        }
    });
});
