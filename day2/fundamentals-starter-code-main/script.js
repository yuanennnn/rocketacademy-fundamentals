// var main = function (input) {
//   var myOutputValue = 'hello world';
//   return myOutputValue;
// };

//console.log(main());

// qns 1:
// function weeksToMinutes(weeks){
// 1 week - 10080 minutes  
// return weeks*10080;
// }

// console.log(weeksToMinutes(10));

// qns 2:
// function convertToFarenheit(celsius){
// formula of celsius to farenheit = (9/5)+32  
// return (celsius*(9/5)+32);
// }

// console.log(convertToFarenheit(32));

// qns 3:
// function roadTripCost(length){
// 1L of petrol = runs 9km on ferrari
// cost of 1L of petrol = $2.20  
// return (length/9)*2.20;
// }

// console.log('Your roadtrip will cost $'+roadTripCost(90));

// qns 4:
// function IceCreamBuffet(trip) {
// 1 cup = 70ml
// 1 container = 400ml  
// return (trip*(70/400));
// }

// console.log('You will consume',IceCreamBuffet(5)+'ml','of containers of ice cream.');

// qns 5:
// function timeToTypeSonnets(hours){
// 1 hr = 60 mins
// typing speed = words per minute
//   return (17677/(hours*60));
// }

// console.log(timeToTypeSonnets(20));

// qns 6:
// function CostOfAircon(hours){
// an aircon uses 2kW of electricity
// electricity cost = $0.20 per kW-hr
//   return hours*2*0.20;
// }

// console.log(CostOfAircon(2));

// qns 7:
// function ScreenTime(days){
// average life expectancy = 82 years
//     return
// }


// Day 4 Boolean
// qns 1:

// function luckyEleven(matchGuess,totalRoll){
//     if(matchGuess || totalRoll == 11){
//         return "User wins";
//     } else {
//         return "User loses";
//     }
// }

// console.log(luckyEleven(false,21));

// console.log("Hello");

// function luckyEleven(first,second,guess) {
//   if (first == guess || second == guess || (first + second) == 11) 
//   {
//     return "User wins!";
//   } else 
//   {
//     return "User loses ;(";
//   }
// }

// console.log(luckyEleven(7,4,3));
// firstDice = Math.floor((Math.random() * 5) + 1 );
// secondDice = Math.floor((Math.random() * 5) + 1 );

// console.log("firstdice:" + firstDice);
// console.log("seconddice:" + secondDice);

// console.log(luckyEleven(firstDice,secondDice,5));


const noodle = ['laksa','wanton mee','mee sua'];
const rice = ['chicken rice','nasi briyani','curry rice'];


function categorizeFood(dish) {
  if (noodle.includes(dish)) {
    console.log("noodle");
  } else if (rice.includes(dish)) {
    console.log("rice");
  } else {
    console.log("don't know what the fuck is this dish");
  }
}

categorizeFood();

console.log("this is now tracked");

console.log("this is untracked")