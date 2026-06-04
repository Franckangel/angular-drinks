import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'drinks', pathMatch: 'full'},
  {path: 'drinks', component: DrinkListComponent},
  {path: 'drinks/:drinkId', component: DrinkDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
