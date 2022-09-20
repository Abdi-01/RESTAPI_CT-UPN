const fs = require('fs')

module.exports = {
    getProducts: (req, res) => {
        let products = JSON.parse(fs.readFileSync('./Data/db.json'))
        res.status(200).send(products)
    },

    postProducts: (req, res) => {
        let products = JSON.parse(fs.readFileSync('./Data/db.json'))
        let data = req.body

        data.id = products.length+1
        // Data body yg sudah berbentuk JSON, kita push ke dalam var products
        products.push(data)
        fs.writeFileSync('./Data/db.json', JSON.stringify(products))
        res.status(200).send(JSON.parse(fs.readFileSync('./Data/db.json')))
    },

    updateProducts: (req, res) => {
        let id = parseInt(req.params.id) // 1
        let products = JSON.parse(fs.readFileSync('./Data/db.json'))
        let data = req.body.name 
        console.log(data)
        for(let i=0; i<products.length; i++){
            if(products[i].id === id){
                console.log('Trigger')
                products[i].name = data
            }
        }

        fs.writeFileSync('./Data/db.json', JSON.stringify(products))
        res.status(200).send(JSON.parse(fs.readFileSync('./Data/db.json')))
    },

    deleteProducts: (req, res) => {
        let id = parseInt(req.params.id)
        let products = JSON.parse(fs.readFileSync('./Data/db.json'))

        let idx = products.findIndex(value => value.id === id)
        products.splice(idx, 1)

        fs.writeFileSync('./Data/db.json', JSON.stringify(products))
        res.status(200).send(JSON.parse(fs.readFileSync('./Data/db.json')))
    }
}