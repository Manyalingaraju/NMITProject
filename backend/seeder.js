const mongoose=require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/user");
const product=require("./data/products");

dotenv.config();

// connect to the mongodb
mongoose.connect(process.env.MONGO_URI);

//function to seed data 
const seedData = async () =>{
    try {

        await Product.deleteMany();
        await User.deleteMany();
        // create a default admin user 
        const createdUser = await User.create({
            name: "Admin User",
            email: "admin@example.com",
            password: "123456", // ensure you hash passwords if required by your schema
            isAdmin: true,
        });
        // Assign the default user ID to each product 
        const userID = createdUser._id;
        const sampleProducts = product.map((product)=> {
            return{...product,user: userID}
        });
        //Insert the products into the database 
        await Product.insertMany(sampleProducts);

        console.log("Product data seeded successfully");
        process.exit();
           
    } catch (error) {
        console.error("Error seeding the data :",error);
        process.exit(1);
        
        
    }
};
seedData();