import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Drink, DrinkCategory } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-admin-drink-form',
  standalone: false,
  templateUrl: './admin-drink-form.component.html',
  styleUrl: './admin-drink-form.component.scss'
})
export class AdminDrinkFormComponent implements OnInit {

  private drinkService = inject(DrinkService)
  private router = inject(Router)
  private activatedRoute = inject(ActivatedRoute)

  drink?: Drink;

  formGroup = new FormGroup({
    name: new FormControl<string>('', { validators: [Validators.required, Validators.minLength(3)], nonNullable: true }),
    price: new FormControl<number>(0, { validators: [Validators.required, Validators.min(0.01)], nonNullable: true }),
    description: new FormControl<string>('', { validators: [Validators.required, Validators.minLength(10)], nonNullable: true }),
    category: new FormControl<DrinkCategory>('sweet', { validators: [Validators.required], nonNullable: true }),
    image: new FormControl<string>('', { validators: [Validators.required], nonNullable: true })
  })

  drinksImageUrls: string[] = [
    'drinks/cafe-latte.png',
    'drinks/cappuccino.png',
    'drinks/caramel-latte.png',
    'drinks/kokuto-cafe-latte.png',
    'drinks/matcha-latte.png',
    'drinks/taiwanese-tea-cafe-latte.png'
  ]

  ngOnInit(): void {
    if (this.router.url.endsWith('/edit')) {
      this.activatedRoute.paramMap.subscribe(paramMap => {
        const drinkId = paramMap.get('drinkId')!
        this.drinkService.getDrink(drinkId).subscribe(drink => {
          this.drink = drink
          this.formGroup.patchValue(drink)
        })
      })
    }
  }

  saveDrink() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }

    if (this.drink) {
      this.updateDrink()
    } else {
      this.createDrink()
    }

  }

  createDrink() {

    //console.log('Creating drink...', this.formGroup.value)
    //const formValue = this.formGroup.getRawValue();

    this.drinkService.createDrink(this.formGroup.getRawValue()).subscribe(() => {
      this.router.navigate(['/admin/drinks'])
    })

  }

  updateDrink() {
    this.drinkService.updateDrink(this.drink!.id!, this.formGroup.getRawValue()).subscribe(() => {
      this.router.navigate(['/admin/drinks'])
    })
  }

  deleteDrink() {
    this.drinkService.deleteDrink(this.drink!.id!).subscribe(() => {
      this.router.navigate(['/admin/drinks'])
    })
  }

  isInvalidAndTouchedOrDirty(formControl: FormControl) {
    return formControl.invalid && (formControl.dirty || !formControl.untouched)
  }
}
