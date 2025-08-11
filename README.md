Movie Tracker Pro — README

A single-page application to track movies you’ve watched, plan to watch, and filter based on your preferences. This project is built with React 19, TypeScript, Vite, Tailwind CSS, and tested with Vitest + React Testing Library.

Features (Phase 1)

Add Movie – Title and 4-digit year, validated before saving

Edit Movie – Update title or year

Remove Movie – Delete from list

Toggle Watched – Mark as watched/unwatched

Search & Filter – By title (case-insensitive contains), exact year, and watched status

Keyboard Friendly – Enter to submit, Esc to cancel edits

Accessible – Labels, focus states, logical tab order

Data Model (v1)

export type Movie = {
id: string;
title: string;
year: number;
watched: boolean;
};

Stack

React 19.1.1

TypeScript

Vite

Yarn

Tailwind CSS

ESLint + Prettier (template defaults)

Vitest + React Testing Library

Project Structure

src/
components/
MovieForm.tsx
MovieList.tsx
MovieItem.tsx
hooks/
types/
movie.ts
utils/
App.tsx

Local Development

# Install dependencies

yarn install

# Start development server

yarn dev

# Run tests

yarn test

Roadmap

Phase 1

Add/Edit/Remove movies

Toggle watched status

Search & filter

Unit tests for core features

Phase 2

Persist movies in localStorage (movieTrackerPro:v1)

More advanced filtering/sorting

Performance optimizations (useMemo, useCallback, React.memo)

Phase 3

Custom hooks for movie logic

Context API (if needed)

Additional accessibility & UX improvements

License

MIT
