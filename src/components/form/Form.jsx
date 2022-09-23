// Import Modules
import React from 'react'
import './form.css'
import { useState } from 'react'

const Form = ({createTodoItem}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    if(value === ""){
      return alert("insert To-do again")
    }
      createTodoItem(value)
      alert("new To-do added")
      setValue("")
    }


    return (
    <>
      <div class="container-sm my-3">
        <div class="row text-center">
          <div class="col">
            <p>TASK</p>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <input type="text" placeholder="add new task" value={value} onChange={(e) => setValue(e.target.value)} class="form-control"
                /> 
              </div>
            </form>
          </div>

          {/* <div class="col-3">
            <p>KONDISI</p>
            <select class="form-select" aria-label="Default select example" required>
              <option value="">Penting</option>
              <option value="">Segera</option>
              <option value="">Santuy</option>
            </select>
          </div> */}

          {/* <div class="col-3">
            <p>DEADLINE</p>
            <div class="input-group date" id="datepicker">
              <input type="date" class="form-control"/>
            </div>
          </div> */}

          <div class="row p-1 mb-2">
            <div class="col mt-2 text-center">
              <form onSubmit={handleSubmit} method="">
                <button type="button" onClick={handleSubmit} class="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
      
}

export default Form