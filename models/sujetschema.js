const mongoose = require('mongoose');

const Sujet = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    oui: { type: Number, default:0},
    no: { type: Number, default:0},

    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    voteid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    
});

module.exports = mongoose.model('Sujet', Sujet);