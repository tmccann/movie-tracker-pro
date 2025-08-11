import { screen } from "@testing-library/react";

export const getNavBarElements = {
  getElements: () => ({
    title: screen.getByRole("heading", { name: "Movie Tracker Pro" }),
    searchBar: screen.getByLabelText("Search movies"),
    allButton: screen.getByRole("button", { name: "All" }),
    watchedButton: screen.getByRole("button", { name: "Watched" }),
    UnwatchedButton: screen.getByRole("button", { name: "Unwatched" }),
  }),
};
