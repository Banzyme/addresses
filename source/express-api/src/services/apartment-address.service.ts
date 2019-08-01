import { ApartmentAddress } from "../models/db/apartment-address.model";

export class ApartmentAddressService {

    addApartmentAddress(room: number, floor: number, building: string, baseAddressId: number) {
        let temp = new ApartmentAddress();
        temp.room = room;
        temp.floor = floor;
        temp.building = building;
        temp.baseAddressId = baseAddressId;
        return temp.save();
    }
    
    getApartmentAddress(room: number, floor: number, building: string, baseAddressId: number) {
        return ApartmentAddress.findOne({ where: {room: room, floor: floor, building: building, baseAddressId: baseAddressId }, rejectOnEmpty: true})
    }
    
    updateApartmentAddress(oldApartmentAddress: ApartmentAddress, newApartmentAddress: ApartmentAddress) {
        return ApartmentAddress.update( newApartmentAddress,
            { where: {room: oldApartmentAddress.room, floor: oldApartmentAddress.floor, building: oldApartmentAddress.building, baseAddressId: oldApartmentAddress.baseAddressId } });
    }
    
    deleteApartmentAddress(oldApartmentAddress: ApartmentAddress) {
        return ApartmentAddress.destroy( { where: 
            { room: oldApartmentAddress.room, floor: oldApartmentAddress.floor, building: oldApartmentAddress.building, baseAddressId: oldApartmentAddress.baseAddressId } });
    }
}
