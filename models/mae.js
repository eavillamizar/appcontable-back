const mongoose = require('mongoose');

const maeSchema = mongoose.Schema({
    //id: {type: String, require:true},
    codigo: {type: String},
    nombre: {type: String, require:true},
    //author: {type: mongoose.Schema.Types.ObjectId, ref: "User", require:true},
});

module.exports = mongoose.model("Mae", maeSchema);