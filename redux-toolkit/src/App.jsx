import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './store/index'

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch();

  const handleIncrement = ()=>{
    dispatch(increment())

  }

  const handleDecrement = ()=>{
    dispatch(decrement())

  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App
