import { render, screen, act, fireEvent, waitFor } from "../../test-utils";
import MainPage from "../MainPage";
import "@testing-library/jest-dom";

test("Delete button click button click", () => {
    render(<MainPage />);
    waitFor(() => {
    //   const handleClick = jest.fn();
      const buttons = screen.findAllByRole('button');
    //   fireEvent.click(button);
    //   expect(handleClick).toHaveBeenCalledTimes(1);
    expect(buttons.length).toBe(7)
    });
  });