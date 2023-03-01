function getDateAgo(date, days) {
    let copy = new Date(date);

    copy.setDate(date.getDate() - days);
    return copy.getDate();
}

let date = new Date(2023, 1, 2);

console.log(getDateAgo(date, 3));