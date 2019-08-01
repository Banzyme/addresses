import {Table, Column, Model, DataType, ForeignKey, HasMany, AllowNull} from 'sequelize-typescript';
import { City } from './city.model';
import { Suburb } from './suburb.model';
import { State } from './state.model';
import { Country } from './country.model';
import { ApartmentAddress } from './apartment-address.model';
import { BusinessAddress } from './business-address.model';
import { FarmAddress } from './farm-address.model';

@Table({ timestamps: false })
export class BaseAddress extends Model<BaseAddress> {

  @AllowNull(false)
  @Column(DataType.TEXT)
  addressLine1: string;

  @Column(DataType.TEXT)
  addressLine2: string;

  @AllowNull(false)
  @ForeignKey(() => Suburb)
  @Column(DataType.INTEGER)
  suburbId: number;

  @HasMany(() => ApartmentAddress)
  apartmentAddresses: ApartmentAddress[];

  @HasMany(() => BusinessAddress)
  businessAddresses: ApartmentAddress[];

  @HasMany(() => FarmAddress)
  farmAddresses: FarmAddress[];
}