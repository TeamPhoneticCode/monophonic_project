var fetch = require('node-fetch');

fetch('https://kakaoi-newtone-openapi.kakao.com/v1/recognize', {
    method: 'POST',
    headers: {
        'Transfer-Encoding': 'chunked',
        'Content-Type': 'application/octet-stream',
        'Authorization': `KakaoAK ${process.env.API_KEY}`
    },
    body: fs.createReadStream('./sound/heykakao.wav')
}) 
.then(result => console.log(result.body._readableState.buffer.head.data.toString()));