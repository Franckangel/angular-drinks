import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { DrinkCategoryLabelPipe } from '../../pipes/drink-category-label.pipe';

@Component({
    selector: 'app-drink-card',
    templateUrl: './drink-card.component.html',
    styleUrl: './drink-card.component.scss',
    standalone: true,
    imports: [RouterLink, CurrencyPipe, DrinkCategoryLabelPipe]
})
export class DrinkCardComponent {

  @Input()
  isAdmin = false;


  @Input({required: true})
  drink!: Drink;

  @Output()
  onClick: EventEmitter<any> = new EventEmitter<Drink>()
}
