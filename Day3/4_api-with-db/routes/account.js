const express = require('express');
const accCtrl = require('../controllers/account-controller');

const router = express.Router();

module.exports = function (passport) {
    router.get("/", function (req, res, next) {
        res.redirect('account/login');
    });

    router.get("/login", accCtrl.loginGet);

    router.post("/login", accCtrl.loginPost(passport));

    return router;
};