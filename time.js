var moment = require('moment');

let localTime = new Date().toLocaleString("id-ID", {timeZone: "Asia/Jakarta"})
let isoString = new Date(localTime.replace(/\//g, "-") + " GMT+0700").toISOString();
console.log(isoString)

