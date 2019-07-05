import { FormatCheckerClass } from "./formatchecker.class";
import { FullStreetAddressModel } from "../models/full-address.model";

/*
** HELPER CLASS DESIGN PATTERN: Contains static functions to serve as utilities related to an address
*/
export class AddressUtility {

    public checkFormat(address: FullStreetAddressModel): number {
        return FormatCheckerClass.checkFormat(address);
    }

    // TODO add functions.
}