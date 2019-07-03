
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
            return AddressService.classifyAddress(reqNullField).then(function(data){
                expect(data).to.equal(`Your request has the following format error/s:\n\n         addressLine1 |  field/s are null!\n        => Fill "" in fields if meant to be blank.\n        ------------------------------------------------------------------------------------------------\n`);
            });// no catch, it'll figure it out since the promise is rejected
        });

        it('Should return \'Address does not exist error\' if unknown address passed in', function() {
            return AddressService.classifyAddress(reqAddrNotExist).then(function(data){
                expect(data).to.equal('Address does not exist!');
            });// no catch, it'll figure it out since the promise is rejected
        });
        it('Should return the address classification if known address passed in', function() {
            return AddressService.classifyAddress(reqClassifiable).then(function(data){
                expect(data).to.equal('Within a building address');
            });// no catch, it'll figure it out since the promise is rejected
        });
    })
});