import {Table, Column, Model, DataType, ForeignKey, HasMany} from 'sequelize-typescript';
import { Country } from './country.model';
import { City } from './city.model';
import { BaseAddress } from './base-address.model';

@Table({ timestamps: false })
export class State extends Model<State> {
 
  @Column(DataType.TEXT)
  name: string;

  @ForeignKey(() => Country)
  @Column(DataType.INTEGER)
  countryId: number;
  
  @HasMany(() => City)
  cities: City[];
}