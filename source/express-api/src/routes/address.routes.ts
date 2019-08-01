import * as express from 'express';
import { AddressController } from '../controllers';
import { Request, Response } from 'express';
import { ApiResponse } from '../classes/address-utility.class';
import { CountryService } from '../services/country.service';
import { ContinentService } from '../services/continent.service';
import { FarmAddressService } from '../services/farm-address.service';
import { StateService } from '../services/state.service';
import { SuburbService } from '../services/suburb.service';
import { BaseAddressService } from '../services/base-address.service';
import { CityService } from '../services/city.service';
import { ApartmentAddressService } from '../services/apartment-address.service';
import { BusinessAddressService } from '../services/business-address.service';

export const addressRoutes = (router: express.Router) => {
    router.get('/', function (req, res) {
        res.send(`WELCOME TO THE ADDRESS VALIDATION API!\n
                Send a postman post request to url: http://localhost:3002/api/v1/address \n
                \n
                Structure of JSON Request: \n
                doAddressExistCheck, \n
                address_line1, \n
                complex_no, \n
                complex_name, \n
                street_no, \n
                street_name, \n
                suburb, \n
                BusinessAddress, \n
                province, \n
                zip_code, \n
                \n
                Request Examples are in data folder.`)
    })

    router.route('/address')
        .post(
            async function (req: Request, res:Response) {
                await AddressController.verifyAddress(req,res)
                .then(response => {
                    res.send(response)
                })
                .catch(error => {
                    res.send(ApiResponse.apiResponse400(error))
                })
            }
        );
    router.route('/country')
        .get((req: Request, res: Response) => {
            const service = new CountryService();
            const data = req.body;
            service.getCountry(data.name, data.continentId, data.population, data.landArea).then( val => {
                res.send(val)
            }).catch(err => {
                res.sendStatus(402);
            })
        })
        .post((req: Request, res: Response) => {
            const service = new CountryService();
            const data = req.body;
            service.addCountry(data.name, data.continentId, data.population, data.landArea).then(val => {
                res.sendStatus(200)
            }).catch(err => {
                res.sendStatus(402);
            });
        })
        .delete((req: Request, res: Response) => {
            const service = new CountryService();
            const data = req.body;
            service.deleteCountry(data).then(val => {
                res.sendStatus(200)
            }).catch(err => {
                res.sendStatus(402);
            });
        })
        .put((req: Request, res: Response) => {
            const service = new CountryService();
            const data = req.body;
            service.updateCountry(data.oldCountry, data.newCountry).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });
        })
    router.route('/continent')
        .get((req: Request, res: Response) => {
            const service = new ContinentService();
            const data = req.body;
            service.getContinent(data.name).then( val => {
                res.send(val)
            }).catch(err => {
                res.sendStatus(402);
            })
        })
        .post((req: Request, res: Response) => {
            const service = new ContinentService();
            const data = req.body;
            service.addContinent(data.name).then(val => {
                res.sendStatus(200)
            }).catch(err => {
                res.sendStatus(402);
            });
        })
        .delete((req: Request, res: Response) => {
            const service = new ContinentService();
            const data = req.body;
            service.deleteContinent(data).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
        .put((req: Request, res: Response) => {
            const service = new ContinentService();
            const data = req.body;
            service.updateContinent(data.oldContinent, data.newContinent).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
    router.route('/farm')
        .get((req: Request, res: Response) => {
            const service = new FarmAddressService();
            const data = req.body;
            service.getFarmAddress(data.farmName, data.areaDesc, data.baseAddressId).then( val => {
                res.send(val)
            }).catch(err => {
                res.sendStatus(402);
            })
        })
        .post((req: Request, res: Response) => {
            const service = new FarmAddressService();
            const data = req.body;
            service.addFarmAddress(data.farmName, data.areaDesc, data.baseAddressId).then(val => {
                res.sendStatus(200)
            }).catch(err => {
                res.sendStatus(402);
            });
        })
        .delete((req: Request, res: Response) => {
            const service = new FarmAddressService();
            const data = req.body;
            service.deleteFarmAddress(data).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
        .put((req: Request, res: Response) => {
            const service = new FarmAddressService();
            const data = req.body;
            service.updateFarmAddress(data.oldFarmAddress, data.newFarmAddress).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
    router.route('/state')
        .get((req: Request, res: Response) => {
            const service = new StateService();
            const data = req.body;
            service.getState(data.name, data.countryId).then( val => {
                res.send(val)
            }).catch(err => {
                res.sendStatus(402);
            })
        })
        .post((req: Request, res: Response) => {
            const service = new StateService();
            const data = req.body;
            service.addState(data.name, data.countryId).then(val => {
                res.sendStatus(200)
            }).catch(err => {
                res.sendStatus(402);
            });
        })
        .delete((req: Request, res: Response) => {
            const service = new StateService();
            const data = req.body;
            service.deleteState(data).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
        .put((req: Request, res: Response) => {
            const service = new StateService();
            const data = req.body;
            service.updateState(data.oldState, data.newState).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
    router.route('/suburb')
        .get((req: Request, res: Response) => {
            const service = new SuburbService();
            const data = req.body;
            service.getSuburb(data.name, data.postalCode).then( val => {
                res.send(val)
            }).catch(err => {
                res.sendStatus(402);
            })
        })
        .post((req: Request, res: Response) => {
            const service = new SuburbService();
            const data = req.body;
            service.addSuburb(data.name, data.postalCode, data.BusinessAddressId).then(val => {
                res.sendStatus(200)
            }).catch(err => {
                res.sendStatus(402);
            });
        })
        .delete((req: Request, res: Response) => {
            const service = new SuburbService();
            const data = req.body;
            service.deleteSuburb(data).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
        .put((req: Request, res: Response) => {
            const service = new SuburbService();
            const data = req.body;
            service.updateSuburb(data.oldSuburb, data.newSuburb).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
    router.route('/city')
        .get((req: Request, res: Response) => {
            const service = new CityService();
            const data = req.body;
            service.getCity(data.name, data.stateId).then( val => {
                res.send(val)
            }).catch(err => {
                res.sendStatus(402);
            })
        })
        .post((req: Request, res: Response) => {
            const service = new CityService();
            const data = req.body;
            service.addCity(data.name, data.stateId).then(val => {
                res.sendStatus(200)
            }).catch(err => {
                res.sendStatus(402);
            });
        })
        .delete((req: Request, res: Response) => {
            const service = new CityService();
            const data = req.body;
            service.deleteCity(data).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
        .put((req: Request, res: Response) => {
            const service = new CityService();
            const data = req.body;
            service.updateCity(data.oldCity, data.newCity).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
    router.route('/business')
        .get((req: Request, res: Response) => {
            const service = new BusinessAddressService();
            const data = req.body;
            service.getBusinessAddress(data.baseAddressId, data.businessName, data.floor, data.building, data.campus).then( val => {
                res.send(val)
            }).catch(err => {
                res.sendStatus(402);
            })
        })
        .post((req: Request, res: Response) => {
            const service = new BusinessAddressService();
            const data = req.body;
            service.addBusinessAddress(data.baseAddressId, data.businessName, data.floor, data.building, data.campus).then( val => {
                res.send(val)
            }).catch(err => {
                res.sendStatus(402);
            });
        })
        .delete((req: Request, res: Response) => {
            const service = new BusinessAddressService();
            const data = req.body;
            service.deleteBusinessAddress(data).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
        .put((req: Request, res: Response) => {
            const service = new BusinessAddressService();
            const data = req.body;
            service.updateBusinessAddress(data.oldBusinessAddress, data.newBusinessAddress).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
    router.route('/baseAddress')
        .get((req: Request, res: Response) => {
            const service = new BaseAddressService();
            const data = req.body;
            service.getBaseAddress(data.addressLine1, data.addressLine2, data.suburbId).then( val => {
                res.send(val)
            }).catch(err => {
                res.sendStatus(402);
            })
        })
        .post((req: Request, res: Response) => {
            const service = new BaseAddressService();
            const data = req.body;
            service.addBaseAddress(data.addressLine1, data.addressLine2, data.suburbId).then( val => {
                res.send(val)
            }).catch(err => {
                res.sendStatus(402);
            });
        })
        .delete((req: Request, res: Response) => {
            const service = new BaseAddressService();
            const data = req.body;
            service.deleteBaseAddress(data).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
        .put((req: Request, res: Response) => {
            const service = new BaseAddressService();
            const data = req.body;
            service.updateBaseAddress(data.oldBaseAddress, data.newBaseAddress).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
    router.route('/apartment')
        .get((req: Request, res: Response) => {
            const service = new ApartmentAddressService();
            const data = req.body;
            service.getApartmentAddress(data.room, data.floor, data.building, data.baseAddressId).then( val => {
                res.send(val)
            }).catch(err => {
                res.sendStatus(402);
            })
        })
        .post((req: Request, res: Response) => {
            const service = new ApartmentAddressService();
            const data = req.body;
            service.addApartmentAddress(data.room, data.floor, data.building, data.baseAddressId).then( val => {
                res.send(val)
            }).catch(err => {
                res.sendStatus(402);
            });
        })
        .delete((req: Request, res: Response) => {
            const service = new ApartmentAddressService();
            const data = req.body;
            service.deleteApartmentAddress(data).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
        .put((req: Request, res: Response) => {
            const service = new ApartmentAddressService();
            const data = req.body;
            service.updateApartmentAddress(data.oldApartmentAddress, data.newApartmentAddress).then(val => {
                res.sendStatus(200);
            }).catch(err => {
                res.sendStatus(402);
            });;
        })
}
