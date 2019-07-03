export interface FullStreetAddressModel{
    doAddressExistCheck: string;
    addressLine1: string,
    complexNo: string,
    complexName: string,
    streetNo: string,
    streetName: string,
    suburb: string,
    city: string,
    province: string,
    zipCode: string
}

export const FullStreetAddressModelSchema = {
    "$identity": "BBD - Full street address model schema",
    "$schemaStandard": "",
    "title": "fullStreetAddress",
    "type": "object",
    "properties": {
        "doAddressExistCheck": {
            "type": "string",
            "description": ""
        },
        "addressLine1": {
            "type": "string",
            "description": ""
        },
        "complexNo": {
            "type": "string",
            "description": ""
        },
        "complexName": {
            "type": "string",
            "description": ""
        },
        "streetNo": {
            "type": "string",
            "description": ""
        },
        "streetName": {
            "type": "string",
            "description": ""
        },
        "suburb": {
            "type": "string",
            "description": ""
        },
        "city": {
            "type": "string",
            "description": ""
        },
        "province": {
            "type": "string",
            "description": ""
        },
        "zipCode": {
            "type": "string",
            "description": ""
        },
    }
}