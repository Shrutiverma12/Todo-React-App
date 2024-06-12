import AddToDo from "./component/AddTodo";
import AppName from "./component/AppName";
import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // const newTodoitem = [
    //   ...todoItems,
    //   { name: itemName, dueDate: itemDueDate },
    // ];
    // setTodoItems(newTodoitem);
    setTodoItems((curVal) => [
      ...curVal,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoitems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoitems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      {todoItems.length == 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
