# Team_Phonetic_Code
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

## Reference

Lorem Ipsum Korean Ver. http://guny.kr/stuff/klorem/#/p-view

Kakao STT/TTS REST API Document https://developers.kakao.com/docs/latest/ko/voice/rest-api

.wav Converter https://convertio.co/kr/wav-converter/

make training data for deep learning voice recoginization(LINE Engineering tech blog) https://engineering.linecorp.com/ko/blog/voice-waveform-arbitrary-signal-to-noise-ratio-python/

target voice recognization example http://mediated-ear.com/

Audio Data Preprocessing 1 https://ahnjg.tistory.com/93

Audio Data Preprocessing 2 https://hyunlee103.tistory.com/35?category=999732

Audio Data Preprocessing 3 https://hyunlee103.tistory.com/36

Google AudioSet (Traffic) https://research.google.com/audioset/unbalanced_train/traffic_noise_roadway_noise.html

Google Speech Command v0.02 http://download.tensorflow.org/data/speech_commands_v0.02.tar.gz

ML for everyone http://hunkim.github.io/ml/