const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let hasIngBA = ingredientCheck(bakeryA);
  let hasIngBB = ingredientCheck(bakeryB);
  
  function ingredientCheck(ingredients) {
    let hasIng =  [];
    for (let i = 0; i < ingredients.length; i++) {
      for (let r = 0; r < recipes.length; r++) {
        for (let ri = 0; ri < recipes[r].ingredients.length; ri++) {
          if (recipes[r].ingredients[ri] === ingredients[i]) {
            let foundRecipe = {
              recipe: recipes[r].name,
              ingredient: recipes[r].ingredients[ri]
            }
            hasIng.push(foundRecipe);
          }
        }
      }
    }
    return hasIng;
  }

  for (let a = 0; a < hasIngBA.length; a++) { 
    for (let b = 0; b < hasIngBB.length; b++) { 
      if (hasIngBA[a].recipe === hasIngBB[b].recipe && hasIngBA[a].ingredient !== hasIngBB[b].ingredient) {
        return hasIngBA[a].recipe; 
      }
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];
console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));