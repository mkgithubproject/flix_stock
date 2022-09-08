# flix_stock


## Features
- Api to create new Customer 
- Api to create new Product
- API to update Product Price
- Api to fetch Customers list
- Api to fetch specific Customer Orders list
- Api to fetch customer Details with maximum Orders in an year
- Api to create an Order of an customer


## Tech Stack
- Node Js
- Express Js
- MongoDB


## Routes
- POST - /api/v1/customers/create  (Api to create new Customer )
- POST -  /api/v1/products/create  (Api to create new Product)
- PATCH -  /api/v1/products/updatePrice?product_id=6318c64a5ef3e5e8f88254ea (API to update Product Price)
- GET -  /api/v1/customers/customersList (Api to fetch Customers list)
- GET -  /api/v1/customers/ordersOfCustomer?customer_id=63187e0b9ab0f61b56e5abeb (Api to fetch specific Customer Orders list)
- GET  - /api/v1/customers/custDetailsMaxOrdersPerYear (Api to fetch customer Details with maximum Orders in an year)
-POST - /api/v1/customers/createOrder (Api to create an Order of an customer)


## Demo 
- POST - /api/v1/customers/create  (Api to create new Customer ) <br>
          {
            "email":"gangwar2349@gmail.com",
            "phone":"9720456738",
            "name":"mk"
          }
 
- POST -  /api/v1/products/create  (Api to create new Product) <br>
          {
            "productCategory":"TV",
            "productInfo":"LG TV 72 Inches full HD",
            "price":11200,
            "quantityAvailable":12
            }
            
- POST - /api/v1/customers/createOrder (Api to create an Order of an customer) <br>
          {
            "productList":["6318c61c5ef3e5e8f88254e8","6318c64a5ef3e5e8f88254ea"],
            "paymentInfo":"COD",
            "customer":"63187e0b9ab0f61b56e5abeb"
           }
 
## How to run project
 npm install <br>
 node index.js
