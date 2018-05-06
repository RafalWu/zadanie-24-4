const os = require('os');
const formatDate = require('./index');

// os zawiera uptime, która zwraca aktualny czas pracy systemu w sekundach
const uptime = formatDate(os.uptime());

console.log(`Current uptime is ${uptime}`);