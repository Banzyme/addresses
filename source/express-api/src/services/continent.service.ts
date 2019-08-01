import { Continent } from "../models/db/continent.model";

export class ContinentService {
    addContinent(name: string) {
        let temp = new Continent();
        temp.name = name;
        return temp.save();
    }
    
    getContinent(name: string) {
        return Continent.findOne({ where: { name: name } });
    }
    
    updateContinent(oldContinent: Continent, newContinent: Continent) {
        return Continent.update( newContinent, { where: { name: oldContinent.name } });
    }
    
    deleteContinent(oldContinent: Continent) {
        return Continent.destroy( { where: { name: oldContinent.name } });
    }
}
