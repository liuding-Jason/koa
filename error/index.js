
/*
* koa error event 
*/


var Koa = require("koa");
var app = new Koa() ;

app.use(function *(next){
	console.log('middleware 1 top') ;
	yield next ;
	console.log('middleware 1 bottom');
});

// error info : a is not defined
app.use(function *(next){
	console.log(a);
	yield next ;
	console.log("middleware 2 bottom");
});

app.on("error" , function(err){
	console.log('server error' , err);
})

app.listen(3000 , function(){

});
console.log("Koa server is running at port 3000!");