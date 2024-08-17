export default class Account {
  public id: number;
  public name: string;
  public subdomain: string;

  constructor(id, name, subdomain) {
    this.id = id;
    this.name = name;
    this.subdomain = subdomain;
  }
}