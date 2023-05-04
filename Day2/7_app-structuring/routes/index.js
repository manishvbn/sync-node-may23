const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("index", { pageTitle: "Index View" });
});

router.get("/about", (req, res, next) => {
    res.render("about", { pageTitle: "About View" });
});

router.get("/contact", (req, res, next) => {
    res.render("contact", { pageTitle: "Contact View" });
});

module.exports = router;