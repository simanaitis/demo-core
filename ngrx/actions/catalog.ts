import { Action } from '@ngrx/store';
import { Product } from "../../models/product";

export const LOAD_PRODUCTS = '[Product] load';
export const LOAD_PRODUCTS_SUCCESS = '[Product] load success';
export const LOAD_PRODUCTS_FAILURE = '[Product] load failure';


export class LoadProducts implements Action {
    type: string = LOAD_PRODUCTS;

    constructor ( public payload: any ) {
    }
}

export class LoadProductsSuccess implements Action {
    type: string = LOAD_PRODUCTS_SUCCESS;

    constructor ( public payload: Product[] ) {
    }
}

export class LoadProductsFail implements Action {
    type: string = LOAD_PRODUCTS_SUCCESS;

    constructor ( public payload: Product[] ) {
    }
}

export type All
    = LoadProducts
    | LoadProductsSuccess
    | LoadProductsFail;
