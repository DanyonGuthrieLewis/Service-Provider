exports.index = function(req, res)
{
    res.render('listings', {
        "title": "Listings",
    });
}