import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DrinkCategoryLabelPipe } from './pipes/drink-category-label.pipe';

registerLocaleData(localeFr)

@NgModule({
  declarations: [
    AppComponent,
    DrinkListComponent,
    DrinkCardComponent,
    DrinkCategoryLabelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
