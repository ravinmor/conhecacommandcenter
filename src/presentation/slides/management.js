import { escapeHtml } from "./helpers.js";

export function toggleRevenueCycleDashboardView(target) {
  const root = target?.closest?.(".revenue-cycle-dashboard-mockup") || document.querySelector(".revenue-cycle-dashboard-mockup");
  if (!root) return;
  const image = root.querySelector(".revenue-cycle-dashboard-image");
  const label = root.querySelector(".revenue-cycle-drill-toggle");
  const showDrilldown = !root.classList.contains("show-drilldown");
  root.classList.toggle("show-drilldown", showDrilldown);
  if (image) {
    image.src = showDrilldown
      ? "assets/revenue/revenue-faturamento-consumo-drilldown.png"
      : "assets/revenue/revenue-faturamento-consumo-dashboard.png";
    image.alt = showDrilldown
      ? "Dashboard Faturamento x Consumo com drilldown por unidade e convenio"
      : "Dashboard Faturamento x Consumo";
  }
  if (label) label.textContent = showDrilldown ? "Voltar ao painel geral" : "Ver drilldown por unidade";
}

export function presentationRevenueCycleBillingSlide() {
  return `
    <section class="program-slide revenue-cycle-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy revenue-cycle-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestao com Resultado</span>
          <span class="meta-pill">Ciclo Receita</span>
          <span class="type-pill front-inteligencia-operacional">Inteligencia Operacional</span>
        </div>
        <span class="eyebrow">BI Faturamento x Consumo</span>
        <h2>Receita monitorada para proteger faturamento, consumo e pendencias.</h2>
        <p>
          O Command Center acompanha a performance de faturamento das unidades frente ao consumo e ao valor em pendencias,
          com quebras por idade da conta, convenio, unidade e regional para acelerar a tratativa e reduzir estoque parado.
        </p>
        <div class="program-metrics revenue-cycle-metrics">
          <article>
            <strong>Media producao</strong>
          </article>
          <article class="success">
            <strong>Media faturamento</strong>
          </article>
          <article class="warning">
            <strong>Pendencias</strong>
          </article>
        </div>
      </div>
      <div class="program-visual revenue-cycle-visual">
        <div class="monitor-image-mockup revenue-cycle-dashboard-mockup" role="button" tabindex="0" aria-label="Alternar entre dashboard geral e drilldown de faturamento" onclick="toggleRevenueCycleDashboardView(this)" onkeydown="if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); toggleRevenueCycleDashboardView(this); }">
          <div class="monitor-dashboard-screen">
            <img class="revenue-cycle-dashboard-image" src="assets/revenue/revenue-faturamento-consumo-dashboard.png" alt="Dashboard Faturamento x Consumo" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
          <span class="revenue-cycle-drill-toggle">Ver drilldown por unidade</span>
        </div>
        <div class="decision-ribbon revenue-cycle-ribbon" aria-hidden="true">
          <span>Gestao de pendencias</span>
          <strong>Visao 360 do ciclo receita</strong>
        </div>
      </div>
    </section>
  `;
}

export function toggleRevenueGlosasDashboardView(target) {
  const root = target?.closest?.(".revenue-glosas-dashboard-mockup") || document.querySelector(".revenue-glosas-dashboard-mockup");
  if (!root) return;
  const image = root.querySelector(".revenue-glosas-dashboard-image");
  const label = root.querySelector(".revenue-glosas-drill-toggle");
  const showDrilldown = !root.classList.contains("show-drilldown");
  root.classList.toggle("show-drilldown", showDrilldown);
  if (image) {
    image.src = showDrilldown
      ? "assets/revenue/revenue-glosas-dashboard-drilldown.png"
      : "assets/revenue/revenue-glosas-dashboard.png";
    image.alt = showDrilldown
      ? "Dashboard Ciclo de Receita - Glosas com drilldown por convênio"
      : "Dashboard Ciclo de Receita - Glosas Visão Gerencial";
  }
  if (label) label.textContent = showDrilldown ? "Voltar visão geral" : "Ver drilldown por convênio";
}

export function toggleQualicareDashboardView(target) {
  const root = target?.closest?.(".qualicare-dashboard-mockup") || document.querySelector(".qualicare-dashboard-mockup");
  if (!root) return;
  const image = root.querySelector(".qualicare-dashboard-image");
  const label = root.querySelector(".qualicare-dashboard-toggle");
  const showDrilldown = !root.classList.contains("show-drilldown");
  root.classList.toggle("show-drilldown", showDrilldown);
  if (image) {
    image.src = showDrilldown
      ? "assets/quality/qualicare-dashboard-higiene-maos-drilldown.png"
      : "assets/quality/qualicare-dashboard-higiene-maos.png";
    image.alt = showDrilldown
      ? "Dashboard QualiCare Higiene de Mãos com drilldown por setor"
      : "Dashboard QualiCare Higiene de Mãos";
  }
  if (label) label.textContent = showDrilldown ? "Voltar ao painel geral" : "Ver drilldown por setor";
}

export function presentationRevenueCycleGlosasSlide() {
  const glosaTrend = [
    ["Jan/25", 16],
    ["Fev", 16],
    ["Mar", 17],
    ["Abr", 13],
    ["Mai", 12],
    ["Jun", 12],
    ["Jul", 12],
    ["Ago", 13],
    ["Set", 12],
    ["Out", 11],
    ["Nov", 11],
    ["Dez", 13],
    ["Jan/26", 11],
    ["Fev", 10],
    ["Mar", 9],
    ["Abr", 10],
    ["Mai", 11],
    ["Jun", 10],
    ["Jul", 8]
  ];
  const maxGlosa = 18;
  const bars = glosaTrend.map(([label, value], index) => `
    <div class="glosa-trend-bar ${index === 0 ? "is-start" : ""} ${index === glosaTrend.length - 1 ? "is-current" : ""}" style="--bar-height: ${Math.max(34, Math.round((value / maxGlosa) * 118))}px; --i: ${index};">
      <strong>${value}%</strong>
      <span></span>
      <small>${label}</small>
    </div>
  `).join("");
  const flow = ["Glosa inicial", "Recursada", "Aceita em análise", "Recuperada", "Pendente de retorno", "Saldo final"]
    .map((item) => `<span>${item}</span>`)
    .join("");

  return `
    <section class="program-slide revenue-cycle-slide revenue-glosas-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy revenue-cycle-copy revenue-glosas-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestão com Resultado</span>
          <span class="meta-pill">Ciclo Receita</span>
          <span class="type-pill front-inteligencia-operacional">Inteligência Operacional</span>
        </div>
        <span class="eyebrow">BI Jornada da Glosa</span>
        <h2>Glosa monitorada ponta a ponta para proteger receita.</h2>
        <p>O Command Center acompanha a glosa desde a origem até o saldo final, priorizando recurso, análise, retorno e recuperação para reduzir perdas e acelerar a eficiência do ciclo receita.</p>
        <div class="revenue-glosa-flow" aria-label="Fluxo da jornada da glosa">
          ${flow}
        </div>
        <div class="revenue-glosa-chart" aria-label="Evolução da glosa inicial">
          <div class="glosa-chart-header">
            <span>Evolução da glosa inicial</span>
            <strong>17% → 8%</strong>
            <small>queda de 9 p.p.</small>
          </div>
          <div class="glosa-chart-body">
            <div class="glosa-start-marker">Início Command Center</div>
            <div class="glosa-trend-bars">
              ${bars}
            </div>
          </div>
        </div>
      </div>
      <div class="program-visual revenue-cycle-visual revenue-glosas-visual">
        <div
          class="monitor-image-mockup revenue-glosas-dashboard-mockup"
          role="button"
          tabindex="0"
          aria-label="Alternar entre dashboard geral e drilldown da glosa"
          onclick="toggleRevenueGlosasDashboardView(this)"
          onkeydown="if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); toggleRevenueGlosasDashboardView(this); }"
        >
          <div class="monitor-dashboard-screen">
            <img class="revenue-glosas-dashboard-image" src="assets/revenue/revenue-glosas-dashboard.png" alt="Dashboard Ciclo de Receita - Glosas Visão Gerencial" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
          <span class="revenue-cycle-drill-toggle revenue-glosas-drill-toggle">Ver drilldown por convênio</span>
        </div>
        <div class="decision-ribbon revenue-cycle-ribbon revenue-glosas-ribbon" aria-hidden="true">
          <span>Gestão da glosa</span>
          <strong>Jornada da glosa acompanhada em tempo real</strong>
        </div>
      </div>
    </section>
  `;
}

