import ClickTwo from "./ClickTwo";
import { fireEvent } from "@testing-library/react";
import { render, screen } from '@testing-library/react';


test("renders msg in h1 tag", async()=>{
  // act(()=>{
    render(<ClickTwo/>);
  // });

  const btnEle = screen.getByRole("button");

  const msgEleDefault = screen.getByText(/default/i);
  expect(msgEleDefault).toBeInTheDocument();
  fireEvent.click(btnEle);
  const msgEle = screen.getByText(/Great Day!/i);
  expect(msgEle).toBeInTheDocument();
})