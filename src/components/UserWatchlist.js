export default function UserWatchlist({ watchlistItems, setWatchlistItem }) {
  return (
    <nav>
      {!watchlistItems
        ? "No Watchlist Items"
        : watchlistItems.map((a) => (
            <p key={a.id} onClick={() => setWatchlistItem(a)}>
              {a.title}
            </p>
          ))}
    </nav>
  );
}
  