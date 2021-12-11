export default function UserWatchlistItem({ watchlistItem }) {
    return (
        <article className="watchlist-displayer">
            <div className="watchlist-anime-score">
              Viewer Score: <strong>{watchlistItem.score}/10</strong> (Rated{" "}
              <strong>{watchlistItem.rated}</strong>)
            </div>
            <div className="watchlist-anime-episodes">
              <strong>Episodes: {watchlistItem.episodes}</strong>
            </div>
            <a href={watchlistItem.url} target="_blank" rel="noreferrer">
              <div className="watchlist-info-link">
                <strong>Click to See More Info!</strong>
              </div>
              <div className="watchlist-anime-image">
                <img src={watchlistItem.image_url} alt="watchlist-Anime Poster"/>
              </div>
            </a>
            <h2>
              <strong>| {watchlistItem.title} |</strong>
            </h2>
            <div className="watchlist-anime-desc">
              <strong>Description:</strong> {watchlistItem.synopsis}
            </div>
            <nav className="recommended-button" /*onSubmit={submit}*/>
            <button /*onClick={(e) => setMal_Id(watchlistItem.mal_id}*/>Search for Recommended Anime</button>
            </nav>
    </article>
      );
}

