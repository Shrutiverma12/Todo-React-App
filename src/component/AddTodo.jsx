import { useState, useRef } from "react";
import { BiSolidAlarmAdd } from "react-icons/bi";

function AddToDo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUodates.current += 1;
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(` No.of updates are :${noOfUodates.current}`);
  // };
  const handleAddButtonClicked = (event) => {
    // setDueDate("");
    // setTodoName("");
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    console.log(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            // onChange={handleDateChange}
            // value={dueDate}
            ref={dueDateElement}
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            type="submit"
            className="btn btn-success kg-button"
            // onClick={handleAddButtonClicked}
          >
            <BiSolidAlarmAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
