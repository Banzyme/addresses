import { FarmAddress } from "../models/db/farm-address.model";

export class FarmAddressService {
    addFarmAddress(farmName: string, areaDesc: string, baseAddressId: number) {
        let temp = new FarmAddress();
        temp.farmName = farmName;
        temp.areaDescription = areaDesc;
        temp.baseAddressId = baseAddressId;
        return temp.save();
    }
    
    getFarmAddress(farmName: string, areaDesc: string, baseAddressId: number) {
        return FarmAddress.findOne({ where: { farmName: farmName, areaDescription: areaDesc, baseAddressId: baseAddressId } });
    }
    
    updateFarmAddress(oldFarmAddress: FarmAddress, newFarmAddress: FarmAddress) {
        return FarmAddress.update( newFarmAddress, { where: { farmName: oldFarmAddress.farmName, areaDescription: oldFarmAddress.areaDescription, baseAddressId: oldFarmAddress.baseAddressId } });
    }
    
    deleteFarmAddress(oldFarmAddress: FarmAddress) {
        return FarmAddress.destroy( { where: { farmName: oldFarmAddress.farmName, areaDescription: oldFarmAddress.areaDescription, baseAddressId: oldFarmAddress.baseAddressId } });
    }
}
