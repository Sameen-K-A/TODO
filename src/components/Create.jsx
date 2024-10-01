import "../public/create.css";
import { useState } from "react";

const Create = ({ todoArray, setTodoArray , toast}) => {
  const [newInput, setNewInput] = useState("");

  function createNewOne() {
    if (newInput.trim().length != 0) {
      for(let i=0 ; i<todoArray.length ; i++){
        if(todoArray[i].content.toLowerCase() == newInput.toLowerCase()){
          toast("Already entered");
          return false
        }
      }
      const obj = {
        content: newInput,
        id: Date(),
        complete: false,
      };
      setTodoArray([obj, ...todoArray]);
      toast("Created");
      setNewInput("");
    } else {
      toast("Enter todo content")
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