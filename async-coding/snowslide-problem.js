const events = require('events')
const emitter = new events.EventEmitter()
let status = 'ready'
const select = function(callback) {
  emitter.once('selected', callback) // 事件出发后，callback只执行一次 
  if (status === 'ready') {
    status = 'pending'
    db.query('sql', function(results) {
      emitter.emit('selected', results)
      status = 'ready'
    })
  }
}
