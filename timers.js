// Timers Exercise - Web Fundamentals
// USF Software Engineering Bootcamp - Cohort August 2022

// Exercise 1 - countDown

function countDown(seconds) {
  let timer = setInterval(function () {
    seconds--;
    if (seconds <= 0) {
      clearInterval(timer);
      console.log("DONE");
    } else {
      console.log(seconds);
    }
  }, 1000);
}


// Exercise 2 - randomGame

function randomGame () {
    let count = 0;
    let num;
    let timer = setInterval(function () {
        num = Math.random();
        count++;
        if (num > .75) {
            clearInterval(timer);
            console.log(`We rolled the numbers ${count} time(s) before reaching .75`);
        }
    }, 1000)
}