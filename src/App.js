import Timer from "./components/Timer";
import Todo from "./components/Todos";
import { useEffect, useState } from "react";
import Counter from "./components/Counter";
function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* {show ? (
        <>
          <Counter />

          <button
            onClick={() => {
              setShow(false);
            }}
          >
            Hide counter
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setShow(true);
            }}
          >
            show
          </button>
        </>
      )} */}
      <Todo />
    </div>
  );
}

export default App;
