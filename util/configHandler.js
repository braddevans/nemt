const yaml = require("js-yaml");
const fs = require("fs");
module.exports = function () {
    const module = {};

    function loadConfig() {
        let config;
        try {
            config = yaml.load(fs.readFileSync('./config.yml', 'utf8'));
            console.log(config);
        } catch (e) {
            console.log(e);
        }
        return config;
    }

    module.config = loadConfig()

    return module;
};