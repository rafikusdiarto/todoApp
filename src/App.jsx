import Form from './components/form/Form.jsx'
import Todo from './components/todo/Todo.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [todoItems, setTodoItems] = useState(
    []);

    const createTodoItem = (todo) => {
      const newTodoItems = [...todoItems, { todo}];
      setTodoItems(newTodoItems);
      };

    const deleteTodoItems = (index) => {
      const newTodoItems= [...todoItems]
      newTodoItems.splice(index,1)
      setTodoItems(newTodoItems)
    }

    const updateTodoItem = (index) => {
      const newTodoItems = [...todoItems];
      const item = newTodoItems[index];

      let newItem = prompt(`Update ${item.todo}?`, item.todo);
      let todoObj = { todo: newItem};
      newTodoItems.splice(index, 1, todoObj);
      if (newItem === null || newItem === "") {
        return;
      } else {
        item.todo = newItem;
      }
        setTodoItems(newTodoItems);
      };

  return (
    <>
    <div class="App">
      <header>
        <h1>To do list</h1>
      </header>
      <div class="container konten">
        <Form createTodoItem={createTodoItem}/>
        {todoItems.map((item, index) =>(
          <Todo 
          key={index} 
          index={index} 
          item={item} 
          deleteTodoItems={deleteTodoItems}
          updateTodoItem={updateTodoItem}
          />
        ))}
      </div>
    
    </div>
    </>
  );
}

export default App;
