var japanHoliday = require('./');

japanHoliday.getHolidays()
    .then(function(result){
        console.log(result);
    })
    .catch(function(err) {
        console.log(err);
    })