import { User } from ".";

export class Order {
    id: string;
    location: string;
    locationLat: string;
    locationLong: string;
    destination: string;
    destinationLat: string;
    destinationLong: string;
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
    tripDistance: number;
    userDistance: number;
    withPets: boolean;
    withStroller: boolean;
    special:boolean;
    carType: string;
    isRated: boolean;
    km: any;
    distanceText: any;
    isDeleted: boolean;
    isDriverArrived: boolean;
    increasedByDriver: number;
    increaseAccepted: boolean;
    increasedBy: string;
    pickUpTime: string;
    description: string;
}