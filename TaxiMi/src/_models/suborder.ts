import { User } from ".";

export class SubOrder {
    id: string;
    optionId: string;
    status: string;
    applicationUser: User;
    applicationUserId: string;
    totalPrice: number;
    acceptedBy: string;
    info: string;
    date: Date;
}