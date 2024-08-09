export default class BaseModel {
  protected _id: number = 0;


  constructor(id: number) {
    this._id = id
  }

  public get id(): number {
    return this._id
  }
}