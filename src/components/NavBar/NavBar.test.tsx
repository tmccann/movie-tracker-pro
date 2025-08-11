import { render } from "@testing-library/react";
import NavBar from "./NavBar";
import { getNavBarElements } from "./NavBar.helper";

describe("NavBar component", () => {
  beforeEach(() => {
    render(<NavBar />);
  });
  test("title, searchBox , search tabs render", () => {
    const { title, searchBar, allButton, watchedButton, UnwatchedButton } =
      getNavBarElements.getElements();
    expect(title).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(allButton).toBeInTheDocument();
    expect(watchedButton).toBeInTheDocument();
    expect(UnwatchedButton).toBeInTheDocument();
  });
});
