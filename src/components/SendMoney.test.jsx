import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SendMoney from "./SendMoney";

test("if 5000 is sent, the account balnce is updated", () => {
  // arrange
  render(<SendMoney />);

  // act
  userEvent.type(
    screen.getByRole("spinbutton", { name: /transfer amount/i }),
    "500"
  );
  userEvent.click(
    screen.getByRole("button", {
      name: /send/i,
    })
  );
  //   screen.debug();
  expect(screen.getByText(/balance: 4500/i)).toBeInTheDocument();
});
