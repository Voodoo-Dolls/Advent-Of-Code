let calories = `2000
3000

4000

5000
6000

7000
8000
9000

10000`;

let calorieCounter = (calories) => {
  let calorieArray = [0, 0, 0, 0, 0];

  calories.forEach((snack) => {
    if (snack != "") {
      console.log("food");
    } else {
      console.log("wtf");
    }
  });
};

calorieCounter(calories.split("\n"));
