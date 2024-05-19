import '../public/list.css';
import List from '../components/List';

const Center = (props) => {
  const {todoArray,setTodoArray, toast} = props;

  const deleteAll = ()=> {
    setTodoArray([]);
    toast("All records deleted" , "Green");
  }

  return (
    <div className="center">
      <div className="content_div">
        {todoArray.length !== 0 ? (
          <>
          <div className='deleteall_btn_div'>
            <button className="deleteall-btn" onClick={deleteAll}>Delete all</button>
          </div>
          {todoArray.map((elems,index) => {
            return <List key={elems.id} content={elems.content} complete={elems.complete} index={index} todoArray={todoArray} setTodoArray={setTodoArray} toast={toast}/>
          })}
          </>
        ) : (
          <h3>No records found</h3>
        )}
      </div>
    </div>
  );
};

export default Center;