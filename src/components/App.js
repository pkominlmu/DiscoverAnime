import "./App.css";
import { useState, useEffect } from "react";
import Title from "./Title";
import Nav from './Nav';
import TitleSearch from "./TitleSearch";
import GenreSearch from "./GenreSearch";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import { fetchWatchlistItems, createWatchlistItem } from "../services/watchlistService";
import UserWatchlist from "./UserWatchlist";

export default function App() {
  const [topAnime, SetTopAnime] = useState([]);
  const [searchAnimeList, setSearchAnimeList] = useState([]);
  const [genreAnimeList, setGenreAnimeList] = useState([]);
  const [watchlistAnimeList, setWatchlistAnimeList] = useState([]);
  const [recommendedAnimeList, setRecommendedAnimeList] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [watchlistAnime, setWatchlistAnime] = useState("");
  const [recommended, setRecommended] = useState("");
  const [showWatchlist, setShowWatchlist] = useState(false);
  const [showTitleSearch, setShowTitleSearch] = useState(false);
  const [showGenreSearch, setShowGenreSearch] = useState(false);
  const [watchlistItems, setWatchlistItems] = useState([]);
  const [watchlistItem, setWatchlistItem] = useState(null);
  const user = useAuthentication();

  useEffect(() => {
    if (user) {
      fetchWatchlistItems().then(setWatchlistItems);
    }
  }, [user])

  function addWatchlistItem({ title, postedBy }) {
    createWatchlistItem({ title, postedBy }).then((watchlistItem) => {
      setWatchlistItem(watchlistItem)
      setWatchlistItems([watchlistItem, ...watchlistItems])
    })
  }

  const GetTopAnime = async () => {
	const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
		.then(res => res.json());

	SetTopAnime(temp.top.slice(0, 20));
}

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnimeByTitle(search);
  };

  const handleGenre = (e) => {
    e.preventDefault();
    fetchAnimeByGenre(genre);
  };

  const handleWatchlist = (e) => {
    e.preventDefault();
    fetchWatchlistAnime(watchlistAnime);
  };

  const handleRecommended = (e) => {
    e.preventDefault();
    fetchRecommendedAnime(recommended);
  };

  const fetchAnimeByTitle = async (name) => {
    const search = await fetch(`https://api.jikan.moe/v3/search/anime?q=${name}&page=1&order_by=title&sort=desc&limit=10`)
      .then((res) => res.json());

    setSearchAnimeList(search.results);
  };

  const fetchAnimeByGenre = async (genreID) => {
    const genre = await fetch(`https://api.jikan.moe/v3/genre/anime/${genreID}/1`)
      .then((res) => res.json());

    setGenreAnimeList(genre.anime.slice(0, 25));
  };

  const fetchWatchlistAnime = async (title) => {
    const watchlistAnime = await fetch(`https://api.jikan.moe/v3/search/anime?q=${title}&page=1&order_by=title&sort=asc&limit=1`)
      .then((res) => res.json());

    setWatchlistAnimeList(watchlistAnime.results);
  }

  const fetchRecommendedAnime = async (malID) => {
    const recommended = await fetch(`https://api.jikan.moe/v3/anime/${malID}/recommendations`)
      .then((res) => res.json());

    setRecommendedAnimeList(recommended.recommendations.slice(0, 25));
  };

  useEffect(() => {
    if (user) {
      GetTopAnime();
    }
  }, [user]);

  return (
    <div className="App">
      <Title />
      <div className="userLogin">
        {!user ? <SignIn /> : <SignOut />}
      </div>
	      {!user ? "" : (
            <nav className="Sidebar">
              <button onClick={() => (
                setShowWatchlist(false), 
                setShowGenreSearch(false),
                setShowTitleSearch(true)
              )}> Search by Title
              </button>
              <button onClick={() => (
                setShowWatchlist(false), 
                setShowGenreSearch(true),
                setShowTitleSearch(false)
              )}> New to Anime? Search by Genre!</button>
              <button onClick={() => (
                setShowWatchlist(true),
                setShowGenreSearch(false),
                setShowTitleSearch(false)
              )}>Your Watchlist</button>
              <Nav topAnime={topAnime}/>
            </nav>
          )}
      <div className="listContent">
        {!user ? 
        (<div className="StartPage">Welcome to DiscoverAnime! Sign in to Begin.</div>
        ) : showTitleSearch ? (
        <TitleSearch
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          searchAnimeList={searchAnimeList}
          addWatchlistItem={addWatchlistItem}
        />) : showWatchlist ? (
            <nav className="userWatchList">
            <UserWatchlist
            watchlistItem={watchlistItem}
            watchlistItems={watchlistItems}
            setWatchlistItem={setWatchlistItem}
            handleWatchlist={handleWatchlist}
            watchlistAnime={watchlistAnime}
            setWatchlistAnime={setWatchlistAnime}
            watchlistAnimeList={watchlistAnimeList}
            />
            </nav>
          ) : showGenreSearch ? (
            <GenreSearch
            handleGenre={handleGenre}
            genre={genre}
            setGenre={setGenre}
            genreAnimeList={genreAnimeList}
            addWatchlistItem={addWatchlistItem}
          />) : (
            <div className="Instructor">Please select a search method to start discovering!</div>
          )}
      </div>
    </div>
  );
}