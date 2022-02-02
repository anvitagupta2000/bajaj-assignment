console.log('script start')

const interval = setInterval(() => {
  console.log('setInterval')
}, 5000)

setTimeout(() => {
  console.log('setTimeout 1')
  process.nextTick(() => {
    console.log('nextTick 3')
    process.nextTick(() => {
      console.log('nextTick 4')
      setTimeout(() => {
        console.log('setTimeout 2')
        process.nextTick(() => {
          console.log('nextTick 5')
          process.nextTick(() => {
            console.log('nextTick 6')
            clearInterval(interval)
          })
        })
      }, 5000)
    })
  })
})

process.nextTick(() => {
  console.log('nextTick 1')
  process.nextTick(() => {
    console.log('nextTick 2')
  })
})
