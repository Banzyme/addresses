import {Table, Column, Model, DataType, ForeignKey, AllowNull} from 'sequelize-typescript';
import { BaseAddress } from './base-address.model';

@Table({ timestamps: false })
export class FarmAddress extends Model<FarmAddress> {

  @ForeignKey(() => BaseAddress)
  @Column(DataType.INTEGER)
  baseAddressId: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  farmName: string;

  @Column(DataType.TEXT)
  areaDescription: string;
}