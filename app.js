var express         =   require("express"),
    app             =   express(),
    mongoose        =   require("mongoose"),
    bodyParser      =   require("body-parser"),
    methodOverride  =   require("method-override");

    
var indexRoutes   =   require("./routes/index"),
    productRoutes =   require("./routes/product");

mongoose.connect("mongodb://localhost/crud-app");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//using routes
app.use(indexRoutes);
app.use(productRoutes);

//server
app.listen(process.env.PORT,process.env.IP,function() {
   console.log("Server Running"); 
});