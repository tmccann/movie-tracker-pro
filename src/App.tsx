import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Movie } from "./types/movie";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {
      id: "04a2e6ea-9037-408e-ac71-cc8624b1e633",
      title: "The Shawshank Redemption",
      year: "1994",
      watched: true,
    },
  ]);
  // Add MovieFunction title, date year, id will be generated in app
  // Add watched filter watched function
  // Add unwatched filter function
  // Edit movie by id
  // Toggle watched by id
  // Search term function term will be pass from nav bar
  const uuid = self.crypto.randomUUID();
  console.log(uuid);
  return (
    <>
      <NavBar />

      {/* Movie form */}
      {/* AddMovie pass title, year and watched to app*/}
      {/* Edit movie app will pass id title year and watched, movies state will be updated by id */}

      {/* Movie list no filter Pass Movies */}
      {/* Filtre watched = Filtered Watched  */}
      {/* Filter unWated = unwated filter function */}
      {/* MovieList will contain movie item {generate display elements of each movie */}
    </>
  );
};

export default App;
