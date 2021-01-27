import { User } from ".";

export class Order {
    id: string;
    location: string;
    destination: string;
    increasePrice: string;
    isAccepted: boolean;
    createdOn: Date;
    user: User;
    totalPrice: number;
    acceptedBy: string;
}