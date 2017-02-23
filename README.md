Fetch Holiday information of Japan from official CSV data of Cabinet Office, Government of Japan.

# Warning

This is joke library. Because there is no guarantee for continuity of the source data.

# Install

```sh
npm --save install norami/japan-holoday
```

# Usage

```js
var japanHoliday = require('japan-holiday')
japanHoliday.getHolidays()
    .then(function(result){
        console.log(result)
    })
/*
Output:
[ 
  { date: '2016-01-01', name: '元日' },
  { date: '2016-01-11', name: '成人の日' },
  { date: '2016-02-11', name: '建国記念の日' },
  { date: '2016-03-20', name: '春分の日' },
  { date: '2016-04-29', name: '昭和の日' },
  { date: '2016-05-03', name: '憲法記念日' },
  { date: '2016-05-04', name: 'みどりの日' },
  { date: '2016-05-05', name: 'こどもの日' },
  { date: '2016-07-18', name: '海の日' },
  { date: '2016-08-11', name: '山の日' },
  { date: '2016-09-19', name: '敬老の日' },
  { date: '2016-09-22', name: '秋分の日' },
  { date: '2016-10-10', name: '体育の日' },
  { date: '2016-11-03', name: '文化の日' },
  { date: '2016-11-23', name: '勤労感謝の日' },
  { date: '2016-12-23', name: '天皇誕生日' },
  { date: '2017-01-01', name: '元日' },
  { date: '2017-01-09', name: '成人の日' },
]
*/
```
