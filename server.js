var request = require("request"),
    request = request.defaults({jar: true});

//send with form
var postData = {
    'username': 'dycom',
    'password': '12345x',
    'device_model':'dddd',
    'device_uuid': 'dddsd'
};

request.post({url:'https://www.rwmiclub.com/access/get_login_token', formData:postData}, function(err,httpResponse,body){ 
    console.log(body);
})
 
 
//send with json
var jsondata = {
    'username': 'dycom',
    'password': '12345x',
    'email':'dddd@ddd.com',
    'controls': true
};

request({
    url: 'http://localhost:2000/api/register',
    method: "POST",
    json: jsondata
},function(err,httpResponse,body){
    console.log(body)
})