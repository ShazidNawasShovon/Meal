function loadCountries(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}
const displayCountries=(countries)=>{
    const countriesDiv=document.getElementById('countries');
    for(const country of countries)
    {
        const div=document.createElement('div');
        div.classList.add('country');
        div.innerHTML=`
        <h3>Country Name: ${country.name}</h3>
        <p>${country.name} Capital: <span>${country.capital}</span></p>
        <button onclick="loadCountryDetail('${country.name}')">Details</button>
        `
        countriesDiv.appendChild(div);
        
        
    }
    
}
const loadCountryDetail= name =>{
    const url=`https://restcountries.eu/rest/v2/name/${name}`
    // console.log(name,url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountryDetail(data[0]))

}
const displayCountryDetail=country=>{
    console.log(country);
    const countryDetail=document.getElementById('country-detail');
    countryDetail.innerHTML=`<h3>${country.name}</h3>
    <p>Population: ${country.population}</p>
    <img width=200px src="${country.flag}">
    `
}