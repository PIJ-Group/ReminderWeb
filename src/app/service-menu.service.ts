import { Injectable } from '@angular/core';
import { Menu } from './_model/menu';

@Injectable({
  providedIn: 'root'
})
export class ServiceMenuService {

  menus: Menu[] = [
    new Menu('home','Home', '/home'),
    new Menu('face','Quienes Somos', '/quienes_somos'),
    new Menu('shop', 'Descarga la app', '/descarga')
  ];

  constructor() { }
}
