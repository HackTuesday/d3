var fs=require('fs');
    data=fs.readFileSync('data/fileaccesstimes.json');
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.filetimes =function(req, res){
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(data);
    res.end();
};