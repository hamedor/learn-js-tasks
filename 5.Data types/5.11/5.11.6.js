function getSecondsToday() {
    let current = new Date();

    let today = new Date(current.getFullYear(), current.getMonth(), current.getDate());

    let difference = current - today;
    return Math.round(difference / 1000);
}

console.log(getSecondsToday());