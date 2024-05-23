import express from 'express';
import { User} from '../models/User.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { validationResult,body } from 'express-validator';
const router= express.Router();
const JWT_SECRET="RahulisDan$"

//Create a User using POST:"/api/auth/createuser".Doesn't require Authentication
router.post('/createuser',[
    body('name','Enter valid Name').isLength({ min: 5 }),
    body('email',"Enter valid email").isEmail(),
    body('password','Enter at least 5 characters').isLength({ min: 5 })//Install express validator
],async(req,res)=>                             //Using Express Validator to prevent error throws on invalid entries.
{
   //If there are errors, return Bad request and the errors.
    const errors = validationResult(req);
   if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    // Check whether the user with the same email exists already

    try{
    let user= await User.findOne({email:req.body.email});
    
    if(user)
    {
        return res.status(400).json({error:"Sorry a user with this email already exists"})
    }
    //npm i bcryptjs to store passwords as hashes and adding salt upon it to improve security
    const salt= await bcrypt.genSalt(10);//Await pauses the control and waits for the promise to resolve.Without await below code is executed simultaneously
    const secPass= await bcrypt.hash(req.body.password,salt);  // Await is used as hash function returns a promise.
    //Create new User
     user= await User.create({
        name:req.body.name,
        password:secPass,
        email:req.body.email,

    })
    const data={
        user:{
            id:user.id
        }
    }
    //npm i jsonwebtoken
    //Creating JWT token to sign the user id with secret key
    const authtoken=jwt.sign(data,JWT_SECRET);

    res.json(user);
    }catch(error)
    {
        console.log(error.message);
        res.status(500).send("Some Error Occured");
    }
    })
    


export default router;