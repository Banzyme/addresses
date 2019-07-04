import { FullStreetAddressModel } from "../models/full-address.model";
/*
** TEMPLATE PATTERN: Validate and classify class inherit from AbstractValidator. AbstractValidator details main validation process
*/
export abstract class AbstractValidator{
    public abstract async validateAddress(address: FullStreetAddressModel);
    public abstract classify(address: FullStreetAddressModel);
}