export function presentationOpeningSlide() {
  return `
    <section class="presentation-opening animate">
      <div class="opening-photo presentation-photo"></div>
      <div class="presentation-opening-copy">
        <span class="hero-logo presentation-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
          <span>Inteligência Operacional, Inovação e Monitoramento.</span>
        </span>
        <span class="eyebrow">Command Center TotalCare</span>
        <h2>Inteligência operacional, inovação e monitoramento.</h2>
        <p>Um ecossistema integrado para monitorar a jornada do paciente, transformar dados em ação e sustentar a operação em tempo real.</p>
        <div class="presentation-ecosystem">
          <article><span>01</span><strong>Inteligência Operacional</strong><small>BI, dados e visão executiva.</small></article>
          <article><span>02</span><strong>Inovação</strong><small>Apps, automações e ferramentas digitais.</small></article>
          <article><span>03</span><strong>Monitoramento</strong><small>Acionamento, implantação e cobrança online.</small></article>
        </div>
      </div>
    </section>
  `;
}

export function presentationEcosystemSlide() {
  return `
    <section class="presentation-ecosystem-slide animate">
      <div class="ecosystem-ring presentation-ecosystem-ring">
        <div class="ecosystem-intro">
          <span>Ecossistema Command Center</span>
        </div>
        <div class="ecosystem-visual" aria-hidden="true">
          <img src="assets/opening/ecosystem-hologlobe.png" alt="" />
        </div>

        <div class="ecosystem-triad">
          <svg class="triad-lines" viewBox="0 0 100 100" aria-hidden="true">
            <path class="triad-orbit" d="M18 12 C4 34 5 62 20 83 C33 99 58 96 72 78" />
            <path class="triad-edge edge-a" d="M19 18 C31 30 31 39 20 50" />
            <path class="triad-edge edge-b" d="M20 50 C34 60 34 71 21 82" />
            <path class="triad-edge edge-c" d="M19 18 C46 38 50 62 21 82" />
          </svg>

          <article class="ecosystem-node node-bi">
            <div class="node-orb">
              <svg class="eco-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 16v-5" /><path d="M12 16V8" /><path d="M16 16v-3" />
              </svg>
            </div>
            <div class="node-copy">
              <h3>Inteligência Operacional</h3>
              <p>Visão em tempo real para antecipar gargalos e apoiar decisões assertivas.</p>
              <div class="node-tags"><em>BI executivo</em><em>Tempo real</em></div>
            </div>
          </article>

          <article class="ecosystem-node node-app">
            <div class="node-orb">
              <svg class="eco-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 2 5 13h6l-1 9 9-12h-6l0-8Z" />
              </svg>
            </div>
            <div class="node-copy">
              <h3>Inovação</h3>
              <p>Aplicativos, automações e soluções digitais que simplificam processos.</p>
              <div class="node-tags"><em>Apps</em><em>Automação</em></div>
            </div>
          </article>

          <article class="ecosystem-node node-monitor">
            <div class="node-orb">
              <svg class="eco-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="7" /><path d="M12 5v3" /><path d="M12 16v3" /><path d="M5 12h3" /><path d="M16 12h3" /><circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div class="node-copy">
              <h3>Monitoramento</h3>
              <p>Acompanhamento contínuo para identificar riscos e acionar a operação.</p>
              <div class="node-tags"><em>24/7</em><em>Acionamento</em></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}
