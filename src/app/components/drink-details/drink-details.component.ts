import { Component, inject, OnInit } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgIf, CurrencyPipe } from '@angular/common';
import { DrinkCategoryLabelPipe } from '../../pipes/drink-category-label.pipe';

@Component({
    selector: 'app-drink-details',
    templateUrl: './drink-details.component.html',
    styleUrl: './drink-details.component.scss',
    standalone: true,
    imports: [RouterLink, NgIf, CurrencyPipe, DrinkCategoryLabelPipe]
})
export class DrinkDetailsComponent implements OnInit {
  private drinkService = inject(DrinkService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  drink?: Drink;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const drinkId: string = paramMap.get('drinkId')!;
      this.drinkService.getDrink(drinkId).subscribe({
        next: (drink) => {
          this.drink = drink;
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status == 404) {
              this.router.navigate(['/not-found'], { skipLocationChange: true })
            }
          }
        },
        complete: () => {
          console.log('complete')
        }

      })

    })
  }

}
