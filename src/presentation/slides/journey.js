import { escapeHtml, titleCase } from "./helpers.js";

const stages = [
  { id: "atencao-primaria", name: "Atenção Primária" },
  { id: "amu-resgate", name: "AMIL Resgate" },
  { id: "pronto-socorro", name: "Pronto-Socorro" },
  { id: "centro-cirurgico", name: "Centro Cirúrgico" },
  { id: "internacao", name: "Unidade de Internação" }
];

export function presentationJourneySlide(activeStageId) {
  return `
    <section class="presentation-journey presentation-journey-premium animate">
      <div class="journey-ambient" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="journey-logo logo-lockup">
        <img src="assets/brand/logo-command-center-mark.png" alt="Command Center" />
      </div>
      <div class="journey-title-block">
        <span class="eyebrow">Jornada do Paciente</span>
        <h2>
          <span>O Command Center</span>
          <span>est\u00e1 presente</span>
          <strong>em todas as fases da jornada do paciente.</strong>
        </h2>
      </div>
      <div class="journey-path">
        ${stages.map((stage, index) => {
          const isActive = stage.id === activeStageId;
          const details = journeyStageDetails(stage.id);
          return `
            <button class="journey-step ${isActive ? "active" : ""}" onclick="jumpToStage('${escapeHtml(stage.id)}')">
              <img class="step-media" src="${escapeHtml(details.image)}" alt="" aria-hidden="true" loading="eager" />
              <strong>${escapeHtml(journeyStageTitle(stage.id, stage.name))}</strong>
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

export function journeyStageTitle(stageId, fallback = "") {
  const names = {
    "atencao-primaria": "Aten\u00e7\u00e3o Prim\u00e1ria",
    "amu-resgate": "AMIL Resgate",
    "pronto-socorro": "Pronto-Socorro",
    "centro-cirurgico": "Centro Cir\u00fargico",
    "internacao": "Unidade de Interna\u00e7\u00e3o"
  };
  return names[stageId] || fallback || titleCase(stageId);
}

export function journeyStageDetails(stageId) {
  const details = {
    "atencao-primaria": {
      image: "assets/journey/journey-primary-care-command.png"
    },
    "amu-resgate": {
      image: "assets/journey/journey-amu-resgate-command.png"
    },
    "pronto-socorro": {
      image: "assets/journey/journey-pronto-socorro-command.png"
    },
    "centro-cirurgico": {
      image: "assets/journey/journey-centro-cirurgico-command.png"
    },
    "internacao": {
      image: "assets/journey/journey-internacao-command.png"
    }
  };
  return details[stageId] || {
    image: "assets/opening/hero-command-center-real-ai.png"
  };
}
