var fs = require('file-system');

exports.index = function(req, res)
{
    var content = fs.readFileSync("listings.json");
    var jsonContent = JSON.parse(content);
    
    res.render('listings', {
        "title": "Listings",
        category1: jsonContent.category1,
        category2: jsonContent.category2,
        category3: jsonContent.category3
    });
}