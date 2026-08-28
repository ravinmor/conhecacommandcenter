export function presentationProntoSocorroWaitTimeSlide() {
  return `
    <section class="program-slide ps-wait-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">Pronto-Socorro</span>
          <span class="type-pill front-inteligencia-operacional">Inteligência Operacional</span>
        </div>
        <span class="eyebrow">BI Tempo de Espera</span>
        <h2>Tempo de espera monitorado</h2>
        <p>
          O Command Center acompanha a perda acima de 30 minutos e detalha cada fase do fluxo do pronto-socorro:
          triagem, recepção e espera médica. A meta é manter a perda abaixo de 25% para proteger acesso,
          experiência do paciente e previsibilidade operacional.
        </p>
        <div class="program-metrics ps-metrics">
          <article>
            <span>Atendimentos</span>
            <strong>2,2 Mi</strong>
            <small>volume monitorado no pronto-socorro</small>
          </article>
          <article class="success">
            <span>Perda atual</span>
            <strong>18%</strong>
            <small>resultado atual abaixo do limite de 25%</small>
          </article>
          <article>
            <span>Porta-médico</span>
            <strong>00:18:40</strong>
            <small>tempo total até o atendimento médico</small>
          </article>
        </div>
        <div class="evolution-card ps-evolution-card">
          <div class="evolution-summary">
            <span>Evolução da perda acima de 30 min</span>
            <strong>-52%</strong>
            <small>queda média de 2024 para 2026</small>
          </div>
          <svg viewBox="0 0 780 246" aria-hidden="true">
            <path class="grid-line" d="M28 156H742M28 120H742M28 84H742M28 48H742" />
            <path class="target-line" d="M28 119H742" />
            <path class="year-line" d="M289.8 34V205M575.4 34V205" />
            <g class="command-start-marker ps-command-start-marker">
              <path d="M123.2 30V198" />
              <path class="marker-arrow" d="M123.2 30 L114.2 44 M123.2 30 L132.2 44" />
              <text x="123.2" y="10">Início Command Center</text>
            </g>
            <g class="bar-series">
              <rect x="20.0" y="95.0" width="16" height="75.0" /><rect x="43.8" y="66.9" width="16" height="103.1" /><rect x="67.6" y="51.9" width="16" height="118.1" /><rect x="91.4" y="40.6" width="16" height="129.4" /><rect x="115.2" y="61.3" width="16" height="108.8" /><rect x="139.0" y="74.4" width="16" height="95.6" /><rect x="162.8" y="106.3" width="16" height="63.8" /><rect x="186.6" y="95.0" width="16" height="75.0" /><rect x="210.4" y="96.9" width="16" height="73.1" /><rect x="234.2" y="111.9" width="16" height="58.1" /><rect x="258.0" y="119.4" width="16" height="50.6" /><rect x="281.8" y="128.8" width="16" height="41.3" /><rect x="305.6" y="125.0" width="16" height="45.0" /><rect x="329.4" y="123.1" width="16" height="46.9" /><rect x="353.2" y="117.5" width="16" height="52.5" /><rect x="377.0" y="104.4" width="16" height="65.6" /><rect x="400.8" y="96.9" width="16" height="73.1" /><rect x="424.6" y="126.9" width="16" height="43.1" /><rect x="448.4" y="136.3" width="16" height="33.8" /><rect x="472.2" y="123.1" width="16" height="46.9" /><rect x="496.0" y="125.0" width="16" height="45.0" /><rect x="519.8" y="117.5" width="16" height="52.5" /><rect x="543.6" y="136.3" width="16" height="33.8" /><rect x="567.4" y="138.1" width="16" height="31.9" /><rect x="591.2" y="138.1" width="16" height="31.9" /><rect x="615.0" y="128.8" width="16" height="41.3" /><rect x="638.8" y="123.1" width="16" height="46.9" /><rect x="662.6" y="134.4" width="16" height="35.6" /><rect x="686.4" y="126.9" width="16" height="43.1" /><rect x="710.2" y="125.0" width="16" height="45.0" /><rect x="734.0" y="136.3" width="16" height="33.8" />
            </g>
            <g class="value-labels">
              <text x="28.0" y="87.0">40%</text><text x="51.8" y="58.9">55%</text><text x="75.6" y="43.9">63%</text><text x="99.4" y="32.6">69%</text><text x="123.2" y="53.3">58%</text><text x="147.0" y="66.4">51%</text><text x="170.8" y="98.3">34%</text><text x="194.6" y="87.0">40%</text><text x="218.4" y="88.9">39%</text><text x="242.2" y="103.9">31%</text><text x="266.0" y="111.4">27%</text><text x="289.8" y="120.8">22%</text><text x="313.6" y="117.0">24%</text><text x="337.4" y="115.1">25%</text><text x="361.2" y="109.5">28%</text><text x="385.0" y="96.4">35%</text><text x="408.8" y="88.9">39%</text><text x="432.6" y="118.9">23%</text><text x="456.4" y="128.3">18%</text><text x="480.2" y="115.1">25%</text><text x="504.0" y="117.0">24%</text><text x="527.8" y="109.5">28%</text><text x="551.6" y="128.3">18%</text><text x="575.4" y="130.1">17%</text><text x="599.2" y="130.1">17%</text><text x="623.0" y="120.8">22%</text><text x="646.8" y="115.1">25%</text><text x="670.6" y="126.4">19%</text><text x="694.4" y="118.9">23%</text><text x="718.2" y="117.0">24%</text><text x="742.0" y="128.3">18%</text>
            </g>
            <g class="month-labels">
              <text x="28.0" y="204">Jan</text><text x="51.8" y="204">Fev</text><text x="75.6" y="204">Mar</text><text x="99.4" y="204">Abr</text><text x="123.2" y="204">Mai</text><text x="147.0" y="204">Jun</text><text x="170.8" y="204">Jul</text><text x="194.6" y="204">Ago</text><text x="218.4" y="204">Set</text><text x="242.2" y="204">Out</text><text x="266.0" y="204">Nov</text><text x="289.8" y="204">Dez</text><text x="313.6" y="204">Jan</text><text x="337.4" y="204">Fev</text><text x="361.2" y="204">Mar</text><text x="385.0" y="204">Abr</text><text x="408.8" y="204">Mai</text><text x="432.6" y="204">Jun</text><text x="456.4" y="204">Jul</text><text x="480.2" y="204">Ago</text><text x="504.0" y="204">Set</text><text x="527.8" y="204">Out</text><text x="551.6" y="204">Nov</text><text x="575.4" y="204">Dez</text><text x="599.2" y="204">Jan</text><text x="623.0" y="204">Fev</text><text x="646.8" y="204">Mar</text><text x="670.6" y="204">Abr</text><text x="694.4" y="204">Mai</text><text x="718.2" y="204">Jun</text><text x="742.0" y="204">Jul</text>
            </g>
            <g class="year-labels">
              <text x="158" y="220">2024</text>
              <text x="444" y="220">2025</text>
              <text x="671" y="220">2026</text>
            </g>
          </svg>
        </div>
      </div>
      <div class="program-visual ps-wait-visual">
        <div class="monitor-image-mockup ps-wait-mockup">
          <div class="monitor-dashboard-screen">
            <img src="assets/emergency/pronto-socorro-tempo-espera-dashboard.png" alt="Dashboard Tempo de Espera Pronto-Socorro" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <div class="decision-ribbon ps-target-ribbon" aria-hidden="true">
          <span>Meta operacional</span>
          <strong>Perda abaixo de 25%</strong>
        </div>
      </div>
    </section>
  `;
}

