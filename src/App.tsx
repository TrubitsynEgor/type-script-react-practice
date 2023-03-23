
import './App.css';
import TodoItem from './components/TodoItem';
import NewTodoForm from './components/NewTodoForm';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<string[]>([])

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  const addTodo = () => {
    setTodos([text, ...todos])
    setText('')
  }
  return (
    <div className="App">
      <NewTodoForm value={text} onChange={handleInput} handleClick={addTodo} />
      <TodoItem id='123' completed={false} title='first todo' style={{ border: '1px solid black' }} />
    </div>
  );
}

export default App;
