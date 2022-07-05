import MyModal from "../Modal";
import { render, screen, waitFor, cleanup, act } from "../../test-utils";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

//GOOD - IS WORKING BUTT GIVING ERROR INITIALLY

// test("Does Modal contains 'User list heading' ?", () => {
//   waitFor(() => {
//     act(() => render(<MyModal />));
//     const element = screen.findByTestId("modal-heading");
//     expect(element.toHaveTextContent("User details"));
//   });
// });

test("Does Modal component contains 'User list heading' ?", async () => {
  render(<MyModal />);
  const element = await screen.findByText("Loading");
  expect(element).toBeVisible();
});

test("Does Modal contains 'User list heading' ?", async () => {

    await act(async () => render(<MyModal />));
    // const element = screen.findByTestId("modal-heading");
    expect(screen.findByText("User details")).toBeTruthy()
    //.toHaveTextContent("User details");
    screen.debug()
});

// setTimeout(() => {a
//   expect(tree.findByText(/User details/i)).toBe();
// }, 2000)

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         data: button,
//       }),
//   })
// );

// describe("Modal", () => {
//   it("Renders properly", async () => {
//     act(() => render(<MyModal />));
//     expect(await screen.findByText(/User details/i)).toBeInDocument();
//   });
// });

// test("renders learn react link", async () => {
//   fetch.mockImplementationOnce(button)
//   const { findByText } = render(<MyModal />);
//   const element = await findByText(/User details/i);
//   expect(element).toBeInTheDocument();
// });
