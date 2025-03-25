
const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.signup = (req , res) =>     {


    const data = {
        firstname : req.body.firstname ,
        lastname : req.body.lastname ,
        email : req.body.email ,
        password : bcrypt.hashSync(req.body.password , 10) ,
        birthdate : req.body.birthdate 

        
    }
    const _user = new User(data);
    _user.save().then(
        (createdUser) => {
            res.status(200).json({message : 'user created successfully ...'})
        }
    ).catch(
        (err) => {
            res.status(400).json({message : 'Probleme while creating user ...'})
        }
    )
} 


exports.signin = async (req , res) => {
    const {email , password} = req.body;
    const user = await User.findOne({email : email})
    if(!user){
        return res.status(400).json({message : 'Email Invalid ...'})
    }
    bcrypt.compare(password , user.password).then(
        (isMatch) => {
            if(isMatch == false ) {
                return res.status(400).json({message : 'Password Invalid ...'})
            }else{
                const token = jwt.sign(
                    {data : {id : user._id , role : user.role}} ,
                    process.env.CLE ,
                    {expiresIn : '1h' }
                )
                return res.status(200).json(
                    { 
                        message : "success ..." ,
                        token : token ,
                        user : user

                    })

            }
        }
    )
}