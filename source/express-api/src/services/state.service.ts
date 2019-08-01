import { State } from "../models/db/State.model";

export class StateService {
    addState(name: string, countryId: number) {
        let temp = new State();
        temp.name = name;
        temp.countryId = countryId;
        return temp.save();
    }
    
    getState(name: string, countryId: number) {
        return State.findOne({ where: {name: name, countryId: countryId} })
    }
    
    updateState(oldState: State, newState: State) {
        return State.update( { name: newState.name, countyId: newState.countryId },
            { where: {name: oldState.name, countyId: oldState.countryId} });
    }
    
    deleteState(oldState: State) {
        return State.destroy( { where: {name: oldState.name, countryId: oldState.countryId} });
    }
}
