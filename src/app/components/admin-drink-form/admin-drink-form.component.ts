import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-drink-form',
  standalone: false,
  templateUrl: './admin-drink-form.component.html',
  styleUrl: './admin-drink-form.component.scss'
})
export class AdminDrinkFormComponent {

  drinksImageUrls : string[] = [
    'drinks/cafe-latte.png',
    'drinks/cappuccino.png',
    'drinks/caramel-latte.png',
    'drinks/kokuto-cafe-latte.png',
    'drinks/matcha-latte.png',
    'drinks/taiwanese-tea-cafe-latte.png'
  ]

}
