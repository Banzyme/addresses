import {Table, Column, Model, DataType, ForeignKey} from 'sequelize-typescript';
import { BaseAddress } from './base-address.model';

@Table({ timestamps: false })
export class ApartmentAddress extends Model<ApartmentAddress> {

  @ForeignKey(() => BaseAddress)
  @Column(DataType.INTEGER)
  baseAddressId: number;

  @Column(DataType.INTEGER)
  room: number;

  @Column(DataType.INTEGER)
  floor: number;

  @Column(DataType.STRING)
  building: string;
}