let Finances = [
  ["Jan-2010", 867884],
  ["Feb-2010", 984655],
  ["Mar-2010", 322013],
  ["Apr-2010", -69417],
  ["May-2010", 310503],
  ["Jun-2010", 522857],
  ["Jul-2010", 1033096],
  ["Aug-2010", 604885],
  ["Sep-2010", -216386],
  ["Oct-2010", 477532],
  ["Nov-2010", 893810],
  ["Dec-2010", -80353],
  ["Jan-2011", 779806],
  ["Feb-2011", -335203],
  ["Mar-2011", 697845],
  ["Apr-2011", 793163],
  ["May-2011", 485070],
  ["Jun-2011", 584122],
  ["Jul-2011", 62729],
  ["Aug-2011", 668179],
  ["Sep-2011", 899906],
  ["Oct-2011", 834719],
  ["Nov-2011", 132003],
  ["Dec-2011", 309978],
  ["Jan-2012", -755566],
  ["Feb-2012", 1170593],
  ["Mar-2012", 252788],
  ["Apr-2012", 1151518],
  ["May-2012", 817256],
  ["Jun-2012", 570757],
  ["Jul-2012", 506702],
  ["Aug-2012", -1022534],
  ["Sep-2012", 475062],
  ["Oct-2012", 779976],
  ["Nov-2012", 144175],
  ["Dec-2012", 542494],
  ["Jan-2013", 359333],
  ["Feb-2013", 321469],
  ["Mar-2013", 67780],
  ["Apr-2013", 471435],
  ["May-2013", 565603],
  ["Jun-2013", 872480],
  ["Jul-2013", 789480],
  ["Aug-2013", 999942],
  ["Sep-2013", -1196225],
  ["Oct-2013", 268997],
  ["Nov-2013", -687986],
  ["Dec-2013", 1150461],
  ["Jan-2014", 682458],
  ["Feb-2014", 617856],
  ["Mar-2014", 824098],
  ["Apr-2014", 581943],
  ["May-2014", 132864],
  ["Jun-2014", 448062],
  ["Jul-2014", 689161],
  ["Aug-2014", 800701],
  ["Sep-2014", 1166643],
  ["Oct-2014", 947333],
  ["Nov-2014", 578668],
  ["Dec-2014", 988505],
  ["Jan-2015", 1139715],
  ["Feb-2015", 1029471],
  ["Mar-2015", 687533],
  ["Apr-2015", -524626],
  ["May-2015", 158620],
  ["Jun-2015", 87795],
  ["Jul-2015", 423389],
  ["Aug-2015", 840723],
  ["Sep-2015", 568529],
  ["Oct-2015", 332067],
  ["Nov-2015", 989499],
  ["Dec-2015", 778237],
  ["Jan-2016", 650000],
  ["Feb-2016", -1100387],
  ["Mar-2016", -174946],
  ["Apr-2016", 757143],
  ["May-2016", 445709],
  ["Jun-2016", 712961],
  ["Jul-2016", -1163797],
  ["Aug-2016", 569899],
  ["Sep-2016", 768450],
  ["Oct-2016", 102685],
  ["Nov-2016", 795914],
  ["Dec-2016", 60988],
  ["Jan-2017", 138230],
  ["Feb-2017", 671099],
];

//Display finance table for ref
//console.table(Finances);

// format number to British pounds
let poundsGB = Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

// Display total number of months/values in array
const totalMonths = Finances.length;
console.log("Total months:", totalMonths, "months");
document.getElementById("totalMonths").innerHTML = totalMonths; // You will see these throughout its just a link to the html file so it can be displayed there

//Calculate net profit in array
let netProfit = 0;
for (let i = 0; i < Finances.length; i++) {
  netProfit = netProfit + Finances[i][1];
  // We could also do netProfit =+ finances[i][1] (sum of finances second element in array)
}
console.log("Net profit is:", "£", netProfit);
document.getElementById("netProfit").innerHTML = poundsGB.format(netProfit); // we use poundsGB.format() to add the £ currency, we could also use this in line 110 instead of "£"

// The average change in profit and losses over the entire period
let totalChange = 0;
for (let i = 1; i < Finances.length; i++) {
  totalChange += Finances[i][1] - Finances[i - 1][1]; // Finances [i][1] targets the second element in second array because ( i = 1) then finances [i-1][1] targets the second element in the first array [i-1]. Then we do an addition of total change in array by +=
}

let averageChange = totalChange / (Finances.length - 1); //after we have the totalChange we divide by the total array amount -1 since we started at index 1 (i = 1)
averageChange = averageChange.toFixed(2); // .toFixed changes the value for two decimal places adds currency with £
console.log("Average change in profits/loss:", "£", averageChange);
document.getElementById("averageChange").innerHTML =
  poundsGB.format(averageChange);

// Greatest increase in profits
let maxProfit = -Infinity; // Create a variable to keep track of max profit, -Infinity sets to max min value in JS and it will help define greatest increase
for (let i = 1; i < Finances.length; i++) {
  //Looping through finances to compare from previous array
  let profit = Finances[i][1] - Finances[i - 1][1];
  if (profit > maxProfit) {
    maxProfit = profit; // Profit will always be greater than maxProfit, therefore we will get a value for first profit, as iterations are executed again it will be updated with greatest profit and displayed
    maxProfitMonth = Finances[i][0]; //displays the month of the maxProfit
  }
}
console.log(
  "Greatest increase in profits:",
  "£",
  maxProfit,
  "in",
  maxProfitMonth
);
document.getElementById("maxProfit").innerHTML =
  poundsGB.format(maxProfit) + " in " + maxProfitMonth;

// Greatest decrease in profits
let maxLoss = Infinity; // Similar to greatest increase, Initialize but with highest positive value in JS.
for (let i = 1; i < Finances.length; i++) {
  let loss = Finances[i][1] - Finances[i - 1][1];
  if (maxLoss > loss) {
    maxLoss = loss;
    // maxLoss will always be greater than loss, therefore we will get a value for first loss, as iterations are executed again it will be updated with greatest loss and displayed
    maxLossMonth = Finances[i][0]; //displays the month of the maxLoss
  }
}
console.log("Greatest decrease in losses:", "£", maxLoss, "in", maxLossMonth);
document.getElementById("maxLoss").innerHTML =
  poundsGB.format(maxLoss) + " in " + maxLossMonth;
