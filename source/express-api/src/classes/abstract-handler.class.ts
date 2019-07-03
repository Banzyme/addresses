import {Handler} from "./handler.interface"
import { FullStreetAddressModel } from "../models/full-address.model";

export abstract class AbstractHandler implements Handler
{
    private nextHandler: Handler;
    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(address: FullStreetAddressModel, errors : number) : number{
        if (this.nextHandler) {
            return this.nextHandler.handle(address, errors);
        }
        return errors;
    }
}
