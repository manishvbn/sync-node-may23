const express = require('express');
const { getAllEmployees } = require('../data-access');

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("employees", { pageTitle: "Employees View", empList: getAllEmployees() });
});

module.exports = router;