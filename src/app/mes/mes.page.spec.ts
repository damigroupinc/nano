import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPage } from './mes.page';

describe('MesPage', () => {
  let component: MesPage;
  let fixture: ComponentFixture<MesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
