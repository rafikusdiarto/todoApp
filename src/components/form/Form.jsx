// Import Modules
import React, { useId } from 'react'
import './form.css'
import { useState } from 'react'
import Todo from '../todo/Todo'
import { v4 as uuidv4 } from 'uuid';

const listTugas= [
  {
    id : 1,
    tugas : 'gambar',
    kondisi : 'mendadak',
  },
  {
    id : 2,
    tugas : 'ngoding',
    kondisi : 'santuy',
  },
  {
    id : 3,
    tugas : 'sebats',
    kondisi : 'penting',
  },
];

const MainForm = () => {
  // menampung data
  const [tugasBaru, setTugasbaru] = useState("");

  const addTodo = () => {
  const newTodo = {tugasBaru, done: false}
    fetch('http://localhost:3000/', {
              method: 'POST',
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(newTodo)
          }).then(() => {
        
  // ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string 
              setTugasbaru("")
              alert('new todo added.')
          });

  };

  // function handleChange(event) {
  //   setdataTugas(event.target.value);
  // }

  // function handleAdd() {
  //   const newData = tugasbaru.concat({ dataTugas, id: uuidv4()});
  //   setTugasbaru(newData);
  //   // setdataTugas('');
  // }
  
  return (
    <>
      <div class="container-sm my-3">
        <div class="row text-center">
          <div class="col">
            <p>TASK</p>
            <form>
              <div class="form-group">
                <input type="text" value={tugasBaru} onChange={(e) =>
                setTugasbaru(e.target.value)} class="form-control"
                /> 
              </div>
            </form>
          </div>

          <div class="col-3">
            <p>KONDISI</p>
            <select class="form-select" aria-label="Default select example" required>
              <option value="">Penting</option>
              <option value="">Segera</option>
              <option value="">Santuy</option>
            </select>
          </div>

          {/* <div class="col-3">
            <p>DEADLINE</p>
            <div class="input-group date" id="datepicker">
              <input type="date" class="form-control"/>
            </div>
          </div> */}

          <div class="row p-1 mb-4">
            <div class="col mt-2 text-center">
              <form action="" method="">
                <button type="button" onClick={addTodo} class="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Todo data={tugasBaru}/>   */}
      
    </>
  )
      
}

export default MainForm