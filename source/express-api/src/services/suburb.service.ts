import { Suburb } from "../models/db/suburb.model";

export function addSuburb(name: string, postalCode: string, cityID: number) {
    let temp = new Suburb();
    temp.name = name;
    temp.postalCode = postalCode;
    temp.cityId = cityID;
    temp.save();
}

export function getSuburb(name: string, postalCode: string) {
    return Suburb.findOne({ where: {name: name, postalCode: postalCode} })
}

export function updateSuburb(oldSuburb: Suburb, newSuburb: Suburb) {
    return Suburb.update( { name: newSuburb.name, postalCode: newSuburb.postalCode, cityId: newSuburb.cityId},
        { where: {name: oldSuburb.name, postalCode: oldSuburb.postalCode} });
}

export function deleteSuburb(oldSuburb: Suburb) {
    return Suburb.destroy( { where: {name: oldSuburb.name, postalCode: oldSuburb.postalCode} });
}
