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

Layers https://underflow101.tistory.com/44

## Problem Ref.

https://github.com/greatscottgadgets/greatfet/issues/251

https://webnautes.tistory.com/1493 (save model not exists...)

https://qengineering.eu/install-tensorflow-2.6-on-raspberry-64-os.html (tensorflow 2.6.0 Install on Raspberry Pi)

https://qengineering.eu/install-tensorflow-2.6-on-raspberry-64-os.html python2, python3 problem

https://pimylifeup.com/raspberry-pi-swap-file/ Increase Swap Memory

https://dhhwang89.tistory.com/50 keyboard layout for korean