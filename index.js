 const express=require('express')
 const mongoose=require('mongoose');

const app = express()
const cors=require('cors');

// const {Userrouter}=


app.use(express.urlencoded({ extended:true }))
app.use(express.json())

mongoose.connect("mongodb://localhost",{
  useNewUrlParser: true,
    
})


app.get('/',(req,res)=>res.send('hello'))

app.listen(8080,()=>{console.log('server started on port 8080')})