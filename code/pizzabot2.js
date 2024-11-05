const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

const buttom = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventlistener("click", () => {
  const orderName = document.getElementById("orderName").value;
  const orderQuantity = parseFloat(
    document.getElementById("orderQuantity").value
  );
  result.textContent = `Great, I'll get started on your ${orderName} right away, 
  it will cost ${totalCost(orderQuantity)}. The pizzas will take ${cookingTime(
    orderQuantity
  )}.`;
});

//alert(
// `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
//);

//const orderName = prompt(
//"Enter the name of the pizza you want to order today."
//);
//);

//if (checkOrderName(orderName)) {
// const orderQuantity = prompt(`How many of ${orderName} do you want?.`);
//alert(
//`Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(
//orderQuantity
//)}. The pizzas will take ${cookingTime(orderQuantity)}.`
//);
//}

function checkOrderName(orderName) {
  return (
    orderName == "vegetarian" ||
    orderName == "hawaiian" ||
    orderName == "pepperoni"
  );
}

function totalCost(quantity) {
  return quantity * pizzaPrice;
}

function cookingTime(quantity) {
  if (quantity < 3) {
    return 10;
  } else if (quantity > 2 && quantity < 6) {
    return 15;
  } else {
    return 20;
  }
}
