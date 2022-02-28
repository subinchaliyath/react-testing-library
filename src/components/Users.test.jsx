import { setupServer } from "msw/node";
import { rest } from "msw";
import Users from "./Users";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.delay(200),
      ctx.json([
        { id: 1, name: "Asif" },
        { id: 2, name: "Asmriti" },
        { id: 2, name: "Nitin" },
        { id: 2, name: "Subin" },
      ])
    );
  })
);
beforeAll(() => server.listen());
afterAll(() => server.close());

test("when clicking the get user button", async () => {
  render(<Users />);
  userEvent.click(
    screen.getByRole("button", {
      name: /get users/i,
    })
  );
  expect(await screen.findByText(/subin/i)).toBeInTheDocument();
});
