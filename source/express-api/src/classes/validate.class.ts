import { FullStreetAddressModel } from '../models/full-address.model';
import { AbstractValidator } from './abstract-validator.class';
import { GoogleMapsAPIAdapter } from '../adapters/google-maps.adapter';
import { MapsAPIAdapter } from '../adapters/api-adapter.adapter';
import { ResponseDataType, ApiResponse, AddressUtility} from '../classes/address-utility.class';

export class ValidateClass extends AbstractValidator{
    private mapsAPI: MapsAPIAdapter;

    public classify(address: FullStreetAddressModel) {
        throw new Error("Validate class does not classify");
    }
    async validateAddress (address: FullStreetAddressModel ){
        const formattedAddress: string = `${address.addressLine1}+${address.complexNo}+${address.complexName}+${address.streetNo}+${address.streetName}+${address.suburb}+${address.city}+${address.province}+${address.zipCode}`
        const APIKey: string = ''; // TODO: Before running API add Google Maps API Key
        
        try {
            this.mapsAPI = new GoogleMapsAPIAdapter(APIKey);
            const addressData: ResponseDataType = {
                status: 500,
                message: 'Server error.',
                address: '',
                exists: false
            };

            const response = await this.mapsAPI.lookupAddress(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${APIKey}`);;

            switch (response.status) {
                case 'OK':
                    addressData.status = 200;
                    addressData.message = 'Successful';
                    addressData.address = response.results[0].formatted_address;
                    addressData.exists = true;
                    break;
                case 'ZERO_RESULTS':
                case 'INVALID_REQUEST':
                    addressData.status = 200;
                    addressData.message = 'Non-existent address';
                    addressData.address = AddressUtility.format(address);
                    break;
                case 'OVER_DAILY_LIMIT':
                case 'OVER_QUERY_LIMIT':
                case 'REQUEST_DENIED':
                case 'UNKNOWN_ERROR':
                    addressData.address = AddressUtility.format(address);
                    break;
                default:
                    addressData.address = AddressUtility.format(address);
                    break;
            }

            return ApiResponse.apiResponse({...addressData});
        } catch (error) {
            return ApiResponse.apiResponse400(error); 
        }
    }
}