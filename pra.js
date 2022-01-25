var ratingData = [
  { restaurant: "KFC", rating: 5 },
  { restaurant: "Burger King", rating: 4 },
  { restaurant: "KFC", rating: 3 },
  { restaurant: "Domino", rating: 2 },
  { restaurant: "Subway", rating: 3 },
  { restaurant: "Domino", rating: 1 },
  { restaurant: "Subway", rating: 4 },
  { restaurant: "Pizza Hut", rating: 5 },
];
var arr = [];
for (let i = 0; i < ratingData.length; i++) {
  arr = ratingData.filter((el) => el.restaurant == ratingData[i].restaurant);
  //   console.log(arr);
  let sum = 0;
  arr.forEach((el) => {
    sum = sum + el.rating;
  });
  console.log(`this is the sum ${sum}`);
}

// var arr2 = [
//   { restaurant: "Subway", rating: 3 },
//   { restaurant: "Subway", rating: 4 },
// ];
