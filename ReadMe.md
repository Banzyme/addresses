# Address Validation API

* This is a **Configurable** **RESTFUL-API** that validates different types of addresses using the **Google Maps** **Geolocation** API.
* The available endpoints can be found at http://localhost:3002/addresses

## Running instructons

* Navigate to ./source/express-api and run **npm install**
* To run locally, use **npm run start**
* To run unit tests navigate to above classpath and run **npm run test**

## How it works

* The API is built in Express-ts and it consists of the following common design patterns:
	* **Creational patterns**
		* Builder pattern
		* Singleton pattern
	* **Behavioral patterns**
		* Chain of responsibility pattern
		* Adapter pattern
		* Template pattern
* The use of these patterns is illustrated in the figure below:
<hr/>

![no alt](https://github.com/Banzyme/addresses/blob/master/Documentation/addresses%20UML.JPG?raw=true)

<hr/>

##  Validation Process (Done by AddressService)
1. **Verify if fields correctly filled in request:**
    * Check no missing required fields eg. streetNo
    * Check no extra fields
    * Check no null fields
    * Check zipCode is 4 digits
2. **Validate if address exists:**
    * Do Google Maps address lookup
        * Google Maps Geolocation api searches, if found move to 2. 
        * If not, send response that address does not exist
3. **Classify address if exists**
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
    * Within a building (Building address) -  Has word 'flat','block', 'room','rm', 'floor','flr','suite' or starts with Complex Name
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
    
    
    
 # References: 
 * 1.  www.scielo.org.za/scielo.php?script=sci_arttext&pid=S0038-23532007000600006
 
 * 2.  http://www.saip.org.za/index.php/careers1/company-addresses
 
 * 3. https://en.wikipedia.org/wiki/Smallholding
   


