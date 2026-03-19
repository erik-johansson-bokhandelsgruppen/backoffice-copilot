import type { OrderRecord } from "../types/order";
import StatusBadge from "./StatusBadge";

type TimelineCardProps = {
  timeline: OrderRecord["timeline"];
};

function TimelineCard({ timeline }: Readonly<TimelineCardProps>) {
  return (
    <section className="card">
      <h2>Tidslinje</h2>
      <ul className="timeline-list">
        {timeline.map((event, index) => (
          <li key={`${event.timestamp}-${index}`} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-top-row">
                <StatusBadge status={event.status} />
                <time dateTime={event.timestamp}>
                  {new Date(event.timestamp).toLocaleString("sv-SE")}
                </time>
              </div>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TimelineCard;
