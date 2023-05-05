const { getAllEmployees, getEmployee, insertEmployee, updateEmployee, deleteEmployee } = require('../data-access');

exports.index = (req, res, next) => {
    res.render("employees/index", { pageTitle: "Employees View", empList: getAllEmployees() });
}

exports.details = (req, res, next) => {
    var id = req.params.empid;
    res.render("employees/details", { pageTitle: "Employee Details View", employee: getEmployee(id) });
}

exports.create_get = (req, res, next) => {
    res.render("employees/create", { pageTitle: "Create Employee View" });
}

exports.create_post = (req, res, next) => {
    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    if (insertEmployee(employee)) {
        res.redirect('/employees');
    } else {
        res.render("employees/create", { pageTitle: "Create Employee View" });
    }
}

exports.edit_get = (req, res, next) => {
    var id = req.params.empid;
    res.render("employees/edit", { pageTitle: "Edit Employee View", employee: getEmployee(id) });
}

exports.edit_post = (req, res, next) => {
    var id = req.params.empid;

    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    if (updateEmployee(id, employee)) {
        res.redirect('/employees');
    } else {
        res.render("employees/edit", { pageTitle: "Edit Employee View", employee: getEmployee(id) });
    }
}

exports.delete_get = (req, res, next) => {
    var id = req.params.empid;
    res.render("employees/delete", { pageTitle: "Employee Delete View", employee: getEmployee(id) });
}

exports.delete_post = (req, res, next) => {
    var id = req.params.empid;

    if (deleteEmployee(id)) {
        res.redirect('/employees');
    } else {
        res.render("employees/delete", { pageTitle: "Employee Delete View", employee: getEmployee(id) });
    }
}