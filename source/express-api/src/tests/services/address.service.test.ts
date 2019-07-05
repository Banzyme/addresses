
import { FullStreetAddressModel } from '../../models/full-address.model';

const expect = require('chai').expect;

const { AddressService } = require('../../services/address.service');


let reqNullField : FullStreetAddressModel = {
    doAddressExistCheck : "",
    addressLine1 : null,
    complexNo : "",
    complexName : "",
    streetNo : "",
    streetName : "",
    suburb: "",
    city:"",
    province: "",
    zipCode : ""
};

let reqAddrNotExist : FullStreetAddressModel = {
    doAddressExistCheck : "Yes",
    addressLine1 : "Mashaba lane",
    complexNo : "",
    complexName : "",
    streetNo : "",
    streetName : "",
    suburb: "",
    city:"",
    province: "",
    zipCode : ""
};

let reqClassifiable : FullStreetAddressModel = {
    doAddressExistCheck : "Yes",
    addressLine1 : "floor 1",
    complexNo : "1",
    complexName : "Wilds Crest",
    streetNo : "28",
    streetName : "10th Street",
    suburb: "Killarney",
    city:"Johannesburg",
    province: "Gauteng",
    zipCode : "2193"
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};

describe('Address Service', function() {
    describe('classifyAddress(address) function', function() {
        it('Should return string error if null field/s provided', function() {
            let addressService  = new AddressService();
            return addressService.classifyAddress(reqNullField).then(function(data){
                expect(data.message).to.equal('Client Error : You have errors in the format of your request. Refer to console log for more details..');
            });// no catch, it'll figure it out since the promise is rejected
        });

        it('Should return \'Address does not exist error\' if unknown address passed in', function() {
            let addressService  = new AddressService();
            return addressService.classifyAddress(reqAddrNotExist).then(function(data){
                expect(data.message).to.equal('Non-existent address');
            });
        });
        it('Should return the address classification if known address passed in', function() {
            let addressService  = new AddressService();
            return addressService.classifyAddress(reqClassifiable).then(function(data){
                expect(data.message).to.equal('Successful');
                expect(data.addressType).to.equal('Within a building address');
            });
        });
    })
});