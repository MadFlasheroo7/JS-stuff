var counter = document.querySelector(".counter");
var randomText = document.querySelector(".text");

var count = 0;

// this takes 2 things one is method which u wanna execute 2nd interval
setInterval(() => {
    // if (count < 1000) {
    //     count ++;
    //     counter.innerText = count;
    // }
    // for (let c = 0; c < 69; c++) {
    //     console.log(c);
    //     counter.innerText = c;
    // }
}, 1);
setTimeout(() => {
    // if (count == 1000) {
        randomText.innerText = "Random Text Changed";
    // }
},5000);