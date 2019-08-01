import { ApartmentAddress } from "../models/db/apartment-address.model";


export function addApartmentAddress(room: number, floor: number, building: string, baseAddressId: number) {
    let temp = new ApartmentAddress();
    temp.room = room;
    temp.floor = floor;
    temp.building = building;
    temp.baseAddressId = baseAddressId;
    temp.save();
}

export function getApartmentAddress(room: number, floor: number, building: string, baseAddressId: number) {
    return ApartmentAddress.findOne({ where: {room: room, floor: floor, building: building, baseAddressId: baseAddressId } })
}

export function updateApartmentAddress(oldApartmentAddress: ApartmentAddress, newApartmentAddress: ApartmentAddress) {
    return ApartmentAddress.update( newApartmentAddress,
        { where: {room: oldApartmentAddress.room, floor: oldApartmentAddress.floor, building: oldApartmentAddress.building, baseAddressId: oldApartmentAddress.baseAddressId } });
}

export function deleteApartmentAddress(oldApartmentAddress: ApartmentAddress) {
    return ApartmentAddress.destroy( { where: 
        { room: oldApartmentAddress.room, floor: oldApartmentAddress.floor, building: oldApartmentAddress.building, baseAddressId: oldApartmentAddress.baseAddressId } });
}
