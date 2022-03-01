// const EventEmitter = require('events')
// const emmitter = new EventEmitter()
// for (let i = 0; i < 11; i++) {
//   emmitter.on('event1', function() {
//     console.log('event1')
//   })
// }
// emmitter.emit('event1')


// const http = require('http')
// const options = {
//   host: 'www.google.com',
//   port: 80,
//   path: '/upload',
//   method: 'POST',
// }
// const req = http.request(options, function(res) {
//   console.log('status: ', res.statusCode)
//   console.log('header: ', JSON.stringify(res.headers))
//   res.setEncoding('utf8')
//   res.on('data', function(chunk) {
//     console.log('data: ', chunk)
//   })
//   res.on('end', function() {
//     console.log('res end')
//   })
// })
// req.on('error', function(err) {
//   console.log('request error')
// })
// req.write('data\n')
// req.write('data\n')
// req.end()