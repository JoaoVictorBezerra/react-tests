import React from 'react'

export default function Button({ disabled, children, onClick }: { disabled: boolean, children: React.ReactNode, onClick: () => void }) {
	return (
		<button style={{ padding: '5px', backgroundColor: disabled ? "red" : "blue", color: 'white', border: 'solid', borderColor: 'black' }} onClick={onClick}>{children}</button>
	)
}
