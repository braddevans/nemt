module.exports = function (app, config) {
    const module = {};
    const router = app.Router()

    router.get("/",(request, response) => {
        let jsonData = JSON.stringify({lemon:"melon",example:"yes"},null, "  ")
        console.log(jsonData)
        response.render('index', {
            subject: 'frontend',
            name: config.siteName,
            data: jsonData
        });
    });

    module.router = router;

    return module;
};