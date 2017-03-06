
/*
* yield async 
*/

var Koa = require("koa");
var app = new Koa();

// middleware 1
app.use(function *(next){
	this.body = "middleware1 top\n" ;
	yield next ;
	this.body += "middleware1 bottom\n" ;
});

// middleware 2
app.use(function *(next){
	this.body += "middleware2 top\n" ;
	yield next ;
	this.body += "middleware2 bottom\n";
});

// middleware 3
app.use(function *(){
	this.body += "middleware3\n" ;
});

app.listen(3000);
console.log("Koa server is running at port 3000");