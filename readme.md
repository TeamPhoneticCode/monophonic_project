# Team_Phonetic_Code

## Links

Lorem Ipsum Korean Ver. http://guny.kr/stuff/klorem/#/p-view

Kakao STT/TTS REST API Document https://developers.kakao.com/docs/latest/ko/voice/rest-api

wav Converter https://convertio.co/kr/wav-converter/

Reference from Line Engineering about Python Sound ML https://engineering.linecorp.com/ko/blog/voice-waveform-arbitrary-signal-to-noise-ratio-python/

## Roadmap

monophonic => pentatonic => polyphonic

## Example

```console
curl -v -X POST "https://kakaoi-newtone-openapi.kakao.com/v1/recognize"
-H "Transfer-Encoding: chunked"
-H "Content-Type: application/octet-stream"
-H "Authorization: KakaoAK {REST_API_KEY}"
--data-binary @heykakao.wav
```