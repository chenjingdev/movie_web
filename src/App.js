import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  // const onSubmit = (event) => event.preventDefault();
  return (
    <div>
      <form>
        <input onChange={onChange} type={toDo} placeholder="Write your to do...." />
        <button>addbtn</button>
      </form>
    </div>
  );
}

export default App;
