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