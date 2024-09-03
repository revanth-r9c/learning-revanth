import { render, screen } from "@testing-library/react";
import ClickAction from "./ClickAction";
import userEvent from "@testing-library/user-event";

test("render AppName in heading h1 tag", async()=> {
  const mockDisplayMsg = jest.fn();
  render(<ClickAction displayMsg={mockDisplayMsg} />);
  await userEvent.click(screen.getByText(/click me!/i));
  await userEvent.click(screen.getByText(/click me!/i));

  expect(mockDisplayMsg).toHaveBeenCalled();
  expect(mockDisplayMsg).toHaveBeenCalledTimes(2);
});