import React from "react";
import { render, waitFor } from "@testing-library/react";
import Server from "./Server";
import fetchPosts from "./utils/api";

jest.mock("./utils/api");

test("data render test", async () => {
  const mockData =[
    {
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      id: 2,
      title: "qui est esse",
      userId: 1
    },
  ];
  fetchPosts.mockResolvedValue(mockData);

  const { getByText } = render(<Server/>);
  expect(getByText(/Loading/i)).toBeInTheDocument();

  await waitFor(()=> {
    expect(getByText(/qui est esse/i)).toBeInTheDocument();
  });
});