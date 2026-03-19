import type { OrderAnalysis } from "../types/order";

type AnalysisCardProps = {
  analysis: OrderAnalysis;
};

function AnalysisCard({ analysis }: Readonly<AnalysisCardProps>) {
  return (
    <section className="card">
      <h2>Analys</h2>

      <div className="analysis-section">
        <h3>AI-analys</h3>
        <p>{analysis.explanation}</p>
      </div>

      <div className="analysis-section">
        <h3>Möjlig orsak</h3>
        <p>{analysis.possibleCause}</p>
      </div>

      <div className="analysis-section">
        <h3>Rekommenderad åtgärd</h3>
        <p>{analysis.recommendedAction}</p>
      </div>
    </section>
  );
}

export default AnalysisCard;
