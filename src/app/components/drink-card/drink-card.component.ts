import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'app-drink-card',
  standalone: false,
  templateUrl: './drink-card.component.html',
  styleUrl: './drink-card.component.scss'
})
export class DrinkCardComponent {
  @Input({required: true})
  drink!: Drink;

  @Output()
  onClick: EventEmitter<any> = new EventEmitter<Drink>()
}
