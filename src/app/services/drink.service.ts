import { inject, Injectable } from '@angular/core';
import { Drink } from '../models/drink.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private httpClient: HttpClient = inject(HttpClient);

  private baseUrl: string = 'http://localhost:3000/drinks';

  getDrinks() : Observable<Drink[]> {
    return this.httpClient.get<Drink[]>(this.baseUrl);
  }

  getDrink(drinkId: string) : Observable<Drink> {
    return this.httpClient.get<Drink>(this.baseUrl + '/' + drinkId);
  }
}
