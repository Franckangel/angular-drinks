import { Component, inject, OnInit } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-drink-list',
  standalone: false,
  templateUrl: './drink-list.component.html',
  styleUrl: './drink-list.component.scss'
})
export class DrinkListComponent implements OnInit {


  private drinkService = inject(DrinkService);
  drinks: Drink[] = [];

  ngOnInit(): void {
    this.drinkService.getDrinks()
    .subscribe(
      (drinks: Drink[]) => {
        this.drinks = drinks;
      }
    );
  }

  showLog(drink: Drink) {
    console.log(drink);
  }


}
