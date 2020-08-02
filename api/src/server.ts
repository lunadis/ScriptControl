import express from 'express'
import cors from 'cors'
import routes from './Routes'
const app = express()


app.use(cors())
app.use(express.json())
app.use(routes)


app.get('/', (req, res)=>{
    return res.status(200).send('hello')
})



app.listen(3333)