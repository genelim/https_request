var request = require("request");

var postData = {
    'username': 'dycom',
    'password': '12345x',
    'device_model':'dddd',
    'device_uuid': 'dddsd'
};

request.post({url:'https://www.rwmiclub.com/access/get_login_token', formData:postData}, function(err,httpResponse,body){ 
    console.log(body);
})
 