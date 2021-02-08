import { User } from ".";

export class Order {
    id: string;
    location: string;
    destination: string;
    increasePrice: string;
    isAccepted: boolean;
    isCompleted: boolean;
    createdOn: Date;
    status: string;
    applicationUser: User;
    applicationUserId: string;
    totalPrice: number;
    acceptedBy: string;
}