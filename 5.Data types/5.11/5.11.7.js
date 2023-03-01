function getSecondsToTommorow() {
    let current = new Date();

    let tommorow = new Date(current.getFullYear(), current.getMonth(), current.getDate());

    let difference = tommorow - current;
    return Math.round(difference / 1000);
}

console.log(getSecondsToTommorow());