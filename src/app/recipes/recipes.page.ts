import {Component, OnDestroy, OnInit} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRecipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  public recipes$: BehaviorSubject<IRecipe[]>;

  constructor(public recipesService: RecipesService) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.recipes$ = this.recipesService.recipes$;
  }

  ionViewWillEnter(): void {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
