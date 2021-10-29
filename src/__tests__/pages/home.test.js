import React from "react";
import { render } from "@testing-library/react";
import { Home } from "../../pages";

jest.mock("react-router-dom", () => ({
  Link: "Link",
  Route: ({ children, path }) => children({ match: path === "/somewhere" }),
}));

describe("Homepage", () => {
  it("renders the homepage", () => {
    const { getByText, getAllByText, getAllByPlaceholderText } = render(
      <Home />
    );

    expect(getByText("Unlimited films, TV programmers and more.")).toBeTruthy();
    expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
    expect(getAllByPlaceholderText("Email address")).toBeTruthy();
    expect(getAllByText("Try it now")).toBeTruthy();
    expect(
      getAllByText(
        "Ready to watch? Enter your email to create or restart your membership."
      )
    ).toBeTruthy();
  });
});
