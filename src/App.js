import { useSelector,useDispatch } from "react-redux";

import { increment } from "./store";
import { decrement } from "./store";
function App()

{
  const count = useSelector(function(state){
    return state.counter.count
  })

  const dispatch = useDispatch()

  function incFunction()
  {
    dispatch(increment())
  }

  function decFunction()
  {
    dispatch(decrement())
  }
  return(
    <div>
    <h1>hello {count}</h1>
    <button onClick={incFunction}>Increment</button>
    <button onClick={decFunction}>Decrement</button>
    </div>
  );
}

export default App;