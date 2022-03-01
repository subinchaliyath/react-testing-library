import { render } from "@testing-library/react";
import { DataGrid } from "@mui/x-data-grid";
import DataGridPage, { rows } from "./DataGridPage";

jest.mock("@mui/x-data-grid", () => ({
  ...jest.requireActual("@mui/x-data-grid"),
  DataGrid: jest.fn(() => <div>Table</div>),
}));

describe("MyComponent", () => {
  

  it("renders table passing the expected props", () => {
    render(<DataGridPage />);
    expect(DataGrid).toHaveBeenCalledTimes(1);
    expect(DataGrid).toHaveBeenLastCalledWith(
      {
        rows: rows,
        columns: [
          expect.objectContaining({ field: "id" }),
          expect.objectContaining({ field: "firstName" }),
          expect.objectContaining({ field: "lastName" }),
          expect.objectContaining({ field: "age" }),
        ],
        pageSize: 5,
        checkboxSelection: true,
      },
      {}
    );
  });
});
