import Form from './components/form/Form.jsx'
import Todo from './components/todo/Todo.jsx'
import './App.css'



function App() {
  return (
    <>
    <div class="App">
      <header>
        <h1>To do list</h1>
      </header>
      <div class="container konten">
        <Form/>
        <Todo/>
      </div>
    
    </div>
    </>
  );
}

export default App;
