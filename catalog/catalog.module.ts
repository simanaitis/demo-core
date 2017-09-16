import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MdProgressBar,
    MdHint,
    MdInputContainer,
    MdInputModule,
    MdHeaderRow,
    MdHeaderCell,
    MdNativeDateModule,
    MdTableModule, MdProgressBarModule
} from '@angular/material';
import { LoadCatalogDataComponent } from "./load-catalog-data/load-catalog-data.component";
import { CatalogContainerComponent } from "./catalog/catalog-container.component";

@NgModule( {
    imports: [
        CommonModule,
    ],
    declarations: [
        LoadCatalogDataComponent,
        CatalogContainerComponent,
    ],
} )
export class CatalogModule {
}
