import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/shared/services/menu/menu.service';
import { StringService } from 'src/app/shared/services/string/string.service';

@Component({
  selector: 'app-db-content',
  templateUrl: './db-content.component.html',
  styleUrls: ['./db-content.component.css']
})
export class DbContentComponent {

  selectedMenuItem: string | null = null;

  constructor(
    private _menuService: MenuService,
    private _stringService: StringService,
    private _router: Router
  ) {
    this._menuService.selectedItem.subscribe(g => this.selectedMenuItem = g);

    if (this.selectedMenuItem === null) {
      this.selectedMenuItem = _stringService.toFirstLetterUpperCase(this._router.url.split('/')[2]);
    }

    console.log(this.selectedMenuItem);
  }
}
