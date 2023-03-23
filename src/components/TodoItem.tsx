import React, { useState } from "react"
import { Todo } from "../types"

interface ITodoItem extends Todo {
	className?: string
	removeTodo: (id: Todo['id']) => void
	toggleTodo: (id: Todo['id']) => void
}

interface ITodo {
	id: string,
	title: string,
	completed: boolean
}

const TodoItem = ({ id, title, completed, removeTodo, toggleTodo }: ITodoItem) => {

	const [] = useState<ITodo | null>(null)

	const styles = completed ? 'through' : 'none'

	return (
		<li className={styles + ' item'} style={{ color: 'red', background: 'white' }}>
			<input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
			<span>{title}</span>
			<span className='close' onClick={() => removeTodo(id)}>&times;</span>
		</li>
	)
}


export default TodoItem