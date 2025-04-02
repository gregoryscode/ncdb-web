import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbContentComponent } from './db-content.component';

describe('DbContentComponent', () => {
  let component: DbContentComponent;
  let fixture: ComponentFixture<DbContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbContentComponent]
    });
    fixture = TestBed.createComponent(DbContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
