// import React, { useState, useEffect } from 'react';
// import './App.css'

// function App() {

//   const [count, setCount] = useState(0);
//   const [countDos, setCountDos] = useState(0);
//   const [countTres, setCountTres] = useState(0);
 
//   useEffect(() => {
//     console.log(`contador 1: ${count}`)
//     console.log(`contador 2: ${countDos}`)
//     console.log(`contador 3: ${countTres}`)
//   },[countTres, count]);
//   console.log("render")

//   return (
//     <div>
//       <p>contador 1: {count} times</p>
//       <p>contador 2: {countDos} times</p>
//       <p>contador 3: {countTres} times</p>
//       <button onClick={() => setCount(count + 1)}>Uno</button>
//       <button onClick={() => setCountDos(countDos + 1)}>Dos</button>
//       <button onClick={() => setCountTres(countTres + 1)}>Tres</button>
//     </div>
//   );
// }

// export default App


// import { useState, useEffect } from "react";

// function App() {
//   const [nombre, setNombre] = useState("");


//   useEffect(() => {
//     console.log({nombre})
//   });

//   return (
//     <div className="App">
//       <h1>useEffect</h1>
//       <form >
//         <input
//           type="text"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//       </form>
//     </div>
//   );
// }

// export default App;



//NO DESCOMENTAR ESTE CODIGO, BUCLE INFINITO
// import { useState, useEffect } from "react";

// function App() {
//   const [nombre, setNombre] = useState("");


//   useEffect(() => {
//     getRandomUser()
//   });

//   async function getRandomUser(){
//     const res = await fetch("https://randomuser.me/api")
//     const data = await res.json()
//     setNombre(data);
//    }

//   return (
//     <div className="App">
//       <h1>useEffect</h1>
//       <form >
//         <input
//           type="text"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//       </form>
//     </div>
//   );
// }

// export default App;






// import { useState, useEffect } from "react";

// function App() {

//   const [info, setInfo] = useState([]);

//   useEffect(()=>{
//     consultarInformacion()
//   },[])
  
//   const consultarInformacion = async () => {
//     const url = 'https://api.gameofthronesquotes.xyz/v1/random';
//     const response = await fetch(url)
//     const data = await response.json()
//     setInfo(`"${data.sentence}" - ${data.character.name}`);
//   }



//   return (
//     <div>
//       {info}
//     </div>
//  );
// }
// export default App;




// import { useState } from "react";
// import './App.css'

// const App = () => {

//   const [count, setCount] = useState(0);

//   const handleClick = (masMenos) =>{
//     masMenos === "mas" ? setCount(count + 1) : setCount(count - 1)
//   }
//   console.log(count)
//   console.log("render")

//   return(
//     <div>
//       <button onClick={()=> handleClick("menos")}>-</button>
//       <button onClick={()=> handleClick("mas")}>+</button>
//     </div>
//   )
// }
//   export default App;


// import { useRef, useState } from "react";
// import './App.css'

// const App = () => {

//   const [countEstado, setCountEstado] = useState(0);
//   const count = useRef(0);

//   const handleClick = (masMenos) =>{
//     masMenos === "mas" ? count.current++ : count.current--;
//     console.log(count.current)
//   }
  
//   console.log("render")


//   return(
//     <div>
//       <p>{count.current}</p>
//       <button onClick={()=> handleClick("menos")}>-</button>
//       <button onClick={()=> handleClick("mas")}>+</button>
//     </div>
//   )
// }
//   export default App;