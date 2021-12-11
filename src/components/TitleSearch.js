import React from "react";
import { useEffect, useState } from "react";
import TitleSearchDisplayer from "./TitleSearchDisplayer";
import { useAuthentication } from "../services/authService";
import { fetchWatchlistItems, createWatchlistItem } from "../services/watchlistService";
import UserWatchlist from "./UserWatchlist";
import UserWatchlistItem from "./UserWatchlistItem";

export default function TitleSearch(props) {
  const [watchlistItems, setWatchlistItems] = useState([]);
  const [watchlistItem, setWatchlistItem] = useState(null);
  const user = useAuthentication();

  function addWatchlistItem({ mal_id, score, rated, episodes, link_url, image_url, synopsis, title }) {
    createWatchlistItem({ mal_id, score, rated, episodes, link_url, image_url, synopsis, title }).then((watchlistItem) => {
      setWatchlistItem(watchlistItem)
      setWatchlistItems([watchlistItem, ...watchlistItems])
    })
  }

  /*
  useEffect(() => {
    if (user) {
      fetchWatchlistItems().then(setWatchlistItems);
    }
  }, [user])

  <UserWatchlist watchlistItems={watchlistItems} setWatchlistItem={setWatchlistItem}/>
  <UserWatchlistItem userWatchlistItem={watchlistItem}/>
  */

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
        {props.animeList.map((anime) => (
          <TitleSearchDisplayer anime={anime} key={anime.mal_id} /*addWatchlistItem={addWatchlistItem} *//>
        ))}
      </div>
    </main>
  );
}