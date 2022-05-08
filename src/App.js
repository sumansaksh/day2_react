import "./styles.css";
import { Count } from "./components/counter/Count";
// import {Task} from "./components/input/Task"

import { Task } from "./components/Input/Task";
export default function App() {
  return (
    <div className="App">
      <Count />
      <Task />
    </div>
  );
}
