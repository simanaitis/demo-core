import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CatalogContainerComponent } from './catalog-container.component';
import { Store } from '@ngrx/store';
import { MockStore } from '../load-catalog-data/mock-store';

describe('CatalogContainerComponent', () => {
  let component: CatalogContainerComponent;
  let fixture: ComponentFixture<CatalogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogContainerComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: Store, useValue: new MockStore({})}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
