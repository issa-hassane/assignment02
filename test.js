// Problem Statetement: 1
// --------------------------------------------------------------------------------------------
console.log(
  "Part 1 -----------------------------------------------------------------------------------------------------------------------------------"
);
class restaurantManager {
  constructor(restaurantList) {
    this.restaurantList = restaurantList;
  }
  printAllRestaurantNames() {
    //print the name of all the restaurant names in restaurantList
    this.restaurantList.forEach((restaurant) => console.log(restaurant.name));
  }
  filterRestaurantByCity(city) {
    //filter the restaurant on the basis of the city provided in arguments

    let restaurants = this.restaurantList.filter(
      (restaurant) => restaurant.city == city
    );
    console.log(restaurants);
  }
}

var restoList = [
  {
    name: "Raidan Restaurant",
    city: "bangalore",
    address: "3rd Cross, Ramaiah Layout, Kammanahalli, Bengaluru",
  },
  {
    name: "waterside",
    city: "kanpur",
    address: "10 The Mall Road The Landmark Towers, Kanpur",
  },
  {
    name: "Empire Restaurant",
    city: "bangalore",
    address: "83, Nehru Rd, St Thomas Town, Kammanahalli, Bengaluru",
  },
];

var newresto = new restaurantManager(restoList);

console.log("All restaurant names:");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~");
newresto.printAllRestaurantNames();

console.log("filter restaurant by city name (bangalore)");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
newresto.filterRestaurantByCity("bangalore");

console.log(
  "Part 2 -----------------------------------------------------------------------------------------------------------------------------------"
);

// Problem Statetement: 2
// --------------------------------------------------------------------------------------------

class OrderManager {
  #sum = 0;
  #id = 0;
  proportions = [];
  constructor(restaurantName, orderData) {
    // this.id = id;
    this.restaurantName = restaurantName;
    this.order = orderData;

    // getting the sum
    for (let i in orderData) {
      this.#sum = this.#sum + orderData[i];
    }
    //getting the proportions
    for (let i in orderData) {
      let proportionOpt = ((orderData[i] / this.#sum) * 100).toFixed(2);
      //   console.log(`${i}: ${proportionOpt}`);
      this.#id++;

      var finalObj = {
        id: this.#id,
        order: i,
        "order percentage": proportionOpt,
        restaurant: this.restaurantName,
      };
      this.proportions.push(finalObj);
    }
  }

  orderProportionOptions() {
    //order Proportion the number of order proportion options
    for (let i in this.order) {
      console.log(`${i}: ${this.order[i]}`);
    }
  }
  printProportionInGivenFormat() {
    // prints percentage of each proportion in given format
    console.log(this.proportions);
  }
  totalOfNumberOrderPlaced() {
    //   used to print total number of order placed
    console.log(this.#sum);
  }
}

var orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};
var newOrder = new OrderManager("punjab restaurant", orderData);

console.log("total number of orders placed for the restaurant:");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
newOrder.totalOfNumberOrderPlaced();

console.log("number of order proportion options:");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
newOrder.orderProportionOptions();

console.log("percentage of each proportion in below format:");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
newOrder.printProportionInGivenFormat();
