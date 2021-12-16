import { auth } from "../firebaseConfig";
import UserWatchlistDisplayer from "./UserWatchlistDisplayer";

export default function UserWatchlistItem ({ watchlistItem, handleWatchlist, watchlistAnime, setWatchlistAnime, watchlistAnimeList }) {
return (
    <article>
        {!watchlistItem ? ("Select a Watchlist Item to View!"
        ) : watchlistItem.postedBy == auth.currentUser.uid ? (
            <div>
                <form>
                    <p value={watchlistAnime = watchlistItem.title}></p>
                    {setWatchlistAnime(watchlistAnime)}
                    <div className="anime-info-button">
                        <button onClick={handleWatchlist}>Click to see this Anime's information!</button>
                    </div>
                </form>
                <div className="anime-list">
                    {watchlistAnimeList.map((anime) => (
                        <UserWatchlistDisplayer
                        anime={anime}
                        key={anime.mal_id}
                        />
                    ))}
                </div>
            </div>

        ) : ("You have no Watchlist Items.")}
    </article>
)
}