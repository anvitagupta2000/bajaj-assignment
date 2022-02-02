var fs = require('fs');

var i = 1;

fs.watch("file.txt", function (event, filename) {
    var EventId = "#" + i;
    var EventName = " Event: " + event;
    var FileName = " FileName: " + filename;
    var Time = " Time: " + new Date();
    var data = EventId.concat(EventName, FileName, Time, "\n");
    console.log(data);
    i++;
});

console.log("Now we are watching file.txt\n"); 