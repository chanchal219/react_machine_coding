import { useState, useEffect } from "react";
const Todolist = () => {
  const [Value, setValue] = useState("");
  const [Tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // useEffect(()=>{
  //  if(Tasks.length==1){
  //     alert('Todo has one element')
  //  }

  // },[Tasks])

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updateTodo = [...Tasks];
      updateTodo[editIndex] = Value;
      setTasks(updateTodo);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTasks([...Tasks, Value]);
    }
    setValue("");
  };
  const handleDelete = (index) => {
    const filteredArray = Tasks.filter((currvalue, i) => {
      return i != index;
    });
    setTasks(filteredArray);
  };
  const handleEdit = (index) => {
    setIsEditing(true);
    setValue(Tasks[index]);
    setEditIndex(index);
  };
  // console.log('Tasks',Tasks)
  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Enter your task"
          value={Value}
          onChange={handleInput}
        />
        <button type="submit" onClick={handlesubmit}>
          {isEditing ? "Update" : "Save"}
        </button>
      </form>
      <ol>
        {Tasks.map((currvalue, index) => (
          <li key={index}>
            <span>{currvalue} </span>
            <button onClick={() => handleDelete(index)}> X</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ol>
      {/* Multiliner arrow function */}
      {/* {
        Tasks.map((currVal,index)=>{
            return <ul>
                <li key={index}>{currVal}</li> 
            </ul>
        })
    } */}
    </>
  );
};
export default Todolist;
