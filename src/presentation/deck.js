import {
  presentationEcosystemSlide,
  presentationOpeningSlide
} from "./slides/opening.js";
import { presentationJourneySlide } from "./slides/journey.js";
import {
  presentationPrimaryCareBiSlide,
  presentationPrimaryCareComiteSlide
} from "./slides/primary-care.js";
import {
  presentationAmilResgateInnovationSlide,
  presentationAmilResgateDashboardSlide
} from "./slides/amil-resgate.js";
import {
  presentationProntoSocorroWaitTimeSlide,
  presentationProntoSocorroMonitoringSlide,
  presentationProntoSocorroCtConversionSlide
} from "./slides/emergency.js";
import {
  presentationCentroCirurgicoOccupancySlide,
  presentationCentroCirurgicoCockpitSlide,
  presentationCentroCirurgicoFamilyCareSlide,
  presentationCentroCirurgicoOpmeSlide
} from "./slides/surgery.js";
import {
  presentationInternacaoOccupancySlide,
  presentationInternacaoExamsSlaSlide,
  presentationInternacaoDischarge10hSlide,
  presentationInternacaoHospitalCockpitSlide
} from "./slides/inpatient.js";
import {
  presentationManagementSlide,
  presentationQualicareInnovationSlide,
  presentationQmentumMembershipSlide,
  presentationQualitySealsEvolutionSlide,
  presentationQualitySafetyCoverSlide,
  presentationRevenueCycleBillingSlide,
  presentationRevenueCycleGlosasSlide,
  presentationUtiCertificationComparisonSlide,
  presentationUtiTopPerformanceSlide,
  presentationWeeklyManagementConversionMpSlide,
  presentationWeeklyManagementDischargeSlide,
  presentationWeeklyManagementExtraIndicatorsSlide,
  presentationWeeklyManagementMeetingsCoverSlide,
  presentationWeeklyManagementOpmeSlide,
  presentationWeeklyManagementScoreSlide
} from "./slides/management.js?v=uti-comparison-3";

const journey = (stage) => ({
  id: `journey-${stage}`,
  stage,
  render: () => presentationJourneySlide(stage)
});

const slide = (id, stage, render) => ({ id, stage, render });
const managementNavigation = (id, activeTarget) => ({
  id,
  stage: null,
  render: () => presentationManagementSlide(activeTarget)
});

export const presentationDeck = [
  slide("opening", null, presentationOpeningSlide),
  slide("command-center-ecosystem", null, presentationEcosystemSlide),
  journey("atencao-primaria"),
  slide("primary-care-bi-vagas", "atencao-primaria", presentationPrimaryCareBiSlide),
  slide("primary-care-comite-ambulatorial", "atencao-primaria", presentationPrimaryCareComiteSlide),

  journey("amu-resgate"),
  slide("amil-resgate-app", "amu-resgate", presentationAmilResgateInnovationSlide),
  slide("amil-resgate-resumo", "amu-resgate", presentationAmilResgateDashboardSlide),

  journey("pronto-socorro"),
  slide("pronto-socorro-tempo-espera", "pronto-socorro", presentationProntoSocorroWaitTimeSlide),
  slide("pronto-socorro-monitoramento-ativo", "pronto-socorro", presentationProntoSocorroMonitoringSlide),
  slide("pronto-socorro-conversao-tc", "pronto-socorro", presentationProntoSocorroCtConversionSlide),

  journey("centro-cirurgico"),
  slide("centro-cirurgico-ocupacao-salas", "centro-cirurgico", presentationCentroCirurgicoOccupancySlide),
  slide("centro-cirurgico-cockpit-comparativo", "centro-cirurgico", presentationCentroCirurgicoCockpitSlide),
  slide("centro-cirurgico-acolhimento-familiar", "centro-cirurgico", presentationCentroCirurgicoFamilyCareSlide),
  slide("centro-cirurgico-opme-referenciado", "centro-cirurgico", presentationCentroCirurgicoOpmeSlide),

  journey("internacao"),
  slide("internacao-ocupacao-tempo-real", "internacao", presentationInternacaoOccupancySlide),
  slide("internacao-exames-sla", "internacao", presentationInternacaoExamsSlaSlide),
  slide("internacao-alta-10h", "internacao", presentationInternacaoDischarge10hSlide),
  slide("internacao-cockpit-hospitais", "internacao", presentationInternacaoHospitalCockpitSlide),

  managementNavigation("management", "gestao-ciclo-receita-faturamento"),
  slide("gestao-ciclo-receita-faturamento", "ciclo-receita", presentationRevenueCycleBillingSlide),
  slide("gestao-ciclo-receita-glosas", "ciclo-receita", presentationRevenueCycleGlosasSlide),
  managementNavigation("management-ritos-gestao", "ritos-gestao-reunioes-semanais"),
  slide("ritos-gestao-reunioes-semanais", "ritos-gestao", presentationWeeklyManagementMeetingsCoverSlide),
  slide("ritos-gestao-conversao-mp", "ritos-gestao", presentationWeeklyManagementConversionMpSlide),
  slide("ritos-gestao-alta-10h", "ritos-gestao", presentationWeeklyManagementDischargeSlide),
  slide("ritos-gestao-indicadores-extra", "ritos-gestao", presentationWeeklyManagementExtraIndicatorsSlide),
  slide("ritos-gestao-opme", "ritos-gestao", presentationWeeklyManagementOpmeSlide),
  slide("ritos-gestao-placar-performance", "ritos-gestao", presentationWeeklyManagementScoreSlide),
  managementNavigation("management-qualidade-seguranca", "qualidade-seguranca-capa"),
  slide("qualidade-seguranca-capa", "qualidade-seguranca", presentationQualitySafetyCoverSlide),
  slide("qualidade-seguranca-qualicare", "qualidade-seguranca", presentationQualicareInnovationSlide),
  slide("qualidade-seguranca-selos", "qualidade-seguranca", presentationQualitySealsEvolutionSlide),
  slide("qualidade-seguranca-qmentum-membership", "qualidade-seguranca", presentationQmentumMembershipSlide),
  slide("qualidade-seguranca-uti-top-performance", "qualidade-seguranca", presentationUtiTopPerformanceSlide),
  slide("qualidade-seguranca-uti-comparativo-100", "qualidade-seguranca", presentationUtiCertificationComparisonSlide)
];
