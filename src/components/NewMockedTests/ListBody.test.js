import { render, screen, act, fireEvent, waitFor } from "../../test-utils";
import ListBody from "../ListBody";
import "@testing-library/jest-dom";
import { useGetUsersQuery } from "../../redux/slices/apiSlice"

//MOST IMPORTANT: WHEN MOCKICG WITH JEST MOCK THIS THROWS AN ERROR THAT STATE CANNOT BE INITIALIZED WITH UNDEFINED,
// BUT IM USING RTK QUERY FOR FETCHING AND THE CREATOR OR CONTRIBUTOR TO REDUX CODE SAYS THAT ITS NOT POSSIBLE TO HAVE INITIAL STORE IN RTK QUERY - THERE IS AN WORKAROUND BUT I DONT THINK THIS IS CORRECT WAY

// jest.mock("../../redux/slices/apiSlice");

test("List body lists all users", async () => {
    render(<ListBody />)
    const firstUser = await waitFor(() => screen.getByText(/johndoe@gmail\.com/i));
    // screen.debug()
    // await waitFor(() => expect(screen.getByText("First Name")).toBeInTheDocument());
   expect(firstUser).toBeInTheDocument();

  });