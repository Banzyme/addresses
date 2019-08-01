import { City } from "../models/db/city.model";

export class CityService {
    addCity(name: string, stateId: number) {
        let temp = new City();
        temp.name = name;
        temp.stateId = stateId;
        return temp.save();
    }
    
    getCity(name: string, stateId: string) {
        return City.findOne({ where: {name: name, stateId: stateId} })
    }
    
    updateCity(oldCity: City, newCity: City) {
        return City.update( { name: newCity.name, stateId: newCity.stateId }, 
            { where: {name: oldCity.name, stateId: oldCity.stateId} });
    }
    
    deleteCity(oldCity: City) {
        return City.destroy( { where: {name: oldCity.name, stateId: oldCity.stateId} });
    }
}
