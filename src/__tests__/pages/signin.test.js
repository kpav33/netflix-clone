import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import SignIn from "../../pages/signin";
import { FirebaseContext } from "../../context/firebase";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

// Doesn't work as it should
// TypeError: Cannot read property 'signInWithEmailAndPassword' of undefined

//       26 |     event.preventDefault();
//       27 |
//     > 28 |     firebase
//          |     ^
//       29 |       .auth()
//       30 |       .signInWithEmailAndPassword(emailAddress, password)
//       31 |       .then(() => {
const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve("I am signed in!")
    ),
  })),
};

// const mockFirebase = {
//   auth: jest.fn(() => {}),
//   signInWithEmailAndPassword: jest.fn(() => Promise.resolve("I am signed in!")),
// };

describe("<SignIn />", () => {
  it("renders the sign in page with a form submission", async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignIn />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      fireEvent.change(getByPlaceholderText("Email address"), {
        target: { value: "karl@gmail.com" },
      });
      fireEvent.change(getByPlaceholderText("Password"), {
        target: { value: "password" },
      });
      fireEvent.click(getByTestId("sign-in"));

      expect(getByPlaceholderText("Email address").value).toBe("");
      expect(getByPlaceholderText("Password").value).toBe("");
      expect(queryByTestId("error")).toBeFalsy();
      //   expect(getByPlaceholderText('Email address').value).toBe('karl@gmail.com');
      //   expect(getByPlaceholderText('Password').value).toBe('password');
      //   expect(queryByTestId('error')).toBeFalsy();
    });
  });
});
