import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductList from "./ProductList";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          products: [
            { _id: "66c729f734bb8d2444ef3c82", name: "Revanth", price: 393 },
            { _id: "66c585d2eb107a19bcf7d0cd", name: "MASKS", price: 139289 },
          ],
        }),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("displays Loading Products message while fetching", async () => {
  render(<ProductList />);

  fireEvent.click(screen.getByText(/Load Products/i));

  expect(screen.getByText(/Loading Products/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.queryByText(/Loading Products/i)).not.toBeInTheDocument();
  });
});

test("displays product names and prices after loading", async () => {
  render(<ProductList />);

  fireEvent.click(screen.getByText(/Load Products/i));

  await waitFor(() => {
    expect(screen.getByText(/Revanth - \$393/i)).toBeInTheDocument();
    expect(screen.getByText(/MASKS - \$139289/i)).toBeInTheDocument();
  });
});
