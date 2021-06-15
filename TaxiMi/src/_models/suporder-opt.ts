import { User } from ".";

export class SubOrderOpt {
    id: string;
    optionId: string;
    status: string;
    applicationUser: User;
    applicationUserId: string;
    totalPrice: number;
    acceptedBy: string;
    info: string;
    date: Date;
    location: string;
    destination: string;
}