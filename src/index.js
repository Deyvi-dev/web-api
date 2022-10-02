import http from 'node:http'

const PORT = process.env.PORT || 3000

const server = http.createServer((request, reponse) =>{
    reponse.end('Hello World')
}).listen(PORT, ()=> console.log(`serce is running at ${PORT}`))

export{
    server
}