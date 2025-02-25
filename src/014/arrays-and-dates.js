let now = new Date()
now.getYear()
now.getFullYear()
now.getMonth()
now.getDay()
now.getDate()
let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
monthNames
monthNames[0]
monthNames[now.getMonth()]
let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
weekDays[now.getDay()]
monthNames.length
weekDays.length
for(let index = 0; index < weekDays.length; index++) {
console.log(weekDays[index]);
}