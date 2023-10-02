const carMarket = require("./obj.js");
// // console.log(carMarket.sellers)

// /* -------------------------------------------------------------------------- */
// /*                              Agency Operations                             */
// /* -------------------------------------------------------------------------- */
// // Search for a car agency by its name or ID.

function filterAgency(str) {
    const agencyFiltered = carMarket.sellers.filter((agency) => agency.agencyName == str || agency.agencyId == str)
    return agencyFiltered;
}

// /* -------------------------------- // DRIVER ------------------------------- */
console.log(filterAgency("Best Deal"))

// // Retrieve all agencies' names.
function retrieveAgencies() {
    const agencyFiltered = carMarket.sellers.map(agency=>agency.agencyName)
    return agencyFiltered
}

// /* -------------------------------- // DRIVER ------------------------------- */
console.log(retrieveAgencies())

// // Add a new car to an agency's inventory.
function addCarToMarket(brand, modelName, year, price, carNumber, ownerId) {
    const seller = carMarket.sellers.find((seller) => seller.agencyId === ownerId);

    if (seller) {
      const newCar = {
        brand: brand,
        models: [
          {
            name: modelName,
            year: year,
            price: price,
            carNumber: carNumber,
            ownerId: ownerId,
          },
        ],
      };

      seller.cars.push(newCar);
      console.log(`Successfully added a ${brand} ${modelName} to ${seller.agencyName}'s inventory.`);
    } else {
      console.log(`Seller with agencyId ${ownerId} not found.`);
    }
  }

// /* --------------------------------- DRIVER --------------------------------- */
  addCarToMarket("Mercedes", "C-Class", 2022, 60000, "ABC123", "Plyq5M5AZ");

// //   Remove a car from an agency's inventory.
function removeCarFromMarket(carNumber, ownerId) {
    const seller = carMarket.sellers.find((seller) => seller.agencyId === ownerId);

    if (seller) {
      const carIndex = seller.cars.findIndex((car) => car.models.some((model) => model.carNumber === carNumber));

      if (carIndex !== -1) {
        const removedCar = seller.cars[carIndex];
        seller.cars.splice(carIndex, 1);
        console.log(`Successfully removed the ${removedCar.brand} ${removedCar.models[0].name} (${carNumber}) from ${seller.agencyName}'s inventory.`);
      } else {
        console.log(`Car with carNumber ${carNumber} not found in ${seller.agencyName}'s inventory.`);
      }
    } else {
      console.log(`Seller with agencyId ${ownerId} not found.`);
    }
  }

// /* --------------------------------- DRIVER --------------------------------- */
removeCarFromMarket("AZJZ4", "Plyq5M5AZ");

// //   Change the cash or credit of an agency.

function changeAgencyCash(agencyNames, agencyIds, cashChange)
{
    const seller = carMarket.sellers.find((seller)=>seller.agencyName == agencyNames && seller.agencyId == agencyIds)

    if(seller) {
        seller.cash = cashChange;
        console.log(`Successfully changed a ${seller.agencyName} cash to be ${seller.cash}`);
    }
    else
    console.log(`Seller with agencyId ${agencyIds} not found.`);
}

// /* --------------------------------- DRIVER --------------------------------- */
changeAgencyCash("Best Deal", "Plyq5M5AZ", 0)
console.log('-----------')
console.log(filterAgency("Best Deal"))

// // Update the price of a specific car in an agency
function updateCarPrice(agency, newPrice, carNumber, ownerId)
{
    const seller = carMarket.sellers.find((seller) => seller.agencyName === agency);
    let specificModel = seller.cars.find(car == seller.cars.find((car)=>{car.models.find(((model)=>{model.carNumber == carNumber && model.ownerId == ownerId}))}) )

    if(specificModel != null)
    {
        specificModel.models.find((model)=>{model.price}) = newPrice
        console.log(`Successfully changed a ${seller.agencyName} car to be at the price ${newPrice}`);
    }
    else {
        console.log(`Seller with  ${ownerId} not found and changed.`);
      }
}

// /* --------------------------------- DRIVER --------------------------------- */
// updateCarPrice(agency, newPrice, carNumber, ownerId)

