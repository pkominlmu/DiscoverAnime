import React from "react";
import AnimeDisplayer from "./AnimeDisplayer";

export default function Form(input) {
  return (
    <main>
      <div className="search-line">
        <form className="search-box">
          <input
            placeholder="Search for an anime by Title..."
            required
            value={input.search}
            onChange={(e) => input.setSearch(e.target.value)}
          />
          <button onClick={input.handleSearch}>Search!</button>
        </form>
      </div>
      <div className="anime-list">
        {input.animeList.map((anime) => (
          <AnimeDisplayer anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </main>
  );
}