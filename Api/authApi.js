const express = require('express');
const bycrpt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require('./../models/userschema')

router.post('/register', async(req, res)=>{
    const user = User(req.body);
    const uniqueuser = await User.findOne({ email: req.body.email });

    if (uniqueuser) {
        return res.status(400).send({ message: "email already in use" });
    } else {
        const salt = await bycrpt.genSalt(10);
        user.password = await bycrpt.hash(user.password, salt);
        await user.save();
        res.send(user);
    }
});
/************** */
router.post('/login', async(req,res)=>{
    const user = await User.findOne({email: req.body.email});
    const ValidEmailuser = user ? user.email : undefined;
    if (ValidEmailuser ) {
            const validpasse = await bycrpt.compare(req.body.password,user.password);
            if (!validpasse) {
                return res.status(401).send({ message: "wrong email or password" }); // verification validité password user//
            } else {
                let token = jwt.sign({
                    data: user 
                },
                "secret");
                res.send({ message: token, role:'user' });
            }   
    } else {
     return res.status(401).send({ message: "wrong email or password" });   
    }
});



module.exports = router;
