import express from 'express'

import cors from 'cors'
import 'dotenv/config'

// App 

const app = express()

const port = process.env.PORT || 4000 

app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
  res.send('App is working ..')
})

app.listen(port,()=>{
  console.log(`server started on port ${port}`)
})
