"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarAccidentInsuranceClaim = void 0;
const fabric_contract_api_1 = require("fabric-contract-api");
const claim_status_1 = require("./claim-status");
let CarAccidentInsuranceClaim = class CarAccidentInsuranceClaim {
};
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "id", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "policyNumber", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "carMake", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "carModel", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", Number)
], CarAccidentInsuranceClaim.prototype, "carManufactureYear", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "carRegistration", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "carLicensePlateNumber", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "driverName", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "driverLicenseNumber", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "accidentDate", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "accidentLocation", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "injuriesExtent", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", Number)
], CarAccidentInsuranceClaim.prototype, "numberOfPassengers", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "vehicleDamageExtent", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "accidentDescription", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", String)
], CarAccidentInsuranceClaim.prototype, "investigatingOfficer", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", Number)
], CarAccidentInsuranceClaim.prototype, "coverageAmount", void 0);
__decorate([
    (0, fabric_contract_api_1.Property)(),
    __metadata("design:type", Number)
], CarAccidentInsuranceClaim.prototype, "status", void 0);
CarAccidentInsuranceClaim = __decorate([
    (0, fabric_contract_api_1.Object)()
], CarAccidentInsuranceClaim);
exports.CarAccidentInsuranceClaim = CarAccidentInsuranceClaim;
//# sourceMappingURL=car-accident-insurance-claim.js.map