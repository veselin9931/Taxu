import { User } from ".";

export class Order {
    id: string;
    location: string;
    destination: string;
    increasePrice: string;
    isAccepted: boolean;
    createdOn: Date;
    applicationUser: User;
    applicationUserId: string;
    totalPrice: number;
    acceptedBy: string;
}