const express = require('express')
const path    = require('path')

const workingDir = process.cwd()
const app = express()

// examples
app.use('/1', express.static(path.join(workingDir, 'dist1')))
app.use('/2', express.static(path.join(workingDir, 'dist2')))
// development
app.use('/',              express.static(path.join(workingDir, 'dist')))
app.use('/screenwriter',  express.static(path.join(workingDir, 'screenwriter')))
app.use('/acting',        express.static(path.join(workingDir, 'acting')))
app.use('/campaign',      express.static(path.join(workingDir, 'campaign')))

app.listen(3000)
console.log('Server running at http://localhost:3000/')