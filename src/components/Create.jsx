import '../public/create.css';

const Create = () => {
  return (
    <div className="create_div">
      <div className="container">
        <div className="inner-container">
          <input type="text" id="inputbox" placeholder="create new"/>
          <button className="createbtn">Create</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
