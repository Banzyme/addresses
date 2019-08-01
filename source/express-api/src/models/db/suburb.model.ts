import {Table, Column, Model, DataType, ForeignKey, HasMany, AllowNull } from 'sequelize-typescript';
import { City } from './city.model';
import { BaseAddress } from './base-address.model';

@Table({ timestamps: false })
export class Suburb extends Model<Suburb> {
  
  @AllowNull(false)
  @Column(DataType.TEXT)
  name: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  postalCode: string;

  @ForeignKey(() => City)
  @Column(DataType.INTEGER)
  cityId: number;

  @HasMany(() => BaseAddress)
  baseAddresses: BaseAddress[];
}