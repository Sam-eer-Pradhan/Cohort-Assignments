function Counter(input) {
    let count = input;
    const timer = setInterval(() => {
        console.log(`${count}`);
        count--;
        if (count === 0) {
            clearInterval(timer); // Stop the interval when count reaches less than 0
            console.log('Countdown completed');
        }
    }, 1000);

}

Counter(10);

//forward counter
// function Counter(input) {
//     let count = 0;
//     const timer = setInterval(() => {
//         count++;
//         console.log(`${count}`);
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(timer);
//         console.log("Timeout!!");
//     }, input * 1000);


// }

// Counter(10);