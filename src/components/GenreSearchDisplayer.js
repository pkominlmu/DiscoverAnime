import React from "react";
import { auth } from "../firebaseConfig";
export default function GenreSearchDisplayer({ anime, addWatchlistItem }) {
    
  function submit(title, mal_id, postedBy) {
    addWatchlistItem({ title, mal_id, postedBy });
  }

    function setEndorsements (members) {
        let counter = 0;
        let membersString = "" + members;
        if (membersString.length <= 3) {
            return membersString;
        } else {
            for (var i = membersString.length - 1; i >= 0; i--) {
                counter++;
                if (counter == 3 || counter == 6) {
                    if (membersString.length == 7 && counter == 6) {
                        return membersString;
                    } else {
                        membersString = membersString.substring(0, i) + "," + membersString.substring(i, membersString.length);
                    }
                }
            }
        }
        return membersString;
    }

    function setDescription (synopsis) {
        let synopsisString = "" + synopsis;
        synopsisString = synopsisString.substring(0, (synopsisString.length - 24));
        return synopsisString;
    }
  
    return (
      <article className="anime-displayer">
          <div className="anime-score">
            Viewer Score: <strong>{anime.score}/10</strong> Endorsements: <strong>{setEndorsements(anime.members)}</strong>
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
            <strong>Description:</strong> {setDescription(anime.synopsis)}
          </div>
        <nav className="watchlist-button">
          <button onClick={(e) => submit(anime.title, anime.mal_id, auth.currentUser.uid)}> Add to Watchlist</button>
        </nav>
      </article>
    );
  }