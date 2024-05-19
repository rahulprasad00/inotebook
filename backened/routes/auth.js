import express from 'express';
import { User} from '../models/User.js';
import { validationResult,body } from 'express-validator';
const router= express.Router();

//Create a User using POST:"/api/auth/".Doesn't require Authentication
router.post('/',[
    body('name','Enter valid Name').isLength({ min: 5 }),
    body('email',"Enter valid email").isEmail(),
    body('password','Enter at least 5 characters').isLength({ min: 5 })//Install express validator
],(req,res)=>                             //Using Express Validator to prevent error throws on invalid entries.
{
   const errors = validationResult(req);
   if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,

    }).then(user=>res.json(user))
    .catch(err=>{console.log(err)
        res.json({error:"Email already exists",message:err.message})
    })
    
})

export default router;