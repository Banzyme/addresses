import {Table, Column, Model, DataType, ForeignKey, AllowNull} from 'sequelize-typescript';
import { BaseAddress } from './base-address.model';

@Table({ timestamps: false })
export class ApartmentAddress extends Model<ApartmentAddress> {

  @ForeignKey(() => BaseAddress)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  baseAddressId: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  room: number;

  @Column(DataType.INTEGER)
  floor: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  building: string;
}