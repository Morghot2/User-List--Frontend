import { render, screen, act, fireEvent, waitFor } from "../../test-utils";
import MainPage from "../MainPage";
import "@testing-library/jest-dom";

test("Edit main page", async () => {
    render(<MainPage />)
    screen.debug()
  });