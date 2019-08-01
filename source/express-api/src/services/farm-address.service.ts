import { FarmAddress } from "../models/db/farm-address.model";


export function addFarmAddress(farmName: string, areaDesc: string, baseAddressId: number) {
    let temp = new FarmAddress();
    temp.farmName = farmName;
    temp.areaDescription = areaDesc;
    temp.baseAddressId = baseAddressId;
    temp.save();
}

export function getFarmAddress(farmName: string, areaDesc: string, baseAddressId: number) {
    return FarmAddress.findOne({ where: { farmName: farmName, areaDescription: areaDesc, baseAddressId: baseAddressId } });
}

export function updateFarmAddress(oldFarmAddress: FarmAddress, newFarmAddress: FarmAddress) {
    return FarmAddress.update( newFarmAddress, { where: { farmName: oldFarmAddress.farmName, areaDescription: oldFarmAddress.areaDescription, baseAddressId: oldFarmAddress.baseAddressId } });
}

export function deleteFarmAddress(oldFarmAddress: FarmAddress) {
    return FarmAddress.destroy( { where: { farmName: oldFarmAddress.farmName, areaDescription: oldFarmAddress.areaDescription, baseAddressId: oldFarmAddress.baseAddressId } });
}
