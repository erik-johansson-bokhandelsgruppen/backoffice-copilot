export type TimelineEvent = {
  status: string;
  timestamp: string;
  description: string;
};

export type OrderAnalysis = {
  explanation: string;
  possibleCause: string;
  recommendedAction: string;
};

export type OrderRecord = {
  id: string;
  articleId?: string;
  status: string;
  stockBalance?: string;
  updatedAt: string;
  timeline: TimelineEvent[];
  analysis: OrderAnalysis;
  technicalDetails: Record<string, string | number | boolean | null>;
};
