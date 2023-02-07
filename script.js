//Question 2 & 3

fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=>{data.forEach(element=>{
        const countryRequired= {
            ...element,
            name        : element.name.common,
            flag        : element.flags.png,
            region      : element.region,
            subregion   : element.subregion,
            population  : element.population   
          }   
  createCountry(countryRequired)
});});
function createCountry({name, flag, population,subregion, region, }){
    document.body.innerHTML+=`
    <img src="${flag}" alt="${name}"/>
    <h2>${name}</h2>
    <p><span>Region : </span>${region}</p>
    <p><span>Population: </span>${population}</p>
    <p><span>Sub-Region: </span>${subregion}</p>
    <h1> </div>`
}