export interface FullStreetAddressModel{
    streeNo: number,
    streetName: string,
    areaName: string,
    city: string,
    province: string,
}

export const FullStreetAddressModelSchema = {
    "$identity": "BBD - Full street address model schema",
    "$schemaStandard": "",
    "title": "fullStreetAddress",
    "type": "object",
    "properties": {
        "streetNo": {
            "type": "integer",
            "minimum": 1,
            "description": ""
        },
        "streetName": {
            "type": "string",
            "description": ""
        },
        "areaName": {
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
        }
    }
}