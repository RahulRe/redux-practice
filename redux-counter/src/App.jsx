import { useSelector,useDispatch } from "react-redux"
function App() {
  
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()

  const handleIncrement = ()=>{
    dispatch({type:"INC"})

  }

  const hadleDecerement = ()=>{

    dispatch({type:"DEC"})
  }

  return (
    <div>
      <h1>Couneter</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={hadleDecerement}>Decrement</button>
    </div>
  )
}

export default App
