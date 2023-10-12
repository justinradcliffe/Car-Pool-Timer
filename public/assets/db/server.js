var express = require('express');
var app = express();
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});

var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

app.get('/getDbData/:id', function (req, res) {
var params = {
    TableName: 'CAR_POOL',
    Key: {
      'DRIVE_ID': {N: req.params.id}
    },
    ProjectionExpression: 'DETAILS'
  };
  
  ddb.getItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Item);
      res.end( JSON.stringify(data.Item));
    }
  });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})