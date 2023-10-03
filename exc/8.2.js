
const myCountry = {

country:"Israel",
capital:"mako.co.il",
language: "spanish",
population: 3000000,
neighbors: [],
describe: function(){ console.log( `${this.country} has ${this.population} their mother tongue is ${this.language} they have ${this.neighbors.length} neighboring countries and a capital ` )},
checkIsland: function(){this.neighbors.length === 0 ? true : false }
}

myCountry.describe()