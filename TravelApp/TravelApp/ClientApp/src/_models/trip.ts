import { Order } from "./order";

export class Trip {
    tripId: string;
    orderId: string;
    driverId: string;
    createdOn: Date;
    order: Order;
}