// const express = require('express')
// const test = require('./test/test')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send(test)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()
const port = 5250


app.use(express.static('dist'))

app.use('/pcrf',
  createProxyMiddleware({
    target: 'https://pcrf.hh-medic.com',
    changeOrigin: true,
  },)
);
app.use([
  '/adminapi',
  '/slebapi',
  '/reportapi',
  '/billapi',
  '/tpa',
],
  createProxyMiddleware(
    {
      target: 'https://xadmin-test.hh-medic.com',
      changeOrigin: true,
    })
);
app.use([
  '/familyapph5',
  '/kcmenu',
  '/familymadmin',
  '/familyplatformbill',
  '/grpapi',
],
  createProxyMiddleware(
    {
      target: 'https://xadmin-test.hh-medic.com',
      changeOrigin: true,
    })
);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
