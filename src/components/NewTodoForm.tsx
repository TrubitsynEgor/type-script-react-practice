import React from 'react'

interface INewTodoForm {
	value: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleClick: () => void
}

const NewTodoForm = ({ value, onChange, handleClick }: INewTodoForm) => {
	return (
		<div>
			<input type="text" placeholder='new todo' value={value} onChange={onChange} />
			<button onClick={handleClick}>Add todo</button>
		</div>
	)
}

export default NewTodoForm