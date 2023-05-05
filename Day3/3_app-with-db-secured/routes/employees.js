const express = require('express');
const empCtrl = require('../controllers/employees-controller');
const { isAuthenticated } = require('../controllers/account-controller');

const router = express.Router();

router.use(isAuthenticated);

router.get("/", empCtrl.index);

router.get("/details/:rid", empCtrl.details);

router.get("/create", empCtrl.create_get);

router.post("/create", empCtrl.create_post);

router.get("/edit/:rid", empCtrl.edit_get);

router.post("/edit/:rid", empCtrl.edit_post);

router.get("/delete/:rid", empCtrl.delete_get);

router.post("/delete/:rid", empCtrl.delete_post);

module.exports = router;