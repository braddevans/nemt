module.exports = function (app, config) {
    const module = {};
    const router = app.Router()
    let exampledata = {example: "lemon"};

    router.get("/", (request, response) => {
        response.send(exampledata);
    });

    module.router = router;

    return module;
};