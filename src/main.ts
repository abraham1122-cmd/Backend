// import { NestFactory } from '@nestjs/core';
// import { AppModule, ObserveInstrument } from './app.module.js';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, {
//     instrument: ObserveInstrument,
//   });
//   await app.listen(process.env.PORT ?? 3000);
// }
// await bootstrap();


import {
  InMemoryOrderRepository,
  OrderService
} from "./orders/index.js"

import { seedOrders } from "./orders/seed-orders.js"

const repository = new InMemoryOrderRepository(seedOrders);

const service = new OrderService(repository);


console.log(service.find(1));
console.log(service.feesByArea())
console.log(service.summarise("customerName"));
