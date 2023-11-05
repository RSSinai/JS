const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  return candyStore.candies.find((ele) => ele.id === id);
}
console.log(getCandy(candyStore, "as12f"));

function getPrice(candyStore, id) {
  const param = getCandy(candyStore, id);
  const price = param.price;
  return console.log("the price of the candy " + param.name + " is " + price);
}

getPrice(candyStore, "5hd7y");

function addCandy(candyStore, id, name, price, amohnt) {
  const newCandy = {
    name: name,
    id: id,
    price: price,
    amount: amohnt,
  };

  candyStore.candies.push(newCandy);
}

function buy(candyStore, id)
{
    let candy = candyStore.candies.find((ele)=>ele.id === id)
    let candyPrice = candy.price
    candy.amount -= 1  
    candyStore.cashRegister += candyPrice
}

buy(candyStore,"as12f" )

console.log(candyStore)