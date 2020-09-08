const express = require('express');
const router = express.Router();
const Sujet = require('./../models/sujetschema');


router.post('/addsujet/:id', async(req,res)=>{
    const sujet = Sujet(req.body);
    await sujet.save();
    await Sujet.findByIdAndUpdate(sujet._id, {userid: req.params.id})
    res.send(sujet);
})
router.get('/getsujet/:id', async(req,res)=>{
    const sujet = await Sujet.find({userid: req.params.id});
    res.send(sujet);
})
router.get('/getallsujet', async(req,res)=>{
    const sujet = await Sujet.find();
    res.send(sujet);
})
router.get('/getsujetbyid/:id', async(req,res)=>{
    const sujet = await Sujet.findById(req.params.id);
    res.send(sujet);
});
router.get('/oui/:user/:id', async(req, res)=>{
    const sujet = await Sujet.findById(req.params.id);
    // const user = await Sujet.findOne({voteid: req.params.user})
    // if (user) {
    //     res.send('invalid vote')
    // } else {
        const sujetup = await Sujet.findByIdAndUpdate(sujet._id, {oui:sujet.oui+1, voteid: req.params.user});
        res.send(sujetup)
    // }
})
router.get('/no/:user/:id', async(req, res)=>{
    const sujet = await Sujet.findById(req.params.id);
    const user = await Sujet.findOne({voteid: req.params.user})
    // if (user) {
    //     res.send('invalid vote')
    // } else {
        const sujetup = await Sujet.findByIdAndUpdate(sujet._id, {no:sujet.oui+1, voteid: req.params.user});
        res.send(sujetup)
    // }
})


module.exports = router;
