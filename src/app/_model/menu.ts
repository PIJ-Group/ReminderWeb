export class Menu{

  private _icono: string;

  private _item: string;

  private _ruta: string;


  constructor(icono: string, item: string, ruta: string){

      this._icono = icono;
      this._item = item;
      this._ruta = ruta;
  }

  public get icono(): string {
      return this._icono;
  }
  public set icono(value: string) {
      this._icono = value;
  }
  public get item(): string {
      return this._item;
  }
  public set item(value: string) {
      this._item = value;
  }
  public get ruta(): string {
      return this._ruta;
  }
  public set ruta(value: string) {
      this._ruta = value;
  }
}
