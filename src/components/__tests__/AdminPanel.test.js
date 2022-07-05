import { render, screen, wait, cleanup, act } from "../../test-utils";
import AdminPanel from "../AdminPanel";
import "@testing-library/jest-dom";

test("Does Admin panel has proper text?", () => {
  const tree = render(<AdminPanel />);
  expect(screen.getByTestId("admin")).toHaveTextContent(
    "This page is only for training purpose - React-Router linking - component uses lazy loading"
  );
});

it("renders correctly", () => {
  const tree = render(<AdminPanel />);
  expect(tree).toMatchSnapshot();
});

