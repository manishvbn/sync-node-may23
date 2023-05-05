exports.isAuthenticated = function (req, res, next) {
    // Logic to check user acthentication Status
    // res.status(401).send("Unauthorized Access!");

    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/account');
    }
}

exports.loginGet = function (req, res, next) {
    res.render("account/login", { pageTitle: "Login View", message: req.flash('loginMessage') });
}

exports.loginPost = function (passport) {
    // Logic to Authenticate the user against the passport strategy and redirect
    return passport.authenticate('local-login', {
        successRedirect: '/employees',
        failureRedirect: '/account'
    });
}

// ---------------------------------------------------------
const jwt = require('jsonwebtoken');
const key = process.env.tokenKey;

exports.createToken = function (req, res, next) {
    var user = {
        username: req.body.username,
        password: req.body.password
    };

    if (user.username !== "manishs") {
        res.status(403).json({
            success: false,
            message: "Authentication Failed, User not Found..."
        });
    } else if (user.password !== "manishs") {
        res.status(403).json({
            success: false,
            message: "Authentication Failed, Wrong Password..."
        });
    } else {
        var token = jwt.sign({ username: user.username }, key, { expiresIn: 3600 });
        res.status(200).json({
            success: true,
            message: "Authentication Success...",
            token: token
        });
    }
}

exports.validateToken = function (req, res, next) {
    var token = req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, key, function (err, decoded) {
            if (err) {
                res.status(403).json({
                    success: false,
                    message: "Invalid Token Found"
                });
            } else {
                req.decoded = decoded;
                next();
            }
        })
    } else {
        res.status(403).json({
            success: false,
            message: "No Token Found"
        });
    }
}