import { fireEvent, render, screen } from "@testing-library/react"
import Button from "../components/Button"

describe('Button Component', () => {
	it("should render with red background if disable", () => {
		render(<Button onClick={() => { }} disabled={true}>Click me</Button>)
		// const button = screen.getByText("Click me");
		const button = screen.getByRole("button", { name: "Click me" })
		expect(button).toHaveStyle("background-color: red")
		fireEvent.click(button)
	})

	it("shoud call onClick prop on click", () => {
		// Retorna uma função monitorada pelo jest para poder fazer assertions com os matchers.
		const onClick = jest.fn();

		render(<Button onClick={onClick} disabled>Click me</Button>)
		const button = screen.getByRole("button", { name: "Click me" })
		fireEvent.click(button)

		// Espera que o onClick seja chamado.
		expect(onClick).toHaveBeenCalled();
	})
})