// // Transfer a car from one agency to another
function transferCarBetweenAgencies(oldAgency, newAgency, carNumber)
{

    const oldSeller = carMarket.sellers.find((seller) => seller.agencyName === oldAgency);
    console.log(oldSeller)
    const newSeller = carMarket.sellers.find((seller) => seller.agencyName === newAgency);
    console.log(newSeller)
    const carIndex = oldSeller.cars.findIndex((car) => car.models.findIndex((model) => model.carNumber === carNumber));
    console.log('---------------------')
    console.log('the car index is ' + carIndex)
    console.log('---------------------')

    if (carIndex !== -1) {
        const removedCar = oldSeller.cars[carIndex];
        oldSeller.cars.splice(carIndex, 1);
        console.log(`Successfully removed the ${removedCar.brand} from inventory.`);
      } else {
        console.log(`Car with carNumber ${carNumber} not found in ${oldSeller.agencyName}'s inventory.`);
      }
}

// /* --------------------------------- DRIVER --------------------------------- */
transferCarBetweenAgencies("Best Deal", "CarMax", "7A5b-")

/* -------------------------------------------------------------------------- */
/*                             Customer Operations                            */
/* -------------------------------------------------------------------------- */

// Search for a customer by their name or ID.
function filterCustomer(str) {
  const customerFiltered = carMarket.customers.filter(
    (customer) => customer.name == str || customer.id == str
  );
  return customerFiltered;
}

/* -------------------------------- // DRIVER ------------------------------- */
console.log(filterCustomer("Lilah Goulding"))

// Retrieve all customers' names.
function retrieveCustomers() {
    const customerFiltered = carMarket.customers.map((customer)=>customer.name)
    return customerFiltered
}

/* -------------------------------- // DRIVER ------------------------------- */
console.log(retrieveCustomers())

// // Change the cash of a customer.

function changeCustomerCash(customerNames, customerIds, cashChange) {
  const customer = carMarket.customers.find(
    (customer) => customer.name == customerNames && customer.id == customerIds
  );

  if (customer) {
    customer.cash = cashChange;
    console.log(
      `Successfully changed a ${customer.customerNames} cash to be ${customer.cash}`
    );
  } else console.log(`Customer with id ${customerIds} not found.`);
}
/* --------------------------------- DRIVER --------------------------------- */
// changeCustomerCash(customerNames, customerIds, cashChange)

// // Calculate the total value of all cars owned by a specific customer
function getCustomerTotalCarValue(customerId) {
    const customer = carMarket.customers.find((customer) => customer.id === customerId);

    if (customer) {
      const totalCarValue = customer.cars.reduce((accumulator, car) => {
        return accumulator + car.price;
      }, 0);

      return totalCarValue;
    }

    return console.log('Customer not found');
  }

// /* --------------------------------- DRIVER --------------------------------- */
console.log(  getCustomerTotalCarValue("2RprZ1dbL"))

/* -------------------------------------------------------------------------- */
/*                               Car Operations:                              */
/* -------------------------------------------------------------------------- */
// Retrieve all cars available for purchase. - by who ?
function retrieve() {
  console.log("these are all the cars to buy from customers to buy ");
  console.log(
    carMarket.customers.map((customer) => {
      return customer.cars;
    })
  );
  console.log("these are all the cars to buy from sellers");

  let sellerCars = carMarket.sellers.map((seller) => {
    return seller.cars;
  });

  sellerCars.forEach((car) => {
    car.forEach((model) => {
      console.log(model.models);
    });
  });
}

// /* --------------------------------- DRIVER --------------------------------- */
retrieve();

// Search for cars based on certain criteria. The search parameters should include the production year, price, and optionally, the brand of the car.
function searchCar(prices) {
const one = carMarket.sellers
console.log(one)
console.log("------------------------------------------------")
const two = one.map((car)=>car.cars)
console.log(two)
console.log("------------------------------------------------")
const three = two.map((car)=>car.filter((model)=>console.log(model.models)))
console.log(three)
three.filter((car)=>{})
  let cars = carMarket.sellers.filter((car) => {
    return car.cars;
  });
  console.log(cars);
}
// /* --------------------------------- DRIVER --------------------------------- */
searchCar(165041);

/* -------------------------------------------------------------------------- */
/*                          Car Purchase Operations:                          */
/* -------------------------------------------------------------------------- */

function sellCar(text) {
    let specificCar = carMarket.sellers.map((ele)=>ele.cars.map((ele)=>ele.models.filter((ele)=>ele.name)))
    console.log("-----------------++---------------------------------------------------") 
    const filteredCars = specificCar.filter((car) => {
        console.log("Checking car brand:", car.brand);
      
        const matchingModels = car.filter((model) => {
          console.log("Checking car model carNumber:", specificCar.carNumber);
          return specificCar.carNumber === text;
        });
      
        return matchingModels.length > 0;
      });
      console.log("Filtered Cars:", filteredCars);

}

console.log(sellCar("S6DL1"));