export function presentationWeeklyManagementMeetingsCoverSlide() {
  const pillars = [
    { label: "Agenda", value: "DIREX" },
    { label: "Agenda", value: "Comitê Hospitalar" },
    { label: "Saída", value: "plano de ação" }
  ];

  return `
    <section class="program-slide weekly-management-cover-slide animate">
      <div class="weekly-management-cover-bg" aria-hidden="true">
        <img src="assets/management/management-weekly-executive-meeting-slide-v2-command.png" alt="" />
      </div>
      <div class="weekly-management-cover-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestão com Resultado</span>
          <span class="meta-pill">Ritos de Gestão</span>
          <span class="type-pill front-monitoramento-proativo">Monitoramento Proativo</span>
        </div>
        <span class="eyebrow">Reuniões semanais</span>
        <h2>Duas agendas semanais para transformar indicador em decisão.</h2>
        <p>
          No encontro com a DIREX e no Comitê Hospitalar, o Command Center leva uma pauta viva: indicadores críticos,
          desvios priorizados e planos de ação com responsável e prazo. A rotina conecta liderança, operação e áreas de apoio
          para acelerar decisão e sustentar execução.
        </p>
        <div class="weekly-meeting-pillar-grid">
          ${pillars.map((pillar) => `
            <article>
              <strong>${escapeHtml(pillar.value)}</strong>
              <span>${escapeHtml(pillar.label)}</span>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

export function presentationWeeklyManagementConversionMpSlide() {
  const conversionTrend = [
    ["Jan/24", 4.1],
    ["Fev/24", 3.6],
    ["Mar", 3.5],
    ["Abr", 3.4],
    ["Mai", 3.6],
    ["Jun", 3.2],
    ["Jul", 3.3],
    ["Ago", 2.8],
    ["Set", 2.7],
    ["Out", 2.9],
    ["Nov", 3.1],
    ["Dez", 3.3],
    ["Jan/25", 3.5],
    ["Fev", 3.3],
    ["Mar/25", 3.0],
    ["Abr", 3.1],
    ["Mai", 2.9],
    ["Jun", 3.1],
    ["Jul", 3.5],
    ["Ago", 2.8],
    ["Set", 3.1],
    ["Out", 3.1],
    ["Nov", 3.0],
    ["Dez", 3.4],
    ["Jan/26", 3.6],
    ["Fev", 3.2],
    ["Mar/26", 2.9],
    ["Abr", 3.0],
    ["Mai", 3.0],
    ["Jun", 3.0],
    ["Jul", 3.2],
    ["Ago", 3.0]
  ];
  const stayTrend = [
    ["Jan/24", 3.41],
    ["Fev/24", 3.54],
    ["Mar", 3.54],
    ["Abr", 3.64],
    ["Mai", 3.81],
    ["Jun", 3.54],
    ["Jul", 3.31],
    ["Ago", 3.21],
    ["Set", 3.21],
    ["Out", 3.07],
    ["Nov", 3.20],
    ["Dez", 3.47],
    ["Jan/25", 2.82],
    ["Fev", 2.72],
    ["Mar/25", 2.66],
    ["Abr", 2.71],
    ["Mai", 2.98],
    ["Jun", 3.12],
    ["Jul", 2.83],
    ["Ago", 2.80],
    ["Set", 2.72],
    ["Out", 2.71],
    ["Nov", 2.84],
    ["Dez", 2.87],
    ["Jan/26", 2.83],
    ["Fev", 2.80],
    ["Mar/26", 2.81],
    ["Abr", 2.80],
    ["Mai", 2.76],
    ["Jun", 2.86],
    ["Jul", 2.80],
    ["Ago", 2.90]
  ];
  const chart = (items, min, max, unit, id) => {
    const width = 560;
    const height = 156;
    const left = 34;
    const right = 18;
    const top = 18;
    const bottom = 34;
    const points = items.map(([label, value], index) => {
      const x = left + (index / (items.length - 1)) * (width - left - right);
      const y = top + ((max - value) / (max - min)) * (height - top - bottom);
      return { label, value, x, y };
    });
    const path = points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
    const area = `${left},${height - bottom} ${path} ${width - right},${height - bottom}`;
    const commandIndex = items.findIndex(([label]) => label === "Mai");
    const commandX = points[commandIndex >= 0 ? commandIndex : 4].x;
    const valueText = (value) => `${String(value).replace(".", ",")}${unit}`;

    return `
      <svg class="weekly-line-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Evolução do indicador desde 2024">
        <defs>
          <linearGradient id="weeklyLineGradient${id}" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#ffb547" />
            <stop offset="48%" stop-color="#28d8cb" />
            <stop offset="100%" stop-color="#8eff3f" />
          </linearGradient>
          <linearGradient id="weeklyAreaGradient${id}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#28d8cb" stop-opacity="0.22" />
            <stop offset="100%" stop-color="#28d8cb" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path class="weekly-chart-grid" d="M${left} ${top + 8} H${width - right} M${left} ${(height - bottom + top) / 2} H${width - right} M${left} ${height - bottom} H${width - right}" />
        <path class="weekly-command-marker" d="M${commandX.toFixed(1)} ${top + 2} V${height - bottom + 5}" />
        <text class="weekly-command-label" x="${commandX + 8}" y="${top + 12}">Início Command Center · Mai/24</text>
        <polygon class="weekly-chart-area" points="${area}" fill="url(#weeklyAreaGradient${id})" />
        <polyline class="weekly-chart-line" points="${path}" stroke="url(#weeklyLineGradient${id})" />
        ${points.map((point, index) => `
          <g class="weekly-chart-point ${index === 0 ? "is-start" : ""} ${index === points.length - 1 ? "is-current" : ""}">
            <circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="${index === points.length - 1 ? 5 : 3.5}" />
            ${(index === 0 || index === points.length - 1) ? `<text x="${point.x.toFixed(1)}" y="${(point.y - 14).toFixed(1)}">${valueText(point.value)}</text>` : ""}
          </g>
        `).join("")}
        ${points.map((point, index) => `<text class="weekly-axis-label" x="${point.x.toFixed(1)}" y="${height - (index % 2 ? 2 : 13)}">${escapeHtml(point.label.replace("/24", "").replace("/25", "").replace("/26", ""))}</text>`).join("")}
      </svg>
    `;
  };

  return `
    <section class="program-slide weekly-results-slide animate">
      <div class="program-bg weekly-results-bg" aria-hidden="true"></div>
      <header class="weekly-results-header">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestão com Resultado</span>
          <span class="meta-pill">Ritos de Gestão</span>
          <span class="type-pill front-monitoramento-proativo">Monitoramento Proativo</span>
        </div>
      </header>
      <div class="weekly-results-visual">
        <div class="monitor-image-mockup weekly-results-monitor">
          <div class="monitor-dashboard-screen">
            <img src="assets/management/management-comite-operacional-indicadores-amil.png" alt="Slide Conversão e Média de Permanência apresentado nas reuniões semanais" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <img class="command-mascot weekly-results-mascot" src="assets/management/command-mascot.png" alt="" aria-hidden="true" />
      </div>
      <div class="weekly-results-insights" aria-label="Evolução dos indicadores desde 2024">
        <article class="weekly-result-card">
          <span>Indicador acompanhado</span>
          <strong>Conversão Amil</strong>
          <small>Da linha de base de 2024 ao patamar atual, a reunião acompanha a queda e os desvios por unidade.</small>
          ${chart(conversionTrend, 2.6, 4.2, "%", "Conversion")}
        </article>
        <article class="weekly-result-card">
          <span>Indicador acompanhado</span>
          <strong>Média de permanência</strong>
          <small>A evolução destaca a redução do tempo médio e orienta o rito de planos de ação.</small>
          ${chart(stayTrend, 2.6, 3.7, "", "Stay")}
        </article>
      </div>
    </section>
  `;
}

export function presentationWeeklyManagementDischargeSlide() {
  const discharge10hTrend = [
    ["Jan/25", 39],
    ["Fev", 39],
    ["Mar", 40],
    ["Abr", 39],
    ["Mai", 40],
    ["Jun", 38],
    ["Jul", 39],
    ["Ago", 38],
    ["Set", 38],
    ["Out", 39],
    ["Nov", 45],
    ["Dez", 44],
    ["Jan/26", 50],
    ["Fev", 54],
    ["Mar", 58],
    ["Abr", 58],
    ["Mai", 59],
    ["Jun", 59],
    ["Jul", 58]
  ];
  const discharge12hTrend = [
    ["Jan/25", 62],
    ["Fev", 62],
    ["Mar", 63],
    ["Abr", 61],
    ["Mai", 62],
    ["Jun", 62],
    ["Jul", 62],
    ["Ago", 61],
    ["Set", 60],
    ["Out", 63],
    ["Nov", 66],
    ["Dez", 64],
    ["Jan/26", 68],
    ["Fev", 71],
    ["Mar", 74],
    ["Abr", 74],
    ["Mai", 73],
    ["Jun", 75],
    ["Jul", 74]
  ];
  const chart = (items, min, max, id) => {
    const width = 560;
    const height = 156;
    const left = 34;
    const right = 18;
    const top = 18;
    const bottom = 34;
    const points = items.map(([label, value], index) => {
      const x = left + (index / (items.length - 1)) * (width - left - right);
      const y = top + ((max - value) / (max - min)) * (height - top - bottom);
      return { label, value, x, y };
    });
    const path = points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
    const area = `${left},${height - bottom} ${path} ${width - right},${height - bottom}`;

    return `
      <svg class="weekly-line-chart weekly-line-chart-clean" viewBox="0 0 ${width} ${height}" role="img" aria-label="Evolução mensal do indicador">
        <defs>
          <linearGradient id="weeklyDischargeLineGradient${id}" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#ffb547" />
            <stop offset="54%" stop-color="#28d8cb" />
            <stop offset="100%" stop-color="#8eff3f" />
          </linearGradient>
          <linearGradient id="weeklyDischargeAreaGradient${id}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#28d8cb" stop-opacity="0.22" />
            <stop offset="100%" stop-color="#28d8cb" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path class="weekly-chart-grid" d="M${left} ${top + 8} H${width - right} M${left} ${(height - bottom + top) / 2} H${width - right} M${left} ${height - bottom} H${width - right}" />
        <polygon class="weekly-chart-area" points="${area}" fill="url(#weeklyDischargeAreaGradient${id})" />
        <polyline class="weekly-chart-line" points="${path}" stroke="url(#weeklyDischargeLineGradient${id})" />
        ${points.map((point, index) => `
          <g class="weekly-chart-point ${index === 0 ? "is-start" : ""} ${index === points.length - 1 ? "is-current" : ""}">
            <circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="${index === points.length - 1 ? 5 : 3.5}" />
            ${(index === 0 || index === points.length - 1) ? `<text x="${point.x.toFixed(1)}" y="${(point.y - 14).toFixed(1)}">${point.value}%</text>` : ""}
          </g>
        `).join("")}
        ${points.map((point, index) => `<text class="weekly-axis-label" x="${point.x.toFixed(1)}" y="${height - (index % 2 ? 2 : 13)}">${escapeHtml(point.label.replace("/25", "").replace("/26", ""))}</text>`).join("")}
      </svg>
    `;
  };

  return `
    <section class="program-slide weekly-results-slide weekly-results-discharge-slide animate">
      <div class="program-bg weekly-results-bg" aria-hidden="true"></div>
      <header class="weekly-results-header">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestão com Resultado</span>
          <span class="meta-pill">Ritos de Gestão</span>
          <span class="type-pill front-monitoramento-proativo">Monitoramento Proativo</span>
        </div>
      </header>
      <div class="weekly-results-visual">
        <div class="monitor-image-mockup weekly-results-monitor">
          <div class="monitor-dashboard-screen">
            <img src="assets/management/management-comite-operacional-alta-10h.png" alt="Slide Alta até 10 horas apresentado nas reuniões semanais" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <img class="command-mascot weekly-results-mascot" src="assets/management/command-mascot-pointing.png" alt="" aria-hidden="true" />
      </div>
      <div class="weekly-results-insights" aria-label="Evolução das altas acompanhadas desde 2025">
        <article class="weekly-result-card">
          <span>Indicador acompanhado</span>
          <strong>Alta até 10h</strong>
          <small>A rotina acompanha o avanço do indicador frente à meta de 55%, destacando unidades fora do ritmo esperado.</small>
          ${chart(discharge10hTrend, 36, 61, "Discharge10h")}
        </article>
        <article class="weekly-result-card">
          <span>Indicador acompanhado</span>
          <strong>Alta até 12h</strong>
          <small>O comitê observa a sustentação da meta de 75% e direciona ações para reduzir variações entre unidades.</small>
          ${chart(discharge12hTrend, 58, 77, "Discharge12h")}
        </article>
      </div>
    </section>
  `;
}

export function presentationWeeklyManagementExtraIndicatorsSlide() {
  const conversionExtraTrend = [
    ["Jan/24", 4.09],
    ["Fev/24", 3.56],
    ["Mar", 3.46],
    ["Abr", 3.33],
    ["Mai", 3.60],
    ["Jun", 3.73],
    ["Jul", 4.77],
    ["Ago", 4.91],
    ["Set", 4.50],
    ["Out", 4.78],
    ["Nov", 4.83],
    ["Dez", 5.04],
    ["Jan/25", 5.39],
    ["Fev", 5.42],
    ["Mar/25", 5.39],
    ["Abr", 5.04],
    ["Mai", 4.45],
    ["Jun", 5.13],
    ["Jul", 6.19],
    ["Ago", 5.63],
    ["Set", 5.40],
    ["Out", 5.28],
    ["Nov", 5.39],
    ["Dez", 5.92],
    ["Jan/26", 6.16],
    ["Fev", 5.99],
    ["Mar/26", 5.47],
    ["Abr", 5.52],
    ["Mai", 5.86],
    ["Jun", 5.65],
    ["Jul", 6.03],
    ["Ago", 5.99]
  ];
  const dailyPatientsTrend = [
    ["Jan/24", 471],
    ["Fev/24", 501],
    ["Mar", 529],
    ["Abr", 565],
    ["Mai", 539],
    ["Jun", 530],
    ["Jul", 519],
    ["Ago", 557],
    ["Set", 565],
    ["Out", 537],
    ["Nov", 535],
    ["Dez", 481],
    ["Jan/25", 493],
    ["Fev", 525],
    ["Mar/25", 501],
    ["Abr", 537],
    ["Mai", 565],
    ["Jun", 577],
    ["Jul", 563],
    ["Ago", 562],
    ["Set", 600],
    ["Out", 588],
    ["Nov", 554],
    ["Dez", 562],
    ["Jan/26", 584],
    ["Fev", 579],
    ["Mar/26", 596],
    ["Abr", 596],
    ["Mai", 607],
    ["Jun", 629],
    ["Jul", 625],
    ["Ago", 600]
  ];
  const chart = (items, min, max, unit, id) => {
    const width = 560;
    const height = 156;
    const left = 34;
    const right = 18;
    const top = 18;
    const bottom = 34;
    const points = items.map(([label, value], index) => {
      const x = left + (index / (items.length - 1)) * (width - left - right);
      const y = top + ((max - value) / (max - min)) * (height - top - bottom);
      return { label, value, x, y };
    });
    const path = points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
    const area = `${left},${height - bottom} ${path} ${width - right},${height - bottom}`;
    const commandIndex = items.findIndex(([label]) => label === "Mai");
    const commandX = points[commandIndex >= 0 ? commandIndex : 4].x;
    const valueText = (value) => `${String(value).replace(".", ",")}${unit}`;

    return `
      <svg class="weekly-line-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Evolução do indicador desde 2024">
        <defs>
          <linearGradient id="weeklyExtraLineGradient${id}" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#ffb547" />
            <stop offset="48%" stop-color="#28d8cb" />
            <stop offset="100%" stop-color="#8eff3f" />
          </linearGradient>
          <linearGradient id="weeklyExtraAreaGradient${id}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#28d8cb" stop-opacity="0.22" />
            <stop offset="100%" stop-color="#28d8cb" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path class="weekly-chart-grid" d="M${left} ${top + 8} H${width - right} M${left} ${(height - bottom + top) / 2} H${width - right} M${left} ${height - bottom} H${width - right}" />
        <path class="weekly-command-marker" d="M${commandX.toFixed(1)} ${top + 2} V${height - bottom + 5}" />
        <text class="weekly-command-label" x="${commandX + 8}" y="${top + 12}">Início Command Center · Mai/24</text>
        <polygon class="weekly-chart-area" points="${area}" fill="url(#weeklyExtraAreaGradient${id})" />
        <polyline class="weekly-chart-line" points="${path}" stroke="url(#weeklyExtraLineGradient${id})" />
        ${points.map((point, index) => `
          <g class="weekly-chart-point ${index === 0 ? "is-start" : ""} ${index === points.length - 1 ? "is-current" : ""}">
            <circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="${index === points.length - 1 ? 5 : 3.5}" />
            ${(index === 0 || index === points.length - 1) ? `<text x="${point.x.toFixed(1)}" y="${(point.y - 14).toFixed(1)}">${valueText(point.value)}</text>` : ""}
          </g>
        `).join("")}
        ${points.map((point, index) => `<text class="weekly-axis-label" x="${point.x.toFixed(1)}" y="${height - (index % 2 ? 2 : 13)}">${escapeHtml(point.label.replace("/24", "").replace("/25", "").replace("/26", ""))}</text>`).join("")}
      </svg>
    `;
  };

  return `
    <section class="program-slide weekly-results-slide weekly-results-extra-slide animate">
      <div class="program-bg weekly-results-bg" aria-hidden="true"></div>
      <header class="weekly-results-header">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestão com Resultado</span>
          <span class="meta-pill">Ritos de Gestão</span>
          <span class="type-pill front-monitoramento-proativo">Monitoramento Proativo</span>
        </div>
      </header>
      <div class="weekly-results-visual">
        <div class="monitor-image-mockup weekly-results-monitor">
          <div class="monitor-dashboard-screen">
            <img src="assets/management/management-comite-operacional-indicadores-extra.png" alt="Slide Indicadores Extra apresentado nas reuniões semanais" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <img class="command-mascot weekly-results-mascot" src="assets/management/command-mascot-arms-crossed.png" alt="" aria-hidden="true" />
      </div>
      <div class="weekly-results-insights" aria-label="Evolução dos indicadores extras desde 2024">
        <article class="weekly-result-card">
          <span>Indicador acompanhado</span>
          <strong>Conversão c/GO</strong>
          <small>Acompanhamento do indicador extra frente à meta, com leitura mensal dos desvios e do impacto por unidade.</small>
          ${chart(conversionExtraTrend, 3.0, 6.4, "%", "ExtraConversion")}
        </article>
        <article class="weekly-result-card">
          <span>Indicador acompanhado</span>
          <strong>Pacientes-dia</strong>
          <small>A evolução do volume assistencial apoia a leitura de permanência, ocupação e pressão operacional.</small>
          ${chart(dailyPatientsTrend, 460, 640, "", "DailyPatients")}
        </article>
      </div>
    </section>
  `;
}

export function presentationWeeklyManagementOpmeSlide() {
  const opmeTrend = [
    ["Jan/24", 50.8],
    ["Fev/24", 56.7],
    ["Mar", 55.5],
    ["Abr", 57.1],
    ["Mai", 57.1],
    ["Jun", 48.1],
    ["Jul", 46.1],
    ["Ago", 61.8],
    ["Set", 60.5],
    ["Out", 65.1],
    ["Nov", 68.8],
    ["Dez", 74.4],
    ["Jan/25", 70.0],
    ["Fev", 71.0],
    ["Mar/25", 77.9],
    ["Abr", 84.7],
    ["Mai", 83.5],
    ["Jun", 83.3],
    ["Jul", 85.8],
    ["Ago", 86.7],
    ["Set", 87.1],
    ["Out", 89.0],
    ["Nov", 88.1],
    ["Dez", 88.0],
    ["Jan/26", 82.1],
    ["Fev", 87.6],
    ["Mar/26", 85.9],
    ["Abr", 87.0],
    ["Mai", 88.7],
    ["Jun", 88.7],
    ["Jul", 88.7]
  ];
  const chart = (items) => {
    const width = 560;
    const height = 190;
    const left = 34;
    const right = 18;
    const top = 18;
    const bottom = 40;
    const min = 44;
    const max = 92;
    const points = items.map(([label, value], index) => {
      const x = left + (index / (items.length - 1)) * (width - left - right);
      const y = top + ((max - value) / (max - min)) * (height - top - bottom);
      return { label, value, x, y };
    });
    const path = points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
    const area = `${left},${height - bottom} ${path} ${width - right},${height - bottom}`;
    const commandIndex = items.findIndex(([label]) => label === "Mai");
    const commandX = points[commandIndex >= 0 ? commandIndex : 4].x;
    const valueText = (value) => `${String(value).replace(".", ",")}%`;

    return `
      <svg class="weekly-line-chart weekly-opme-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Evolução da adesão OPME desde 2024">
        <defs>
          <linearGradient id="weeklyOpmeLineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#ffb547" />
            <stop offset="48%" stop-color="#28d8cb" />
            <stop offset="100%" stop-color="#8eff3f" />
          </linearGradient>
          <linearGradient id="weeklyOpmeAreaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#8eff3f" stop-opacity="0.18" />
            <stop offset="100%" stop-color="#28d8cb" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path class="weekly-chart-grid" d="M${left} ${top + 10} H${width - right} M${left} ${(height - bottom + top) / 2} H${width - right} M${left} ${height - bottom} H${width - right}" />
        <path class="weekly-command-marker" d="M${commandX.toFixed(1)} ${top + 2} V${height - bottom + 7}" />
        <text class="weekly-command-label" x="${commandX + 8}" y="${top + 12}">Início Command Center · Mai/24</text>
        <polygon class="weekly-chart-area" points="${area}" fill="url(#weeklyOpmeAreaGradient)" />
        <polyline class="weekly-chart-line" points="${path}" stroke="url(#weeklyOpmeLineGradient)" />
        ${points.map((point, index) => `
          <g class="weekly-chart-point ${index === 0 ? "is-start" : ""} ${index === points.length - 1 ? "is-current" : ""}">
            <circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="${index === points.length - 1 ? 5 : 3.5}" />
            ${(index === 0 || index === points.length - 1) ? `<text x="${point.x.toFixed(1)}" y="${(point.y - 14).toFixed(1)}">${valueText(point.value)}</text>` : ""}
          </g>
        `).join("")}
        ${points.map((point, index) => `<text class="weekly-axis-label" x="${point.x.toFixed(1)}" y="${height - (index % 2 ? 2 : 13)}">${escapeHtml(point.label.replace("/24", "").replace("/25", "").replace("/26", ""))}</text>`).join("")}
      </svg>
    `;
  };

  return `
    <section class="program-slide weekly-results-slide weekly-results-opme-slide animate">
      <div class="program-bg weekly-results-bg" aria-hidden="true"></div>
      <header class="weekly-results-header">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestão com Resultado</span>
          <span class="meta-pill">Ritos de Gestão</span>
          <span class="type-pill front-monitoramento-proativo">Monitoramento Proativo</span>
        </div>
      </header>
      <div class="weekly-results-visual">
        <div class="monitor-image-mockup weekly-results-monitor">
          <div class="monitor-dashboard-screen">
            <img src="assets/management/management-comite-operacional-opme.png" alt="Slide OPME Fabricante Pós apresentado nas reuniões semanais" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <img class="command-mascot weekly-results-mascot" src="assets/management/command-mascot-thumbs-up.png" alt="" aria-hidden="true" />
      </div>
      <div class="weekly-results-insights weekly-results-opme-insights" aria-label="Evolução da adesão OPME">
        <article class="weekly-result-card weekly-opme-evolution-card">
          <span>Indicador acompanhado</span>
          <strong>Adesão OPME</strong>
          <small>A evolução mostra o avanço da adesão ao fabricante OPME e destaca o início do Command Center como marco do rito de acompanhamento.</small>
          ${chart(opmeTrend)}
        </article>
        <div class="weekly-opme-stat-grid">
          <article>
            <span>Ganho acumulado</span>
            <strong>+37,9 p.p.</strong>
          </article>
          <article>
            <span>Patamar atual</span>
            <strong>88,7%</strong>
          </article>
        </div>
      </div>
    </section>
  `;
}

export function presentationWeeklyManagementScoreSlide() {
  const scoreTrend = [
    ["Jan/25", 32.9],
    ["Fev", 40.6],
    ["Mar", 46.1],
    ["Abr", 44.8],
    ["Mai", 56.0],
    ["Jun", 57.1],
    ["Jul", 61.4],
    ["Ago", 72.8],
    ["Set", 72.6],
    ["Out", 60.5],
    ["Nov", 70.0],
    ["Dez", 73.0],
    ["Jan/26", 62.9],
    ["Fev", 66.8],
    ["Mar", 64.4],
    ["Abr", 70.9],
    ["Mai", 76.2],
    ["Jun", 77.5],
    ["Jul", 78.3],
    ["Ago", 71.6]
  ];
  const chart = (items) => {
    const width = 560;
    const height = 154;
    const left = 34;
    const right = 18;
    const top = 16;
    const bottom = 34;
    const min = 28;
    const max = 84;
    const points = items.map(([label, value], index) => {
      const x = left + (index / (items.length - 1)) * (width - left - right);
      const y = top + ((max - value) / (max - min)) * (height - top - bottom);
      return { label, value, x, y };
    });
    const path = points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
    const area = `${left},${height - bottom} ${path} ${width - right},${height - bottom}`;
    const first = points[0];
    const last = points[points.length - 1];

    return `
      <svg class="weekly-line-chart weekly-score-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Evolução do aproveitamento da Rede TotalCare">
        <defs>
          <linearGradient id="weeklyScoreLineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#ffb547" />
            <stop offset="50%" stop-color="#28d8cb" />
            <stop offset="100%" stop-color="#8eff3f" />
          </linearGradient>
          <linearGradient id="weeklyScoreAreaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#8eff3f" stop-opacity="0.18" />
            <stop offset="100%" stop-color="#28d8cb" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path class="weekly-chart-grid" d="M${left} ${top + 8} H${width - right} M${left} ${(height - bottom + top) / 2} H${width - right} M${left} ${height - bottom} H${width - right}" />
        <polygon class="weekly-chart-area" points="${area}" fill="url(#weeklyScoreAreaGradient)" />
        <polyline class="weekly-chart-line" points="${path}" stroke="url(#weeklyScoreLineGradient)" />
        ${points.map((point, index) => `
          <g class="weekly-chart-point ${index === 0 ? "is-start" : ""} ${index === points.length - 1 ? "is-current" : ""}">
            <circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="${index === 0 || index === points.length - 1 ? 5 : 3.2}" />
          </g>
        `).join("")}
        <text class="weekly-score-value weekly-score-start" x="${first.x.toFixed(1)}" y="${(first.y - 14).toFixed(1)}">32,9%</text>
        <text class="weekly-score-value weekly-score-end" x="${last.x.toFixed(1)}" y="${(last.y - 14).toFixed(1)}">71,6%</text>
        <text class="weekly-axis-label" x="${first.x.toFixed(1)}" y="${height - 10}">Jan/25</text>
        <text class="weekly-axis-label" x="${points[6].x.toFixed(1)}" y="${height - 10}">Jul/25</text>
        <text class="weekly-axis-label" x="${points[12].x.toFixed(1)}" y="${height - 10}">Jan/26</text>
        <text class="weekly-axis-label" x="${last.x.toFixed(1)}" y="${height - 10}">Ago/26</text>
      </svg>
    `;
  };

  return `
    <section class="program-slide weekly-results-slide weekly-results-score-slide animate">
      <div class="program-bg weekly-results-bg" aria-hidden="true"></div>
      <header class="weekly-results-header">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestão com Resultado</span>
          <span class="meta-pill">Ritos de Gestão</span>
          <span class="type-pill front-monitoramento-proativo">Gamificação</span>
        </div>
      </header>
      <div class="weekly-results-visual">
        <div class="monitor-image-mockup weekly-results-monitor">
          <div class="monitor-dashboard-screen">
            <img src="assets/management/management-comite-operacional-placar-2-temporada.png" alt="Placar da segunda temporada de performance dos hospitais" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <img class="command-mascot weekly-results-mascot" src="assets/management/command-mascot-trophy.png" alt="" aria-hidden="true" />
      </div>
      <div class="weekly-results-insights weekly-score-insights" aria-label="Troféu e evolução do aproveitamento">
        <div class="weekly-score-trophy-showcase" aria-label="Troféu Top Performance Command Center">
          <img src="assets/management/management-top-performance-trophy-render.png" alt="Troféu Top Performance Command Center" />
        </div>
        <article class="weekly-result-card weekly-score-evolution-card">
          <span>Rede TotalCare · todos os indicadores</span>
          <strong>Aproveitamento dos hospitais</strong>
          <small>Da primeira apuração ao recorte atual, a rede avança de 32,9% para 71,6% de aproveitamento.</small>
          ${chart(scoreTrend)}
        </article>
      </div>
    </section>
  `;
}

export function presentationQualitySafetyCoverSlide() {
  return `
    <section class="quality-safety-cover-slide animate">
      <div class="quality-safety-cover-bg" aria-hidden="true">
        <img src="assets/management/management-qualidade-seguranca-selos-command.png" alt="" />
      </div>
      <header class="program-header quality-safety-cover-header">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestão com Resultado</span>
          <span class="meta-pill">Qualidade e Segurança</span>
          <span class="type-pill front-inteligencia-operacional">Reconhecimento</span>
        </div>
      </header>
      <div class="quality-safety-cover-copy">
        <span class="eyebrow">Qualidade assistencial</span>
        <h2>Uma rede construída com reputação, qualidade assistencial e segurança do paciente.</h2>
        <p>
          Reconhecimentos que comprovam compromisso com excelência, segurança e experiência do paciente
          em toda a Rede TotalCare.
        </p>
      </div>
      <div class="quality-safety-cover-accent" aria-hidden="true">
        <span></span>
        <span></span>
      </div>
    </section>
  `;
}

export function presentationQualicareInnovationSlide() {
  return `
    <section class="qualicare-slide animate">
      <div class="qualicare-bg" aria-hidden="true"></div>
      <div class="qualicare-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestão com Resultado</span>
          <span class="meta-pill">Qualidade e Segurança</span>
          <span class="type-pill front-inovacao">Inovação</span>
        </div>
        <span class="eyebrow">QualiCare</span>
        <h2>Auditorias de qualidade no ponto de cuidado, com registro digital e evidência em tempo real.</h2>
        <p>
          O QualiCare apoia as enfermeiras da CCIH nas auditorias assistenciais, substituindo controles manuais por um fluxo
          simples, rastreável e conectado aos indicadores de segurança do paciente.
        </p>
        <div class="qualicare-highlights" aria-label="Ganhos do aplicativo QualiCare">
          <article>
            <span>zero papel</span>
            <strong>Registro digital</strong>
          </article>
          <article>
            <span>rotina em campo</span>
            <strong>Auditoria guiada</strong>
          </article>
          <article>
            <span>base confiável</span>
            <strong>Dado para gestão</strong>
          </article>
        </div>
      </div>
      <div class="qualicare-app-stage">
        <div class="qualicare-phone" aria-label="Aplicativo QualiCare em celular">
          <div class="qualicare-phone-screen">
            <video src="assets/quality/qualicare-app.mp4" autoplay muted loop playsinline preload="metadata"></video>
          </div>
        </div>
      </div>
      <div class="qualicare-audit-grid" aria-label="Vídeos de auditorias QualiCare">
        <div class="qualicare-dev-badge" aria-hidden="true">
          <span>inovação própria</span>
          <strong>Desenvolvimento Command Center TotalCare</strong>
        </div>
        <article class="qualicare-audit-card">
          <div class="qualicare-video-frame">
            <video src="assets/quality/qualicare-auditoria-higiene-maos.mp4" controls playsinline preload="metadata"></video>
          </div>
          <span>Auditoria CCIH</span>
          <strong>Higiene de Mãos</strong>
        </article>
        <article class="qualicare-audit-card">
          <div class="qualicare-video-frame">
            <video src="assets/quality/qualicare-auditoria-beira-leito.mp4" controls playsinline preload="metadata"></video>
          </div>
          <span>Auditoria assistencial</span>
          <strong>Beira Leito</strong>
        </article>
      </div>
      <div class="qualicare-dashboard-stage" aria-label="Dashboard QualiCare">
        <div class="monitor-image-mockup qualicare-dashboard-mockup" role="button" tabindex="0" aria-label="Alternar entre dashboard geral e drilldown do QualiCare" onclick="toggleQualicareDashboardView(this)" onkeydown="if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); toggleQualicareDashboardView(this); }">
          <div class="monitor-dashboard-screen">
            <img class="qualicare-dashboard-image" src="assets/quality/qualicare-dashboard-higiene-maos.png" alt="Dashboard QualiCare Higiene de Mãos" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
          <span class="qualicare-dashboard-toggle">Ver drilldown por setor</span>
        </div>
      </div>
    </section>
  `;
}

export function presentationQualitySealsEvolutionSlide() {
  const hospitals = [
    ["H. Santa Helena", 2, 5],
    ["H. Santa Helena Santo André", 2, 6],
    ["H. Santa Helena São Bernardo", 3, 5],
    ["H. Ana Costa", 3, 6],
    ["H. Pitangueiras", 2, 6],
    ["H. Paulistano", 0, 3],
    ["H. Luz Vila Mariana", 4, 7],
    ["H. Metropolitano", 2, 5],
    ["H. Clínicas Caieiras", 3, 6],
    ["H. Vitória", 4, 7],
    ["H. Carlos Chagas", 4, 8],
    ["H. Ipiranga Arujá", 2, 4],
    ["H. Ipiranga Mogi", 3, 5],
    ["H. Clínicas Jacarepaguá", 2, 6],
    ["H. Pan-Americano", 3, 9],
    ["H. Pasteur", 4, 8],
    ["H. Mario Lioni", 3, 7],
    ["H. Promater", 4, 8],
    ["H. Monte Klinikum", 4, 7]
  ].sort((a, b) => {
    const currentDiff = b[2] - a[2];
    if (currentDiff !== 0) return currentDiff;
    const evolutionDiff = (b[2] - b[1]) - (a[2] - a[1]);
    if (evolutionDiff !== 0) return evolutionDiff;
    return a[0].localeCompare(b[0], "pt-BR");
  });

  const hospitalRows = hospitals.map(([name, previous, current], index) => {
    const evolution = current - previous;
    const width = Math.max(8, Math.round((current / 9) * 100));
    return `
      <tr style="--row-index: ${index}">
        <td>
          <span class="quality-seal-hospital-icon" aria-hidden="true"></span>
          <strong>${escapeHtml(name)}</strong>
        </td>
        <td>${previous} ${previous === 1 ? "selo" : "selos"}</td>
        <td>
          <span class="quality-seal-progress" style="--seal-width: ${width}%"></span>
          <strong>${current} ${current === 1 ? "selo" : "selos"}</strong>
        </td>
        <td class="quality-seal-evolution">+${evolution}</td>
      </tr>
    `;
  }).join("");
  return `
    <section class="quality-seals-slide animate">
      <div class="quality-seals-bg" aria-hidden="true"></div>
      <header class="program-header quality-seals-header">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestão com Resultado</span>
          <span class="meta-pill">Qualidade e Segurança</span>
          <span class="type-pill front-inteligencia-operacional">Reconhecimento</span>
        </div>
      </header>

      <div class="quality-seals-title">
        <span class="eyebrow">Evolução das certificações</span>
        <h2>Mais qualidade reconhecida, mais segurança para nossos pacientes.</h2>
      </div>

      <div class="quality-seals-summary quality-seals-summary-image" aria-label="Evolução total de selos da Rede TotalCare">
        <img src="assets/quality/quality-seals-summary-reference.png" alt="Evolução total de 29 selos em 2024 para 53 selos em 2026, com 24 novos selos" />
      </div>

      <div class="quality-seals-layout">
        <article class="quality-seals-table-card" aria-label="Evolução por hospital">
          <table class="quality-seals-table">
            <thead>
              <tr>
                <th>Hospital</th>
                <th>2024</th>
                <th>2026</th>
                <th>Evolução</th>
              </tr>
            </thead>
            <tbody>
              ${hospitalRows}
            </tbody>
            <tfoot>
              <tr>
                <td>Total rede</td>
                <td>29 selos</td>
                <td>53 selos</td>
                <td>+24</td>
              </tr>
            </tfoot>
          </table>
        </article>

        <aside class="quality-seals-showcase-card quality-seals-showcase-image-card" aria-label="Selos conquistados em 2026">
          <img class="quality-seals-detail-image" src="assets/quality/quality-seals-detail-reference.png" alt="Selos e certificações conquistadas em 2026 pela Rede TotalCare" />
        </aside>
      </div>
    </section>
  `;
}

export function presentationQmentumMembershipSlide() {
  const metrics = [
    ["19", "hospitais", "da Rede TotalCare participam do programa."],
    ["47", "países", "utilizam o Qmentum International como referência."],
    ["Padrões", "globais", "baseados em evidências, segurança do paciente e alta performance."],
    ["Impacto", "real", "na qualidade dos resultados clínicos e na experiência."]
  ];
  const proofItems = [
    ["qmentum-proof-recognition-generated.png", "Reconhecimento internacional", "concedido após avaliação rigorosa de padrões globais."],
    ["qmentum-proof-shield-generated.png", "Valida nossa cultura", "de qualidade, segurança e gestão assistencial de excelência."],
    ["qmentum-proof-people-generated.png", "Fortalece o compromisso", "com o paciente no centro, melhoria contínua e sustentabilidade."],
    ["qmentum-proof-globe-generated.png", "Integra um grupo seleto", "de instituições referência mundial na transformação do cuidado."]
  ];

  return `
    <section class="qmentum-membership-slide animate">
      <div class="qmentum-membership-bg" aria-hidden="true"></div>
      <header class="program-header qmentum-membership-header">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestão com Resultado</span>
          <span class="meta-pill">Qualidade e Segurança</span>
          <span class="type-pill front-inteligencia-operacional">Qmentum International</span>
        </div>
      </header>

      <div class="qmentum-membership-content">
        <div class="qmentum-membership-copy">
          <span class="qmentum-badge">Liderança que inspira. Excelência que transforma.</span>
          <h2>Primeira rede da América Latina a integrar o Qmentum International.</h2>
          <p>
            A Rede TotalCare, do Grupo Amil, alcançou um marco inédito: tornou-se a primeira rede hospitalar
            da América Latina a obter o Membership institucional do Qmentum International, o mais alto nível
            de reconhecimento global em qualidade e segurança assistencial.
          </p>

          <div class="qmentum-metrics" aria-label="Indicadores do reconhecimento Qmentum">
            ${metrics.map(([value, label, detail]) => `
              <article>
                <strong>${escapeHtml(value)}</strong>
                <span>${escapeHtml(label)}</span>
                <small>${escapeHtml(detail)}</small>
              </article>
            `).join("")}
          </div>
        </div>

        <div class="qmentum-membership-center">
          <article class="qmentum-pioneer-card">
            <span class="qmentum-pioneer-icon" aria-hidden="true">
              <img src="assets/quality/qmentum-icon-latam-generated.png" alt="" />
            </span>
            <strong>Ninguém na América Latina tem essa certificação como rede.</strong>
            <em>Somos pioneiros.</em>
          </article>
          <div class="qmentum-plaque-stage">
            <img src="assets/quality/qmentum-membership-plaque-generated.png" alt="Placa Qmentum International Membership da Rede TotalCare" />
          </div>
        </div>

        <aside class="qmentum-proof-rail" aria-label="O que o reconhecimento comprova">
          ${proofItems.map(([icon, title, text], index) => `
            <article>
              <span class="qmentum-proof-icon qmentum-proof-icon-${index + 1}" aria-hidden="true">
                <img src="assets/quality/${escapeHtml(icon)}" alt="" />
              </span>
              <div>
                <strong>${escapeHtml(title)}</strong>
                <p>${escapeHtml(text)}</p>
              </div>
            </article>
          `).join("")}
        </aside>
      </div>

      <footer class="qmentum-membership-footer">
        <div>
          <strong>Qualidade e segurança <span>não se precificam.</span></strong>
          <p>Elas se constroem todos os dias e se comprovam com excelência.</p>
        </div>
        <div>
          <p>Esse reconhecimento é a prova do nosso propósito:</p>
          <strong>cuidar de pessoas e transformar vidas todos os dias.</strong>
        </div>
      </footer>
    </section>
  `;
}

export function presentationUtiTopPerformanceSlide() {
  const metrics = [
    ["100%", "UTIs adultas", "certificadas pela AMIB."],
    ["Top Performer", "e UTI Eficiente", "selos de mérito assistencial."],
    ["AMIB + Epimed", "referência nacional", "qualidade intensiva orientada por dados."]
  ];
  const meaningItems = [
    ["uti-icon-recognition-generated.png", "Reconhecimento nacional", "da qualidade e segurança das nossas UTIs adultas."],
    ["uti-icon-standards-generated.png", "Padrões rigorosos", "de estrutura, processos, gestão e resultados assistenciais."],
    ["uti-icon-safety-generated.png", "Mais segurança", "e melhores desfechos clínicos para nossos pacientes."],
    ["uti-icon-improvement-generated.png", "Compromisso fortalecido", "com a excelência, a inovação e a melhoria contínua."],
    ["uti-icon-care-generated.png", "Orgulho em cuidar", "cada vez melhor de quem confia na Rede TotalCare."]
  ];

  return `
    <section class="uti-performance-slide animate">
      <div class="uti-performance-bg" aria-hidden="true"></div>
      <header class="program-header uti-performance-header">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestão com Resultado</span>
          <span class="meta-pill">Qualidade e Segurança</span>
          <span class="type-pill front-inteligencia-operacional">UTI Top Performance</span>
        </div>
      </header>

      <div class="uti-performance-content">
        <div class="uti-performance-copy">
          <span class="uti-performance-badge">Conquista que reflete excelência</span>
          <h2>100% das UTIs adultas da Rede TotalCare certificadas pela AMIB.</h2>
          <p>
            A Rede TotalCare, do Grupo Amil, alcançou um marco inédito: tornou-se a primeira rede com
            100% das UTIs adultas certificadas pela AMIB. Todas as suas unidades de terapia intensiva foram
            certificadas com o Selo UTI Top Performer e/ou UTI Eficiente, concedidos pela Associação de
            Medicina Intensiva Brasileira em parceria com a Epimed Solutions.
          </p>

          <div class="uti-performance-metrics" aria-label="Indicadores da certificação UTI Top Performance">
            ${metrics.map(([value, label, detail]) => `
              <article>
                <strong>${escapeHtml(value)}</strong>
                <span>${escapeHtml(label)}</span>
                <small>${escapeHtml(detail)}</small>
              </article>
            `).join("")}
          </div>
        </div>

        <div class="uti-performance-plaque-stage">
          <article class="uti-performance-pioneer-card">
            <span class="uti-performance-pioneer-icon" aria-hidden="true">
              <img src="assets/quality/uti-pioneer-certification-icon.png" alt="" />
            </span>
            <div>
              <strong>Placa inédita criada para a Rede TotalCare</strong>
              <em>Primeira rede com 100% das UTIs adultas certificadas</em>
            </div>
          </article>
          <img src="assets/quality/uti-top-performance-plaque-generated.png?v=opaque-4" alt="Placa UTI Top Performance da Rede TotalCare" />
        </div>
      </div>

      <aside class="uti-performance-meaning" aria-label="O que a certificação UTI Top Performance significa">
        <div class="uti-performance-meaning-title">
          <span></span>
          <strong>O que isso significa?</strong>
          <span></span>
        </div>
        <div class="uti-performance-meaning-grid">
          ${meaningItems.map(([icon, title, text]) => `
            <article>
              <span class="uti-performance-icon" aria-hidden="true">
                <img src="assets/quality/${escapeHtml(icon)}" alt="" />
              </span>
              <div>
                <strong>${escapeHtml(title)}</strong>
                <p>${escapeHtml(text)}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </aside>

      <footer class="uti-performance-footer">
        <span aria-hidden="true">+</span>
        <p>Esse selo valida nosso propósito de entregar cuidado seguro, humanizado e de alta qualidade.</p>
      </footer>
    </section>
  `;
}

export function presentationUtiCertificationComparisonSlide() {
  const proofItems = [
    ["uti-icon-recognition-generated.png", "Todas avaliadas", "100% das UTIs adultas passaram pelo processo de certificação."],
    ["uti-icon-standards-generated.png", "Sem exceções", "o reconhecimento cobre toda a rede, não apenas parte das unidades."],
    ["uti-icon-safety-generated.png", "Fato comprovado", "qualidade e segurança auditadas por referência nacional."]
  ];

  return `
    <section class="uti-comparison-slide animate">
      <div class="uti-comparison-bg" aria-hidden="true"></div>
      <header class="program-header uti-comparison-header">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Gestão com Resultado</span>
          <span class="meta-pill">Qualidade e Segurança</span>
          <span class="type-pill front-inteligencia-operacional">UTI Top Performance</span>
        </div>
      </header>

      <div class="uti-comparison-layout">
        <div class="uti-comparison-copy">
          <span class="uti-comparison-ribbon">Enquanto uns questionam</span>
          <h2>A Rede TotalCare <strong>pode afirmar:</strong></h2>
          <p>
            A matéria destaca 90% das UTIs avaliadas reconhecidas em uma grande rede. Aqui, a realidade é
            diferente: na Rede TotalCare, 100% das UTIs adultas foram certificadas pela AMIB como UTI Top
            Performer e/ou UTI Eficiente.
          </p>

          <article class="uti-comparison-proof-card">
            <span aria-hidden="true">
              <img src="assets/quality/uti-pioneer-certification-icon.png" alt="" />
            </span>
            <strong>100%</strong>
            <div>
              <em>das nossas UTIs adultas são certificadas</em>
              <small>e isso é comprovado.</small>
            </div>
          </article>

          <div class="uti-comparison-proof-list">
            ${proofItems.map(([icon, title, text]) => `
              <article>
                <img src="assets/quality/${escapeHtml(icon)}" alt="" aria-hidden="true" />
                <div>
                  <strong>${escapeHtml(title)}</strong>
                  <p>${escapeHtml(text)}</p>
                </div>
              </article>
            `).join("")}
          </div>
        </div>

        <div class="uti-comparison-market" aria-label="Comparativo entre matéria de mercado e Rede TotalCare">
          <article class="uti-comparison-context-card">
            <h3><span>Nem todos podem dizer.</span> Nós podemos.</h3>
            <p>
              A comunicação de 100% só é possível quando todas as UTIs adultas são certificadas.
            </p>
          </article>

          <article class="uti-comparison-article-card" aria-label="Matéria sobre 90% das UTIs avaliadas">
            <img src="assets/quality/rede-dor-article-original.jpeg" alt="Matéria Rede D'Or sobre programa de melhores UTIs" />
            <div class="uti-comparison-article-overlay">
              <span>Matéria citada</span>
              <strong>Rede D'Or é destaque em programa de melhores UTIs</strong>
              <small>90% das UTIs avaliadas receberam reconhecimento em 2026</small>
            </div>
          </article>

          <div class="uti-comparison-scoreboard">
            <article>
              <img class="uti-comparison-score-logo rede-dor" src="assets/quality/logo-rede-dor-clean.png" alt="Rede D'Or" />
              <span>Matéria citada</span>
              <strong>90%</strong>
              <small>das UTIs avaliadas reconhecidas</small>
            </article>
            <article class="is-totalcare">
              <img class="uti-comparison-score-logo totalcare" src="assets/quality/logo-rede-totalcare.webp" alt="Rede TotalCare" />
              <span>Rede TotalCare</span>
              <strong>100%</strong>
              <small>das UTIs adultas certificadas pela AMIB</small>
            </article>
          </div>

          <article class="uti-comparison-difference">
            <strong>Diferença que importa:</strong>
            <p>nem todos alcançam. Nós, sim.</p>
          </article>
        </div>
      </div>

      <footer class="uti-comparison-footer">
        <strong>Qualidade que se comunica com responsabilidade.</strong>
        <span>Excelência que se comprova com fatos.</span>
      </footer>
    </section>
  `;
}

export function presentationManagementSlide(activeTarget = "gestao-ciclo-receita-faturamento") {
  const managementItems = [
    { title: "Ciclo Receita", image: "assets/management/management-ciclo-receita-command.png", target: "gestao-ciclo-receita-faturamento" },
    { title: "Ritos de Gestão", image: "assets/management/management-ritos-gestao-command.png", target: "ritos-gestao-reunioes-semanais" },
    { title: "Qualidade e Segurança", image: "assets/management/management-qualidade-seguranca-selos-command.png", target: "qualidade-seguranca-capa" },
    { title: "Clientes", image: "assets/management/management-clientes-customer-center-v2-command.png" }
  ];
  return `
    <section class="presentation-journey presentation-journey-premium management-slide animate">
      <span class="journey-logo hero-logo logo-lockup">
        <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
      </span>
      <div class="journey-ambient" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="journey-title-block">
        <span class="eyebrow">Gestão com Resultado</span>
        <h2>Depois da jornada, o dado vira gestão, rito e resultado.</h2>
        <p>Ciclo receita, ritos de gestão, qualidade e clientes entram como camadas de sustentação da operação.</p>
      </div>
      <div class="management-grid">
        ${managementItems.map((item, index) => `
          <article class="management-node ${item.target === activeTarget ? "active" : ""} ${item.image ? "has-image" : ""}" ${item.target ? `role="button" tabindex="0" onclick="jumpToStage('${item.target}')" onkeydown="if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); jumpToStage('${item.target}'); }"` : ""}>
            ${item.image ? `<img class="management-node-media" src="${escapeHtml(item.image)}" alt="" aria-hidden="true" loading="eager" />` : ""}
            <strong>${escapeHtml(item.title)}</strong>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}
