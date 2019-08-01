import { BaseAddress } from "../models/db/base-address.model";


export function addBaseAddress(addressLine1: string, addressLine2: string, suburbId: number) {
    let temp = new BaseAddress();
    temp.addressLine1 = addressLine1;
    temp.addressLine2 = addressLine2;
    temp.suburbId = suburbId;
    temp.save();
}

export function getBaseAddress(addressLine1: string, addressLine2: string, suburbId: number) {
    return BaseAddress.findOne({ where: { addressLine1: addressLine1, addressLine2: addressLine2, suburbId: suburbId } })
}

export function updateBaseAddress(oldBaseAddress: BaseAddress, newBaseAddress: BaseAddress) {
    return BaseAddress.update( newBaseAddress,
        { where: { addressLine1: oldBaseAddress.addressLine1, addressLine2: oldBaseAddress.addressLine2, suburbId: oldBaseAddress.suburbId } });
}

export function deleteBaseAddress(oldBaseAddress: BaseAddress) {
    return BaseAddress.destroy( { where: 
        { addressLine1: oldBaseAddress.addressLine1, addressLine2: oldBaseAddress.addressLine2, suburbId: oldBaseAddress.suburbId } });
}
