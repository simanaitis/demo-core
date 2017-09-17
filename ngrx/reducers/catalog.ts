
import * as CatalogActions from '../actions/catalog';
import { IProduct } from "../../models/product";

export interface CatalogState {
    loaded: boolean;
    products: IProduct[];
}

const initialState: CatalogState = {
    loaded: false,
    products: []
};

export function CatalogReducer ( state = initialState, action: CatalogActions.All ): CatalogState {
    switch ( action.type ) {
        case CatalogActions.LOAD_PRODUCTS: {
            return state;
        }

        case CatalogActions.LOAD_PRODUCTS_SUCCESS: {
            return {
                loaded: true,
                products: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
