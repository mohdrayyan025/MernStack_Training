// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 123)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App





// import CompA from "./component/compA"
// import CompB from "./component/compB"
// export default function App() {
//   return (
//     <div>
//       CompA :  <CompA />
//       <br />
//       CompB :  <CompB />
//     </div>
//   )
// }



// import Card from "./component/card";
// export default function App() {
//   return (
//     <div>
//     <Card cardname='MyCard' cardType='Visiting'/>
//     </div>
//   )
// }




// import Imagebox from "./component/imagebox";

// export default function App() {
//   return (
//     <div>
//       <Imagebox />
//     </div>
//   )
// }



// import Imagedisplay from "./component/Imagedisplay";
// export default function App() {
//   const data =[
//     {
//       "strMeal": "Baked salmon with fennel & tomatoes",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
//       "idMeal": "52959"
//     },
//     {
//       "strMeal": "BeaverTails",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
//       "idMeal": "52928"
//     },
//     {
//       "strMeal": "Breakfast Potatoes",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/1550441882.jpg",
//       "idMeal": "52965"
//     },
//     {
//       "strMeal": "Canadian Butter Tarts",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
//       "idMeal": "52923"
//     },
//     {
//       "strMeal": "Montreal Smoked Meat",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg",
//       "idMeal": "52927"
//     },
//     {
//       "strMeal": "Nanaimo Bars",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/vwuprt1511813703.jpg",
//       "idMeal": "52924"
//     },
//     {
//       "strMeal": "Pate Chinois",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg",
//       "idMeal": "52930"
//     },
//     {
//       "strMeal": "Pouding chomeur",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg",
//       "idMeal": "52932"
//     },
//     {
//       "strMeal": "Poutine",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
//       "idMeal": "52804"
//     },
//     {
//       "strMeal": "Rappie Pie",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg",
//       "idMeal": "52933"
//     },
//     {
//       "strMeal": "Split Pea Soup",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/xxtsvx1511814083.jpg",
//       "idMeal": "52925"
//     },
//     {
//       "strMeal": "Sugar Pie",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg",
//       "idMeal": "52931"
//     },
//     {
//       "strMeal": "Timbits",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg",
//       "idMeal": "52929"
//     },
//     {
//       "strMeal": "Tourtiere",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/ytpstt1511814614.jpg",
//       "idMeal": "52926"
//     }
//   ];
//   return (
//     <>
//     <div>
//       <h1>Canadian Food</h1>
//       {
//         data.map((item) => {
//           return(
//             <Imagedisplay url={item.strMealThumb} />
//           )
//         })
//       }
//       <Imagedisplay url={data[0].strMealThumb}  className="contain"/>      
//     </div>
//     </> 
//   )
// }





// import EventExample,{add,sub} from "./component/EventExample";
// export default function App() {
//   return (
//   <>
//   <h1>Addition : {add()}</h1>
//   <h1>Subtract : {sub()}</h1>  
//   <EventExample /> 
//   </>    
//   )
// }




import { useEffect, useState } from "react";
import Counter from "./component/Counter";

import Imagedisplay from "./component/Imagedisplay";

export default function App() {
  const [data,setData]=useState([]);
  useEffect(()=>(
    fetch("www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((response)=>{
      return response.json();
    })
    .then((d)=>{
      return setData(d.meals); 
    })
  ),[])
  
  //console.log(data);
  return (
    <>
    
    {/* <Counter /> */}

    {data.map((item) => {
        return(
          <Imagedisplay url={item.strMealThumb} />
        )
      })
    }
    </>
  )
}
