import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCatalogDataComponent } from './load-catalog-data.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { MockStore } from './mock-store';
import { Router } from '@angular/router';

describe('LoadCatalogDataComponent', () => {
  let component: LoadCatalogDataComponent;
  let fixture: ComponentFixture<LoadCatalogDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadCatalogDataComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: Store, useValue: new MockStore({})},
        {provide: Router, useValue: {go: function(){}}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadCatalogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
