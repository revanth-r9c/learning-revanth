import { render, screen } from "@testing-library/react";
import AppName from "./AppName";

test("renders AppName in heading h1 tag", ()=>{
  render(<AppName />);
  const headingText = screen.getByText(/SkillCone.com/i);
  expect(headingText).toBeInTheDocument();
});