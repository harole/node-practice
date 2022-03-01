const fs = require('fs')
const path = require('path')
fs.readdir(path.join(__dirname, ''), function(err, files) {
  files.forEach(function(fileName, index) {
    fs.readFile(fileName, 'utf8', function(err, file) {
      // console.log(file, 1919)
    })
  })
})