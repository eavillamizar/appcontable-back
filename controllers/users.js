const bcrypt = require("bcrypt");
const User = require('../models/user');
const jwt = require("jsonwebtoken");


exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
        const newUser = new User({
            username: req.body.name,
            email: req.body.email,
            password: hash,
        });
        
        newUser.save().then((result) => {
            res.status(201).json({ message:"Usuario creado"});
        }).catch((err) => {
            res.status(500).json({ error: err });
        });
    });

};

exports.login = (req,res) => {
    let userGet;
    User.findOne({email:req.body.email}).then((user) => {
        console.log(user);
        if (!user) {
            return res.status(401).json({ message: "Autenticacion Fallida"});
        }

        /*bcrypt.hash(req.body.password,10).then((result) => {
            console.log(result);
        });*/

        userGet = user;
        return bcrypt.compare(req.body.password, user.password);

    }).then((result) => {
        if (!result) {
            return res.status(401).json({ message: "Autenticacion Fallida"});
        }

        //res.status(200).json({ message: "Autenticacion Exitosa"});

        //Calcular el Token
        const token = jwt.sign({ email: userGet.email, userId: userGet._id }, "LlaveSecret_AppContable_2021", {expiresIn: "1h"}
        );
        //console.log(token);
        res.status(200).json({token: token, expiresIn: 3600 });
    })
    .catch((err) => {
        return res.status(401).json({message: "Autenticacion fallida"});
    });
    
 };