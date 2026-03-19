type StatusBadgeProps = {
  status: string;
};

function getBadgeVariant(
  status: string,
): "success" | "warning" | "danger" | "neutral" {
  const normalizedStatus = status.toUpperCase();

  if (["DELIVERED", "OK", "COMPLETED"].includes(normalizedStatus)) {
    return "success";
  }

  if (["UNKNOWN", "PENDING", "WARNING"].includes(normalizedStatus)) {
    return "warning";
  }

  if (["UNSATISFIED", "FAILED", "ERROR"].includes(normalizedStatus)) {
    return "danger";
  }

  return "neutral";
}

function StatusBadge({ status }: Readonly<StatusBadgeProps>) {
  const variant = getBadgeVariant(status);

  return (
    <span className={`status-badge status-badge--${variant}`}>{status}</span>
  );
}

export default StatusBadge;
