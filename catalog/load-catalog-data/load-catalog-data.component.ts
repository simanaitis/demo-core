import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppReducers from '../../reducers';
import { LoadProducts } from '../catalog/catalog-actions';
import { Router } from '@angular/router';

@Component( {
    selector: 'app-load-catalog-data',
    templateUrl: './load-catalog-data.component.html',
} )
export class LoadCatalogDataComponent implements OnInit {
    constructor ( private _store: Store<AppReducers.State>, private router: Router ) {
        _store.select( 'catalog' ).subscribe( ( catalog ) => {
            if ( catalog.loaded ) {
                this.router.navigate(['/catalog']);
            }
        } );
    }

    ngOnInit () {
    }

}
