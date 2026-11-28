// Odd or Even 


function isOddOrEven(number) {
  if (number % 2 === 0) {
      return "Even Number"
  } else {
      return "Odd Number"
  }
}

let num = 99

console.log(isOddOrEven(num))


//Categorize a number as positive, negative, or zero

function catg(num) {
if (num>0)  {
 return "Postive Number" 
}

 else if(num<0) {
 return "Negative number"
}
else {
  return "Neutral number"
}
}
let number= -1
console.log(catg(number))


// Learn if-else and switch case

function launchBrowser(browserName ) {
  if (browserName==="Chrome") {
    console.log("Launch chrome broweser");
  }
  else {
    console.log("Not a chrome browser");
  }
}
function runTests(testType) {
  switch (testType) {
    case "smoke":
    console.log("Smoke test in progress");
    break;
    case "sanity":
    console.log("Sanity test in progress");
    break;
    case "regression":
    console.log("Regresssion test in progress");
    break;

    default:
      console.log("Smoke test in progress");
      break;
  }
}
launchBrowser("Chrome");
runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("default");
