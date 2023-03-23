import React, { useState } from "react"

interface ITodoItem {
	id: string,
	title: string,
	completed: boolean
	style?: React.CSSProperties
}
interface ITodo {
	id: string,
	title: string,
	completed: boolean
}

const TodoItem = ({ id, title, completed, style = {} }: ITodoItem) => {

	const [] = useState<ITodo | null>(null)


	return (
		<li style={{ color: 'red', background: 'white', ...style }}>
			<input type="checkbox" checked={completed} />
			<span>{title}</span>
			<span>&times;</span>
		</li>
	)
}


export default TodoItem