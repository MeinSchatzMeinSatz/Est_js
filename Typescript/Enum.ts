enum OrderStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

interface Order {
  id: number;
  customerName: string;
  amount: number;
  status: OrderStatus;
  createdAt: Date;
}

function getStatusText(status: OrderStatus): string {
  switch (status) {
    case OrderStatus.PENDING:
      return "대기중";
    case OrderStatus.CONFIRMED:
      return "확인됨";
    case OrderStatus.SHIPPED:
      return "배송중";
    case OrderStatus.DELIVERED:
      return "배송완료";
    case OrderStatus.CANCELLED:
      return "취소됨";
    default:
      return "알 수 없는 상태";
  }
}

const order: Order = {
  id: 1,
  customerName: "고객님",
  amount: 50000,
  status: OrderStatus.PENDING,
  createdAt: new Date(),
};

console.log(getStatusText(order.status)); // "대기중" 출력
