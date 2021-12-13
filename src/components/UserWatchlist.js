import UserWatchlistDisplayer from "./UserWatchlistDisplayer";

/*
{props.watchlistAnimeList.map((anime) => (
        <UserWatchlistDisplayer anime={anime} key={anime.mal_id}/>
      ))}
*/


export default function UserWatchlist({ props, watchlistItems}) {
  return (
    <main>
      <form>
        {!watchlistItems
          ? "No Watchlist Items"
          : watchlistItems.map((a) => (
              <p key={a.id} >
                <button /*value={props.watchlistAnime} onClick={props.setWatchlistAnime(a.title)}*/>Click to get this Watchlist item ready for viewing!</button>
                {a.postedBy}
                {a.title}
              </p>
            ))}
            <button /*onClick={props.handleWatchlist}*/>See your watchlist!</button>
      </form>
      <div className="anime-list">
      
      </div>
    </main>
  );
}
  