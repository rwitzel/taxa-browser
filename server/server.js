// determine directory
var dir;

if (process.argv.length < 3) {
    dir =  process.cwd();
    console.log("no directory specified. using default directory. EXAMPLE: "
            + process.argv[0] +  process.argv[1] + "/home/rwitzel/taxa-browser");
}
else {
    dir = process.argv[2];
    var fs = require('fs');
    if (!fs.existsSync(dir)) {
        console.log("directory does not exist: " + dir);
        return 1;
    }
}

var port = 8081;

console.log("serving files from " + dir + " on port " + port);

// create and run web server for static webpages
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(dir)).listen(port);
