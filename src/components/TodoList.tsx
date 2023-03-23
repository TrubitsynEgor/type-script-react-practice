import React from 'react'
import { Todo } from '../types'
import TodoItem from './TodoItem'

interface ITodoList {
	todos: Todo[]
	removeTodo: (id: Todo['id']) => void
	toggleTodo: (id: Todo['id']) => void
}


const TodoList = ({ todos, removeTodo, toggleTodo }: ITodoList) => {

	return (
		<ul>
			{todos.map((todo: Todo) =>
				<TodoItem key={todo.id} {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
			)}
		</ul>
	)
}

export default TodoList