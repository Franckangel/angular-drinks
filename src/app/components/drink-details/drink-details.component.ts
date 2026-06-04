import { Component } from '@angular/core';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'app-drink-details',
  standalone: false,
  templateUrl: './drink-details.component.html',
  styleUrl: './drink-details.component.scss'
})
export class DrinkDetailsComponent {

    drink: Drink = {
    id: '92a1',
    name: 'Taiwanese Cafe',
    price: 1.99,
    description: 'Lorem ipsum',
    category: 'sweet',
    image: 'drinks/taiwanese-tea-cafe-latte.png'
  }
}
