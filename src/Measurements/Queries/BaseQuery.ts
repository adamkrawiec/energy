import DB from "../../db";

export default class BaseQuery {
  protected db: DB;

  constructor( ) {
    this.db = DB.getInstance()
  }
}