const dbHandler = require('../../util/databaseHandler.js')
const NotificationUtil = require('../../util/notificationUtil.js')
const gcm = require('node-gcm');

module.exports = function (app, config) {
    const module = {};
    const router = app.Router()
    let exampledata = {example: "lemon"};

    router.get("/", (request, response) => {
        response.send(exampledata);
    });
    router.post("/register", (request, response,next) => {
        let body = JSON.parse(request.body);

        if (body) {
            let newDevice = new dbHandler().DeviceSchema(body);
            newDevice.save(err => {
                if (!err) {
                    response.send(200);
                } else {
                    response.send(500);
                }
            })
        }
    });

    router.get('/send', (req, res) => {
        dbHandler().DeviceSchema.find( (err, devices) => {
            if (!err && devices) {
                let androidDevices = [];
                devices.forEach(device => {
                    if (device.platform === 'ios') {
                        //sendIos(device.deviceId);
                    } else if (device.platform === 'android') {
                        let message = new gcm.Message({
                            notification : {
                                title : 'Hello, World!'
                            }
                        });
                        androidDevices.push(device.deviceId, message);
                    }
                });
                NotificationUtil.sendAndroid(androidDevices);
                res.send(200);
            } else {
                res.send(500);
            }
        });
    });

    module.router = router;

    return module;
};