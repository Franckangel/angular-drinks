import { Injectable } from '@angular/core';
import { Drink } from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private drinks: Drink[] = [
    {
      id: '92a1',
      name: 'Taiwanese Cafe',
      price: 1.99,
      description: 'Lorem ipsum',
      category: 'sweet',
      image: 'drinks/taiwanese-tea-cafe-latte.png'
    },
    {
      id: '34k1',
      name: 'Matcha Latte',
      price: 1.99,
      description: 'Lorem ipsum',
      category: 'low-sugar',
      image: 'drinks/matcha-latte.png',
    },
    {
      id: '03b5',
      name: 'Cafe Latte',
      price: 0.99,
      description: 'Lorem ipsum',
      category: 'low-sugar',
      image: 'drinks/cafe-latte.png'
    },
    {
      id: '9250',
      name: 'Cappucino',
      price: 0.99,
      description: 'Lorem ipsum',
      category: 'low-sugar',
      image: 'drinks/cappuccino.png'
    }
  ];

  getDrinks() : Drink[] {
    return this.drinks;
  }
}
