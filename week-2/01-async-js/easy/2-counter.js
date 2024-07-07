function Counter(input) {
    let count = input;
    function Countdown() {
        if (count > 0) {
            setTimeout(() => {
                console.log(count);
                count--;
                Countdown();
            }, 1000);
        } else {
            console.log("Countdown finished!");
        }
    }
    Countdown();
}


Counter(10);
