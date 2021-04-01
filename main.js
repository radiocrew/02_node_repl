// var http = require('http');
// var fs = require('fs');
// var app = http.createServer(function(request, response) {
//     var url = request.url;
//     if (request.url == '/'){
//         url = '/index.html';
//     }
//     if (request.url == '/favicon.ico'){
//         //return response.writeHead(404);
//         response.writeHead(404);
//         response.end();
//         return;

//     }
//     response.writeHead(200);
//     console.log(__dirname + url);
//     response.end(fs.readFileSync(__dirname + url));
// });

// app.listen(3000);

var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {

    //https://stackoverflow.com/questions/48196706/new-url-whatwg-url-api
    var baseURL = 'http://' + request.headers.host + '/';
    var myURL = new URL(request.url, baseURL);
    
    //http://localhost:3000/?id=css
    var id = myURL.searchParams.get('id');
    console.log('id', id);
    console.log('myURL.search', myURL.search);

    //usesage: https://02noderepl-1.ay8dtiger.repl.co/?id=css

    console.log(id);

    console.log(99);
    //console.log(request.headers.host);
    // console.log(2);



    if (request.url == '/'){

        console.log(0);
        url = '/index.html';
    }
    if (request.url == '/favicon.ico'){

        console.log(1);
        //return response.writeHead(404);
        response.writeHead(404);
        response.end();
        return;

    }

    console.log(2);
    response.writeHead(200);

    //console.log(url);
    //response.end(fs.readFileSync(__dirname + url));
    response.end(0);
});

app.listen(3000);