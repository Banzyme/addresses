import {Table, Column, Model, DataType, HasMany} from 'sequelize-typescript';
import { Country } from './country.model';

@Table
export class Continent extends Model<Continent> {
 
  @Column(DataType.TEXT)
  name: string;

  @HasMany(() => Country)
  countries: Country[];
}