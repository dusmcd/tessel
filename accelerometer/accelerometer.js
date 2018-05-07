// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic accelerometer example logs a stream
of x, y, and z data from the accelerometer
*********************************************/

var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);

// Initialize the accelerometer.
accel.on('ready', function() {
  let lastReading = 0;
  let isHit = false;
  let counter = 0;
  // Stream accelerometer data
  accel.on('data', function(xyz) {
    let thisReading = xyz[0];
    // console.log('x:', xyz[0].toFixed(2));
    if (Math.abs(thisReading - lastReading) > 0.1) {
      isHit = true;
      console.log('HIT!', ++counter);
    } else {
      isHit = false;
    }
    lastReading = thisReading;
  });
});

accel.on('error', function(err) {
  console.log('Error:', err);
});
