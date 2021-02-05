import { Order } from "./order";
import { User } from "./user";

export class Trip {
    id: string;
    orderId: string;
    driverId: string;
    createdOn: Date;
    isCompleted: boolean;
    order: Order;
    applicationUser: User;
}