require('dotenv').config();

console.log(process.env.API_KEY)

// example request codes
const makeWitSpeechRequest = (audioBinary) => {
  request({
    url: 'https://api.wit.ai/speech?v=20160526',
    method: 'POST',
    body: audioBinary,
    encoding: null
  }, (error, response, body) => {
    if (error) {
      console.log('Error sending message: ', error)
    } else {
      console.log('Response: ', response.body)
    }
  })
}