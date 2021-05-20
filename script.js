const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    // console.log(counters); 
    counter.innerHTML = 0;

const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target"); //1400

    const startingCount = Number(counter.innerHTML); //0

    const incr = targetCount / 100;

    if(startingCount < targetCount) {
        counter.innerHTML = `${Math.round(startingCount + incr)}`;
        setTimeout(updateCounter , 10 )
    } 
    else {
        counter.innerHTML = targetCount;
    }
}

    updateCounter();
})