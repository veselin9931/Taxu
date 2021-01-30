import { User } from "./user";

export class Driver {
    applicationUserId: string;
    applicationUser: User;
    driverLicense: string;
    idCardNumber: string;
    documentConfirmation: boolean;
    carId: string;
    car: string; //make this car after that
    lastAddress: string;
    currentLocation: string;
    walletId: string;
    wallet: string //make this wallet after that
    comission: number;
    referal: string;
    referalUsedTimes: number;
}