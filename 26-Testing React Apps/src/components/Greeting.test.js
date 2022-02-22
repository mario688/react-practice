import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    // Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Check text before clicked", () => {
    render(<Greeting />);

    const textElement = screen.getByText("It's good to see you!");

    expect(textElement).toBeInTheDocument();
  });

  test("render changed if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");

    userEvent.click(buttonElement);
    //Assert
    const textElement = screen.getByText("Changed!");

    expect(textElement).toBeInTheDocument();
  });
});
