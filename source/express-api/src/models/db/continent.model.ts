import {Table, Column, Model, DataType, HasMany, Unique, AllowNull} from 'sequelize-typescript';
import { Country } from './country.model';

@Table({ timestamps: false })
export class Continent extends Model<Continent> {
 
  @AllowNull(false)
  @Unique
  @Column(DataType.TEXT)
  name: string;

  @HasMany(() => Country)
  countries: Country[];
}