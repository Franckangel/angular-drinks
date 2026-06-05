import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DrinkCategory } from '../../models/drink.model';

@Component({
  selector: 'app-admin-drink-form',
  standalone: false,
  templateUrl: './admin-drink-form.component.html',
  styleUrl: './admin-drink-form.component.scss'
})
export class AdminDrinkFormComponent {

  formGroup: FormGroup = new FormGroup({
    name: new FormControl<string>(''),
    price: new FormControl<number>(0),
    description: new FormControl<string>(''),
    category: new FormControl<DrinkCategory>('sweet'),
    image: new FormControl<string>('')
  })

  drinksImageUrls : string[] = [
    'drinks/cafe-latte.png',
    'drinks/cappuccino.png',
    'drinks/caramel-latte.png',
    'drinks/kokuto-cafe-latte.png',
    'drinks/matcha-latte.png',
    'drinks/taiwanese-tea-cafe-latte.png'
  ]

  createDrink() {
    console.log('Creating drink...', this.formGroup.value)

  }
}
