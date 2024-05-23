import "../public/create.css";
import { useState } from "react";

const Create = (props) => {
  const [newInput, setNewInput] = useState("");
  const { todoArray, setTodoArray , toast} = props;

  function createNewOne() {
    if (newInput.trim().length != 0) {
      for(let i=0 ; i<todoArray.length ; i++){
        if(todoArray[i].content.toLowerCase() == newInput.toLowerCase()){
          toast("Already entered" , "Red");
          return false
        }
      }
      const obj = {
        content: newInput,
        id: Date(),
        complete: false,
      };
      setTodoArray([obj, ...todoArray]);
      toast("Created" , "green");
      setNewInput("");
    } else {
      toast("Enter todo content" , "red")
    }
  }

  const enterBtn = (event)=>{
    if(event.key === "Enter"){
      createNewOne();
    }
  }

  return (
    <div className="create_div">
      <div className="container">
        <div className="inner-container">
          <input type="text" id="inputbox" placeholder="create new" value={newInput} onKeyPress={enterBtn} onChange={(event) => setNewInput(event.target.value)}/>
          <button className="createbtn" onClick={createNewOne}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Create;