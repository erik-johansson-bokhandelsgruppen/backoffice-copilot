import type { OrderRecord } from "../types/order";

export const mockOrders: OrderRecord[] = [
  {
    id: "A6688",
    articleId: "9780006490340",
    status: "UNSATISFIED",
    stockBalance: "50",
    updatedAt: "2026-03-19T11:45:00Z",
    timeline: [
      {
        status: "CREATED",
        timestamp: "2026-03-19T08:15:00Z",
        description: "Order skapad",
      },
      {
        status: "UNKNOWN",
        timestamp: "2026-03-19T09:00:00Z",
        description: "Lager- eller restorder ej skapad",
      },
      {
        status: "UNSATISFIED",
        timestamp: "2026-03-19T11:45:00Z",
        description: "Ej beställd",
      },
    ],
    analysis: {
      explanation:
        "Ordern saknar skapad leverans trots att artikeln har lagersaldo.",
      possibleCause:
        "Trolig integrationsstörning eller utebliven trigger i orderflödet.",
      recommendedAction:
        "Kontrollera om supplier-order skapats och verifiera händelser i integrationsloggen.",
    },
    technicalDetails: {
      stockBalance: "50",
      index: 0,
      supplierOrderCreated: false,
      sourceSystem: "OMS",
      deliveryInfo: "skickas imorgon",
    },
  },
  {
    id: "B1434",
    articleId: "9789132216541",
    status: "UNKNOWN",
    stockBalance: "0",
    updatedAt: "2026-03-18T14:20:00Z",
    timeline: [
      {
        status: "CREATED",
        timestamp: "2026-03-18T13:10:00Z",
        description: "Order skapad",
      },
      {
        status: "UNKNOWN",
        timestamp: "2026-03-18T14:20:00Z",
        description: "Väntar på lager- eller restorderstatus",
      },
    ],
    analysis: {
      explanation:
        "Ordern befinner sig i ett mellanläge där slutlig leveransstatus ännu inte kunnat fastställas.",
      possibleCause:
        "Lagret saknar tillgängligt saldo eller så väntar systemet på återrapportering.",
      recommendedAction:
        "Kontrollera inkommande lagerstatus och om restorder skapats korrekt.",
    },
    technicalDetails: {
      stockBalance: "0",
      index: 0,
      supplierOrderCreated: false,
      sourceSystem: "OMS",
      backorderCandidate: true,
    },
  },
  {
    id: "C9001",
    articleId: "9780261103573",
    status: "DELIVERED",
    stockBalance: "12",
    updatedAt: "2026-03-17T16:05:00Z",
    timeline: [
      {
        status: "CREATED",
        timestamp: "2026-03-17T09:00:00Z",
        description: "Order skapad",
      },
      {
        status: "PROCESSING",
        timestamp: "2026-03-17T10:15:00Z",
        description: "Order behandlas",
      },
      {
        status: "SHIPPED",
        timestamp: "2026-03-17T13:40:00Z",
        description: "Order skickad",
      },
      {
        status: "DELIVERED",
        timestamp: "2026-03-17T16:05:00Z",
        description: "Order levererad",
      },
    ],
    analysis: {
      explanation:
        "Ordern har gått igenom flödet utan avvikelser och levererats korrekt.",
      possibleCause: "Ingen avvikelse identifierad.",
      recommendedAction: "Ingen åtgärd krävs.",
    },
    technicalDetails: {
      stockBalance: "12",
      index: 0,
      supplierOrderCreated: true,
      sourceSystem: "OMS",
      deliveryInfo: "levererad",
    },
  },
];
