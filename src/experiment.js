function () {
    var st = new soundtouch.SoundTouch(wavesurfer.backend.ac.sampleRate);
    var buffer = wavesurfer.backend.buffer;
    var channels = buffer.numberOfChannels;
    var l = buffer.getChannelData(0);
    var r = channels > 1 ? buffer.getChannelData(1) : l;
    var length = buffer.length;
    var seekingPos = null;
    var seekingDiff = 0;
     var source = {
      extract: function (target, numFrames, position) {
        if (seekingPos != null) {
          seekingDiff = seekingPos - position;
          seekingPos = null;
        }
         position += seekingDiff;
         for (var i = 0; i < numFrames; i++) {
          target[i * 2] = l[i + position];
          target[i * 2 + 1] = r[i + position];
        }
         return Math.min(numFrames, length - position);
      }
    };
