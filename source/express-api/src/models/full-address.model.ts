export interface FullStreetAddressModel{
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
        "addressLine1": {
            "type": "string",
            "minimum": 1,
            "description": ""
        },
        "complexNo": {
            "type": "string",
            "minimum": 1,
            "description": ""
        },
        "complexName": {
            "type": "string",
            "minimum": 1,
            "description": ""
        },
        "streetNo": {
            "type": "string",
            "minimum": 1,
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