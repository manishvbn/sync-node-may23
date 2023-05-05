const { getAllEmployees, getEmployee, insertEmployee, updateEmployee, deleteEmployee } = require('../data-access');

exports.index = (req, res, next) => {
    getAllEmployees().then(result => {
        res.render("employees/index", { pageTitle: "Employees View", empList: result, message: "" });
    }, eMsg => {
        res.render("employees/index", { pageTitle: "Employees View", empList: null, message: eMsg });
    });
}

exports.details = (req, res, next) => {
    var id = req.params.empid;

    getEmployee(id).then(result => {
        res.render("employees/details", { pageTitle: "Employee Details View", employee: result, message: "" });
    }, eMsg => {
        res.render("employees/details", { pageTitle: "Employee Details View", employee: null, message: eMsg });
    });
}

exports.create_get = (req, res, next) => {
    res.render("employees/create", { pageTitle: "Create Employee View" });
}

exports.create_post = (req, res, next) => {
    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    insertEmployee(employee).then(result => {
        res.redirect('/employees');
    }, eMsg => {
        res.render("employees/create", { pageTitle: "Create Employee View", employee: result, message: eMsg });
    });
}

exports.edit_get = (req, res, next) => {
    var id = req.params.empid;
    getEmployee(id).then(result => {
        res.render("employees/edit", { pageTitle: "Edit Employee View", employee: result, message: "" });
    }, eMsg => {
        res.render("employees/edit", { pageTitle: "Edit Employee View", employee: null, message: eMsg });
    });
}

exports.edit_post = (req, res, next) => {
    var id = req.params.empid;

    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    updateEmployee(id, employee).then(result => {
        res.redirect('/employees');
    }, eMsg => {
        res.render("employees/edit", { pageTitle: "Edit Employee View", employee: employee, message: eMsg });
    });
}

exports.delete_get = (req, res, next) => {
    var id = req.params.empid;

    getEmployee(id).then(result => {
        res.render("employees/delete", { pageTitle: "Employee Delete View", employee: result, message: "" });
    }, eMsg => {
        res.render("employees/delete", { pageTitle: "Employee Delete View", employee: null, message: eMsg });
    });
}

exports.delete_post = (req, res, next) => {
    var id = req.params.empid;

    deleteEmployee(id).then(result => {
        res.redirect('/employees');
    }, eMsg => {
        res.render("employees/delete", { pageTitle: "Employee Delete View", employee: employee, message: eMsg });
    });
}