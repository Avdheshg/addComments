

module.exports.date = function() {
    var options = {year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" };
    var today  = new Date();

    return today.toLocaleDateString("en-US", options);
}

















// Formatting the Date    Full method
// const allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// const date = new Date();

// const dayNum = date.getDay();
// const curDay = allDays[dayNum];

// const monthNum = date.getMonth();
// const curMonth = allMonths[monthNum];

// const dateNum = date.getDate();

// const currentHours = date.getHours();

// console.log(curDay + curMonth + dateNum + currentHours);


























