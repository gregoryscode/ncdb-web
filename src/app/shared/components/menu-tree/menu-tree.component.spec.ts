import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTreeComponent } from './menu-tree.component';

describe('MenuTreeComponent', () => {
  let component: MenuTreeComponent;
  let fixture: ComponentFixture<MenuTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTreeComponent]
    });
    fixture = TestBed.createComponent(MenuTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
