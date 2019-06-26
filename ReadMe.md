# Lucid Address Verification API

##  Validation Process
1. **Validate if address complete:**
    * If Complete- Do lookup
    * If not - Autocomplete address. 
        * If can be autocompleted then do Google Maps address lookup 
        * If not send response that address requires more fields
2. **Determine if address exists**
    * If it does - Do classification:
        * Domestic (street address)- no complex no/complexName, starts with streetNo/StreetName 
            * eg. Addr1:    Dr Lategan Road, Groenkloof
            *     Addr2:    1736 Pretorius Street, Arcadia, 0083
        * Business (SAPO address)- consists of PO Box or private bag, 'business' or 'company' or 'enterprise' or 'ltd' or 'pty'
            * eg. Addr1:    P. O. Box 1091
            *               Johannesburg
            *               2000
            *     Addr2:    PostNet Suite #213, Private Bag X844
            *               Silverton
            *               0127
            *     Addr3:    Private Bag X097
            *               Pretoria
            *               0001
        * Within a building (Building address) -  Has word 'block', 'room','rm', 'floor','flr' or starts with Complex Name
            * eg. Addr1:    Block 816 Diamond House, 
            *               Eloff Street, 
            *               Braamfontein
            *     Addr2:    Election House, 
            *               260 Walker Street, 
            *               Sunnyside
            *     Addr3:    Room C212 2nd Floor Asterhof House, 
            *               South Street, 
            *               Hatfield
        * Smallholdings (similar to Farm address) - Has word 'smallholding' in it
            *     Addr1:    Da Nada Farm (Smallholding)
            *               Botfontein Road
            *               Stellenbosch Farms
            *               Kraaifontein
            *               7570 
        * Farms (Farm address) - Has word 'farm', 'plot' or 'plaas' in it, no 'smallholding' specified. 
            *     Addr1: My Geluk, S935, opposite farm dam, Koffiefontein, Letsemeng Local
            *            Municipality
            *            Blommeplaas, Koue Bokkeveld
            *            Tabakskuur, Grootgeluk, Kimberley Road, Bloemfontein
        
                 LINKS USED: 
                 1.  www.scielo.org.za/scielo.php?script=sci_arttext&pid=S0038-23532007000600006
                 2.  http://www.saip.org.za/index.php/careers1/company-addresses
                 3. https://en.wikipedia.org/wiki/Smallholding
        * If address can be classified: Send JSON classification result ie. 'Farm address', 'Within a ...' etc.
        * If unclassifiable default to Domestic (Street address)

## Address JSON Schema

1. * Full: <address_line1> ,<complex_no>, <complex_name> ,<street_no>, <street_name>, <suburb> ,<city>, <province>, <zip_code>
2. Room C2 2nd Floor, null,  Asterhof House, null ,  South Street, Hatfield,  null,  null  ,    null
3. All fields not mandatory. Can just fill addressLine1 and see if Google Maps can autocomplete


## Running instructons

* Navigate to ./source/express-api and run **npm install**
* To run locally, use **npm run start**


## Features

* Unambiguous address verifcation service
* Easy to customize
* Fast and secure response


## Configurations

1. **Type**(Address type):

* 1.1. Street
  * 1.1.1. Short: <street_no> <street_name>, <area_name>  e.g. 1736 Pretorius Street, Arcadia,
  * 1.1.2. Full: <street_no> <street_name>, <area_name>, <city>, <province>   e.g. 70 Park Street West, Hatfield, Pretoria, Gauteng 

2. **Scope**(Verification scope)

* 2.1. Basic
* 2.2. Full

3. **Country**

3.1. RSA
3.2. USA
3.3. GBT

4. **Response**

4.1. Normal
4.2. Verbose

<hr>
<hr>

## Project structure

* Root
  * Models
  * Controllers
  * Routes
  * SharedModule
  * index.js
