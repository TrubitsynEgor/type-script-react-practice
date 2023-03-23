import { Todo } from './types';
import './App.css';
import TodoItem from './components/TodoItem';
import NewTodoForm from './components/NewTodoForm';
import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const toggleTodo = (id: Todo['id']) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) {
        return todo
      }
      return {
        ...todo,
        completed: !todo.completed
      }
    }))
  }

  const removeTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data: Todo[]) => { setTodos(data) })
  }, [])


  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      title: text,
      completed: false
    }
    setTodos([newTodo, ...todos])
  }


  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
