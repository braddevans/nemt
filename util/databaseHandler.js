const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const restify = require('restify');

module.exports = function (config) {
    const module = {};

    const Device = new Schema({
        deviceId : String,
        platform : String
    });

    const DeviceSchema = mongoose.model('Device', Device);


    function openDatabaseConnection() {
        const db = mongoose.connection;

        db.on('error', console.error.bind(console, 'connection error:'));

        db.once('open', function(){
            console.log('db open');
        });

        mongoose.connect(config.mongouri).then(r => console.log);

        return restify.createServer({
            name: 'pushServer'
        })
    }

    module.openDatabaseConnection = openDatabaseConnection()
    module.Device = Device
    module.DeviceSchema = DeviceSchema

    return module;
};