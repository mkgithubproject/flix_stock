const Product=require('../../../models/product');
// API FOR CREATING PRODUCTS
module.exports.create=async function(req,res){
    //console.log(req.body);
    try{
        for(let dataField in req.body){// check all details of product provided or not.
            if(req.body[dataField]==""){
                return res.status(422).json({
                    message: "Please provide all the details of product",
                });
            }
        }
        
        let createdProduct=await Product.create({"productCategory":req.body.productCategory,
        "productInfo":req.body.productCategory,"price":req.body.price,"quantityAvailable":req.body.quantityAvailable
        });
        return res.status(201).json({
            message: "Product created successfully.",
        });

    }catch(err){
        //console.log('********', err);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
    
}
//API FOR UPDATE PRODUCT PRICE
module.exports.updatePrice=async function(req,res){
    try{
        
        const product= await Product.findById(req.query.product_id);
        //console.log(product);
        if(!product){
            return res.status(404).json({
                message: "Product not found.",
            });
        }
        
        product.price=req.body.price;
        product.save();
        return res.status(201).json({
            message: "Product price updated successfully.",
        });
    }catch(err){
        //console.log('********', err);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
   
}