import { NgModule } from "@angular/core/src/core";
import { StoreModule } from "@ngrx/store/store";
import { EffectsModule } from "@ngrx/effects/effects";
import { CatalogEffect, CatalogReducer } from "./index";
import { ModuleWithProviders } from "@angular/core/core";
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