import { Component, inject } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-drink-list',
  standalone: false,
  templateUrl: './drink-list.component.html',
  styleUrl: './drink-list.component.scss'
})
export class DrinkListComponent {

  private drinkService = inject(DrinkService)

  drinks: Drink[] = this.drinkService.getDrinks();

  showLog(drink: Drink) {
    console.log(drink);
  }


}
