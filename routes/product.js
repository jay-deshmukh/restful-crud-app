var express =   require("express"),
    router  =   express.Router(),
    Product =   require("../models/product");


//new product form
router.get("/product/new",function (req,res) {
    res.render("./product/new");
});

//displays all products
router.get("/product",function(req,res) {
    Product.find({},function(err,allProducts) {
        if (err) {
            console.log(err);
        } else {
            res.render("./product/products", {products:allProducts});        
        }
    });
});

//adds new product
router.post("/product",function(req,res) {
    Product.create(req.body.product ,function(err,product){
        if (err) {
            console.log(err);
        } else {
            res.redirect("/product");
        }
    });
});

//edits existing product
router.get("/product/:id/edit",function(req,res) {
    Product.findById(req.params.id,function(err,foundProduct) {
        if (err) {
            console.log(err);
        } else {
            res.render("./product/edit", {product:foundProduct});        
        }
    });
});

//updates existing product
router.put("/product/:id",function(req,res) {
    Product.findByIdAndUpdate(req.params.id,req.body.product,function(err,updatedOrder) {
        if (err) {
            console.log(err);
        } else {
            console.log(updatedOrder);
            res.redirect("/product");
        }
    });
});
 
//removes existing product
router.delete("/product/:id",function(req,res) {
    Product.findById(req.params.id,function(err,product) {
        if (err) {
            console.log(err);
        } else {
            product.remove();
            res.redirect("/product");
        }
    });
});

module.exports=router;