const fs = require('fs')
const events = require('events')
const emitter = new events.EventEmitter()
const callback = function(err, data) {
  if (err) {
    console.error(err)
    return
  }
  return data.join(', ')
}
// step1
let data = ''
fs.readFile(__dirname, 'utf8', function(resultA) {
  fs.readFile(__dirname, 'utf8', function(resultB) {
    fs.readFile(__dirname, 'utf8', function(resultC) {
      callback(null, [resultA, resultB, resultC])
    })
  })
})

// step2
const after = function(times, callback) {
  let args = []
  let count = 0
  return function() {
    const error = arguments[0]
    // if (error) {
    //   console.log(error)
    //   callback(error)
    //   // 需要在此处移除事件监听
    //   return
    // }
    count++
    args = args.concat(arguments.slice(1))
    if (count >= times) callback(null, args)
  }
}
const callbackAfterTreeTimes = after(3, callback)
emitter.on('event1', callbackAfterTreeTimes) // 多对一
// emitter.on('event1', otherCallback) // 多对多
fs.readFile(__dirname, 'utf8', function(resultA) {
  emitter.emit('event1', resultA)
})
fs.readFile(__dirname, 'utf8', function(resultB) {
  emitter.emit('event1', resultB)
})
fs.readFile(__dirname, 'utf8', function(resultC) {
  emitter.emit('event1', resultC)
})