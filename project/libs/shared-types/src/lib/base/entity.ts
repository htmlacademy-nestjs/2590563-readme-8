export abstract class Entity {
  private _id = '';

  public get id(): string {
    return this._id;
  }

  public set id(val: string) {
    this._id = val;
  }
}
