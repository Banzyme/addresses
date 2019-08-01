import { Country } from "../models/db/country.model";

export function addCountry(name: string, continentId: number, population: number, landArea: number) {
    let temp = new Country();
    temp.name = name;
    temp.continentId = continentId;
    temp.population = population;
    temp.landArea = landArea;
    temp.save();
}

export function getCountry(name: string, continentId: number, population: number, landArea: number) {
    return Country.findOne({ where: {name: name, continentId: continentId, population: population, landArea: landArea } })
}

export function updateCountry(oldCountry: Country, newCountry: Country) {
    return Country.update( { name: newCountry.name, continentId: newCountry.continentId, population: newCountry.population, landArea: newCountry.landArea }, 
        { where: {name: oldCountry.name, continentId: oldCountry.continentId } });
}

export function deleteCountry(oldCountry: Country) {
    return Country.destroy( { where: {name: oldCountry.name, continentId: oldCountry.continentId } });
}
