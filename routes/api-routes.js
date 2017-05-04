module.exports = function(app)
{
    app.get('/', function(req, res)
    {
        console.log('welcome');
        res.send("welcomePage");
    })
}