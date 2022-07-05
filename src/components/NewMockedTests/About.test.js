import About from "../About"
import {render, screen} from "../../test-utils"
import "@testing-library/jest-dom";

// There is nothing here, because it's simple app.

test("Does about has matching information?", async () => {
    render(<About />);
    expect(await screen.findByText(/There is nothing/i)).toBeVisible()
  });