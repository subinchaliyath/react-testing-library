import { setupServer } from "msw/node";
import { rest } from "msw";
import Users from "./Users";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.delay(200),
      ctx.json([
        { id: 1, name: "Asif" },
        { id: 2, name: "Asmriti" },
        { id: 3, name: "Nitin" },
        { id: 4, name: "Subin" },
      ])
    );
  })
);
beforeAll(() => server.listen());
afterAll(() => server.close());
// describe("when clicking the get user button", () => {
//   fit("loader", async () => {
//     render(<Users />);
//     userEvent.click(
//       screen.getByRole("button", {
//         name: /get users/i,
//       })
//     );
//     await waitForElementToBeRemoved(() => screen.getByText(/loading\.\.\./i));
//   });

//   it("user name", async () => {
//     render(<Users />);
//     userEvent.click(
//       screen.getByRole("button", {
//         name: /get users/i,
//       })
//     );
//     expect(await screen.findByText(/subin/i)).toBeInTheDocument();
//   });
// });
describe("when clicking the get user button", () => {
  beforeEach(() => {
    render(<Users />);
    userEvent.click(
      screen.getByRole("button", {
        name: /get users/i,
      })
    );
  });

  it("loader", async () => {
    await waitForElementToBeRemoved(() => screen.getByText(/loading\.\.\./i));
  });

  it("user name", async () => {
    expect(await screen.findByText(/subin/i)).toBeInTheDocument();
  });
});
