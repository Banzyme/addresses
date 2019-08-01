import { BaseAddress } from "../models/db/base-address.model";

export class BaseAddressService {
    addBaseAddress(addressLine1: string, addressLine2: string, suburbId: number) {
        let temp = new BaseAddress();
        temp.addressLine1 = addressLine1;
        temp.addressLine2 = addressLine2;
        temp.suburbId = suburbId;
        return temp.save();
    }
    
    getBaseAddress(addressLine1: string, addressLine2: string, suburbId: number) {
        return BaseAddress.findOne({ where: { addressLine1: addressLine1, addressLine2: addressLine2, suburbId: suburbId } })
    }
    
    updateBaseAddress(oldBaseAddress: BaseAddress, newBaseAddress: BaseAddress) {
        return BaseAddress.update( newBaseAddress,
            { where: { addressLine1: oldBaseAddress.addressLine1, addressLine2: oldBaseAddress.addressLine2, suburbId: oldBaseAddress.suburbId } });
    }
    
    deleteBaseAddress(oldBaseAddress: BaseAddress) {
        return BaseAddress.destroy( { where: 
            { addressLine1: oldBaseAddress.addressLine1, addressLine2: oldBaseAddress.addressLine2, suburbId: oldBaseAddress.suburbId } });
    }
}
