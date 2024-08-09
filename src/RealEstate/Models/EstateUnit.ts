import RealEstate from './RealEstate';
import EstateUnitTenantsRepository from '../Repositories/EstateUnitTenantsRepository';
import BaseModel from './BaseModel';

export default class EstateUnit extends BaseModel{
  protected name: string;
  protected number: string;
  protected realEstate: RealEstate;
  
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
}