const express = require('express')
const app = express()
const path = require('path')
const cote = require('cote')



app.use(express.static(path.resolve(__dirname, 'public')))



const requester = new cote.Requester({name: 'pfaffhack18-demo-color requester'})

app.get('/color', (expressReq, expressRes, next) => {
  const coteReq = {type: 'pfaffhack18-random-color'}
  requester.send(coteReq, coteRes => {
    expressRes.json(coteRes)
    next()
  })
})



const subsciber = new cote.Subscriber({name: 'pfaffhack18-demo-weather subsciber'})
let weather = {value: 'No weather values yet :('}

subsciber.on('pfaffhack18-update-weather', (update) => {
  console.dir(update)
  weather = update
})

app.get('/weather', (expressReq, expressRes, next) => {
  console.dir(weather)
  expressRes.json(weather)
  next()
})



app.listen(3000, () => console.log('Frontend server listening on http://localhost:3000'))
