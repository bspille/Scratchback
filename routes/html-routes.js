module.exports = function(app)
{
    app.get('/welcome', function(req, res)
    {
        console.log("From the html rotes, testng");
        res.send("Welcome Screen Content");
    })
}