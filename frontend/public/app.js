window.onload = () => {
  document.getElementById('demo-color-btn').addEventListener('click', onDemoColorBtnClick)
  pollForUpdates()
}

const onDemoColorBtnClick = () => {
  const http = new HttpJsonClient()
  http.get('/color', (res) => {
    document.getElementById('demo-color-display').textContent = res.value
  })
}

const pollForUpdates = () => {
  setInterval(() => {
    const http = new HttpJsonClient()
    http.get('/weather', (res) => {
      document.getElementById('demo-weather-subsciber').textContent = res.value
    })
  }, 500)
}


const HttpJsonClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest()
        anHttpRequest.onreadystatechange = () => {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
                const json = JSON.parse(anHttpRequest.responseText)
                aCallback(json)
            }
        }
        anHttpRequest.open( 'GET', aUrl, true );
        anHttpRequest.send( null );
    }
}
