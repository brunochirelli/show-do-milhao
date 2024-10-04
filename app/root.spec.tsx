import { render, screen } from "@testing-library/react";

function App() {
  return <div>Hello</div>;
}

describe("Root", () => {
  it("should render App", () => {
    render(<App />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
