export interface SimpleStreetAddressModel{
    streeNo: number,
    streetName: string,
    areaName: string,
}

export const SimpleStreetAddressModelSchema = {
    "$identity": "BBD - Simple street address model schema",
    "$schemaStandard": "",
    "title": "simpleStreetAddress",
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
        }
    }
}