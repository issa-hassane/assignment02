function averageRating(ratingData) {
  var arr = [];
  var finalRating = [];

  for (let i = 0; i < ratingData.length; i++) {
    arr = ratingData.filter((el) => el.restaurant == ratingData[i].restaurant);

    let sum = 0;
    arr.forEach((el) => {
      sum = sum + el.rating;
    });
    const index = finalRating.findIndex(
      (object) => object.restaurant === ratingData[i].restaurant
    );

    if (index === -1) {
      finalRating.push({
        restaurant: ratingData[i].restaurant,
        averageRating: sum / arr.length,
      });
    }
    // console.log(arr);
  }
  return finalRating;
}

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

console.log("finall-----------------------------------------");
console.log(averageRating(ratingData));

var resto4 = averageRating(ratingData);
// var filtered = resto4.filter((el) => el.averageRating >= 4);
// console.log(filtered);

console.log("ratings greater or equal to 4 are: ---------------------------");
resto4.forEach((el) => {
  if (el.averageRating >= 4) console.log(el);
});
