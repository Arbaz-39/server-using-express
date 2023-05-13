const express =require("express");

const app=express();
app.get("/",function(request,response){
    response.send("<h1>Hello World!</h1>");
});

app.get("/contact",function(request,response){
    response.send("contact me at arbazanish786@gmail.com");
});

app.get("/about",function(request,response){
    response.send("Hey I am Md. Arbaaz Alam and I am a backend developer");
});


app.listen(3000,function(){
    console.log("Server started on port 3000");
});