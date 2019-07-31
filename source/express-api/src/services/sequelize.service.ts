import { Sequelize } from 'sequelize-typescript';
import { Continent } from '../models/db/continent.model';
import { Country } from '../models/db/country.model';
import { State } from '../models/db/state.model';
import { City } from '../models/db/city.model';
import { Suburb } from '../models/db/suburb.model';
import { BaseAddress } from '../models/db/base-address.model';
import { BusinessAddress } from '../models/db/business-address.model';
import { ApartmentAddress } from '../models/db/apartment-address.model';
import { FarmAddress } from '../models/db/farm-address.model';

export const sequelize = new Sequelize({
    database: 'Addresses',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: 'address.db'
});

sequelize.addModels([Continent, Country, State, City, Suburb, BaseAddress, ApartmentAddress, BusinessAddress, FarmAddress]);

Continent.sync({ force: true });
Country.sync({ force: true });
State.sync({ force: true });
City.sync({ force: true });
Suburb.sync({ force: true });
BaseAddress.sync({ force: true });
ApartmentAddress.sync({ force: true });
BusinessAddress.sync({ force: true });
FarmAddress.sync({ force: true });