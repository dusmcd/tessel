// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
- Play audio from an amusing scene between Luke Skywalker, R2-D2 and Yoda
- When the audio reaches the end, play it again from the beginning.
*********************************************/

var path = require('path');
var av = require('tessel-av');
var mp3 = path.join(__dirname, 'beep.mp3');
var sound = new av.Player();
let pitch = 1;

// for (let i = 0; i < 15; i++) {
sound.play({
  phrase: 'Open the pod bay doors, HAL',
  a: 10,
  r: 2,
});

// sound.stop();

// sound.play({
//   file: './mpthreetest.mp3',
//   a: 100,
// });

sound.on('ended', function(seconds) {
  this.play({
    file: mp3,
    r: (pitch += 10),
  });
});
