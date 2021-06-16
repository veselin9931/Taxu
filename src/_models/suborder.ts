import { User } from ".";

export class SubOrder {
    id: string;
    optionsId: string;
    status: string;
    applicationUser: User;
    applicationUserId: string;
    totalPrice: number;
    acceptedBy: string;
    info: string;
    date: string;
    createdOn: Date;
    location: string;
    destination: string;
}