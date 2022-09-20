const http = require('http')

// Fs(File System) digunakan untuk membaca data dari sebuah file 
const fs = require('fs')

const url = require('url')

const server = http.createServer((req, res) => {

    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Method": "GET, POST, PUT, PATCH, DELETE"
    }

    // Apapun method yg dilakukan, akan selalu mengambil data dari db.json
    let products = fs.readFileSync('./Data/db.json')
    if(req.method === 'GET'){
    res.writeHead(200, 'Get Products Success!', headers)
    res.end(products)
   }

   if(req.method === 'POST' && req.url.includes('/products')){
    let body = []
    // Data dar db.json kita parse menjadi JSON
    products = JSON.parse(products)

    req.on('data', (data) => {
        // Data dari body disimpan ke dalam var body
        body.push(data)
        // Karena dia bentuknya masih buffer, maka kita parse menjadi bentuk JSON
        body = JSON.parse(body)
        body.id = products.length+1
        // Data body yg sudah berbentuk JSON, kita push ke dalam var products
        products.push(body)
        fs.writeFileSync('./Data/db.json', JSON.stringify(products))
        res.writeHead(200, 'Send Data Success!', headers)
        res.end(fs.readFileSync('./Data/db.json'))
    })
   }

   if(req.method === 'PATCH' && req.url.includes('?')){
        let getQuery = url.parse(req.url, true).query
        getQuery = parseInt(getQuery.id)

        let body = []
        products = JSON.parse(products)

        req.on('data', (data) => {
            body.push(data)
            body = JSON.parse(body)
            
            for(let i=0; i<products.length; i++){
                if(products[i].id === getQuery){
                    products[i].name = body.name
                }
            }

            fs.writeFileSync('./Data/db.json', JSON.stringify(products))
            res.writeHead(201, 'Update Product Success!', headers)
            res.end(fs.readFileSync('./Data/db.json'))
        })
    }

    if(req.method === 'DELETE' && req.url.includes('?')){
        let getQuery = url.parse(req.url, true).query
        getQuery = parseInt(getQuery.id)
        console.log(getQuery)

        products = JSON.parse(products)

        let idx = products.findIndex(value => value.id === getQuery)
        products.splice(idx, 1)
        console.log(products)

        fs.writeFileSync('./Data/db.json', JSON.stringify(products))
        res.writeHead(201, 'Delete Product Success!', headers)
        res.end(fs.readFileSync('./Data/db.json'))
    }
})

let PORT = 5000 
server.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})