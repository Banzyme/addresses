import {Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany, Unique, AllowNull} from 'sequelize-typescript';
import { Continent } from './continent.model';
import { State } from './state.model';
import { BaseAddress } from './base-address.model';

@Table({ timestamps: false })
export class Country extends Model<Country> {
  
  @AllowNull(false)
  @Unique
  @Column(DataType.TEXT)
  name: string;

  @AllowNull(false)
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
}