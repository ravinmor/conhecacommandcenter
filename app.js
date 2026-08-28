import { presentationDeck } from "./src/presentation/deck.js?v=uti-comparison-3";
import { uiCopy, englishSlideText } from "./src/presentation/i18n.js";
import {
  playSurgeryScanVideo,
  toggleOpmeDashboardView
} from "./src/presentation/slides/surgery.js";
import {
  toggleDischargeDashboardView,
  toggleHospitalCockpitView
} from "./src/presentation/slides/inpatient.js";
import {
  toggleQualicareDashboardView,
  toggleRevenueCycleDashboardView,
  toggleRevenueGlosasDashboardView
} from "./src/presentation/slides/management.js?v=uti-comparison-3";

const refs = {};
const state = {
  language: "pt",
  presentationIndex: 0,
  cockpitComparisonRevealed: false,
  qualicareDashboardRevealed: false
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheRefs();
  bindNavigation();
  exposeSlideInteractions();
  document.documentElement.dataset.view = document.body.dataset.view || "home";
  applyStaticCopy();
  renderPresentation();
}

function cacheRefs() {
  [
    "content-stage",
    "presentation-progress",
    "prev-action",
    "next-action",
    "back-home",
    "show-opening",
    "slide-count"
  ].forEach((id) => {
    refs[id] = document.getElementById(id);
  });
}

function bindNavigation() {
  document.querySelectorAll("[data-preset]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.preset));
  });

  document.querySelectorAll("[data-start-presentation]").forEach((button) => {
    button.addEventListener("click", startPresentation);
  });

  refs["back-home"]?.addEventListener("click", showOpening);
  refs["show-opening"]?.addEventListener("click", showOpening);
  refs["prev-action"]?.addEventListener("click", () => movePresentation(-1));
  refs["next-action"]?.addEventListener("click", () => movePresentation(1));
  refs["presentation-progress"]?.addEventListener("click", handleProgressClick);
  document.addEventListener("keydown", handlePresentationKeys);
}

function exposeSlideInteractions() {
  const interactions = {
    playSurgeryScanVideo,
    toggleOpmeDashboardView,
    toggleDischargeDashboardView,
    toggleHospitalCockpitView,
    toggleQualicareDashboardView,
    toggleRevenueCycleDashboardView,
    toggleRevenueGlosasDashboardView
  };

  Object.entries(interactions).forEach(([name, handler]) => {
    window[name] = (target) => {
      handler(target);
      applyLanguageToRenderedSlide();
    };
  });

  window.jumpToStage = jumpToStage;
}

function setLanguage(language) {
  state.language = language === "en" ? "en" : "pt";
  applyStaticCopy();
  renderPresentation();
}

function applyStaticCopy() {
  const copy = uiCopy[state.language];
  document.documentElement.lang = copy.documentLang;
  document.title = copy.documentTitle;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) node.textContent = copy[key];
  });

  document.querySelectorAll("[data-preset]").forEach((button) => {
    button.classList.toggle("active", button.dataset.preset === state.language);
  });

  refs["back-home"]?.setAttribute("aria-label", copy.backHomeLabel);
  refs["prev-action"]?.setAttribute("aria-label", copy.previousLabel);
  refs["next-action"]?.setAttribute("aria-label", copy.nextLabel);
  document.getElementById("view-presentation")?.setAttribute("aria-label", copy.presentationLabel);
  document.querySelector(".brand-pillars")?.setAttribute("aria-label", copy.pillarsLabel);
  document.querySelector(".preset-picker")?.setAttribute("aria-label", copy.presetPickerLabel);
}

function switchView(view) {
  document.body.dataset.view = view;
  document.documentElement.dataset.view = view;
  document.querySelectorAll(".view").forEach((node) => node.classList.remove("active"));
  document.getElementById(`view-${view}`)?.classList.add("active");
  if (view === "presentation") renderPresentation();
}

function renderPresentation() {
  if (!refs["content-stage"] || !presentationDeck.length) return;

  if (state.presentationIndex >= presentationDeck.length) state.presentationIndex = 0;
  if (state.presentationIndex < 0) state.presentationIndex = presentationDeck.length - 1;

  refs["content-stage"].innerHTML = presentationDeck[state.presentationIndex].render();
  syncSlideStepState();
  renderProgress();
  applyLanguageToRenderedSlide();
}

