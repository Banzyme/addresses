import { Continent } from "../models/db/continent.model";


export function addContinent(name: string) {
    let temp = new Continent();
    temp.name = name;
    temp.save();
}

export function getContinent(name: string) {
    return Continent.findOne({ where: { name: name } });
}

export function updateContinent(oldContinent: Continent, newContinent: Continent) {
    return Continent.update( newContinent, { where: { name: oldContinent.name } });
}

export function deleteContinent(oldContinent: Continent) {
    return Continent.destroy( { where: { name: oldContinent.name } });
}
