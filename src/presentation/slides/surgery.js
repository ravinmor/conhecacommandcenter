export function presentationCentroCirurgicoOccupancySlide() {
  return `
    <section class="program-slide surgery-occupancy-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">Centro Cirúrgico</span>
          <span class="type-pill front-inovacao">Inovação</span>
        </div>
        <span class="eyebrow">CC Pro | Plataforma de monitoramento do centro cirúrgico</span>
        <h2>CC Pro, nossa plataforma de monitoramento do centro cirúrgico.</h2>
        <p>
          O Command Center desenvolveu uma ferramenta para registrar a entrada e saída do paciente na sala
          cirúrgica por bipagem da pulseira. A operação deixa de depender de lançamentos manuais posteriores,
          reduz trabalho administrativo da enfermagem e mostra a ocupação das salas sem viés de apontamento.
        </p>
        <div class="sla-flow surgery-flow" aria-label="Fluxo de registro da sala cirúrgica">
          <span>Entrada</span>
          <span>Bipagem</span>
          <span>Sala ocupada</span>
          <span>Saída</span>
          <span>BI atualizado</span>
        </div>
        <div class="program-metrics surgery-metrics">
          <article>
            <span>Tempo real</span>
            <strong>Ao vivo</strong>
            <small>entrada e saída capturadas na sala</small>
          </article>
          <article>
            <span>Menos papel</span>
            <strong>Fluxo</strong>
            <small>enfermagem focada no cuidado cirúrgico</small>
          </article>
          <article class="innovation">
            <span>Mapa de salas</span>
            <strong>Status</strong>
            <small>livre, ocupada, setup e desativada</small>
          </article>
        </div>
      </div>
      <div class="program-visual surgery-visual">
        <div class="monitor-image-mockup surgery-dashboard-mockup">
          <div class="monitor-dashboard-screen">
            <img src="assets/surgery/centro-cirurgico-ocupacao-salas-dashboard.png" alt="Dashboard Ocupação de Salas do Centro Cirúrgico" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <div class="tablet-mockup surgery-scan-mockup" aria-label="Bipagem do paciente na entrada da sala cirúrgica">
          <div class="tablet-screen">
            <video src="assets/surgery/centro-cirurgico-bip-paciente.mp4" controls playsinline preload="metadata"></video>
            <button class="video-poster ccpro-video-poster" type="button" onclick="playSurgeryScanVideo(this)" aria-label="Reproduzir vídeo da bipagem CC Pro">
              <span class="poster-brand">CC Pro</span>
              <strong>Bipagem do paciente</strong>
              <em>Desenvolvimento próprio Command Center</em>
              <i>▶</i>
            </button>
          </div>
        </div>
        <div class="decision-ribbon surgery-ribbon" aria-hidden="true">
          <span>Inovação própria</span>
          <strong>Gestão online do centro cirúrgico</strong>
        </div>
      </div>
    </section>
  `;
}

export function playSurgeryScanVideo(button) {
  const screen = button.closest(".tablet-screen");
  const video = screen?.querySelector("video");
  if (!video) return;
  button.classList.add("hidden");
  video.play();
}

export function presentationCentroCirurgicoCockpitSlide() {
  return `
    <section class="program-slide surgery-cockpit-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">Centro Cirúrgico</span>
          <span class="type-pill front-inteligencia-operacional">Inteligência Operacional</span>
        </div>
        <span class="eyebrow">Cockpit Centro Cirúrgico</span>
        <h2>Decisões sobre grade cirúrgica elevando ocupação mês contra mês.</h2>
        <p>
          O cockpit permite que o hospital acompanhe ocupação, primeiro horário, horário nobre e gargalos por sala.
          Com a leitura diária dos dados, a gestão ajusta grades, redistribui horários e melhora a performance
          operacional do centro cirúrgico.
        </p>
        <div class="program-metrics surgery-cockpit-metrics">
          <article>
            <span>Ocupação geral</span>
            <strong>+30 p.p.</strong>
            <small>56,2% em Jan para 86,2% em Fev</small>
          </article>
          <article class="innovation">
            <span>Antes de 7h30</span>
            <strong>+55,6 p.p.</strong>
            <small>30,4% em Jan para 86,0% em Fev</small>
          </article>
          <article>
            <span>Performance</span>
            <strong>+53%</strong>
            <small>ganho relativo de ocupação geral</small>
          </article>
        </div>
      </div>
      <div class="program-visual surgery-cockpit-visual">
        <div class="cockpit-monitor-row" aria-label="Comparativo do cockpit entre janeiro e fevereiro">
          <article class="cockpit-monitor-card before">
            <div class="cockpit-monitor-label">
              <span>1º mês de operação</span>
              <strong>Jan/25</strong>
            </div>
            <div class="monitor-image-mockup cockpit-monitor-mockup">
              <div class="monitor-dashboard-screen">
                <img src="assets/surgery/centro-cirurgico-cockpit-jan.png" alt="Cockpit Centro Cirúrgico em janeiro de 2025" />
              </div>
              <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
            </div>
          </article>
          <article class="cockpit-monitor-card after">
            <div class="cockpit-monitor-label">
              <span>2º mês de operação</span>
              <strong>Fev/25</strong>
            </div>
            <div class="monitor-image-mockup cockpit-monitor-mockup">
              <div class="monitor-dashboard-screen">
                <img src="assets/surgery/centro-cirurgico-cockpit-fev.png" alt="Cockpit Centro Cirúrgico em fevereiro de 2025" />
              </div>
              <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
            </div>
          </article>
        </div>
        <div class="cockpit-before-notes" aria-hidden="true">
          <strong>Centro cirúrgico ocioso</strong>
          <span>Médicos reclamando do atraso</span>
          <span>Pacientes e acompanhantes sem previsão de início da cirurgia</span>
        </div>
        <div class="cockpit-evolution-callouts" aria-hidden="true">
          <article>
            <span>Primeiro horário</span>
            <strong>+53,4%</strong>
            <small>56,2% para 86,2% de ocupação</small>
          </article>
          <article>
            <span>Ocupação geral</span>
            <strong>+182,9%</strong>
            <small>30,4% para 86% de ocupação</small>
          </article>
          <article>
            <span>Resultado</span>
            <strong>Cirurgias no horário</strong>
            <small>médicos satisfeitos e previsibilidade para paciente e acompanhante</small>
          </article>
        </div>
        <div class="decision-ribbon cockpit-ribbon" aria-hidden="true">
          <span>Gargalos visíveis</span>
          <strong>Grade ajustada com base em ocupação real</strong>
        </div>
      </div>
    </section>
  `;
}

