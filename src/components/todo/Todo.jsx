import React from 'react'
import "./todo.css"

const Todo = ({data, deleteItem}) => {
   
  return (
    <>
      <div class="row mb-2">
        <div class="col">
          <div class="row ms-2">
            <div class="col list">
              <h4>Makan</h4>
            </div>
            <div class="col-3 list ms-2 text-center">
              <h4>Penting</h4>
            </div>
            <div class="col-3">
              <button class="btn btn-warning me-2" type="submit">
                Edit
                <i class="ms-1 fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn btn-danger" type="submit">
                Delete
                <i class="ms-1 fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mengambil dari data di main form */}
      {/* {data && data.map((tugasBaru) => {
        return(
        ); */}
      ;
    </>
  )
}

export default Todo