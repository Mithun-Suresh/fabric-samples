import { ClaimStatus } from './claim-status';
export declare class CarAccidentInsuranceClaim {
    id: string;
    policyNumber: string;
    carMake: string;
    carModel: string;
    carManufactureYear: number;
    carRegistration: string;
    carLicensePlateNumber: string;
    driverName: string;
    driverLicenseNumber: string;
    accidentDate: string;
    accidentLocation: string;
    injuriesExtent: string;
    numberOfPassengers: number;
    vehicleDamageExtent: string;
    accidentDescription: string;
    investigatingOfficer: string;
    coverageAmount: number;
    status: ClaimStatus;
}
