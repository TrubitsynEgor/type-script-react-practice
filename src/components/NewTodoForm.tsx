import React, { useRef } from 'react'

interface INewTodoForm {
	handleClick: (text: string) => void

}

const NewTodoForm = ({ handleClick }: INewTodoForm) => {
	const inputRef = useRef<HTMLInputElement | null>(null)

	const onClick = () => {
		if (inputRef.current) {
			handleClick(inputRef.current.value)
			inputRef.current.value = ''
		}
	}
	return (
		<div>
			<input type="text" placeholder='new todo' ref={inputRef} />
			<button onClick={onClick}>Add todo</button>
		</div>
	)
}

export default NewTodoForm