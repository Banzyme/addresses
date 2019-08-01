import { State } from "../models/db/State.model";

export function addState(name: string, countryId: number) {
    let temp = new State();
    temp.name = name;
    temp.countryId = countryId;
    temp.save();
}

export function getState(name: string, countryId: number) {
    return State.findOne({ where: {name: name, countryId: countryId} })
}

export function updateState(oldState: State, newState: State) {
    return State.update( { name: newState.name, countyId: newState.countryId },
        { where: {name: oldState.name, countyId: oldState.countryId} });
}

export function deleteState(oldState: State) {
    return State.destroy( { where: {name: oldState.name, countryId: oldState.countryId} });
}
