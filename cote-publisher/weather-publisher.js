const cote = require('cote')

const publisher = new cote.Publisher({ name: 'pfaffhack18-demo-weather publisher' })

const weather = ['sunny', 'rain', 'storm', 'clouds', 'thunderstorm']

setInterval(() => {
  const rand = Math.floor(Math.random() * weather.length)
  const newWeather = weather[rand]
  publisher.publish('pfaffhack18-update-weather', {value: newWeather})
}, 5000)
