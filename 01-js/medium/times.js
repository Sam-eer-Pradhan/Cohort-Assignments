/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
const OneHund = () => {
    let val = 0;
    for (let i = 0; i < 100; i++) {
        val += 1;
    }
}
const OneHundT = () => {
    let val = 0;
    for (let i = 0; i < 100000; i++) {
        val += 1;
    }
}
const OneB = () => {
    let val = 0;
    for (let i = 0; i < 1000000000; i++) {
        val += 1;
    }
}
function calculateTime(fnToCall) {
    const currDate = new Date();
    const Start = currDate.getTime();
    fnToCall();
    const EndDate = new Date();
    const End = EndDate.getTime();
    const diff = End - Start;
    return `The Time taken for the function is ${diff} ms`;

}

const result = calculateTime(OneHund);
console.log(result);

