import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { increment, decrement } from "../redux/slices/counterSlice"


const Counter = () => {
  
  const counter = useAppSelector( state => state.counter.value )
  const dispatch = useAppDispatch()
  return (
    <>
    <h1>
        count is  {counter}
      </h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default Counter