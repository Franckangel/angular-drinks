import { Component, inject, OnInit } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-drink-details',
  standalone: false,
  templateUrl: './drink-details.component.html',
  styleUrl: './drink-details.component.scss'
})
export class DrinkDetailsComponent implements OnInit {
  private drinkService = inject(DrinkService);
  private activatedRoute = inject(ActivatedRoute);

  drink?: Drink;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const drinkId: string = paramMap.get('drinkId')!;
      this.drinkService.getDrink(drinkId).subscribe((drink) => {
        this.drink = drink;
      })
    })
  }

}
