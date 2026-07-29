
import { LOCALE_ID } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { notFoundInterceptor } from './app/interceptors/not-found.interceptor';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app/app-routes';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'
import { provideRouter } from '@angular/router';

registerLocaleData(localeFr, 'fr-Fr');


bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        {
            provide: LOCALE_ID,
            useValue: 'fr-FR'
        },
        provideHttpClient(withInterceptors([notFoundInterceptor]))
    ]
})
  .catch(err => console.error(err));
