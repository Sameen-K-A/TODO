import './public/app.css'
import Heading from './components/Heading';
import Create from './components/Create';
import Center from './components/Center';
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import {useState} from 'react';

function App() {
  const [todoArray, setTodoArray] = useState([]);

  const toast = (content , color) => {
    Toastify({
      text: content,
      duration: 1500,
      close: false,
      gravity: "top",
      position: "right",
      backgroundColor: color,
    }).showToast();
  };

  return (
    <>
    <Heading/>
    <Create setTodoArray={setTodoArray} todoArray={todoArray} toast={toast} />
    <Center todoArray={todoArray} setTodoArray={setTodoArray} toast={toast}/>
    </>
  );
}

export default App;
