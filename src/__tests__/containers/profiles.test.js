import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SelectProfileContainer from "../../containers/profiles";

jest.mock("react-router-dom", () => ({
  Link: "Link",
  Route: ({ children, path }) => children({ match: path === "/somewhere" }),
}));

describe("<Profiles />", () => {
  it("renders the <Profiles />", () => {
    const user = { displayName: "Test", photoURL: "profile.png" };
    const setProfile = jest.fn();
    const { getByTestId } = render(
      <SelectProfileContainer user={user} setProfile={setProfile} />
    );

    fireEvent.click(getByTestId("user-profile"));
    expect(setProfile).toHaveBeenCalled();
  });
});
