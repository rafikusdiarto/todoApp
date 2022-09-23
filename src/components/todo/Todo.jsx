import React from 'react'
import "./todo.css"

const Todo = ({item, index, deleteTodoItems, updateTodoItem}) => {

  return (
    <>
      <li class="row mb-3 ms-2">
        <div class="col list">
          <h4>{item.todo}</h4>
        </div>
        {/* <div class="col-3 list ms-2 text-center">
          <h4>Penting</h4>
        </div> */}
        <div class="col-3">
          <button onClick={() => updateTodoItem(index)} class="btn btn-warning me-2" >
            Edit
            <i class="ms-1 fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={()=> deleteTodoItems(index)} class="btn btn-danger" >
            Delete
            <i class="ms-1 fa-regular fa-trash-can"></i>
          </button>
        </div>
      </li>

    </>
  )
}

export default Todo