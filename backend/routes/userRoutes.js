const express =require("express");
const User=require("../models/user")
 const jwt=require("jsonwebtoken");
 const {protect}=require("../middleware/authMiddleware");
  const router=express.Router(); 
  //@route Post/api/users/register 
  // //@desc register a new user 
  // //@access public 
  router.post("/register",async(req,res)=>{ const {name, email,password}=req.body;
   try{
    //registration logic 
   let user =await User.findOne({email});
   if(user) return res.status(400).json({message:"User already exists"});
   user=new User({name,email,password});
   await user.save();

  //create jwt payload
  const payload={user:{id:user._id,role:user.role}};
  //sign and return the tocken along with user data 
  jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"40h"},(err,token)=>{
    if(err) throw err;

    //send the user and token in response
    res.status(201).json({
        user:{
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
        },
        token,
    })
  });
   }
catch(error)
{ console.log(error); 
    res.status(500).send("server error"); 
} }); 
//@route post /api/user/login
//@description Authemticate user
//@access public 
router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        //fin d the user by email
        let user=await User.findOne({email});
        if(!user) return res.status(400).json({message:"Invalid credential"});
        const isMatch=await user.matchPassword(password);
            if(!isMatch) return res.status(400).json({message:"Invalid credentials"});
            const payload={user:{id:user._id,role:user.role}};
  //sign and return the tocken along with user data 
  jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"40h"},(err,token)=>{
    if(err) throw err;

    //send the user and token in response
    res.json({
        user:{
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
        },
        token,
    })
  });
   
        
    } catch (error) {
        console.error(error);
        res.status(500).send("server error");
        
    }
});
//@route GET/api/users/profile
//@desc GET logged-in user's profile(Protected route)
//@access private
router.get("/profile",protect,async(req,res)=>{
    res.json(req.user);
})
module.exports=router; 
