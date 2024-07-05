import { useState } from 'react'
import { Todos } from '../components/Todos'
import './App.css'
import { CreateTodo } from '../components/CreateTodo'

function App() {
  const [todos, setTodos] = useState([])

  fetch("https://localhost:3000").then(
    async function(res){
      const json = await res.json();
        setTodos(json.todos);
      
    }
  )

  return (
    
      <div>
       <CreateTodo></CreateTodo>
       <Todos></Todos>
      </div>
     
  )
}

export default App
