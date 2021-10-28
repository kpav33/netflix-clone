import React from "react";
import { render } from "@testing-library/react";
import { Profiles } from "../../components";

describe("<Profiles />", () => {
  it("renders the <Profiles /> with the populated data", () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture
              src="/images/test.png"
              data-testid="profile-picture"
            />
            <Profiles.Name>Test name</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profile-picture")).toBeTruthy();
    expect(getByText("Test name")).toBeTruthy();
    expect(container.firstChild).toBeTruthy();
  });

  it("renders the <Profiles /> with populated data bus misc profile image", () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture data-testid="profile-picture-misc" />
            <Profiles.Name>Test name</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profile-picture-misc")).toBeTruthy();
    expect(getByText("Test name")).toBeTruthy();
    expect(container.firstChild).toBeTruthy();
  });
});
