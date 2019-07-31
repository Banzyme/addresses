import {Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript';
import { Continent } from './continent.model';
import { State } from './state.model';
import { BaseAddress } from './base-address.model';

@Table
export class Country extends Model<Country> {
 
  @Column(DataType.TEXT)
  name: string;

  @ForeignKey(() => Continent)
  @Column(DataType.INTEGER)
  continentId: number;

  @Column(DataType.BIGINT)
  population: number;

  @Column(DataType.DECIMAL)
  landArea: number;

  @BelongsTo(() => Continent)
  continent: Continent;

  @HasMany(() => State)
  states: State[];

  @HasMany(() => BaseAddress)
  baseAddresses: BaseAddress[];
}