import React from "react";
import { auth } from "../firebaseConfig";
import UserWatchlistItem from "./UserWatchlistItem";
export default function UserWatchlist({ watchlistItems, setWatchlistItem, watchlistItem, handleWatchlist, watchlistAnime, setWatchlistAnime, watchlistAnimeList }) {
  return (
    <div className="watchlist-page">
      <h6>Your Watchlist!</h6>
      <p className="watchlist-information"><strong>Click on the titles below to see your Anime's information, as well as recommendations and other Seasons!</strong></p>
      <main>
        <form>
          {!watchlistItems
            ? "No Watchlist Items"
            : watchlistItems.map((a) => (
              <div>
                {a.postedBy != auth.currentUser.uid ? "" : (
                  <p className="watchlist-anime-titles" key={a.id} onClick={() => setWatchlistItem(a)}>
                    [{a.title}]
                  </p>
                )}
              </div>
              ))}
        </form>
        <div>
          <UserWatchlistItem 
          watchlistItem={watchlistItem}
          handleWatchlist={handleWatchlist}
          watchlistAnime={watchlistAnime}
          setWatchlistAnime={setWatchlistAnime}
          watchlistAnimeList={watchlistAnimeList}
          />
        </div>
      </main>
    </div>
  );
}
  