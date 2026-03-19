import { useState } from "react";

type TechnicalDetailsCardProps = {
  technicalDetails: Record<string, string | number | boolean | null>;
};

function TechnicalDetailsCard({
  technicalDetails,
}: Readonly<TechnicalDetailsCardProps>) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="card">
      <div className="technical-header-row">
        <h2>Tekniska detaljer</h2>
        <button
          type="button"
          className="button button--ghost"
          aria-expanded={expanded}
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Dölj detaljer" : "Visa detaljer"}
        </button>
      </div>

      {expanded ? (
        <dl className="technical-details-list">
          {Object.entries(technicalDetails).map(([key, value]) => (
            <div key={key} className="technical-details-item">
              <dt>{key}</dt>
              <dd>{String(value)}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </section>
  );
}

export default TechnicalDetailsCard;
