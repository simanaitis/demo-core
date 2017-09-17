import { Injectable } from '@angular/core';
import { IProduct } from "../../index";
import { Store } from "@ngrx/store/store";

@Injectable()

export class CatalogService {
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


    public handleSearchChange ( searchValue: string ) {
        this.searchApi.search( searchValue ).then( ( matches ) => {
            this.products = matches.map( matchIndex => this.catalog.products[matchIndex] );
        } );
    }
}