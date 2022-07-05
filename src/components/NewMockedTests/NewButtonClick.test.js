import { render, screen, act, fireEvent, waitFor } from "../../test-utils";
import MainPage from "../MainPage";
import "@testing-library/jest-dom";

// test("NEW button click",  () => {
//   setTimeout(() => {
//     const handleClick = jest.fn();
//     act(() => render(<MainPage />));
//     const button =  screen.findByText(/NEW/i);
//     fireEvent.click(button);
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });
//   }, 2000);

//QUITE WORKING

// test("NEW button click",  async () => {
//   render(<MainPage />);
//   const handleClick = jest.fn();
//   const button = await screen.findByText(/NEW/i);
//   fireEvent.click(button);
//   expect(handleClick).toHaveBeenCalledTimes(1);
// });

test("NEW button click", () => {
  render(<MainPage />);
  waitFor(() => {
    const handleClick = jest.fn();
    const button = screen.findByText(/NEW/i);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
})

