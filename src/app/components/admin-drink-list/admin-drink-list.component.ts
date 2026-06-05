import { Component, inject, OnInit } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-admin-drink-list',
  standalone: false,
  templateUrl: './admin-drink-list.component.html',
  styleUrl: './admin-drink-list.component.scss'
})
export class AdminDrinkListComponent implements OnInit {

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

}
