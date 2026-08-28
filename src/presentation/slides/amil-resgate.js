export function presentationAmilResgateInnovationSlide() {
  return `
    <section class="program-slide innovation-rescue-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">AMIL Resgate</span>
          <span class="type-pill front-inovacao">Inovação</span>
        </div>
        <span class="eyebrow">Aplicativo AMIL Resgate</span>
        <h2>Operação digitalizada, missões rastreadas em tempo real.</h2>
        <p>
          O Command Center desenvolveu uma aplicação própria para conduzir o fluxo do AMIL Resgate:
          abertura da ocorrência, atribuição da ambulância, aceite da missão, chegada ao local, deslocamento
          ao destino e histórico completo de SLA com geolocalização em tempo real.
        </p>
        <div class="sla-flow" aria-label="Fluxo rastreado da missão">
          <span>Ocorrência</span>
          <span>Atribuição</span>
          <span>Aceite</span>
          <span>Chegada</span>
          <span>Destino</span>
        </div>
        <div class="program-metrics rescue-metrics">
          <article>
            <span>Rastreabilidade</span>
            <strong>100%</strong>
            <small>histórico da missão de ponta a ponta</small>
          </article>
          <article>
            <span>SLA operacional</span>
            <strong>Ao vivo</strong>
            <small>tempos críticos acompanhados em tempo real</small>
          </article>
          <article class="innovation">
            <span>Geolocalização</span>
            <strong>Mapa</strong>
            <small>ambulâncias monitoradas durante toda operação</small>
          </article>
        </div>
      </div>
      <div class="program-visual rescue-visual">
        <div class="monitor-image-mockup rescue-central-mockup">
          <div class="monitor-dashboard-screen">
            <video src="assets/amil-resgate/amil-resgate-central.mp4" autoplay muted loop playsinline preload="metadata"></video>
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <div class="tablet-mockup rescue-app-mockup" aria-label="Aplicativo AMIL Resgate em tablet">
          <div class="tablet-screen">
            <video src="assets/amil-resgate/amil-resgate-app-ambulancia-cloudflare.m4v" autoplay muted loop playsinline preload="metadata"></video>
          </div>
        </div>
        <div class="decision-ribbon innovation-ribbon" aria-hidden="true">
          <span>Inovação própria</span>
          <strong>Gestão digital do resgate</strong>
        </div>
      </div>
    </section>
  `;
}

export function presentationAmilResgateDashboardSlide() {
  return `
    <section class="program-slide innovation-rescue-slide rescue-dashboard-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">AMIL Resgate</span>
          <span class="type-pill front-inteligencia-operacional">Inteligência Operacional</span>
        </div>
        <span class="eyebrow">BI Resumo AMIL Resgate</span>
        <h2>Indicadores operacionais para elevar a performance do AMIL Resgate.</h2>
        <p>
          Com o aplicativo em operação, o Command Center passou a consolidar produtividade, ocupação,
          histórico de chamadas e mapa de acionamentos. A base estatística revela onde a demanda acontece
          e apoia decisões mais estratégicas sobre a posição das ambulâncias.
        </p>
        <div class="program-metrics rescue-metrics">
          <article>
            <span>Chamados criados</span>
            <strong>17.691</strong>
            <small>visão consolidada da demanda operacional</small>
          </article>
          <article>
            <span>Conversão</span>
            <strong>65%</strong>
            <small>remoções realizadas sobre solicitações</small>
          </article>
          <article class="innovation">
            <span>Tempo médio</span>
            <strong>01h55m</strong>
            <small>duração monitorada por histórico</small>
          </article>
        </div>
        <div class="rescue-insight-list" aria-label="Decisões habilitadas pelo BI">
          <span>Produtividade por equipe e veículo</span>
          <span>Ocupação e histórico de chamadas</span>
          <span>Base das ambulâncias orientada por mapa de demanda</span>
        </div>
      </div>
      <div class="program-visual rescue-visual rescue-dashboard-visual">
        <div class="monitor-image-mockup rescue-summary-mockup">
          <div class="monitor-dashboard-screen">
            <img src="assets/amil-resgate/amil-resgate-resumo-dashboard.png" alt="Dashboard Resumo AMIL Resgate" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <div class="decision-ribbon innovation-ribbon rescue-map-ribbon" aria-hidden="true">
          <span>Base estratégica</span>
          <strong>Ambulâncias onde a demanda acontece</strong>
        </div>
      </div>
    </section>
  `;
}
