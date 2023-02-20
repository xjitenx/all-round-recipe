import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.allrecipes.com/thmb/j-UIY1oXZZWisuG5e5tRitsOvIs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005-8570fd9bcab845519550c6ff5c71e213.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)],
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://www.allrecipes.com/thmb/j-UIY1oXZZWisuG5e5tRitsOvIs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005-8570fd9bcab845519550c6ff5c71e213.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Bread Bun', 1)],
    ),
    new Recipe(
      'A Test Recipe 3',
      'This is simply a test 3',
      'https://www.allrecipes.com/thmb/j-UIY1oXZZWisuG5e5tRitsOvIs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005-8570fd9bcab845519550c6ff5c71e213.jpg',
      [new Ingredient('Meow', 1), new Ingredient('French Beans', 20)],
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
