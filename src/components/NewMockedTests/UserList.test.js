import { render, screen, waitFor, cleanup, act } from "../../test-utils";
import ListBody from "../ListBody";
// import { rest } from "msw";
// import { setupServer } from "msw/node";
// import { useGetUsersQuery } from "../../redux/slices/apiSlice"

// const userListResponse = rest.get("http://localhost:5001/", (req, res, ctx) => {
//   return res(
//     ctx.json([
//       {
//         id: "1",
//         firstName: "John",
//         lastName: "Doe",
//         email: "johndoe@gmail.com",
//         age: 27,
//       },
//       {
//         id: "2",
//         firstName: "Lech",
//         lastName: "Nowak",
//         email: "nowaklech@gmail.com",
//         age: 25,
//       },
//       {
//         id: "3",
//         firstName: "Jan",
//         lastName: "Kowalski",
//         email: "jankowalski@gmail.com",
//         age: 43,
//       },
//     ]),
//     ctx.delay(150)
//   );
// });
// const handlers = [userListResponse];

// const server = setupServer(...handlers);

// // Enable API mocking before tests.
// beforeAll(() => server.listen());
// // Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers());
// // Disable API mocking after the tests are done.
// afterAll(() => server.close());

test("It should have John properly displayed", async () => {
  act(() => render(<ListBody />)
    //   , {
    //     preloadedState: [
    //       {
    //         id: "1",
    //         firstName: "John",
    //         lastName: "Doe",
    //         email: "johndoe@gmail.com",
    //         age: 27,
    //       },
    //       {
    //         id: "2",
    //         firstName: "Lech",
    //         lastName: "Nowak",
    //         email: "nowaklech@gmail.com",
    //         age: 25,
    //       },
    //       {
    //         id: "3",
    //         firstName: "Jan",
    //         lastName: "Kowalski",
    //         email: "jankowalski@gmail.com",
    //         age: 43,
    //       },
    //     ],
    //   }
  );
  const userItem = await screen.findByText("First Name");
  expect(userItem).toBeVisible() 
});

test("specific user displays", () => {
    act(() => render(<ListBody />))
    waitFor(() => {
        const user = screen.findByText("John")
        expect(user).toBeVisible()
    })
})