function syncSlideStepState() {
  const current = presentationDeck[state.presentationIndex];
  const cockpitSlide = refs["content-stage"].querySelector(".surgery-cockpit-slide");
  if (cockpitSlide && current?.id === "centro-cirurgico-cockpit-comparativo") {
    cockpitSlide.classList.toggle("is-revealed", state.cockpitComparisonRevealed);
  }
  const qualicareSlide = refs["content-stage"].querySelector(".qualicare-slide");
  if (qualicareSlide && current?.id === "qualidade-seguranca-qualicare") {
    qualicareSlide.classList.toggle("is-dashboard", state.qualicareDashboardRevealed);
  }
}

function revealCurrentSlideStep() {
  state.cockpitComparisonRevealed = true;
  syncSlideStepState();
  applyLanguageToRenderedSlide();
}

function renderProgress() {
  const copy = uiCopy[state.language];
  refs["slide-count"].textContent = `${state.presentationIndex + 1} ${copy.slideOf} ${presentationDeck.length}`;
  refs["presentation-progress"].innerHTML = presentationDeck.map((item, index) => `
    <button
      class="${index === state.presentationIndex ? "active" : ""}"
      type="button"
      data-slide-index="${index}"
      aria-label="${copy.goToSlide} ${index + 1}"
    ></button>
  `).join("");
}

function handleProgressClick(event) {
  const button = event.target.closest("[data-slide-index]");
  if (!button) return;
  goToPresentationItem(Number(button.dataset.slideIndex));
}

function movePresentation(direction) {
  const current = presentationDeck[state.presentationIndex];

  if (current?.id === "centro-cirurgico-cockpit-comparativo") {
    if (direction > 0 && !state.cockpitComparisonRevealed) {
      revealCurrentSlideStep();
      return;
    }

    if (direction < 0 && state.cockpitComparisonRevealed) {
      state.cockpitComparisonRevealed = false;
      syncSlideStepState();
      return;
    }
  }

  if (current?.id === "qualidade-seguranca-qualicare") {
    if (direction > 0 && !state.qualicareDashboardRevealed) {
      state.qualicareDashboardRevealed = true;
      syncSlideStepState();
      applyLanguageToRenderedSlide();
      return;
    }

    if (direction < 0 && state.qualicareDashboardRevealed) {
      state.qualicareDashboardRevealed = false;
      syncSlideStepState();
      return;
    }
  }

  state.presentationIndex = (
    state.presentationIndex + direction + presentationDeck.length
  ) % presentationDeck.length;
  state.cockpitComparisonRevealed = false;
  state.qualicareDashboardRevealed = false;
  renderPresentation();
}

function startPresentation() {
  state.presentationIndex = 0;
  state.cockpitComparisonRevealed = false;
  state.qualicareDashboardRevealed = false;
  switchView("presentation");
}

function showOpening() {
  switchView("home");
}

function handlePresentationKeys(event) {
  if (document.body.dataset.view !== "presentation") return;

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    movePresentation(-1);
  }
  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    movePresentation(1);
  }
  if (event.key === "Escape") showOpening();
}

function goToPresentationItem(index) {
  if (!Number.isInteger(index) || index < 0 || index >= presentationDeck.length) return;
  state.presentationIndex = index;
  state.cockpitComparisonRevealed = false;
  state.qualicareDashboardRevealed = false;
  renderPresentation();
}

function jumpToStage(target) {
  const index = presentationDeck.findIndex((item) => item.id === target || item.stage === target);
  if (index < 0) return;
  goToPresentationItem(index);
}

function applyLanguageToRenderedSlide() {
  if (state.language !== "en" || !refs["content-stage"]) return;
  translateTree(refs["content-stage"]);
}

function translateTree(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach((node) => {
    node.nodeValue = translateTextNode(node.nodeValue);
  });

  root.querySelectorAll("[aria-label], [title], [alt]").forEach((node) => {
    ["aria-label", "title", "alt"].forEach((attribute) => {
      if (!node.hasAttribute(attribute)) return;
      node.setAttribute(attribute, translatePlainText(node.getAttribute(attribute)));
    });
  });
}

function translateTextNode(value) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (!normalized) return value;

  const translated = englishSlideText[normalized];
  if (!translated) return value;

  const prefix = value.match(/^\s*/)?.[0] || "";
  const suffix = value.match(/\s*$/)?.[0] || "";
  return `${prefix}${translated}${suffix}`;
}

function translatePlainText(value) {
  const normalized = String(value || "").replace(/\s+/g, " ").trim();
  return englishSlideText[normalized] || value;
}
