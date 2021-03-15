import { User } from ".";

export class FavouriteOrder {
    id: string;
    location: string;
    locationLat: number;
    locationLong: number;
    destination: string;
    destinationLat: number;
    destinationLong: number;
    increasePrice: string;
    createdOn: Date;
    applicationUser: User;
    applicationUserId: string;
    totalPrice: number;
}