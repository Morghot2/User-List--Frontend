import { render, screen, act, fireEvent, waitFor } from "../../test-utils";
import ModifyButton from "../ModifyButton";
import "@testing-library/jest-dom";

test("Edit button click", async () => {
  const handleClick = jest.fn();
  render(<ModifyButton action={"edit"} onClick={handleClick} />)
//   const button = await screen.findByTestId("edit-new");
//   fireEvent.click(screen.findByTestId("edit-new"));
  //   await expect(handleClick).toHaveBeenCalledTimes(1);
//   expect(button).toBeVisible();
  screen.debug()
});

it("renders correctly", () => {
  const tree = render(<ModifyButton />);
  expect(tree).toMatchSnapshot();
});
