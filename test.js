// # **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// # down from generation to generation. Imagine you're creating an application that
// # records these oral stories and translates them into different languages. The
// # stories vary by length, moral lessons, and the age group they are intended for.
// # Think about how you would model `Story`, `StoryTeller`, and `Translator`
// # objects, and how inheritance might come into play if there are different types of
class Stories{
constructor(length,moralLesson,ageGroup,translator){
    this.length= length
    this.moralLesson= moralLesson
    this.ageGroup = ageGroup
    this.translator = translator

}
}

class GoatMatata extends Stories{
    constructor(length,moralLesson,ageGroup,translator,StoryTellerOne){
        super(length,moralLesson,ageGroup,translator)
        this.StoryTellerOne = StoryTellerOne
    }
    storyTime(){
        console.log("The moral in this story is ${this.moralLesson} and it was read by ${this.StoryTellerOne}");
    }
}

// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

class Recipe{
 constructor(ingridients, prepTime,cookingMethod,nutritinalInfo){
    this.ingridients = ingridients
    this.prepTime = prepTime
    this.cookingMethod = cookingMethod
    this.nutritinalInfo = nutritinalInfo
 }

}

class morrocanRecipe extends Recipe{
    constructor(Ingridients, prepTime,cookingMethod,nutritinalInfo,traditionalValue){
    super(Ingridients,prepTime,cookingMethod,nutritinalInfo)
    this.traditionalValue = "Bring back rain"
    }

    healing(){
      console.log("cooking Morrocan recipe takes ${this.prepTime} for it to ${this.traditionalValue}")
    }
}

class NigerianRecipe extends Recipe{
    constructor(Ingridients, prepTime,cookingMethod,nutritinalInfo,fameValue){
        super(Ingridients,prepTime,cookingMethod,nutritinalInfo)
        this.fameValue = fameValue
    }
  
    shareRecipe(){
         if (this.fameValue == 70){
            console.log("Nigerian recipe is very famous")
         }
         else {
            console.log("The ${this.cookingMethod} is not good enough.")
         }
    }
}

class EthiopianRecipe extends Recipe{
    constructor(Ingridients, prepTime,cookingMethod,nutritinalInfo,healthValue, price){
        super(Ingridients,prepTime,cookingMethod,nutritinalInfo)
        this.healthValue = 90
        this.price = true
    }

    pricing(){
       if(this.price && this.healthValue){
        console.log("This is the best recipe ever")
       }
    }
}


// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.

class Species{
 constructor(diet,lifespan, migrationPattern){
     this.diet = diet
     this.lifespan = lifespan
     this.migrationPattern = migrationPattern
 }

}
class Prey extends Species{
    constructor(diet,lifespan, migrationPattern,defenceStyle){
    super(diet,lifespan,migrationPattern)
    this.defenceStyle = defenceStyle
    }

    movement(){
        console.log("Zeb")
    }
}
 class Predator extends Species{
    constructor(diet,lifespan, migrationPattern,attackStyle){
        super(diet,lifespan,migrationPattern)
        this.attackStyle = attackStyle
    }

 }