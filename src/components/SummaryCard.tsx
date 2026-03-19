import type { OrderRecord } from "../types/order";
import StatusBadge from "./StatusBadge";

type SummaryCardProps = {
  order: OrderRecord;
};

function SummaryCard({ order }: Readonly<SummaryCardProps>) {
  return (
    <section className="card">
      <h2>Orderöversikt</h2>
      <dl className="summary-grid">
        <div className="summary-item">
          <dt>Ordernummer</dt>
          <dd>{order.id}</dd>
        </div>
        <div className="summary-item">
          <dt>Status</dt>
          <dd>
            <StatusBadge status={order.status} />
          </dd>
        </div>
        <div className="summary-item">
          <dt>Senast uppdaterad</dt>
          <dd>{new Date(order.updatedAt).toLocaleString("sv-SE")}</dd>
        </div>
        {order.articleId ? (
          <div className="summary-item">
            <dt>Article ID</dt>
            <dd>{order.articleId}</dd>
          </div>
        ) : null}
        {order.stockBalance ? (
          <div className="summary-item">
            <dt>Stock balance</dt>
            <dd>{order.stockBalance}</dd>
          </div>
        ) : null}
      </dl>
    </section>
  );
}

export default SummaryCard;