export function presentationProntoSocorroMonitoringSlide() {
  return `
    <section class="program-slide ps-wait-slide ps-monitoring-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">Pronto-Socorro</span>
          <span class="type-pill front-monitoramento-proativo">Monitoramento</span>
        </div>
        <span class="eyebrow">Monitoramento ativo do PS</span>
        <h2>Desvios identificados em tempo real, unidades acionadas na hora.</h2>
        <p>
          O time de Monitoramento acompanha pacientes aguardando por faixa de tempo, identifica bandeiras
          vermelhas no dashboard e provoca ativamente os gestores das unidades pelo WhatsApp. Quando necessário,
          as câmeras das unidades ajudam a contextualizar o fluxo e acelerar a resposta operacional.
        </p>
        <div class="program-metrics ps-monitoring-metrics">
          <article>
            <span>Aguardando</span>
            <strong>112</strong>
            <small>pacientes em acompanhamento no painel</small>
          </article>
          <article class="alert">
            <span>Perda acumulada</span>
            <strong>18,8%</strong>
            <small>gatilho para provocação ativa</small>
          </article>
          <article>
            <span>Maior tempo</span>
            <strong>01:38</strong>
            <small>desvio monitorado até a tratativa</small>
          </article>
        </div>
        <div class="monitoring-actions" aria-label="Rotina de acionamento do monitoramento">
          <span>Alerta por faixa de espera</span>
          <span>Acionamento no WhatsApp</span>
          <span>Validação por câmera quando necessário</span>
        </div>
      </div>
      <div class="program-visual ps-monitoring-visual">
        <div class="monitor-image-mockup ps-monitoring-mockup">
          <div class="monitor-dashboard-screen">
            <img src="assets/emergency/pronto-socorro-monitoramento-dashboard.png" alt="Dashboard de monitoramento do tempo de espera no Pronto-Socorro" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <div class="phone-mockup ps-whatsapp-mockup" aria-label="WhatsApp de acionamento do monitoramento">
          <div class="phone-screen">
            <img src="assets/emergency/pronto-socorro-whatsapp-monitoramento.png" alt="Alerta do time de monitoramento no WhatsApp" />
          </div>
        </div>
        <div class="decision-ribbon monitoring-ribbon" aria-hidden="true">
          <span>Acionamento ativo</span>
          <strong>Gestores provocados em tempo real</strong>
        </div>
      </div>
    </section>
  `;
}

