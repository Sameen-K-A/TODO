import './public/app.css';
import Heading from './components/Heading';
import Create from './components/Create';
import Center from './components/Center';
import { toast, Toaster } from "sonner";
import { useState, useEffect } from 'react';

function App() {
  const [todoArray, setTodoArray] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodoArray(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoArray));
  }, [todoArray]);

  return (
    <>
      <Toaster position="bottom-right" closeButton="true" />
      <Heading />
      <Create setTodoArray={setTodoArray} todoArray={todoArray} toast={toast} />
      <Center todoArray={todoArray} setTodoArray={setTodoArray} toast={toast} />
    </>
  );
}

export default App;