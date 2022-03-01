const callback = function(err, result) {
  if (err) {
    console.log('error callback')
  } else {
    console.log('success callback', result)
  }
}
const asyncFunc = function(callback) {
  process.nextTick(function() {
    let result = {}
    try {
      result = JSON.parse('{"123":"123"}')
    } catch (err) {
      return callback(err)
    }
    callback(null, result)
  })
}
asyncFunc(callback)