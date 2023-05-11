const express = require('express')
var cors = require('cors')
var app = express()

const port = process.env.PORT || 4000;
const data=require('./products.json');
const formobj=[
  {id:1,name:"Samia",email:"samia@gmail.com"},
  {id:2,name:"Sadia",email:"sadia@gmail.com"},
  {id:3,name:"lamia",email:"lamia@gmail.com"}
]
app.use(cors())

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/data',(req,res)=>{
  res.send(formobj);
})
app.get('/user',(req,res)=>{
    res.send(data);
})

app.post('/user',(req,res)=>{
  console.log("get data from client");
  const newdata=req.body
  console.log(newdata);
  const dataall=data.find(index=>index.id==newdata.id);
  if(!dataall){
    data.push(newdata);

  }
 console.log(data);

})

app.post('/data',(req,res)=>{
  console.log("get data from client2");
  console.log(req.body);
  const newdatafer=req.body;
  newdatafer.id=formobj.length+1;
  const finddata=formobj.find(index=>index.id==newdatafer.id);
  if(!finddata){
    formobj.push(newdatafer);
  }
  console.log(formobj);

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})