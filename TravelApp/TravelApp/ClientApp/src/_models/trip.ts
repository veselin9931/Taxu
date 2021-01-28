import { Order } from "./order";
import { User } from "./user";

export class Trip {
    id: string;
    orderId: string;
    driverId: string;
    createdOn: Date;
    order: Order;
    applicationUser: User;
}