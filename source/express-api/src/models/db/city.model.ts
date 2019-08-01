import {Table, Column, Model, DataType, ForeignKey, HasMany, PrimaryKey, AllowNull} from 'sequelize-typescript';
import { State } from './state.model';
import { Suburb } from './suburb.model';
import { BaseAddress } from './base-address.model';

@Table({ timestamps: false })
export class City extends Model<City> {
  
  @AllowNull(false)
  @Column(DataType.TEXT)
  name: string;

  @AllowNull(false)
  @ForeignKey(() => State)
  @Column(DataType.INTEGER)
  stateId: number;

  @HasMany(() => Suburb)
  suburbs: Suburb[];
}