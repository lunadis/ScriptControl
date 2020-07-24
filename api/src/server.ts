import express from 'express'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import * as swaggerDocument from  './swagger.json'
import routes from './Routes'
const app = express()


app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.get('/', (req, res)=>{
    return res.status(200).send('hello')
})



app.listen(3333)