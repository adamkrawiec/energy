import DB from "../../db";
import BaseModel from "../Models/BaseModel";

export default class BaseRepository<T extends BaseModel> {
  protected db: DB;
  protected collection: T[];
  protected collectionName: string;

  constructor() {
    this.db = DB.getInstance();
  }

  public findAll(): any[] {
    return this.collection;
  }

  public addOne(record: T): void {
    this.db[this.collectionName].push(record);
  }

  public addBatch(records: T[]): void {
    records.forEach(record => this.addOne(record));
  }

  public update(id: number, record: T) {
    const position = this.collection.indexOf(this.collection.find(record => record.id === id));
    this.collection[position] = record;
  }
}