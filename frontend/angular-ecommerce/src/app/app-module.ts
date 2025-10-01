import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductList } from './components/product-list/product-list';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductService } from './services/product-service';
import { ProductCategoryMenu } from './components/product-category-menu/product-category-menu';

@NgModule({
  declarations: [
    App,
    ProductList,
    ProductCategoryMenu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    ProductService
  ],
  bootstrap: [App]
})
export class AppModule { }
