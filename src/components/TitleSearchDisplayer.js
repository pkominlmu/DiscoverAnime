import React from "react";
import { useState } from "react";
import { auth } from "../firebaseConfig";
export default function TitleSearchDisplayer({ anime, addWatchlistItem }) {
  const [title, setTitle] = useState("");
  const [postedBy, setPostedBy] = useState("");
  
  function submit(e) {
    e.preventDefault();
    addWatchlistItem({ title, postedBy });
  }

  return (
    <article className="anime-displayer">
        <div className="anime-score">
          Viewer Score: <strong>{anime.score}/10</strong> (Rated{" "}
          <strong>{anime.rated}</strong>)
        </div>
        <div className="anime-type">
              Type: <strong>{anime.type}</strong>
        </div>
        <div className="anime-episodes">
          <strong>Episodes: {anime.episodes}</strong>
        </div>
        <a href={anime.url} target="_blank" rel="noreferrer">
          <div className="info-link">
            <strong>Click to See More Info!</strong>
          </div>
          <div className="anime-image">
            <img src={anime.image_url} alt="Anime Poster"/>
          </div>
        </a>
        <h2>
          <strong>| {anime.title} |</strong>
        </h2>
        <div className="anime-desc">
          <strong>Description:</strong> {anime.synopsis}
        </div>
        <nav className="watchlist-button" onSubmit={submit}>
          Do you want to add this Anime to your watchlist? <button value={postedBy} onClick={(e) => setPostedBy(auth.currentUser.uid)}>Yes</button>
          <button type="submit" value={title} onClick={(e) => setTitle(anime.title)}> Add to Watchlist</button>
        </nav>
    </article>
  );
}