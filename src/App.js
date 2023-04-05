import React, { createContext } from 'react'
import Todos from './comp/todos';
import TodoForm from './comp/todoForm';
import { useState } from 'react';

export const TodoContext = createContext()

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false
    }
  ])

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (todoId) => {
    // Perbarui code di sini
    const updatedTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updatedTodos)
  }

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }
  return (
    <TodoContext.Provider value={{toggleCompleted, deleteTodo}}>
      <div style={{textAlign: 'center', padding: '12px'}}>
      <h1>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos}/>
      </div>
    </TodoContext.Provider>
    
       
  );
}

export default App