export function presentationCentroCirurgicoFamilyCareSlide() {
  return `
    <section class="program-slide family-care-slide family-care-premium animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy family-care-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">Centro Cirúrgico</span>
          <span class="type-pill front-inovacao">Inovação</span>
        </div>
        <span class="eyebrow">CCPro | Acolhimento familiar</span>
        <h2>Comunicação automática que <mark>acolhe</mark>, informa e <mark>aproxima</mark>.</h2>
        <p>
          A cada bipagem da pulseira, o familiar recebe atualizações em tempo real pelo WhatsApp,
          com linguagem humanizada e informações confiáveis. Menos ansiedade, mais segurança e uma
          experiência de cuidado que vai além da sala cirúrgica.
        </p>
      </div>
      <div class="program-visual family-care-visual">
        <div class="family-care-phone whatsapp-phone" aria-label="Mensagem WhatsApp ao familiar">
          <div class="family-phone-screen">
            <img src="assets/surgery/centro-cirurgico-whatsapp-familiar.png" alt="Mensagem de WhatsApp enviada ao familiar pelo CCPro" />
          </div>
        </div>
        <div class="family-care-phone video-phone" aria-label="Depoimento de familiar sobre o CCPro">
          <div class="family-phone-screen">
            <video src="assets/surgery/centro-cirurgico-depoimento-mariusa.mp4" controls playsinline preload="metadata"></video>
          </div>
        </div>
        <div class="decision-ribbon family-care-ribbon" aria-hidden="true">
          <span>Experiência do familiar</span>
          <strong>O dado vira acolhimento em tempo real</strong>
        </div>
      </div>
    </section>
  `;
}

