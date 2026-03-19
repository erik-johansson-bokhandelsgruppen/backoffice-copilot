# Project Overview

Order Copilot is a frontend MVP for an internal backoffice tool.
The application helps users understand an order by showing an order overview, timeline, analysis, possible cause, recommended action, and technical details.

# Start the Project

```bash
npm install
npm run dev
```

# Structure

```text
order-copilot/
  package.json
  tsconfig.json
  vite.config.ts
  index.html
  README.md
  src/
    main.tsx
    App.tsx
    index.css
    types/
      order.ts
    data/
      mockOrders.ts
    services/
      orderService.ts
    components/
      PageHeader.tsx
      SearchPanel.tsx
      SummaryCard.tsx
      TimelineCard.tsx
      AnalysisCard.tsx
      TechnicalDetailsCard.tsx
      EmptyState.tsx
      ErrorState.tsx
      StatusBadge.tsx
```

# How the Mock Data Works

Order data is mocked in `src/data/mockOrders.ts`.
The service layer in `src/services/orderService.ts` simulates network delay and fetches an order by order ID.

# Future Backend Integration

Suggested endpoint:

`GET /api/orders/:id/explain`

Example response matching `OrderRecord`:

```json
{
  "id": "A6688",
  "articleId": "9780006490340",
  "status": "UNSATISFIED",
  "stockBalance": "50",
  "updatedAt": "2026-03-19T11:45:00Z",
  "timeline": [
    {
      "status": "CREATED",
      "timestamp": "2026-03-19T08:15:00Z",
      "description": "Order skapad"
    }
  ],
  "analysis": {
    "explanation": "Ordern saknar skapad leverans trots att artikeln har lagersaldo.",
    "possibleCause": "Trolig integrationsstörning eller utebliven trigger i orderflödet.",
    "recommendedAction": "Kontrollera om supplier-order skapats och verifiera händelser i integrationsloggen."
  },
  "technicalDetails": {
    "stockBalance": "50",
    "index": 0,
    "supplierOrderCreated": false,
    "sourceSystem": "OMS",
    "deliveryInfo": "skickas imorgon"
  }
}
```
