import {Table, Column, Model, DataType, ForeignKey} from 'sequelize-typescript';
import { BaseAddress } from './base-address.model';

@Table({ timestamps: false })
export class BusinessAddress extends Model<BusinessAddress> {

  @ForeignKey(() => BaseAddress)
  @Column(DataType.INTEGER)
  baseAddressId: number;

  @Column(DataType.TEXT)
  businessName: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.INTEGER)
  floor: number;

  @Column(DataType.TEXT)
  building: string;

  @Column(DataType.TEXT)
  campus: string;
}