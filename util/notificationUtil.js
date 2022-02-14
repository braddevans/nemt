const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const restify = require('restify');
const gcm = require('node-gcm');

module.exports = function (config) {
    const module = {};

    function sendAndroid(devices, Message) {
        let sender = new gcm.sender('<YOUR_API_KEY_HERE>');

        sender.send(Message, {
            registrationTokens : devices
        }, function(err, response) {
            if (err) {
                console.error(err);
            } else {
                console.log(response);
            }
        });
    }

    module.sendAndroid = sendAndroid(devices, Message)

    return module;
};