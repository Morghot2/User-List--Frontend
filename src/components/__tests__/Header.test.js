import { render, screen, waitFor, cleanup } from "../../test-utils";
import React from "react";
import Header from "../Header";
import '@testing-library/jest-dom';

test("Does Header component has an h1 ''User List ?", () => {
  // render(<Header />);
  // const headingElement = screen.getByText(/User List/i);
  // // setTimeout(() => {
  // //   console.log("This will run after 2 second");
  // //   expect(headingElement).toBeInDocument();
  // // }, 2000);
  // waitFor(( ) => {expect(headingElement).toBeInDocument();})
});

test("Does Header component has an h1 ''User List ?", async () => {
  render(<Header />);
  const headingElement = await screen.findByText(/User List/i, );
  // setTimeout(() => {
  //   console.log("This will run after 2 second");
  //   expect(headingElement).toBeInDocument();
  // }, 2000);
  expect(headingElement).toHaveTextContent('User List');
});

it("renders correctly", () => {
  const tree = render(<Header />);

  expect(tree).toMatchSnapshot();
});

// test("Header renders lazy", () => {
//   const { debug } = render(
//     <React.Suspense fallback="Test loading">
//       <Header />
//     </React.Suspense>
//   );
//   debug();
//   // const headingElement = screen.getByText(/User List/i);
//   // expect(headingElement).toBeInDocument();
//   expect(screen.getByText(/User List/i)).toBeInDocument();
// });
