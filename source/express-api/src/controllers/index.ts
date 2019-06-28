import { Request, Response } from 'express';
import {AddressController} from './address.controller';

class IndexController {
  static index(req: Request, res:Response) {
    res.send(
      `WELCOME TO THE ADDRESS VALIDATION API!\n
      Send a postman post request to url: http://localhost:3002/address \n
      \n
      Structure of JSON Request: \n
      address_line1, \n
      complex_no, \n
      complex_name, \n
      street_no, \n
      street_name, \n
      suburb, \n
      city, \n
      province, \n
      zip_code, \n
      \n
      Request Examples are in data folder.`
    )
  }
}

export {
  IndexController,
  AddressController
}