const express = require('express');
const empApiCtrl = require('../controllers/employees-api-controller');

const router = express.Router();

// GET - /api/employees (Get All Employees)
router.get("/", empApiCtrl.getAll);

// GET - /api/employees/jaskdhkjasdh345 (Get Employee by Id)
router.get("/:rid", empApiCtrl.get);

// POST - /api/employees + Data in Body (Create Employee)
router.post("/", empApiCtrl.create);

// PUT - /api/employees/jaskdhkjasdh345 + Data in Body (Update Employee by Id)
router.put("/:rid", empApiCtrl.update);

// DELETE - /api/employees/jaskdhkjasdh345 (Delete Employee by Id)
router.delete("/:rid", empApiCtrl.delete);

module.exports = router;