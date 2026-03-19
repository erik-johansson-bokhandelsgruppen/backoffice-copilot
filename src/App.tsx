import { useState } from "react";
import AnalysisCard from "./components/AnalysisCard";
import EmptyState from "./components/EmptyState";
import ErrorState from "./components/ErrorState";
import PageHeader from "./components/PageHeader";
import SearchPanel from "./components/SearchPanel";
import SummaryCard from "./components/SummaryCard";
import TechnicalDetailsCard from "./components/TechnicalDetailsCard";
import TimelineCard from "./components/TimelineCard";
import { getOrderById } from "./services/orderService";
import type { OrderRecord } from "./types/order";

function App() {
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<OrderRecord | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (orderId: string) => {
    setLoading(true);
    setError(null);

    try {
      const result = await getOrderById(orderId);
      setOrder(result);
    } catch {
      setOrder(null);
      setError("ORDER_NOT_FOUND");
    } finally {
      setHasSearched(true);
      setLoading(false);
    }
  };

  return (
    <div className="page-shell">
      <main className="page-content">
        <PageHeader />
        <SearchPanel onSearch={handleSearch} loading={loading} />

        {loading ? (
          <section className="card loading-card">Laddar order...</section>
        ) : null}

        {!hasSearched && !loading ? <EmptyState /> : null}
        {hasSearched && error === "ORDER_NOT_FOUND" && !loading ? (
          <ErrorState />
        ) : null}

        {hasSearched && order && !loading ? (
          <section className="results-layout">
            <SummaryCard order={order} />
            <div className="two-column-grid">
              <TimelineCard timeline={order.timeline} />
              <AnalysisCard analysis={order.analysis} />
            </div>
            <TechnicalDetailsCard technicalDetails={order.technicalDetails} />
          </section>
        ) : null}
      </main>
    </div>
  );
}

export default App;
