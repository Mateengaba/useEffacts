import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const getData =()=>{
  //console.log("api call");
  
}


useEffect(()=>{
  getData()
},[])

//1
// is ma 1 bar chalega
// useEffect(()=>{
//   getData()
//   console.log("component mount");
// },[])

//2
// is ma jo depandance di ho gi jab who copmonent re-render hoga to chale ga.
// useEffect(()=>{
//   getData()
//   console.log("component did update");
// },[count])


//3
// is ma har bar chale ga/
// useEffect(()=>{
//   getData()
//   console.log("component any update");
// },)


// useEffect(() => {
//   return () => {
//     getData()

//     console.log("component unmount");
//   };
// }, []);



const countchange =()=>{
  setCount(count + 1)

}

 

// api call
const [data, setData] = useState([]);

const callProductApi = () => {
  console.log("callProductApi");

  fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((res) => {
      setData(res);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

useEffect(() => {
  callProductApi();
}, []);



  return (
    <>
    <h1>UseEffact</h1>
    <h3>{count}</h3>
      

<button onClick={countchange}>click me</button>

<br/>
{data.map((products, index) => {
        console.log(products);
        return (
          <div key={products.id}>
            <img src={products.image} width={"250"} height={"250"} alt="" />
            <p>{products.title}</p>
            <p>price: {products.price} </p>
          </div>
        );
      })}
    </>
  )
}

export default App
