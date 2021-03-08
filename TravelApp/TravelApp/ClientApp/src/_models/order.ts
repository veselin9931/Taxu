import { User } from ".";

export class Order {
    id: string;
    location: string;
    locationLat: number;
    locationLong: number;
    destination: string;
    destinationLat: number;
    destinationLong: number;
    increasePrice: string;
    isAccepted: boolean;
    isCompleted: boolean;
    createdOn: Date;
    status: string;
    applicationUser: User;
    applicationUserId: string;
    totalPrice: number;
    acceptedBy: string;
    eta: string;
}