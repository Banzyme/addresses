import { FullStreetAddressModel } from '../models/full-address.model';

export class ClassifyClass{
    static classify (address: FullStreetAddressModel ) {
        
        const addressLine1LC = address.addressLine1.toLowerCase();
        const complexNameLC = address.complexName.toLowerCase();

        //Check for word smallholding in AddressLine1 or complexName
        if(addressLine1LC.includes('smallholding') || complexNameLC.toLowerCase().includes('smallholding')){
            return 'Smallholding address'
        }

        else if(addressLine1LC.includes('farm') || complexNameLC.includes('farm') || addressLine1LC.includes('plaas') || complexNameLC.includes('plaas') || addressLine1LC.includes('plot') || complexNameLC.includes('plot')){
            return 'Farm address'
        }

        else if(addressLine1LC.includes('business') || addressLine1LC.includes('pty') || addressLine1LC.includes('ltd') || addressLine1LC.includes('p.o') || addressLine1LC.includes('private bag') || addressLine1LC.includes('company') || addressLine1LC.includes('enterprise')){
            return 'Business address'
        }

        else if(addressLine1LC.includes('flat') || addressLine1LC.includes('suite') || addressLine1LC.includes('block') || addressLine1LC.includes('room') || addressLine1LC.includes('rm') || addressLine1LC.includes('floor') || addressLine1LC.includes('flr')){
            return 'Within a building address'
        }

        else{
            return 'Domestic address'
        }
    }
}