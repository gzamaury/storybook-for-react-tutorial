import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders InboxScreen", () => {
  render(<App />);
  const element = screen.getByText(/Taskbox/i);
  expect(element).toBeInTheDocument();
});
