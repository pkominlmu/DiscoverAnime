import React from "react";
import TitleSearchDisplayer from "./TitleSearchDisplayer";

export default function TitleSearch(props) {
  return (
    <main>
      <div className="search-line">
        <h5>Search by Title!</h5>
        <form className="search-box">
          <input
            placeholder="Search for an anime by Title..."
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
          <button onClick={props.handleSearch}>Search!</button>
        </form>
      </div>
      <div className="anime-list">
        {props.searchAnimeList.map((anime) => (
          <TitleSearchDisplayer anime={anime} key={anime.mal_id} addWatchlistItem={props.addWatchlistItem}/>
        ))}
      </div>
    </main>
  );
}