import { Country } from "../models/db/country.model";

export class CountryService {
    addCountry(name: string, continentId: number, population: number, landArea: number) {
        let temp = new Country();
        temp.name = name;
        temp.continentId = continentId;
        temp.population = population;
        temp.landArea = landArea;
        return temp.save();
    }
    
    getCountry(name: string, continentId: number, population: number, landArea: number) {
        return Country.findOne({ where: {name: name, continentId: continentId, population: population, landArea: landArea }, rejectOnEmpty: true })
    }
    
    updateCountry(oldCountry: Country, newCountry: Country) {
        return Country.update( { name: newCountry.name, continentId: newCountry.continentId, population: newCountry.population, landArea: newCountry.landArea }, 
            { where: {name: oldCountry.name, continentId: oldCountry.continentId } });
    }
    
    deleteCountry(oldCountry: Country) {
        return Country.destroy( { where: {name: oldCountry.name, continentId: oldCountry.continentId } });
    }
}
