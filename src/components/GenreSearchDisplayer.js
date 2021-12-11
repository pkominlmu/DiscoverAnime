import React from "react";
export default function GenreSearchDisplayer({ anime, addWatchlistItem }) {
    /*
    const [mal_id, setMal_Id] = useState("");
    const [score, setScore] = useState("");
    const [rated, setRated] = useState("");
    const [episodes, setEpisodes] = useState("");
    const [link_url, setLink_Url] = useState("");
    const [image_url, setImage_Url] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [title, setTitle] = useState("");
  
    function submit(e) {
      e.preventDefault();
      addWatchlistItem({ mal_id, score, rated, episodes, link_url, image_url, synopsis, title });
    }
    */
  
    return (
      <article className="anime-displayer">
          <div className="anime-score">
            Viewer Score: <strong>{anime.score}/10</strong> Fans: <strong>{anime.members}</strong>
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
          <nav className="watchlist-button" /*</article>onSubmit={submit}*/>
            <button onClick={(e) => console.log(anime.mal_id+"", anime.score, anime.rated, anime.episodes, anime.url)/*setMal_Id(anime.mal_id), setScore(anime.score), setRated(anime.rated),
                                    setEpisodes(anime.episodes), setLink_Url(link_url), setImage_Url(anime.image_url),
                                    setSynopsis(anime.synopsis), setTitle(anime.title)*/}> Add to Watchlist</button>
          </nav>
      </article>
    );
  }