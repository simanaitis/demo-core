import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { Injectable, Injector } from '@angular/core';
import { Http, BaseRequestOptions } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { All, LOAD_PRODUCTS, LoadProductsSuccess, LoadProductsFail } from '../actions/catalog';
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store/src";


@Injectable()
export class CatalogEffect {

    @Effect() loadCatalog$: Observable<Action> = this._actions$.ofType( LOAD_PRODUCTS )
        .map( action => action )
        .switchMap( payload => {
            return this.handleLoad()
                .map( res => {
                    // TODO kids never try eval at home, because it is very insecure
                    window.eval( res.text().trim() );
                    return new LoadProductsSuccess( window.all_products.map( product => {
                        return {
                            SKU: product.data,
                            name: product.value,
                            metaKeywords: product.info.metaKeywords,
                            image: product.info.Image1Src,
                            html: product.info.text
                        };
                    } ) );
                } )
                .catch( ( e ) => of( new LoadProductsFail( e ) ) );
        } );


    private nativeStorage: any;

    constructor ( private _http: Http,
                  private _actions$: Actions ) {
    }

    handleLoad () {
        return this._http.get( `/products.js` );
    }
}
