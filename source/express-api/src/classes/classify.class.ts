import { FullStreetAddressModel } from "../models/full-address.model";

const  api_helper= require('../adaptors/google-maps.repository')
export class ClassifyClass{
    static classify (address: FullStreetAddressModel ) : String{
        //check for word smallholding in AddressLine1 or complexName
        if(address.addressLine1.includes('smallholding') || address.complexName.includes('smallholding')){
            return "Smallholding address"
        }

        else if(address.addressLine1.includes('farm') || address.complexName.includes('farm') || address.complexName.includes('plaas') || address.addressLine1.includes('plaas') || address.addressLine1.includes('plot') || address.complexName.includes('plot')){
            return "Farm address"
        }

        else if(address.addressLine1.includes('business') || address.addressLine1.includes('pty') || address.addressLine1.includes('ltd') || address.addressLine1.includes('p.o') || address.addressLine1.includes('private bag') || address.addressLine1.includes('company') || address.addressLine1.includes('enterprise')){
            return "Business address"
        }

        else if(address.addressLine1.includes('suite') || address.addressLine1.includes('block') || address.addressLine1.includes('room') || address.addressLine1.includes('rm') || address.addressLine1.includes('floor') || address.addressLine1.includes('flr')){
            return "Within a building address"
        }

        else{
            return "Domestic address"
        }
    }

}