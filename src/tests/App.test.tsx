import { render, screen, fireEvent } from "@testing-library/react"
import App from "../App"

// Testes unitários.

describe('App Component', () => {
	it("should change message on button click", () => {

		render(<App />)

		screen.getByText("Let's learn more about testing in React")

		const button = screen.getByText("Click me");

		fireEvent.click(button)

		const newText = screen.getByText("New message!")

		expect(newText).toBeInTheDocument();
	})

	// it("should change message on button click and remove previous message", () => {
	// 	render(<App />)
	// 	screen.getByText("Let's learn more about testing in React")
	// 	const button = screen.getByText("Change message");
	// 	fireEvent.click(button)
	// 	screen.getByText("Testing is awesome!")
	// 	const oldMessage = screen.queryByText("Let's learn more about testing in React");
	// 	// expect(oldMessage).toBeNull();
	// 	// expect(oldMessage).toBeInTheDocument();
	// 	expect(oldMessage).not.toBeInTheDocument();
	// })
})