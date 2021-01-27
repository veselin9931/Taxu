import { Order } from "./order";

export class Trip {
    id: string;
    orderId: string;
    driverId: string;
    createdOn: Date;
    order: Order;
}