//NOT USED IN FINAL APP


// called when save button clicked - will save recipe to favourites in local storage
function save(){
    if(localStorage.getItem("favourites" == null))
        localStorage.setItem("favourites", []);
    else
        {
            let currentFavs = 
         
    currentFavs.push()
    localStorage.setItem("favourites", JSON.stringify(localStorage.getItem("favourites")));
}
//favourites does not exist - get from local storage
for(let i =0; i < drinkList.length; i++){
        let drinkCard = document.createElement('ion-item'); //change drinkList to favourites
        drinkCard.innerHTML = drinkList[i].strDrink;
        drinkCard.id = drinkList[i].idDrink
        let image =document.createElement("img")
        image.src = drinkList[i].strDrinkThumb
        let cardImage = document.createElement("ion-thumbnail")
        cardImage.append(image)
        drinkCard.append(cardImage)
        drinksDiv.append(drinkCard)   //drinksDiv does not exist - create new div on favourite page
}
}