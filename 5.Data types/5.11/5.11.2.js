function getWeekDay () {
    let options = { weekday: 'short'};
    return new Intl.DateTimeFormat('ru-RU', options).format(date)
}
let date = new Date(2012, 0, 3);

console.log(getWeekDay(date));