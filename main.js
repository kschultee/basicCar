/* eslint-disable no-unused-vars */
function carFactory(location, speed, marker) {
  marker = document.getElementById('marker')
  marker.style.top = location.top + 'px'
  marker.style.left = location.left + 'px'
  var interval
  let x = 0
  let y = 0
  const car = {
    move() {
    },
    forward() {
      clearInterval(interval)
      interval = setInterval(function () {
        x++
        marker.style.left = x * speed + 'px'
      }, 100)
    },
    down() {
      clearInterval(interval)
      interval = setInterval(function () {
        y++
        marker.style.top = y * speed + 'px'
      }, 100)
    },
    left() {
      clearInterval(interval)
      interval = setInterval(function () {
        if (x < 2) {
          clearInterval(interval)
          window.alert('You crashed!')
        }
        x--
        marker.style.left = x * speed + 'px'
      }, 100)
    },
    up() {
      clearInterval(interval)
      interval = setInterval(function () {
        if (y < 2) {
          clearInterval(interval)
          window.alert('You crashed!')
        }
        y--
        marker.style.top = y * speed + 'px'
      }, 100)
    }
  }
  return car
}

const goCar = carFactory({ top: 10, left: 0 }, 10)
