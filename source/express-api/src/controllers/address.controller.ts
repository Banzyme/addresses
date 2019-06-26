import { Request, Response } from 'express';

export class AddressController{
    
    static verifyAdress(req: Request, res:Response){
        // Get query params to determine what validation to perform

        /** 1 Validate if address complete: */
        // If Complete- Do lookup
        // If not - Autocomplete address. 
        //          **If can be autocompleted then do Google Maps address lookup 
        //          **If not send response that address requires more fields

        /** 2 Determine if address exists */
        // If it does - Do classification:
        //          ** Domestic (street address)- no complex no/complexName, starts with streetNo/StreetName 
        //             eg. Addr1:    Dr Lategan Road, Groenkloof
        //                 Addr2:    1736 Pretorius Street, Arcadia, 0083
        //          ** Business (SAPO address)- consists of PO Box or private bag
        //             eg. Addr1:    P. O. Box 1091
        //                           Johannesburg
        //                           2000
        //                 Addr2:    PostNet Suite #213, Private Bag X844
        //                           Silverton
        //                           0127
        //                 Addr3:    Private Bag X097
        //                           Pretoria
        //                           0001
        //          ** Within a building (Building address) -  Has word 'block', 'room','rm', 'floor','flr' or starts with Complex Name
        //             eg. Addr1: Block 816 Diamond House, 
        //                        Eloff Street, 
        //                        Braamfontein
        //                 Addr2: Election House, 
        //                        260 Walker Street, 
        //                        Sunnyside
        //                 Addr3: Room C212 2nd Floor Asterhof House, 
        //                        South Street, 
        //                        Hatfield
        //          ** Smallholdings (similar to Farm address) - Has word 'smallholding' in it
        //                 Addr1: Da Nada Farm (Smallholding)
        //                        Botfontein Road
        //                        Stellenbosch Farms
        //                        Kraaifontein
        //                        7570 
        //          ** Farms (Farm address) - Has word 'farm', 'plot' or 'plaas' in it, no 'smallholding' specified. 
        //                 Addr1: My Geluk, S935, opposite farm dam, Koffiefontein, Letsemeng Local
        //                        Municipality
        //                        Blommeplaas, Koue Bokkeveld
        //                        Tabakskuur, Grootgeluk, Kimberley Road, Bloemfontein
        //
        //          LINKS USED: 
        //          1.  www.scielo.org.za/scielo.php?script=sci_arttext&pid=S0038-23532007000600006
        //          2.  http://www.saip.org.za/index.php/careers1/company-addresses, 
        //If address can be classified: Send JSON classification result ie. 'Farm address', 'Within a ...' etc.
        //If unclassifiable default to Domestic (Street address)

        //1 Validate if address
        // Use the Validator Class under utils to perform validation logic
        // Then generate a custom response object and send a JSON response

        const addressType = req.params.address_type || 'street_simple';
        res.send(`Your address is invalid! You provided a query string:  ${addressType}`);
    }
}