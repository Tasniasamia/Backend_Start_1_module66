import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([]);
  const [obje,setObj]=useState({});
  const[data,setData]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/user')
    .then(res=>res.json())
    .then(data=>setCount(data))
  },[])
const obj= {
        "id": "124e13b9-2d54-4b2f-a74d-a77b362d6ead02",
        "name": "Yasir Ali",
        "price": 520,
        "ratings": 4,
        "img": "https://www.khulnatigers.net/images/team/2023/Yasir_Ali_Chowdhury.png",
        "quantity": 0
    };
    useEffect(()=>{
      fetch("http://localhost:4000/user",{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(obj)
          
        
      })
      .then(res=>res.json())
      .then(data=>setObj(data));
    },[])
    console.log(count);
    useEffect(()=>{
      fetch("http://localhost:4000/data")
      .then(res=>res.json())
      .then(data=>setData(data))
    },[])

 

    function handlefunction(event){
event.preventDefault();
const email=event.target.email.value;
const name=event.target.name.value;
const user={name,email}

  fetch('http://localhost:4000/data',{
    method:"POST",
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
      }
    
  return (
    <div className="App">
  {
    data.map(index=><div key={index.id}>
      id: {index.id} name:{index.name} email:{index.email}
    </div>)
  }


  <form onSubmit={handlefunction}>
    <input type="text" name="name" id="name" />
    <input type="email"name="email"id="email" />
    <input type="submit" value="Add Resister" />
  </form>
    </div>
  )

}
export default App
