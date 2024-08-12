import RealEstate from './RealEstate';
import EstateUnitTenantsRepository from '../Repositories/EstateUnitTenantsRepository';
import BaseModel from './BaseModel';
import { Column, Entity, ManyToOne } from 'typeorm';
import MeterInstallation from './MeterInstallation';
import DB from '../../db';

@Entity()
export default class EstateUnit extends BaseModel{
  @Column()
  public name: string;
  @Column()
  public number: string;
  @ManyToOne(() => RealEstate, (realEstate => realEstate.estateUnits))
  public realEstate: RealEstate;
  
  constructor(id: number, name: string, number: string, realEstate: RealEstate) {
    super(id);
    this.name = name;
    this.number = number;
    this.realEstate = realEstate;
  }

  availableBetween(dateFrom: Date, dateTo: Date): boolean {
    const tenantRepository = new EstateUnitTenantsRepository(this);
    const tenants = tenantRepository.findTenantsBetween(dateFrom, dateTo);

    return tenants.length > 0
  }

  meterInstallations(): MeterInstallation[] {
    return DB.getInstance().meterInstallations.filter(meterInstallation => meterInstallation.estateUnit === this);
  }
}