import { FullStreetAddressModel } from "../models/full-address.model";

export interface Handler {
    setNext(handler: Handler): Handler;
    handle(address: FullStreetAddressModel, errors : number);
}