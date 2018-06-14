/**
 * В начале нужно в консоли выолнить команды 'node server.js'
 */
'use strict'

const http = require('http')
const port = 3004
const fs = require('fs'); // подключаем модуль для рабоыт с файлами

// const content = fs.readFileSync('Public/index.html'); // в синхронном режиме читаем файлик с разметкой html и присваиваем это переменной 'content'
const requestHandler = (request, response) => { // объявляем безымянную функцию
  // эта функция является аргументов функции, которая является аргументов функции createServer
  console.log(request.url) // это пойдёт в консоль
  // response.end(content) // то, что пойдёт в браузер. Так сказать что получим при переходе в браузер
  // fs.readFile('Public/index.html', (err, data) => {
  //   response.write('A')
  //   response.write(data)
  //   response.write('A')
  //   response.end()
  // })
  const filename = `Public${request.url}`

  if (request.url !== '/' && fs.existsSync(filename))
    response.end(fs.readFileSync(filename))
  else
    response.end(fs.readFileSync('Public/index.html'))


  // response.write(fs.readFileSync('Public/index.html')) //выводим содержимое файла и останавливаемся
  //  response.end()
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  // if (err) {
  //   return console.log('something bad happened', err)
  // }

  console.log(`server is on ${port}`)
})

// 'use strict'

// const http = require('http')
// const fs = require('fs')
// const port = 3003


// const content = fs.readFileSync('public/index.html');

// const requestHandler = (request, response) => {
//   console.log(request.url)
//   if (fs.existsSync(`public${request.url}`) && request.url !== '/')
//     response.end(fs.readFileSync(`public${request.url}`))
//   else
//     response.end(fs.readFileSync('public/index.html'))
// }

// const server = http.createServer(requestHandler)

// server.listen(port, (err) => {
//   if (err) {
//     console.log('something bad happened', err)
//   }

//   console.log(`server is listening on ${port}`)
// })