export function presentationProntoSocorroCtConversionSlide() {
  return `
    <section class="program-slide ps-wait-slide ps-ct-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">Pronto-Socorro</span>
          <span class="type-pill front-inteligencia-operacional">Inteligência Operacional</span>
        </div>
        <span class="eyebrow">BI Conversão TC</span>
        <h2>Solicitações de tomografia reguladas com evidência e protocolo.</h2>
        <p>
          O Command Center acompanha o percentual de solicitação de tomografia por hospital e aprofunda a análise
          até o solicitante. O foco não é apenas volume: o BI identifica médicos com alta taxa de exames sem
          achados relevantes, orientando uma prática mais aderente a protocolo clínico.
        </p>
        <div class="ct-value-grid ct-value-grid-featured" aria-label="Ganhos do monitoramento de tomografia">
          <span><strong>Segurança</strong><em>menor exposição do paciente à radiação</em></span>
          <span><strong>Experiência</strong><em>menos espera por laudos desnecessários</em></span>
          <span><strong>Margem</strong><em>redução de custo assistencial evitável</em></span>
        </div>
      </div>
      <div class="program-visual ps-ct-visual">
        <div class="monitor-image-mockup ps-ct-mockup">
          <div class="monitor-dashboard-screen">
            <img src="assets/emergency/pronto-socorro-conversao-tc-dashboard.png" alt="Dashboard Conversão TC no Pronto-Socorro" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <div class="decision-ribbon ct-ribbon" aria-hidden="true">
          <span>Protocolo clínico</span>
          <strong>TC indicada com mais precisão</strong>
        </div>
      </div>
    </section>
  `;
}
