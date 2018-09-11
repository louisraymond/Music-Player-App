import WaveSurfer from 'wavesurfer.js'
import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.js'
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js'
import soundtouch from './SoundTouch.js'

const Wave = {

  mount () {
    this.ws = WaveSurfer.create({
      waveColor: '#6c7f9a',
      progressColor: '#f1f0f4',
      backend: 'MediaElement',
      container: '#wave',
      plugins: [
        RegionsPlugin.create(),
        TimelinePlugin.create({
          container: '#wave-timeline'
        })
      ]
    })
    this.ws.on('region-created', () => {
      if (Object.keys(this.ws.regions.list).length > 0) {
        Object.values(this.ws.regions.list)[0].remove()
      }
    })
  },

  load (audio) {
    console.log(audio)
    this.ws.load(audio)
    return new Promise(resolve => {
      this.ws.on('ready', () => {
        this.ws.enableDragSelection({
          loop: false
        })
        resolve()
      })
    })
  },

  load2 (file) {
    console.log(file)
    this.ws.loadBlob(file)
    return new Promise(resolve => {
      this.ws.on('ready', () => {
        this.ws.enableDragSelection({
          loop: false
        })
        resolve()
      })
    })
  },

  load3 (file) {
    this.ws.loadBlob(file)
  },

  play () {
    this.ws.play()
  },

  beforePlay () {
  },

  //

  play () {
    // Plays if paused, pauses if playing.
    // if (region is selected)
    let current = this.ws.getCurrentTime()
    if (Object.keys(this.ws.regions.list).length > 0) {
      const region = this.ws.regions.list[Object.keys(this.ws.regions.list)[0]]
      if (current > region.start) {
        this.ws.play(current)
      } else {
        this.ws.play(region.start)
      }
      region.on('out', () => { this.ws.play(region.start) })
    } else {
      this.ws.play()
    }
  },

  playPause () {
    this.ws.playPause()
  },

  clearRegion () {
    this.ws.clearRegions()
  },

  empty () {
    // Clears the waveform as if a zero-length audio is loaded
    this.ws.empty()
  },

  getCurrentTime () {
    this.ws.getCurrentTime()
     // Returns current progress in seconds.
  },
  getDuration () {
    this.ws.getDuration()
     // Returns the duration of an audio clip in seconds.
  },
  getPlaybackRate () {
    this.ws.getDuration()
    // Returns the playback speed of an audio clip.
  },
  getVolume () {
    // Returns the volume of the current audio clip.
  },
  getMute () {
    // Returns the current mute status.
  },
  getFilters () {
    // Returns an array of the current set filters.
  },
  getReady () {
    // Returns the current ready status.
  },

  stop () {
    this.ws.stop()
     // Stops and goes to the beginning
  },

  pause () {
    this.ws.pause()
  },

  setPlaybackRate (rate) {
    this.ws.setPlaybackRate(rate)

     // Sets the speed of playback (0.5 is half speed, 1 is normal speed, 2 is double speed and so on).
  }

}

export default Wave
