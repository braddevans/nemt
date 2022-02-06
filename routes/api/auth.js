module.exports = function (app, config) {
    const module = {};
    const router = app.Router()

    // This will be available to all modules.
    module.auth = function (req, res) {

    };

    function check(username, password) {
        // internal to this module only
        var output = false;

        // if username does not exist; return == false
        // if password incorrect; return == false

        return output;
    }

    return module;
};