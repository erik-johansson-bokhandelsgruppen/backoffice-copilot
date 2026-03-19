import { mockOrders } from "../data/mockOrders";
import type { OrderRecord } from "../types/order";

export async function getOrderById(orderId: string): Promise<OrderRecord> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  const normalizedOrderId = orderId.trim().toUpperCase();
  const order = mockOrders.find(
    (record) => record.id.toUpperCase() === normalizedOrderId,
  );

  if (!order) {
    throw new Error("ORDER_NOT_FOUND");
  }

  return order;
}
