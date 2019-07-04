import { FullStreetAddressModel } from '../models/full-address.model';
import { AbstractValidator } from './abstract-validator.class';
import { ResponseDataType, ApiResponse, Formatter }  from '../utility';

const  api_helper= require('../adapters/google-maps.repository')
export class ValidateClass extends AbstractValidator{
    public classify(address: FullStreetAddressModel) {
        throw new Error("Validate class does not classify");
    }
    /*
    ** STRATEGY PATTERN?: Implement autocomplete, spellchecking algorithms, Make API Call to MapBox if Google Maps can't find address
    */
    async validateAddress (address: FullStreetAddressModel ){
        const formattedAddress : String = `${address.addressLine1}+${address.complexNo}+${address.complexName}+${address.streetNo}+${address.streetName}+${address.suburb}+${address.city}+${address.province}+${address.zipCode}`
        const APIKey : String= 'AIzaSyBJgs2BCnnLrxtW-7pIyNhPROJc9DUeOYk';

        try {
            const addressData: ResponseDataType = {
                status: 500,
                message: 'Server error.',
                address: '',
                exists: false
            };

            const response = await api_helper.lookupAddress(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${APIKey}`);;

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
                    addressData.address = Formatter.addressObj(address);
                    break;
                case 'OVER_DAILY_LIMIT':
                case 'OVER_QUERY_LIMIT':
                case 'REQUEST_DENIED':
                case 'UNKNOWN_ERROR':
                    addressData.address = Formatter.addressObj(address);
                    break;
                default:
                    addressData.address = Formatter.addressObj(address);
                    break;
            }

            return ApiResponse.apiResponse({...addressData});
        } catch (error) {
            return ApiResponse.apiResponse500(error); 
        }
    }
}