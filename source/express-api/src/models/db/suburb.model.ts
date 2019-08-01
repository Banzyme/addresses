import {Table, Column, Model, DataType, ForeignKey, HasMany, PrimaryKey } from 'sequelize-typescript';
import { City } from './city.model';
import { BaseAddress } from './base-address.model';

@Table
export class Suburb extends Model<Suburb> {

  @Column(DataType.TEXT)
  name: string;

  @Column(DataType.TEXT)
  postalCode: string;

  @ForeignKey(() => City)
  @Column(DataType.INTEGER)
  cityId: number;

  @HasMany(() => BaseAddress)
  baseAddresses: BaseAddress[];
}