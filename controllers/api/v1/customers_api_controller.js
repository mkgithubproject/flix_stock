const Customer=require('../../../models/customer');
const Product=require("../../../models/product");
const Order=require("../../../models/order");
// API FOR CREATE A NEW CUSTOMER
module.exports.create=async function(req,res){
    //console.log(req.body);
    try{
        for(let dataField in req.body){// check all details of customer provided or not.
            if(req.body[dataField]==""){
                return res.status(422).json({
                    message: "Please provide all the details",
                });
            }
        }
        // check customer already created or not
        let customer=await Customer.findOne({email: req.body.email});
        if(customer){
            return res.status(422).json( {
                message: "Customer is already created"
            });
        }
        let createdCustomer=await Customer.create({"email":req.body.email,"phone":req.body.phone,"name":req.body.name});
        return res.status(201).json({
            message: "Customer created successfully.",
        });

    }catch(err){
        //console.log('********', err);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
    
}
//PI FOR FETCHING CUSTOMERS LIST
module.exports.customersList=async function(req,res){
    try{
        const customerList=await Customer.find({});
        return res.status(200).json({
            message: "Customers List",
            customer:customerList
        });

    }catch(err){
        //console.log('********', err);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
    
}
// API FOR CREATING AN ORDER
module.exports.createOrder=async function(req,res){
    try{
        
        const customer= await Customer.findById(req.body.customer);
        if(!customer){
            return res.status(422).json({
                message: "Customer is not found in our database",
            });
        }
        let products=[]
        let totalPrice=0;
        for(let product of req.body.productList){
            const findProduct=await Product.findById(product);
            if(findProduct){
                totalPrice+=findProduct.price;
                products.push(product);
            }
        }
        const order=await Order.create({"productList":products,"totalPrice":totalPrice,"paymentInfo.type":
        req.body.paymentInfo,"customer":req.body.customer});
        return res.status(201).json({
            message: "Order succesfully",
        });

    }catch(err){
        //console.log(err);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
    
}
//API FOR FETCHING CUSTOMER ORDER LIST
module.exports.ordersOfCustomer=async function(req,res){
    try{
      let order=await Order.find({"customer":req.query.customer_id}).populate('productList').populate('customer');
      //console.log(order);
      if(order.length==0){
        return res.status(422).json({
            message: "Orders not found",
        });
      }
      
      return res.status(200).json({
        message: "Orders list",
        data:order
    });
     
    }
    catch(err){
        //console.log(err);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
}