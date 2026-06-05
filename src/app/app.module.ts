import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DrinkCategoryLabelPipe } from './pipes/drink-category-label.pipe';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { notFoundInterceptor } from './interceptors/not-found.interceptor';
import { AdminDrinkListComponent } from './components/admin-drink-list/admin-drink-list.component';
import { AdminDrinkFormComponent } from './components/admin-drink-form/admin-drink-form.component';

registerLocaleData(localeFr)

@NgModule({
  declarations: [
    AppComponent,
    DrinkListComponent,
    DrinkCardComponent,
    DrinkCategoryLabelPipe,
    DrinkDetailsComponent,
    NotFoundComponent,
    AdminDrinkListComponent,
    AdminDrinkFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    },
    provideHttpClient(withInterceptors([notFoundInterceptor]))

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
