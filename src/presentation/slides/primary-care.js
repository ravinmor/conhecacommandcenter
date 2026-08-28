export function presentationPrimaryCareBiSlide() {
  return `
    <section class="program-slide primary-care-bi-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">Atenção Primária</span>
          <span class="type-pill front-inteligencia-operacional">Inteligência Operacional</span>
        </div>
        <span class="eyebrow">BI de disponibilidade de vagas</span>
        <h2>Agenda monitorada em tempo real para garantir acesso assistencial.</h2>
        <p>
          O Command Center acompanha vagas geradas, vagas consumidas e disponibilidade por especialidade,
          região e clínica. Quando a disponibilidade entra em zona crítica, o alerta direciona a compra de
          horas médicas para proteger o acesso do paciente.
        </p>
        <div class="program-metrics">
          <article>
            <span>Vagas disponíveis</span>
            <strong>33.727</strong>
            <small>visão consolidada dos próximos 7 dias</small>
          </article>
          <article>
            <span>Disponibilidade</span>
            <strong>39,2%</strong>
            <small>monitoramento por especialidade e região</small>
          </article>
          <article class="alert">
            <span>Gatilho operacional</span>
            <strong>Alerta</strong>
            <small>aciona reforço de agenda antes da ruptura</small>
          </article>
        </div>
      </div>
      <div class="program-visual">
        <div class="monitor-image-mockup alert-dashboard-mockup">
          <div class="monitor-dashboard-screen">
            <img src="assets/primary-care/bi-alerta-vagas-dashboard.png" alt="Dashboard Alerta de Vagas" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <div class="decision-ribbon" aria-hidden="true">
          <span>Disponibilidade baixa</span>
          <strong>Comprar horas médicas</strong>
        </div>
      </div>
    </section>
  `;
}

