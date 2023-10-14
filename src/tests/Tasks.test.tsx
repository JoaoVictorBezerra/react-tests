import { fireEvent, render, screen } from "@testing-library/react"
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Tasks from "../components/Tasks"

describe('Tasks component', () => {

  const worker = setupServer(
    rest.get("https://jsonplaceholder.typicode.com/todos", async (req, res, context) => {
      return res(
        context.json([
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          }
        ])
      )
    })
  )

  // Ideally, we should start the worker before all tests
  beforeAll(() => worker.listen())

  beforeEach(() => {
    worker.resetHandlers();
  })

  it('should fetch and show tasks on button click', async () => {
    render(<Tasks />)
    const button = screen.getByText("Get tasks from API")
    fireEvent.click(button);

    await screen.findByText("quis ut nam facilis et officia qui")
    // ou
    // await waitFor(() => screen.getByText("quis ut nam facilis et officia qui"))
  })

  it("should show error message on fetch fail", async () => {
    worker.use(
      rest.get("https://jsonplaceholder.typicode.com/todos", async (req, res, context) => {
        return res(
          context.status(500), context.json({ message: "Internal server error" })
        )
      })
    )

    render(<Tasks />)
    const button = screen.getByText("Get tasks from API")
    fireEvent.click(button);

    await screen.findByText("Request failed with status code 500")
  })
})