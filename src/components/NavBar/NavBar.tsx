const NavBar = () => {
  return (
    <nav className="bg-[#0D1B2A] text-[#F8F9FA]">
      <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col items-center gap-6">
        {/* Title */}
        <h1 className="font-bold text-4xl text-[#F4D35E] whitespace-nowrap">
          Movie Tracker Pro
        </h1>

        {/* Search and filters */}
        <div className="flex flex-col gap-3 w-full max-w-md">
          <label htmlFor="movieSearch" className="sr-only">
            Search movies
          </label>
          <input
            id="movieSearch"
            type="text"
            placeholder="Search…"
            aria-label="Search movies"
            className="bg-[#F8F9FA] text-[#0D1B2A] rounded-md px-3 py-2
                       outline-none focus:ring-1 focus:ring-[#F4D35E] focus:ring-offset-2 focus:ring-offset-[#0D1B2A]"
          />

          <ul className="flex flex-row justify-center gap-2">
            <li>
              <button
                type="button"
                className="rounded-md px-3 py-2 hover:bg-[#20576e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4D35E]"
              >
                All
              </button>
            </li>
            <li>
              <button
                type="button"
                className="rounded-md px-3 py-2 hover:bg-[#20576e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4D35E]"
              >
                Watched
              </button>
            </li>
            <li>
              <button
                type="button"
                className="rounded-md px-3 py-2 hover:bg-[#20576e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4D35E]"
              >
                Unwatched
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
