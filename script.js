document.addEventListener("DOMContentLoaded", () => {

    // ==========================================================
    // ECO CONNECT AI
    // Plataforma demonstrativa B2B para indicadores ESG
    // ==========================================================


    // ==========================================================
    // NAVEGAÇÃO MOBILE
    // ==========================================================

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach((link) => {

            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });

        });
    }


    // ==========================================================
    // SCROLL SUAVE
    // ==========================================================

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((anchor) => {

            anchor.addEventListener("click", function (event) {

                const targetId = this.getAttribute("href");

                if (!targetId || targetId === "#") {
                    return;
                }

                const target = document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            });

        });


    // ==========================================================
    // CTAs
    // ==========================================================

    const ctaBtn = document.getElementById("ctaBtn");
    const saibaMaisBtn = document.getElementById("saibaMaisBtn");

    if (ctaBtn) {

        ctaBtn.addEventListener("click", () => {

            const demoSection =
                document.getElementById("demo-form-section");

            if (demoSection) {

                demoSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    if (saibaMaisBtn) {

        saibaMaisBtn.addEventListener("click", () => {

            const features =
                document.getElementById("features");

            if (features) {

                features.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    // ==========================================================
    // DASHBOARD ESG
    // ==========================================================

    let dashboardData = {};
    let esgChart = null;

    const companySelect =
        document.getElementById("companySelect");

    const timeframeSelect =
        document.getElementById("timeframeSelect");

    const refreshBtn =
        document.getElementById("refreshData");


    // ----------------------------------------------------------
    // CARREGAMENTO DOS DADOS
    // ----------------------------------------------------------

    fetch("data.json")

        .then((response) => {

            if (!response.ok) {
                throw new Error(
                    `Erro HTTP: ${response.status}`
                );
            }

            return response.json();

        })

        .then((data) => {

            dashboardData = data;

            updateDashboard();

        })

        .catch((error) => {

            console.error(
                "Erro ao carregar os dados ESG:",
                error
            );

            showDashboardError();

        });


    // ----------------------------------------------------------
    // EVENTOS DOS FILTROS
    // ----------------------------------------------------------

    if (companySelect) {

        companySelect.addEventListener(
            "change",
            updateDashboard
        );

    }


    if (timeframeSelect) {

        timeframeSelect.addEventListener(
            "change",
            updateDashboard
        );

    }


    if (refreshBtn) {

        refreshBtn.addEventListener("click", () => {

            const originalContent =
                refreshBtn.innerHTML;

            refreshBtn.disabled = true;

            refreshBtn.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Atualizando...';


            setTimeout(() => {

                updateDashboard();

                refreshBtn.innerHTML =
                    originalContent;

                refreshBtn.disabled = false;

            }, 600);

        });

    }


    // ----------------------------------------------------------
    // ATUALIZAÇÃO DO DASHBOARD
    // ----------------------------------------------------------

    function updateDashboard() {

        if (
            !dashboardData ||
            !dashboardData.companies ||
            !companySelect ||
            !timeframeSelect
        ) {
            return;
        }


        const company =
            companySelect.value;

        const timeframe =
            timeframeSelect.value;


        const companyData =
            dashboardData.companies[company];


        if (!companyData) {

            showDashboardError(
                "Empresa não encontrada nos dados demonstrativos."
            );

            return;

        }


        const data =
            companyData[timeframe];


        if (!data) {

            showDashboardError(
                "Não existem dados para o período selecionado."
            );

            return;

        }


        updateMetrics(data.metrics || []);

        updateChart(data.chart);

    }


    // ----------------------------------------------------------
    // MÉTRICAS
    // ----------------------------------------------------------

    function updateMetrics(metrics) {

        const metricsContainer =
            document.querySelector(
                ".dashboard-metrics"
            );


        if (!metricsContainer) {
            return;
        }


        metricsContainer.innerHTML = "";


        if (!metrics.length) {

            metricsContainer.innerHTML =
                "<p>Nenhum indicador disponível para este recorte.</p>";

            return;

        }


        metrics.forEach((metric) => {

            const trendIcon =
                metric.trend === "up"
                    ? "fa-arrow-up"
                    : metric.trend === "down"
                        ? "fa-arrow-down"
                        : "fa-minus";


            const visualClass =
                getTrendClass(metric);


            const metricElement =
                document.createElement("div");


            metricElement.className =
                "metric";


            metricElement.innerHTML = `
                <div class="metric-title">
                    ${escapeHTML(metric.name)}
                </div>

                <div class="metric-value">
                    ${escapeHTML(metric.value)}
                </div>

                <div class="metric-trend ${visualClass}">
                    <i class="fas ${trendIcon}"></i>
                    ${escapeHTML(metric.change)}
                </div>
            `;


            metricsContainer.appendChild(
                metricElement
            );

        });

    }


    // ----------------------------------------------------------
    // CLASSIFICAÇÃO VISUAL DA TENDÊNCIA
    // ----------------------------------------------------------

    function getTrendClass(metric) {

        if (
            metric.trend === "steady" ||
            !metric.trend
        ) {
            return "steady";
        }


        if (
            metric.goodTrend === metric.trend
        ) {
            return "up";
        }


        return "down";

    }


    // ----------------------------------------------------------
    // GRÁFICO
    // ----------------------------------------------------------

    function updateChart(chartData) {

        const chartElement =
            document.getElementById("esgChart");


        if (
            !chartElement ||
            !chartData ||
            typeof Chart === "undefined"
        ) {
            return;
        }


        const ctx =
            chartElement.getContext("2d");


        if (esgChart) {

            esgChart.destroy();

        }


        esgChart = new Chart(ctx, {

            type: "line",

            data: {

                labels:
                    chartData.labels || [],

                datasets: [

                    {
                        label: "Score ESG",

                        data:
                            chartData.values || [],

                        borderColor:
                            "#10b981",

                        backgroundColor:
                            "rgba(16, 185, 129, 0.1)",

                        tension: 0.4,

                        fill: true
                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        position: "top"
                    },

                    title: {
                        display: true,
                        text: "Evolução do Score ESG"
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


    // ----------------------------------------------------------
    // ERRO DO DASHBOARD
    // ----------------------------------------------------------

    function showDashboardError(
        message = "Não foi possível carregar os indicadores demonstrativos."
    ) {
        if (esgChart) {
            esgChart.destroy();
            esgChart = null;
        }

        const metricsContainer =
            document.querySelector(
                ".dashboard-metrics"
            );


        if (metricsContainer) {

            metricsContainer.innerHTML =
                `<p>${escapeHTML(message)}</p>`;

        }

    }


    // ==========================================================
    // MODAIS — VISÃO DO PRODUTO / ROADMAP
    // ==========================================================

    const modal =
        document.getElementById(
            "featureModal"
        );

    const closeModal =
        document.getElementById(
            "closeModal"
        );

    const modalTitle =
        document.getElementById(
            "modalTitle"
        );

    const modalContent =
        document.getElementById(
            "modalContent"
        );


    const featureDetails = {

        dashboard: {

            title:
                "Dashboard ESG — Protótipo Atual",

            content: `
                <p>
                    O protótipo atual demonstra a centralização
                    e visualização de indicadores ESG utilizando
                    dados estruturados em JSON e gráficos
                    interativos com Chart.js.
                </p>

                <p>
                    <strong>Implementado nesta versão:</strong>
                </p>

                <ul>
                    <li>Indicadores ESG demonstrativos</li>
                    <li>Filtro por empresa</li>
                    <li>Filtro por período</li>
                    <li>Visualização gráfica</li>
                    <li>Atualização dinâmica da interface</li>
                </ul>
            `

        },


        twin: {

            title:
                "ESG Digital Twin — Roadmap",

            content: `
                <p>
                    Conceito de evolução futura do Eco Connect AI.
                </p>

                <p>
                    Uma arquitetura de Digital Twin poderia permitir
                    a simulação de cenários operacionais e ambientais
                    antes da implementação de mudanças no ambiente real.
                </p>

                <p>
                    <strong>Possibilidades futuras:</strong>
                </p>

                <ul>
                    <li>Simulação de pegada de carbono</li>
                    <li>Análise de consumo energético</li>
                    <li>Modelagem de cenários ESG</li>
                    <li>Análise de ciclo de vida</li>
                </ul>

                <p>
                    <small>
                        Recurso conceitual não implementado
                        na versão atual.
                    </small>
                </p>
            `

        },


        compliance: {

            title:
                "IA para Compliance ESG — Roadmap",

            content: `
                <p>
                    Visão de evolução para utilização de Inteligência
                    Artificial no apoio à análise de riscos e requisitos
                    relacionados a ESG e compliance.
                </p>

                <p>
                    Uma futura implementação poderia integrar fontes
                    externas, mecanismos de busca, regras de negócio
                    e modelos de IA para auxiliar a interpretação
                    das informações.
                </p>

                <p>
                    <small>
                        A versão atual não monitora legislação,
                        diários oficiais ou bases regulatórias.
                    </small>
                </p>
            `

        },


        certification: {

            title:
                "Relatórios e Certificações — Roadmap",

            content: `
                <p>
                    Conceito de evolução para geração estruturada
                    de relatórios ESG e apoio aos processos
                    de reporte corporativo.
                </p>

                <p>
                    Uma futura versão poderia incorporar modelos
                    e frameworks aplicáveis ao contexto ESG,
                    além de mecanismos adicionais de rastreabilidade.
                </p>

                <p>
                    <small>
                        Certificação automatizada e blockchain
                        não estão implementados nesta versão.
                    </small>
                </p>
            `

        },


        marketplace: {

            title:
                "Marketplace ESG — Roadmap",

            content: `
                <p>
                    Conceito de marketplace B2B para conectar
                    organizações a fornecedores, serviços e
                    soluções relacionadas à sustentabilidade.
                </p>

                <p>
                    A funcionalidade representa uma possibilidade
                    futura de expansão do ecossistema Eco Connect AI.
                </p>

                <p>
                    <small>
                        Marketplace não implementado
                        na versão atual.
                    </small>
                </p>
            `

        }

    };


    document
        .querySelectorAll(".btn-feature")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const feature =
                        button.getAttribute(
                            "data-feature"
                        );


                    const details =
                        featureDetails[feature];


                    if (
                        !details ||
                        !modal ||
                        !modalTitle ||
                        !modalContent
                    ) {
                        return;
                    }


                    modalTitle.textContent =
                        details.title;


                    modalContent.innerHTML =
                        details.content;


                    modal.classList.add(
                        "active"
                    );

                }
            );

        });


    if (closeModal && modal) {

        closeModal.addEventListener(
            "click",
            () => {

                modal.classList.remove(
                    "active"
                );

            }
        );

    }


    if (modal) {

        window.addEventListener(
            "click",
            (event) => {

                if (event.target === modal) {

                    modal.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    // ==========================================================
    // FORMULÁRIO DE DEMONSTRAÇÃO
    // ==========================================================

    const demoForm =
        document.querySelector(
            ".demo-form"
        );

    const submitBtn =
        document.getElementById(
            "solicitarDemo"
        );


    if (submitBtn && demoForm) {

        submitBtn.addEventListener(
            "click",
            async (event) => {

                event.preventDefault();


                const nomeInput =
                    document.getElementById(
                        "nome"
                    );

                const emailInput =
                    document.getElementById(
                        "email"
                    );

                const empresaInput =
                    document.getElementById(
                        "empresa"
                    );


                const nome =
                    nomeInput
                        ? nomeInput.value.trim()
                        : "";


                const email =
                    emailInput
                        ? emailInput.value.trim()
                        : "";


                const empresa =
                    empresaInput
                        ? empresaInput.value.trim()
                        : "";


                if (!nome || !email) {

                    alert(
                        "Por favor, preencha os campos obrigatórios."
                    );

                    return;

                }


                if (!isValidEmail(email)) {

                    alert(
                        "Informe um endereço de e-mail válido."
                    );

                    return;

                }


                const originalContent =
                    submitBtn.innerHTML;


                submitBtn.disabled = true;

                submitBtn.innerHTML =
                    '<i class="fas fa-spinner fa-spin"></i> Enviando...';


                try {

                    const response =
                        await fetch(
                            "/api/demo",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body: JSON.stringify({
                                    nome,
                                    email,
                                    empresa
                                })
                            }
                        );


                    if (!response.ok) {

                        throw new Error(
                            `Erro HTTP ${response.status}`
                        );

                    }


                    const result =
                        await response.json();


                    console.log(
                        "Resposta do servidor:",
                        result
                    );


                    showFormSuccess(
                        submitBtn,
                        originalContent
                    );


                    clearDemoForm();

                } catch (error) {

                    console.warn(
                        "Backend não disponível neste ambiente:",
                        error
                    );


                    // --------------------------------------------------
                    // O deploy estático na Vercel pode não executar
                    // server.js como um servidor Express persistente.
                    //
                    // Nesse cenário, mantemos o formulário como
                    // demonstração de UX, mas deixamos isso explícito.
                    // --------------------------------------------------

                    submitBtn.innerHTML =
                        '<i class="fas fa-exclamation-triangle"></i> Envio não confirmado';


                    submitBtn.style.backgroundColor =
                        "#b45309";


                    alert(
                        "Não foi possível confirmar o envio da solicitação demonstrativa.\n\n" +
                        "Verifique a disponibilidade do backend."
                    );



                    setTimeout(() => {

                        submitBtn.innerHTML =
                            originalContent;

                        submitBtn.style.backgroundColor =
                            "";

                        submitBtn.disabled =
                            false;

                    }, 3000);

                }

            }
        );

    }


    // ----------------------------------------------------------
    // SUCESSO DO FORMULÁRIO
    // ----------------------------------------------------------

    function showFormSuccess(
        button,
        originalContent
    ) {

        button.innerHTML =
            '<i class="fas fa-check"></i> Enviado com Sucesso!';


        button.style.backgroundColor =
            "#059669";


        setTimeout(() => {

            button.innerHTML =
                originalContent;

            button.style.backgroundColor =
                "";

            button.disabled =
                false;

        }, 3000);

    }


    // ----------------------------------------------------------
    // LIMPEZA DO FORMULÁRIO
    // ----------------------------------------------------------

    function clearDemoForm() {

        document
            .querySelectorAll(
                ".demo-form .form-input"
            )
            .forEach((input) => {

                input.value = "";

            });

    }


    // ----------------------------------------------------------
    // VALIDAÇÃO DE E-MAIL
    // ----------------------------------------------------------

    function isValidEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            email
        );

    }


    // ----------------------------------------------------------
    // ESCAPE BÁSICO DE HTML
    // ----------------------------------------------------------

    function escapeHTML(value) {

        if (
            value === null ||
            value === undefined
        ) {
            return "";
        }


        return String(value)

            .replaceAll("&", "&amp;")

            .replaceAll("<", "&lt;")

            .replaceAll(">", "&gt;")

            .replaceAll('"', "&quot;")

            .replaceAll("'", "&#039;");

    }

});
