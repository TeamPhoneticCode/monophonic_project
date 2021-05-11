import requests

headers = {
    'Transfer-Encoding': 'chunked',
    'Content-Type': 'application/octet-stream',
    'Authorization': 'KakaoAK ' + APIKEY,
}

with open('./sound//heykakao.wav', 'rb') as fp:
    data = fp.read()

response = requests.post('https://kakaoi-newtone-openapi.kakao.com/v1/recognize', headers=headers, data=data)
