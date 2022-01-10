export function getTempDay(temp) {
    return Math.round(temp) + "°";
}

export function getDate(item) {
    return item.day[2] + '/' + item.day[1] + '/' + item.day[0]
}