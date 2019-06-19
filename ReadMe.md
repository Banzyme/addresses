# Lucid Address Verification API

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
