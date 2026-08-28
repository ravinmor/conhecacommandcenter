export function presentationInternacaoOccupancySlide() {
  return `
    <section class="program-slide inpatient-occupancy-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">Unidade de Internação</span>
          <span class="type-pill front-inteligencia-operacional">Inteligência Operacional</span>
        </div>
        <span class="eyebrow">BI Ocupação em Tempo Real</span>
        <h2>Ocupação dos leitos monitorada ao vivo para regular a rede com precisão.</h2>
        <p>
          O Command Center acompanha leitos ativos, leitos ocupados e ocupação por unidade em tempo real.
          Essa visibilidade orienta a regulação entre hospitais, apoia a oferta de vagas para a operadora e
          ajuda a manter uma operação saudável na internação.
        </p>
        <div class="program-metrics inpatient-metrics">
          <article>
            <span>Leitos ativos</span>
            <strong>1.920</strong>
            <small>capacidade visível por unidade</small>
          </article>
          <article>
            <span>Ocupados</span>
            <strong>1.611</strong>
            <small>posição operacional do momento</small>
          </article>
          <article class="success">
            <span>Ocupação atual</span>
            <strong>84%</strong>
            <small>base para regulação entre unidades</small>
          </article>
        </div>
      </div>
      <div class="program-visual inpatient-occupancy-visual">
        <div class="monitor-image-mockup inpatient-dashboard-mockup">
          <div class="monitor-dashboard-screen">
            <img src="assets/inpatient/internacao-ocupacao-tempo-real-dashboard.png" alt="Dashboard Ocupação em Tempo Real da Unidade de Internação" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <div class="decision-ribbon inpatient-ribbon" aria-hidden="true">
          <span>Regulação online</span>
          <strong>Leitos disponíveis para decisão em tempo real</strong>
        </div>
      </div>
    </section>
  `;
}

function inpatientSlaTrendChart(title, data, summary, modifier) {
  const chart = { x: 28, y: 42, w: 362, h: 128 };
  const max = Math.max(...data.map((item) => item.value)) + 4;
  const barGap = 8;
  const barW = (chart.w - barGap * (data.length - 1)) / data.length;
  return `
    <article class="inpatient-sla-chart ${modifier}">
      <div class="sla-chart-head">
        <span>${title}</span>
        <strong>${summary}</strong>
      </div>
      <svg viewBox="0 0 420 218" role="img" aria-label="${title}">
        <path class="grid-line" d="M28 74H390M28 118H390M28 162H390" />
        <g class="sla-start-marker">
          <path d="M${(chart.x + barW / 2).toFixed(1)} 28V182" />
          <text x="${(chart.x + barW / 2).toFixed(1)}" y="20">Início monitoramento</text>
        </g>
        <g class="bar-series">
          ${data.map((item, index) => {
            const h = (item.value / max) * chart.h;
            const x = chart.x + index * (barW + barGap);
            const y = chart.y + chart.h - h;
            const isEndpoint = index === 0 || index === data.length - 1;
            return `
              <rect class="${isEndpoint ? "endpoint-bar" : ""}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" rx="4" />
              <text class="bar-value ${isEndpoint ? "endpoint-label" : ""}" x="${(x + barW / 2).toFixed(1)}" y="${Math.max(30, y - 8).toFixed(1)}">${String(item.value).replace(".", ",")}%</text>
              <text class="bar-month" x="${(x + barW / 2).toFixed(1)}" y="202">${item.month}</text>
            `;
          }).join("")}
        </g>
      </svg>
    </article>
  `;
}

