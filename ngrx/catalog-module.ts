import { NgModule } from "@angular/core";
import { CatalogEffect } from "./index";
import { ModuleWithProviders } from "@angular/core";
import { CatalogService } from "../index";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { CatalogReducer } from "demo-core/ngrx/reducers";

@NgModule({
})
export class CoreCatalogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreCatalogModuleForRoot,
      providers: [CatalogService],
    };
  }
}

@NgModule({
  imports: [
    StoreModule.forFeature('catalog', CatalogReducer),
    EffectsModule.forFeature([CatalogEffect]),
  ],
})
export class CoreCatalogModuleForRoot {}