import RealEstate from "./RealEstate/Models/RealEstate";
import Tenant from "./RealEstate/Models/Tenant";
import EstateUnit from "./RealEstate/Models/EstateUnit";
import { MeasuringPoint, Meter, Readout } from "./Measurements/Models";
import MeterInstallation from "./RealEstate/Models/MeterInstallation";

export default class DB {
  private static instance: DB;
  private _realEstates: RealEstate[];
  private _estateUnits: EstateUnit[];
  private _tenants: Tenant[];
  private _measuringPoints: MeasuringPoint[];
  private _meters: Meter[];
  private _readouts: Readout[];
  private _meterInstallations: MeterInstallation[];

  private constructor() {
    this._realEstates = [];
    this._estateUnits = [];
    this._tenants = [];
    this._measuringPoints = [];
    this._meters = [];
    this._readouts = [];
    this._meterInstallations = [];
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
  
  public get meters(): Meter[] {
    return this._meters;
  }

  public get measuringPoints(): MeasuringPoint[] {
    return this._measuringPoints;
  }

  public get readouts(): Readout[] {
    return this._readouts;
  }
  
  public get meterInstallations(): MeterInstallation[] {
    return this._meterInstallations;
  }
}
