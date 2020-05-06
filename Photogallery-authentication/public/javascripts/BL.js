var dal = require('./DAL');
var busLog = {};



busLog.loginUser = function (empId,password) {
    return dal.userLogin(empId,password)
        .then(function (response) {
            return response;
        })
}

busLog.signupUser = function (credentials) {
    return dal.signupUser(credentials)
        .then(function (item) {
            return item;
        })
}

module.exports = busLog;