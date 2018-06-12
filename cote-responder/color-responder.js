const cote = require('cote')

const responder = new cote.Responder({ name: 'pfaffhack18-demo-color responder' })

const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white']

responder.on('pfaffhack18-random-color', (req, cb) => {
  const rand = Math.floor(Math.random() * colors.length)
  const color = colors[rand]
  cb({value: color})
})
