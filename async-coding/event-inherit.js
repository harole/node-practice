const events = require('events')
const util = require('util')
function Stream() {
  // events.EventEmitter.call(this)
}
util.inherits(Stream, events.EventEmitter)
const stream = new Stream()
stream.on('event1', function() {
  console.log('event1')
})
stream.emit('event1')