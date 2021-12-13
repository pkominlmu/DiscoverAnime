export default function UserWatchlistDisplayer({ anime }) {
    return (
        <article className="watchlist-displayer">
            <div className="anime-score">
              Viewer Score: <strong>{anime.score}/10</strong> (Rated{" "}
              <strong>{anime.rated}</strong>)
            </div>
            <div className="anime-episodes">
              <strong>Episodes: {anime.episodes}</strong>
            </div>
            <a href={anime.url} target="_blank" rel="noreferrer">
              <div className="info-link">
                <strong>Click to See More Info!</strong>
              </div>
              <div className="anime-image">
                <img src={anime.image_url} alt="watchlist-Anime Poster"/>
              </div>
            </a>
            <h2>
              <strong>| {anime.title} |</strong>
            </h2>
            <div className="anime-desc">
              <strong>Description:</strong> {anime.synopsis}
            </div>
            <nav className="recommended-button" /*onSubmit={submit}*/>
            <button /*onClick={(e) => setMal_Id(anime.mal_id}*/>Search for Recommended Anime</button>
            </nav>
    </article>
      );
}

