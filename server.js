const { response } = require('express')
const express = require('express')
const { Server } = require('http')
const cors = require('cors')
const app = express()

app.use(cors())
const PORT = 3000

const products =  {
    'itemname':{
        'aisle': 12,
        'Shelf_Loc': 1-2-3,
        'Needed': 1
    },
    'itemname2':{
        'aisle': 'A2',
        'Shelf_Loc' : 12,
        'Needed' : 2
    },
    'itemname3' : {
        'aisle' : 'A2',
        'Shelf_Loc' : 2,
        'Needed' : 4
    },
    'unkown':{
        'aisle' : 'Nan',
        'Shelf_Loc' : 'NaN',
        'Needed' : "NaN"
    }
}

app.get('/', (request, respone) =>{
    respone.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) =>{
    const productName = request.params.name.toLowerCase()
    if( products[productName]){
        response.json(products[productName])
    }else{
        response.json(products['unkown'])
    }
})
app.listen( process.env.PORT || PORT, () =>{
    console.log(`Server is runnning on ${PORT} better go catch it`)
})