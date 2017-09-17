import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from "@ngrx/store/store";
import { EffectsModule } from "@ngrx/effects/effects";
import { CatalogEffect, CatalogReducer } from "./index";
import { CatalogService } from "../index";

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
    StoreModule.forFeature('auth', CatalogReducer),
    EffectsModule.forFeature([CatalogEffect]),
  ],
})
export class CoreCatalogModuleForRoot {}