function opmeEvolutionChart() {
  const data = [
    ["Jan/24", 50.8], ["Fev/24", 55.6], ["Mar/24", 56.7], ["Abr/24", 55.3],
    ["Mai/24", 57.1], ["Jun/24", 52.0], ["Jul/24", 48.1], ["Ago/24", 46.8],
    ["Set/24", 61.9], ["Out/24", 60.2], ["Nov/24", 66.1], ["Dez/24", 68.6],
    ["Jan/25", 74.9], ["Fev/25", 70.2], ["Mar/25", 71.9], ["Abr/25", 79.2],
    ["Mai/25", 84.7], ["Jun/25", 83.5], ["Jul/25", 83.1], ["Ago/25", 84.8],
    ["Set/25", 83.6], ["Out/25", 85.0], ["Nov/25", 86.3], ["Dez/25", 87.7],
    ["Jan/26", 86.5], ["Fev/26", 84.3], ["Mar/26", 82.1], ["Abr/26", 87.1],
    ["Mai/26", 85.9], ["Jun/26", 88.7], ["Jul/26", 88.7]
  ];
  const min = 44;
  const max = 91;
  const chart = { x: 32, y: 36, w: 748, h: 150 };
  const points = data.map(([, value], index) => {
    const x = chart.x + (index * chart.w) / (data.length - 1);
    const y = chart.y + chart.h - ((value - min) / (max - min)) * chart.h;
    return { x, y, value, label: data[index][0], index };
  });
  const line = points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
  const fill = `${line} ${chart.x + chart.w},${chart.y + chart.h} ${chart.x},${chart.y + chart.h}`;
  const commandStart = points[4];

  return `
    <div class="opme-evolution-card">
      <div class="opme-evolution-head">
        <span>Evolução da adesão</span>
        <strong>+37,9 p.p.</strong>
        <small>Jan/24 até Jul/26</small>
      </div>
      <svg viewBox="0 0 812 244" role="img" aria-label="Evolução da adesão ao fornecedor referenciado de janeiro de 2024 a julho de 2026">
        <path class="grid-line" d="M32 62H780M32 111H780M32 160H780" />
        <g class="command-start-marker">
          <path d="M${commandStart.x.toFixed(1)} 28V198" />
          <path class="marker-arrow" d="M${commandStart.x.toFixed(1)} 28 L${(commandStart.x - 8).toFixed(1)} 42 M${commandStart.x.toFixed(1)} 28 L${(commandStart.x + 8).toFixed(1)} 42" />
          <text x="${commandStart.x.toFixed(1)}" y="18">Início Command Center</text>
        </g>
        <polygon class="trend-fill" points="${fill}" />
        <polyline class="trend-line" points="${line}" />
        <g class="value-labels">
          ${points.map((point, index) => {
            const isEndpoint = index === 0 || index === points.length - 1;
            const shouldShow = isEndpoint || index % 2 === 0 || index > 26;
            return shouldShow ? `
            <text class="${isEndpoint ? "endpoint-label" : ""}" x="${point.x.toFixed(1)}" y="${Math.max(20, point.y - (isEndpoint ? 16 : 10)).toFixed(1)}">${String(point.value).replace(".", ",")}%</text>
          ` : "";
          }).join("")}
        </g>
        <g class="endpoint-series">
          ${points.map((point, index) => (index === 0 || index === points.length - 1) ? `
            <circle class="endpoint-dot" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="6.5" />
          ` : "").join("")}
        </g>
        <g class="point-series">
          ${points.map((point) => `<circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="4" />`).join("")}
        </g>
        <g class="month-labels">
          ${points.map((point, index) => index % 3 === 0 || index === points.length - 1 ? `
            <text x="${point.x.toFixed(1)}" y="224">${point.label}</text>
          ` : "").join("")}
        </g>
        <g class="year-labels">
          <text x="165" y="240">2024</text>
          <text x="480" y="240">2025</text>
          <text x="720" y="240">2026</text>
        </g>
      </svg>
    </div>
  `;
}

export function presentationCentroCirurgicoOpmeSlide() {
  return `
    <section class="program-slide surgery-opme-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">Centro Cirúrgico</span>
          <span class="type-pill front-inteligencia-operacional">Inteligência Operacional</span>
        </div>
        <span class="eyebrow">BI OPME Referenciado</span>
        <h2>Adesão médica ao fabricante monitorada</h2>
        <p>
          O Command Center acompanha se as solicitações de OPME seguem os fornecedores referenciados e os protocolos
          definidos. Quando a adesão do médico fica baixa, o dado direciona uma atuação objetiva para corrigir o desvio.
        </p>
        <div class="program-metrics opme-metrics">
          <article>
            <span>Adesão atual</span>
            <strong>88,7%</strong>
            <small>referenciado monitorado até Jul/26</small>
          </article>
          <article class="success">
            <span>Evolução</span>
            <strong>+37,9 p.p.</strong>
            <small>de Jan/24 até o resultado atual</small>
          </article>
        </div>
        ${opmeEvolutionChart()}
      </div>
      <div class="program-visual surgery-opme-visual">
        <div class="monitor-image-mockup opme-dashboard-mockup" role="button" tabindex="0" aria-label="Alternar entre dashboard geral e drilldown por médico" onclick="toggleOpmeDashboardView(this)" onkeydown="if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); toggleOpmeDashboardView(this); }">
          <div class="monitor-dashboard-screen">
            <img class="opme-dashboard-image" src="assets/surgery/centro-cirurgico-opme-dashboard.png" alt="Dashboard Analítico OPME - Valor Spend Utilizado" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
          <span class="opme-drill-toggle">Ver drilldown médico</span>
        </div>
        <div class="decision-ribbon opme-ribbon" aria-hidden="true">
          <span>Adesão baixa</span>
          <strong>Atuação direcionada sobre o médico solicitante</strong>
        </div>
      </div>
    </section>
  `;
}

export function toggleOpmeDashboardView(target) {
  const root = target?.closest?.(".opme-dashboard-mockup") || document.querySelector(".opme-dashboard-mockup");
  if (!root) return;
  const image = root.querySelector(".opme-dashboard-image");
  const label = root.querySelector(".opme-drill-toggle");
  const showDrilldown = !root.classList.contains("show-drilldown");
  root.classList.toggle("show-drilldown", showDrilldown);
  if (image) {
    image.src = showDrilldown
      ? "assets/surgery/centro-cirurgico-opme-dashboard-drilldown.png"
      : "assets/surgery/centro-cirurgico-opme-dashboard.png";
    image.alt = showDrilldown
      ? "Dashboard Analítico OPME com drilldown por médico e item"
      : "Dashboard Analítico OPME - Valor Spend Utilizado";
  }
  if (label) label.textContent = showDrilldown ? "Voltar ao painel geral" : "Ver drilldown médico";
}