export function presentationInternacaoExamsSlaSlide() {
  const executionData = [
    { month: "Nov", value: 31.6 },
    { month: "Dez", value: 27.4 },
    { month: "Jan", value: 26.0 },
    { month: "Fev", value: 22.0 },
    { month: "Mar", value: 15.3 },
    { month: "Abr", value: 12.5 },
    { month: "Mai", value: 9.3 },
    { month: "Jun", value: 8.6 },
    { month: "Jul", value: 8.8 }
  ];
  const reportData = [
    { month: "Nov", value: 11.4 },
    { month: "Dez", value: 12.9 },
    { month: "Jan", value: 9.7 },
    { month: "Fev", value: 8.3 },
    { month: "Mar", value: 6.9 },
    { month: "Abr", value: 6.4 },
    { month: "Mai", value: 5.5 },
    { month: "Jun", value: 5.6 },
    { month: "Jul", value: 5.9 }
  ];

  return `
    <section class="program-slide inpatient-exams-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">Unidade de Internação</span>
          <span class="type-pill front-monitoramento-proativo">Monitoramento</span>
        </div>
        <span class="eyebrow">SLA de exames do paciente internado</span>
        <h2>Exames e laudos monitorados para acelerar giro de leito com segurança.</h2>
        <p>
          O Command Center acompanha em tempo real pacientes com exame pendente, execução fora do prazo e laudos
          atrasados. O time de monitoramento provoca ativamente as áreas responsáveis para reduzir atrasos,
          proteger a jornada assistencial e melhorar a previsibilidade da internação.
        </p>
        <div class="program-metrics inpatient-exams-metrics">
          <article>
            <span>Exames fora SLA</span>
            <strong>44</strong>
            <small>pendências visíveis por unidade</small>
          </article>
          <article>
            <span>Laudos atrasados</span>
            <strong>5</strong>
            <small>entrega acompanhada em tempo real</small>
          </article>
          <article class="success">
            <span>Atuação</span>
            <strong>Ativa</strong>
            <small>provocação operacional pelo monitoramento</small>
          </article>
        </div>
        <div class="inpatient-sla-charts">
          ${inpatientSlaTrendChart("Perda SLA execução", executionData, "31,6% → 8,8%", "execution")}
          ${inpatientSlaTrendChart("Perda SLA laudo", reportData, "12,9% → 5,9%", "report")}
        </div>
      </div>
      <div class="program-visual inpatient-exams-visual">
        <div class="monitor-image-mockup inpatient-exams-dashboard-mockup">
          <div class="monitor-dashboard-screen">
            <img src="assets/inpatient/internacao-exames-pendentes-dashboard.png" alt="Dashboard Exames Pendentes de pacientes internados" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <div class="phone-mockup inpatient-exams-phone" aria-label="Acionamento do monitoramento pelo WhatsApp">
          <div class="phone-screen">
            <img src="assets/inpatient/internacao-exames-whatsapp.png" alt="Mensagem de WhatsApp com acionamento de exames pendentes" />
          </div>
        </div>
        <div class="decision-ribbon inpatient-exams-ribbon" aria-hidden="true">
          <span>Monitoramento ativo</span>
          <strong>Exames e laudos provocados dentro do SLA</strong>
        </div>
      </div>
    </section>
  `;
}

