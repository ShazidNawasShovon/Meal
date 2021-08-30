const searchFood=async ()=>{
    const searchField=document.getElementById('search-filed');
    const searchFieldText= searchField.value;
    // clear Data
    searchField.value='';
    if(searchFieldText=='')
    {
        console.log("HEllo");
    }
    else
    {
        // Load Data
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`;
    const res=await fetch(url);
    const data=await res.json();
    displaySearchResult(data.meals);
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>displaySearchResult(data.meals))
    }
    
}
const displaySearchResult=meals=>{
    // console.log(meals.length);
    const searchResult=document.getElementById('search-result');
    searchResult.innerHTML='';
    if(meals.meals==null)
    {
        console.log("You Are a Fool");
    }
    else
    {
        meals.forEach(meal => {
            
            // console.log(meal.length);
            const div=document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`
            <div onclick="leadMealDetails(${meal.idMeal})" class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                    </div>
                  </div>
            `;
            searchResult.appendChild(div);
        });
    }
       
    
        
    
    
}
const leadMealDetails=async (idMeal)=>{
    // console.log(idMeal);
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    const res=await fetch(url);
    const data= await res.json();
    displayMealDetails(data.meals[0])
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>displayMealDetails(data.meals[0]))
}
const displayMealDetails=meal=>{
    console.log(meal);
    const mealDetails=document.getElementById('meal-detail');
    mealDetails.innerHTML='';
    const div=document.createElement('div');
    div.classList.add('card');
        div.innerHTML=`
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions}</p>
                  <a href="${meal.strYoutube}" class="btn btn-primary">See The Cocking Process</a>
                </div>
                `;
    mealDetails.appendChild(div);
}