
const in1 = document.getElementById("ingr1Val");
const drinksDiv = document.getElementById("results-container");
drinksDiv.addEventListener('click', (event) => getRecipe(event.target), false);
  // javascript code to bring data from database. 

const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=`;
const url1=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;
//url=API on homePage - fetches cocktails containing alcohol chose by user on drop-down list
//url1=API on recipePage - fetches details (cockatil name, ingredients, instructions, image) of selected cocktail 

function myFunction(){
//myFunction calls API 'url' and displays all cocktails which have the stated alcohol
  console.log(url + in1.value);

  const drinks = fetch(url + in1.value).then(result => result.json()).then((result) => {return result.drinks})
//fetches data from API called 'url'
  display(drinks) 
  
}


async function getRecipe(cocktail){

  const recipe = await fetch(url1 + cocktail.id).then(result => result.json()).then((result) => {return result.drinks[0]})
  //fetches data from API called 'url1'

  console.log(recipe)

  localStorage.setItem("instructions", JSON.stringify(recipe));

  location.href = "recipePage.html"
  //puts cocktail info on recipePage

}


const display = async (drinks) => {

  drinksDiv.innerHTML = ""
  let drinkList = await drinks


  for(let i =0; i < drinkList.length; i++){

    let drinkCard = document.createElement('ion-item');
    drinkCard.innerHTML = drinkList[i].strDrink;
    drinkCard.id = drinkList[i].idDrink

    
    let image =document.createElement("img")
    //defines image
    
    image.src = drinkList[i].strDrinkThumb
    //creates thumbnail space for image to be dispalyed on

    let cardImage = document.createElement("ion-thumbnail")
    cardImage.append(image)
    

    drinkCard.append(cardImage)
    //displays thumbnail image of cocktail on homePage list

    drinksDiv.append(drinkCard)
  }

  //console.log(drinkList)
}



  
