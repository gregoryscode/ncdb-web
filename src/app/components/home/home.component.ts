import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/shared/services/menu/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private _router: Router,
    private _menuService: MenuService,
  ){

  }

  goToDatabase() {
    // this._menuService.setSelectedItem(this.selectedMenuItem = item?.description || null);
    this._menuService.setSelectedItem('Items');
    this._router.navigate([`/db/items`]);
  }
}
