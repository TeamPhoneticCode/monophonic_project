require('dotenv').config();
const request = require('request');
const fs = require('fs');


function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
      console.log(body);
  }
  else{
    console.log(error);
  }
}

function ssame(){
  let headers = {
    'Transfer-Encoding': 'chunked',
    'Content-Type': 'application/octet-stream',
    'Authorization': `KakaoAK ${process.env.API_KEY}`
};

let options = {
    url: 'https://kakaoi-newtone-openapi.kakao.com/v1/recognize',
    method: 'POST',
    headers: headers,
    body: fs.createReadStream('./sound/countryShower.wav')
};

request(options, callback);

}

ssame()