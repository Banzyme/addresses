import { BusinessAddress } from "../models/db/business-address.model";


export function addBusinessAddress(baseAddressId: number, businessName: string, floor: number, building: string, campus: string) {
    let temp = new BusinessAddress();
    temp.baseAddressId = baseAddressId;
    temp.businessName = businessName;
    temp.floor = floor;
    temp.building = building;
    temp.campus = campus;
    temp.save();
}

export function getBusinessAddress(baseAddressId: number, businessName: string, floor: number, building: string, campus: string) {
    return BusinessAddress.findOne({ where: { baseAddressId: baseAddressId, businessName: businessName, floor: floor, building: building, campus: campus } });
}

export function updateBusinessAddress(oldBusinessAddress: BusinessAddress, newBusinessAddress: BusinessAddress) {
    return BusinessAddress.update( newBusinessAddress,
        { where: { baseAddressId: oldBusinessAddress.baseAddressId, businessName: oldBusinessAddress.businessName,
            floor: oldBusinessAddress.floor, building: oldBusinessAddress.building, campus: oldBusinessAddress.campus } });
}

export function deleteBusinessAddress(oldBusinessAddress: BusinessAddress) {
    return BusinessAddress.destroy( { where: 
        { baseAddressId: oldBusinessAddress.baseAddressId, businessName: oldBusinessAddress.businessName,
            floor: oldBusinessAddress.floor, building: oldBusinessAddress.building, campus: oldBusinessAddress.campus } });
}
