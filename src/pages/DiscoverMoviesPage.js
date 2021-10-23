import { useState } from "react"
import axios from "axios";
import MovieItem from "../components/MovieItem";

export default function DiscoverMoviesPage () {
  const [searchText, set_searchText] = useState("");
  const [state, setState] = useState({ status: "idle" });

  const search = async () => {
    if (searchText === "") {
      setState({ status: "idle" });
      return;
    }
    setState({ status: "searching" });

    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    // Option A: use the browser-native fetch function
    const data = await fetch(
      `http://www.omdbapi.com/?apikey=5c0f1abe&s=${queryParam}`
    ).then(r => r.json());

    setState({ status: "done", data: data.Search });
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {state.status === "idle" && (
        <p>Type in a search term and click "Search" to start...</p>
      )}
      {state.status === "searching" && <p>Searching...</p>}
      {state.status === "done" && (
        <div>
          <h2>Search results</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "0 -30x",
            }}
          >
            {state.data.map(movie => (
              <MovieItem key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}