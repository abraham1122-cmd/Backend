

import type { Area, Order } from "./order.type.ts";
import { OrderNotFoundError } from "./order.error.js";
import type { OrderRepository } from "./order.repository.ts";

export class OrderService {
  constructor(private readonly repository: OrderRepository) {}

  
  find(id: number): Order {
    const order = this.repository.byId(id);

    if (!order) {
      throw new OrderNotFoundError(id);
    }

    return order;
  }

  
  feesByArea(): Record<Area, number> {
    return {
      Bole: 40,
      Gerji: 60,
      Megenagna: 60,
      Kasanchis: 60,
    };
  }

 
  summarise<K extends keyof Order>(key: K): Order[K][] {
    return this.repository.all().map((order) => order[key]);
  }
}