import RealEstate from "./RealEstate/Models/RealEstate";
import Tenant from "./RealEstate/Models/Tenant";
import EstateUnit from "./RealEstate/Models/EstateUnit";

export default class DB {
  private static instance: DB;
  private _realEstates: RealEstate[];
  private _estateUnits: EstateUnit[];
  private _tenants: Tenant[];

  private constructor() {
    this._realEstates = [];
    this._estateUnits = [];
    this._tenants = [];
  }

  public static getInstance() {
    if(!DB.instance) {
      DB.instance = new DB();
    }

    return DB.instance;
  }

  public get tenants(): Tenant[] {
    return this._tenants;
  }

  public get realEstates(): RealEstate[] {
    return this._realEstates;
  }

  public get estateUnits(): EstateUnit[] {
    return this._estateUnits;
  }
}
