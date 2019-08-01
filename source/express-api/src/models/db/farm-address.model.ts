import {Table, Column, Model, DataType, ForeignKey} from 'sequelize-typescript';
import { BaseAddress } from './base-address.model';

@Table
export class FarmAddress extends Model<FarmAddress> {

  @ForeignKey(() => BaseAddress)
  @Column(DataType.INTEGER)
  baseAddressId: number;

  @Column(DataType.TEXT)
  farmName: string;

  @Column(DataType.TEXT)
  areaDescription: string;
}