import { Suburb } from "../models/db/suburb.model";

export class SuburbService {
    addSuburb(name: string, postalCode: string, cityID: number) {
        let temp = new Suburb();
        temp.name = name;
        temp.postalCode = postalCode;
        temp.cityId = cityID;
        return temp.save();
    }
    
    getSuburb(name: string, postalCode: string) {
        return Suburb.findOne({ where: {name: name, postalCode: postalCode} })
    }
    
    updateSuburb(oldSuburb: Suburb, newSuburb: Suburb) {
        return Suburb.update( { name: newSuburb.name, postalCode: newSuburb.postalCode, cityId: newSuburb.cityId},
            { where: {name: oldSuburb.name, postalCode: oldSuburb.postalCode} });
    }
    
    deleteSuburb(oldSuburb: Suburb) {
        return Suburb.destroy( { where: {name: oldSuburb.name, postalCode: oldSuburb.postalCode} });
    }
}
