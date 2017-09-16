import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppReducers from '../../ngrx/reducers';
import SearchApi from 'js-worker-search';
import { IProduct } from "../../models/product";

@Component( {
    selector: 'catalog-container',
    templateUrl: './catalog.component.html'
} )
export class CatalogContainerComponent implements OnInit {

    public products: IProduct[];
    private searchApi: any;
    private catalog: any;

    constructor ( private _store: Store<AppReducers.State> ) {
        this.searchApi = new SearchApi();
        _store.select( 'catalog' ).subscribe( ( catalog ) => {
            if ( catalog.loaded ) {
                this.catalog = catalog;
                catalog.products.forEach( ( val, index ) => {
                    this.searchApi.indexDocument( index.toString(), val.SKU || '' );
                    this.searchApi.indexDocument( index.toString(), val.metaKeywords || '' );
                    this.searchApi.indexDocument( index.toString(), val.html || '' );
                    this.searchApi.indexDocument( index.toString(), val.name || '' );
                } );
            }
        } );
    }

    ngOnInit () {
    }

    public handleSearchChange ( searchValue: string ) {
        this.searchApi.search( searchValue ).then( ( matches ) => {
            this.products = matches.map( matchIndex => this.catalog.products[matchIndex] );
        } );
    }

}
