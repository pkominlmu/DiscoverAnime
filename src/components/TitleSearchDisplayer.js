import React from "react";
import { auth } from "../firebaseConfig";
import { useState } from "react";
export default function TitleSearchDisplayer({ anime, addWatchlistItem }) {
  const [showButton, setShowButton] = useState(true);
  
  function submit(title, mal_id, postedBy) {
    addWatchlistItem({ title, mal_id, postedBy });
    setShowButton(false);
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
        <nav className="watchlist-button">
          {showButton ? (
              <button onClick={(e) => submit(anime.title, anime.mal_id, auth.currentUser.uid)}> Add to Watchlist</button>
            ) : ("")}
        </nav>
    </article>
  );
}