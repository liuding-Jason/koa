
/*
* The simple Hello World 
*/

var koa = require("koa") ;
var app = new koa() ;
var port = process.argv.slice(2)[0] || 3000 ;

// function *(){} generator fun
app.use(function *(){
	this.body = "<h1>Hello Koa!</h1>"
});

app.listen(port);
console.log(`Koa server is running at port ${port}`);