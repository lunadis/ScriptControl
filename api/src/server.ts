import express from 'express'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from  './swagger.json'
const app = express()


app.use(express.json())
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.get('/', (req, res)=>{
    return res.status(200).send('hello')
})



app.listen(3333)