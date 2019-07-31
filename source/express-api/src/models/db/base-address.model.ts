import {Table, Column, Model, DataType, ForeignKey, HasMany} from 'sequelize-typescript';
import { City } from './city.model';
import { Suburb } from './suburb.model';
import { State } from './state.model';
import { Country } from './country.model';
import { ApartmentAddress } from './apartment-address.model';
import { BusinessAddress } from './business-address.model';
import { FarmAddress } from './farm-address.model';

@Table
export class BaseAddress extends Model<BaseAddress> {

  @Column(DataType.TEXT)
  addressLine1: string;

  @Column(DataType.TEXT)
  addressLine2: string;

  @ForeignKey(() => Suburb)
  @Column(DataType.INTEGER)
  suburbId: number;

  @ForeignKey(() => City)
  @Column(DataType.INTEGER)
  cityId: number;

  @ForeignKey(() => State)
  @Column(DataType.INTEGER)
  stateId: number;

  @ForeignKey(() => Country)
  @Column(DataType.INTEGER)
  countryId: number;

  @HasMany(() => ApartmentAddress)
  apartmentAddresses: ApartmentAddress[];

  @HasMany(() => BusinessAddress)
  businessAddresses: ApartmentAddress[];

  @HasMany(() => FarmAddress)
  farmAddresses: FarmAddress[];
}