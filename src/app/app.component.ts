import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { Menu } from './_model/menu';
import { ServiceMenuService } from './service-menu.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Reminder';
  mobileQuery: MediaQueryList;
  menus: Menu[];
  isSidenavOpen = false;

  private _mobileQueryListener: () => void;

  @ViewChild('snav') sidenav!: MatSidenav;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private servicioMenu: ServiceMenuService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.menus = servicioMenu.menus;
    this.isSidenavOpen = !this.mobileQuery.matches; // Abrir el sidenav en versión web y cerrarlo en versión móvil
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  toggleSidenav(): void {
    this.sidenav.toggle();
  }

  closeSidenav(): void {
    if (this.mobileQuery.matches) {
      this.sidenav.close();
    }
  }
}

