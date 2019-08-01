import {Table, Column, Model, DataType, ForeignKey, HasMany, PrimaryKey} from 'sequelize-typescript';
import { State } from './state.model';
import { Suburb } from './suburb.model';
import { BaseAddress } from './base-address.model';

@Table
export class City extends Model<City> {

  @Column(DataType.TEXT)
  name: string;

  @ForeignKey(() => State)
  @Column(DataType.INTEGER)
  stateId: number;

  @HasMany(() => Suburb)
  suburbs: Suburb[];

  @HasMany(() => BaseAddress)
  baseAddresses: BaseAddress[];
}