export function presentationPrimaryCareComiteSlide() {
  return `
    <section class="program-slide primary-care-bi-slide primary-care-comite-slide animate">
      <div class="program-bg" aria-hidden="true"></div>
      <div class="program-copy">
        <span class="hero-logo program-logo logo-lockup">
          <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
        </span>
        <div class="stage-kicker">
          <span class="meta-pill">Jornada do Paciente</span>
          <span class="meta-pill">Atenção Primária</span>
          <span class="type-pill front-inteligencia-operacional">Inteligência Operacional</span>
        </div>
        <span class="eyebrow">BI Comitê Ambulatorial</span>
        <h2>Produtividade médica monitorada</h2>
        <p>
          O Command Center acompanha produtividade médica, no-show e marcação por hora para identificar unidades
          com perda de performance, ajustar agenda e manter a operação ambulatorial saudável.
        </p>
        <div class="program-metrics">
          <article>
            <span>PDV atual</span>
            <strong>3,93</strong>
            <small>última produtividade monitorada</small>
          </article>
          <article>
            <span>Meta PDV</span>
            <strong>3,46</strong>
            <small>referência operacional superada</small>
          </article>
          <article class="alert">
            <span>No-show</span>
            <strong>30,4%</strong>
            <small>triangulado com marcação por hora</small>
          </article>
        </div>
        <div class="evolution-card">
          <div class="evolution-summary">
            <span>Evolução da produtividade</span>
            <strong>+15,2%</strong>
            <small>Jan/24 até Jul/26</small>
          </div>
          <svg viewBox="0 0 780 222" aria-hidden="true">
            <path class="grid-line" d="M28 156H742M28 120H742M28 84H742M28 48H742" />
            <path class="year-line" d="M289.8 34V205M575.4 34V205" />
            <g class="command-start-marker">
              <path d="M123.2 30V198" />
              <path class="marker-arrow" d="M123.2 30 L114.2 44 M123.2 30 L132.2 44" />
              <text x="123.2" y="22">Início Command Center</text>
            </g>
            <path class="trend-fill" d="M28.0 137.5 L51.8 142.5 L75.6 145.9 L99.4 134.1 L123.2 140.8 L147.0 129.0 L170.8 137.5 L194.6 115.5 L218.4 91.9 L242.2 80.1 L266.0 88.6 L289.8 100.4 L313.6 91.9 L337.4 98.7 L361.2 80.1 L385.0 90.3 L408.8 100.4 L432.6 113.9 L456.4 85.2 L480.2 78.5 L504.0 91.9 L527.8 100.4 L551.6 76.8 L575.4 120.6 L599.2 83.5 L623.0 100.4 L646.8 132.4 L670.6 90.3 L694.4 75.1 L718.2 105.4 L742.0 49.8 L742 170 L28 170 Z" />
            <path class="trend-line" d="M28.0 137.5 L51.8 142.5 L75.6 145.9 L99.4 134.1 L123.2 140.8 L147.0 129.0 L170.8 137.5 L194.6 115.5 L218.4 91.9 L242.2 80.1 L266.0 88.6 L289.8 100.4 L313.6 91.9 L337.4 98.7 L361.2 80.1 L385.0 90.3 L408.8 100.4 L432.6 113.9 L456.4 85.2 L480.2 78.5 L504.0 91.9 L527.8 100.4 L551.6 76.8 L575.4 120.6 L599.2 83.5 L623.0 100.4 L646.8 132.4 L670.6 90.3 L694.4 75.1 L718.2 105.4 L742.0 49.8" />
            <g class="trend-points">
              <circle cx="28.0" cy="137.5" r="3.8" /><circle cx="51.8" cy="142.5" r="3.8" /><circle cx="75.6" cy="145.9" r="3.8" /><circle cx="99.4" cy="134.1" r="3.8" /><circle cx="123.2" cy="140.8" r="3.8" /><circle cx="147.0" cy="129.0" r="3.8" /><circle cx="170.8" cy="137.5" r="3.8" /><circle cx="194.6" cy="115.5" r="3.8" /><circle cx="218.4" cy="91.9" r="3.8" /><circle cx="242.2" cy="80.1" r="3.8" /><circle cx="266.0" cy="88.6" r="3.8" /><circle cx="289.8" cy="100.4" r="3.8" /><circle cx="313.6" cy="91.9" r="3.8" /><circle cx="337.4" cy="98.7" r="3.8" /><circle cx="361.2" cy="80.1" r="3.8" /><circle cx="385.0" cy="90.3" r="3.8" /><circle cx="408.8" cy="100.4" r="3.8" /><circle cx="432.6" cy="113.9" r="3.8" /><circle cx="456.4" cy="85.2" r="3.8" /><circle cx="480.2" cy="78.5" r="3.8" /><circle cx="504.0" cy="91.9" r="3.8" /><circle cx="527.8" cy="100.4" r="3.8" /><circle cx="551.6" cy="76.8" r="3.8" /><circle cx="575.4" cy="120.6" r="3.8" /><circle cx="599.2" cy="83.5" r="3.8" /><circle cx="623.0" cy="100.4" r="3.8" /><circle cx="646.8" cy="132.4" r="3.8" /><circle cx="670.6" cy="90.3" r="3.8" /><circle cx="694.4" cy="75.1" r="3.8" /><circle cx="718.2" cy="105.4" r="3.8" /><circle cx="742.0" cy="49.8" r="5" />
            </g>
            <g class="value-labels">
              <text x="28.0" y="128.5">3,41</text><text x="51.8" y="133.5">3,38</text><text x="75.6" y="136.9">3,36</text><text x="99.4" y="125.1">3,43</text><text x="123.2" y="131.8">3,39</text><text x="147.0" y="120.0">3,46</text><text x="170.8" y="128.5">3,41</text><text x="194.6" y="106.5">3,54</text><text x="218.4" y="82.9">3,68</text><text x="242.2" y="71.1">3,75</text><text x="266.0" y="79.6">3,70</text><text x="289.8" y="91.4">3,63</text><text x="313.6" y="82.9">3,68</text><text x="337.4" y="89.7">3,64</text><text x="361.2" y="71.1">3,75</text><text x="385.0" y="81.3">3,69</text><text x="408.8" y="91.4">3,63</text><text x="432.6" y="104.9">3,55</text><text x="456.4" y="76.2">3,72</text><text x="480.2" y="69.5">3,76</text><text x="504.0" y="82.9">3,68</text><text x="527.8" y="91.4">3,63</text><text x="551.6" y="67.8">3,77</text><text x="575.4" y="111.6">3,51</text><text x="599.2" y="74.5">3,73</text><text x="623.0" y="91.4">3,63</text><text x="646.8" y="123.4">3,44</text><text x="670.6" y="81.3">3,69</text><text x="694.4" y="66.1">3,78</text><text x="718.2" y="96.4">3,60</text><text x="742.0" y="40.8">3,93</text>
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
      <div class="program-visual">
        <div class="monitor-image-mockup comite-dashboard-mockup">
          <div class="monitor-dashboard-screen">
            <img src="assets/primary-care/bi-comite-ambulatorial-dashboard.png" alt="Dashboard Comitê Ambulatorial" />
          </div>
          <img class="monitor-frame-img" src="assets/shared/monitor-frame-command.png" alt="" aria-hidden="true" />
        </div>
        <div class="decision-ribbon productivity-ribbon" aria-hidden="true">
          <span>Produtividade em alta</span>
          <strong>PDV acima da meta</strong>
        </div>
      </div>
    </section>
  `;
}
