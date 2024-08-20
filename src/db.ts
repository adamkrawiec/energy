import {
  RealEstate,
  Tenant,
  EstateUnit,
  User,
  Account,
  AccessRight,
  Session,
  MonthlyConsumptionReport
} from "./RealEstate/Models";

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
  private _users: User[];
  private _accounts: Account[];
  private _accessRights: AccessRight[];
  private _sessions: Session[];
  private _monthlyConsumptionReports: MonthlyConsumptionReport[];



  private constructor() {
    this._realEstates = [];
    this._estateUnits = [];
    this._tenants = [];
    this._measuringPoints = [];
    this._meters = [];
    this._readouts = [];
    this._meterInstallations = [];
    this._users = [];
    this._accounts = [];
    this._accessRights = [];
    this._sessions = [];
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

  public get users(): User[] {
    return this._users;
  }

  public get sessions(): Session[] {
    return this._sessions;
  }

  public get monthlyConsumptionReports(): MonthlyConsumptionReport[] {
    return this._monthlyConsumptionReports;
  }
}