function inpatientDischargeTrendChart() {
  const data = [
    { month: "Jan", year: "2025", value: 39 },
    { month: "Fev", year: "2025", value: 39 },
    { month: "Mar", year: "2025", value: 40 },
    { month: "Abr", year: "2025", value: 39 },
    { month: "Mai", year: "2025", value: 40 },
    { month: "Jun", year: "2025", value: 38 },
    { month: "Jul", year: "2025", value: 39 },
    { month: "Ago", year: "2025", value: 38 },
    { month: "Set", year: "2025", value: 38 },
    { month: "Out", year: "2025", value: 39 },
    { month: "Nov", year: "2025", value: 45 },
    { month: "Dez", year: "2025", value: 44 },
    { month: "Jan", year: "2026", value: 50 },
    { month: "Fev", year: "2026", value: 54 },
    { month: "Mar", year: "2026", value: 58 },
    { month: "Abr", year: "2026", value: 58 },
    { month: "Mai", year: "2026", value: 59 },
    { month: "Jun", year: "2026", value: 59 },
    { month: "Jul", year: "2026", value: 59 }
  ];
  const chart = { x: 26, y: 32, w: 584, h: 132 };
  const barW = 18;
  const gap = (chart.w - data.length * barW) / (data.length - 1);
  const max = 68;

  return `
    <article class="discharge-trend-card">
      <div class="trend-card-head">
        <span>Alta ate as 10h</span>
        <strong>39% -> 59%</strong>
        <small>+20 p.p.</small>
      </div>
      <svg viewBox="0 0 640 214" role="img" aria-label="Evolucao mensal do percentual de altas ate 10 horas">
        <path class="grid-line" d="M24 78H620M24 122H620M24 166H620" />
        ${data.map((item, index) => {
          const h = (item.value / max) * chart.h;
          const x = chart.x + index * (barW + gap);
          const y = chart.y + chart.h - h;
          const isKey = index === 0 || index === data.length - 1;
          const labelY = Math.max(24, y - 8);
          return `
            <rect class="${isKey ? "endpoint-bar" : ""}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="4" />
            <text class="bar-value ${isKey ? "endpoint-label" : ""}" x="${(x + barW / 2).toFixed(1)}" y="${labelY.toFixed(1)}" transform="rotate(-90 ${(x + barW / 2).toFixed(1)} ${labelY.toFixed(1)})">${item.value}%</text>
            <text class="bar-month" x="${(x + barW / 2).toFixed(1)}" y="190">${item.month}</text>
          `;
        }).join("")}
        <text class="year-label" x="206" y="209">2025</text>
        <text class="year-label" x="516" y="209">2026</text>
      </svg>
    </article>
  `;
}

export function presentationInternacaoDischarge10hSlide() {
  return `
    <section class="program-slide inpatient-discharge-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">Unidade de Internação</span>
          <span class="type-pill front-inteligencia-operacional">Inteligência Operacional</span>
        </div>
        <span class="eyebrow">BI alta até 10h</span>
        <h2>Acelerar o giro de leito com alta até 10h</h2>
        <p>
          O Command Center acompanha altas previstas, altas efetivadas até 10h e até 12h para orientar a operação,
          antecipar gargalos e apoiar a regulação de leitos entre as unidades com mais previsibilidade.
        </p>
        <div class="program-metrics inpatient-discharge-metrics">
          <article>
            <span>Qtd. altas</span>
            <strong>11.014</strong>
            <small>volume acompanhado no mês</small>
          </article>
          <article class="success">
            <span>Até 10h</span>
            <strong>55,4%</strong>
            <small>alta matinal monitorada</small>
          </article>
          <article>
            <span>Até 12h</span>
            <strong>72,1%</strong>
            <small>janela operacional ampliada</small>
          </article>
        </div>
        ${inpatientDischargeTrendChart()}
      </div>
      <div class="program-visual inpatient-discharge-visual">
        <div class="monitor-image-mockup inpatient-discharge-dashboard-mockup" role="button" tabindex="0" aria-label="Alternar entre dashboard geral e drilldown por andar" onclick="toggleDischargeDashboardView(this)" onkeydown="if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); toggleDischargeDashboardView(this); }">
          <div class="monitor-dashboard-screen">
            <img class="discharge-dashboard-image" src="assets/inpatient/internacao-alta-10h-dashboard.png" alt="Dashboard Gestão de Leitos - altas até 10 e 12 horas" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
          <span class="discharge-drill-toggle">Ver drilldown por andar</span>
        </div>
        <div class="decision-ribbon inpatient-discharge-ribbon" aria-hidden="true">
          <span>Giro de leito</span>
          <strong>Leitos liberados com previsibilidade até 10h</strong>
        </div>
      </div>
    </section>
  `;
}

