import { City } from "../models/db/city.model";

export function addCity(name: string, stateId: number) {
    let temp = new City();
    temp.name = name;
    temp.stateId = stateId;
    temp.save();
}

export function getCity(name: string, stateId: string) {
    return City.findOne({ where: {name: name, stateId: stateId} })
}

export function updateCity(oldCity: City, newCity: City) {
    return City.update( { name: newCity.name, stateId: newCity.stateId }, 
        { where: {name: oldCity.name, stateId: oldCity.stateId} });
}

export function deleteCity(oldCity: City) {
    return City.destroy( { where: {name: oldCity.name, stateId: oldCity.stateId} });
}
