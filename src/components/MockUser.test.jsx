import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Users from "./Users";
beforeAll(() => jest.spyOn(window, "fetch"));

describe("when clicking the get user button", () => {
  beforeEach(() => {
    render(<Users />);
    
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        { id: 1, name: "Asif" },
        { id: 2, name: "Asmriti" },
        { id: 3, name: "Nitin" },
        { id: 4, name: "Subin" },
      ],
    });
  });
  it("user name", async () => {
    userEvent.click(
      screen.getByRole("button", {
        name: /get users/i,
      })
    );
    expect(window.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(await screen.findByText(/subin/i)).toBeInTheDocument();
  });
});
