//Using Var 

const browserVersion = "Chrome";

function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        var browserVersion = "Firefox";
    }

    console.log("Inside function:", browserVersion);
}

getBrowserVersion();
console.log("Outside function:", browserVersion);

//Using Let 

// const browserVersion = "Chrome";

// function getBrowserVersion() {
//     if (browserVersion === "Chrome") {
//         let browserVersion = "Firefox";
//     }

//     console.log("Inside function:", browserVersion);
// }

// getBrowserVersion();
// console.log("Outside function:", browserVersion);