export function presentationInternacaoHospitalCockpitSlide() {
  return `
    <section class="program-slide inpatient-cockpit-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">Unidade de Internação</span>
          <span class="type-pill front-inteligencia-operacional">Inteligência Operacional</span>
        </div>
        <span class="eyebrow">Cockpit hospitais</span>
        <h2>Visão 360 da unidade para foco rápido nos indicadores críticos.</h2>
        <p>
          O cockpit consolida metas e indicadores do diretor hospitalar em uma visão única: conversão, permanência,
          tempo de espera, ocupação, NPS, altas, qualidade e resultado. Cada unidade acompanha seu próprio painel,
          com metas e prioridades ajustadas à sua realidade operacional.
        </p>
        <div class="program-metrics inpatient-cockpit-metrics">
          <article>
            <span>Visão</span>
            <strong>360</strong>
            <small>indicadores integrados da unidade</small>
          </article>
          <article class="success">
            <span>Metas</span>
            <strong>Unidade</strong>
            <small>objetivos calibrados por hospital</small>
          </article>
          <article>
            <span>Foco</span>
            <strong>Diretor</strong>
            <small>prioridade operacional em tempo real</small>
          </article>
        </div>
        <ul class="cockpit-point-list" aria-label="Focos do cockpit hospitalar">
          <li>Comparação entre meta, realizado e bonificação/multa</li>
          <li>Leitura mensal para priorizar riscos e oportunidades</li>
          <li>Painéis personalizados por unidade e perfil assistencial</li>
        </ul>
      </div>
      <div class="program-visual inpatient-cockpit-visual">
        <div class="monitor-image-mockup inpatient-cockpit-dashboard-mockup" role="button" tabindex="0" aria-label="Alternar entre cockpits hospitalares" onclick="toggleHospitalCockpitView(this)" onkeydown="if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); toggleHospitalCockpitView(this); }">
          <div class="monitor-dashboard-screen">
            <img class="hospital-cockpit-image" src="assets/inpatient/internacao-cockpit-hospitais-vitoria.png" alt="Cockpit Hospital Vitória Anália Franco" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
          <span class="hospital-cockpit-toggle">Ver cockpit Paulistano</span>
        </div>
        <div class="decision-ribbon inpatient-cockpit-ribbon" aria-hidden="true">
          <span>Cockpit personalizado</span>
          <strong>Metas e prioridades por unidade hospitalar</strong>
        </div>
      </div>
    </section>
  `;
}

export function toggleDischargeDashboardView(target) {
  const root = target?.closest?.(".inpatient-discharge-dashboard-mockup") || document.querySelector(".inpatient-discharge-dashboard-mockup");
  if (!root) return;
  const image = root.querySelector(".discharge-dashboard-image");
  const label = root.querySelector(".discharge-drill-toggle");
  const showDrilldown = !root.classList.contains("show-drilldown");
  root.classList.toggle("show-drilldown", showDrilldown);
  if (image) {
    image.src = showDrilldown
      ? "assets/inpatient/internacao-alta-10h-dashboard-drilldown.png"
      : "assets/inpatient/internacao-alta-10h-dashboard.png";
    image.alt = showDrilldown
      ? "Dashboard Gestão de Leitos com drilldown por andar"
      : "Dashboard Gestão de Leitos - altas até 10 e 12 horas";
  }
  if (label) label.textContent = showDrilldown ? "Voltar ao painel geral" : "Ver drilldown por andar";
}

export function toggleHospitalCockpitView(target) {
  const root = target?.closest?.(".inpatient-cockpit-dashboard-mockup") || document.querySelector(".inpatient-cockpit-dashboard-mockup");
  if (!root) return;
  const image = root.querySelector(".hospital-cockpit-image");
  const label = root.querySelector(".hospital-cockpit-toggle");
  const showPaulistano = !root.classList.contains("show-paulistano");
  root.classList.toggle("show-paulistano", showPaulistano);
  if (image) {
    image.src = showPaulistano
      ? "assets/inpatient/internacao-cockpit-hospitais-paulistano.png"
      : "assets/inpatient/internacao-cockpit-hospitais-vitoria.png";
    image.alt = showPaulistano
      ? "Cockpit Hospital Paulistano"
      : "Cockpit Hospital Vitória Anália Franco";
  }
  if (label) label.textContent = showPaulistano ? "Ver cockpit Vitória Anália" : "Ver cockpit Paulistano";
}
