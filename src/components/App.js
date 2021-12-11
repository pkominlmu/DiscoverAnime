import "./App.css";
import { useState, useEffect } from "react";
import Title from "./Title";
import Nav from './Nav';
import TitleSearch from "./TitleSearch";
import GenreSearch from "./GenreSearch";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import UserWatchlist from "./UserWatchlist";

export default function App() {
  const [animeList, setAnimeList] = useState([]);
  const [genreAnimeList, setGenreAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [recommended, setRecommended] = useState("");
  const [showWatchlist, setShowWatchlist] = useState(false);
  const [showTitleSearch, setShowTitleSearch] = useState(false);
  const [showGenreSearch, setShowGenreSearch] = useState(false);
  const user = useAuthentication();

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

  const handleRecommended = (e) => {
    e.preventDefault();
    fetchRecommendedAnime(recommended);
  };

  const fetchAnimeByTitle = async (name) => {
    const search = await fetch(`https://api.jikan.moe/v3/search/anime?q=${name}&page=1&order_by=title&sort=desc&limit=10`)
      .then((res) => res.json());

    setAnimeList(search.results);
  };

  const fetchAnimeByGenre = async (genreID) => {
    const genre = await fetch(`https://api.jikan.moe/v3/genre/anime/${genreID}/1`)
      .then((res) => res.json());

    setGenreAnimeList(genre.anime.slice(0, 25));
  };

  const fetchRecommendedAnime = async (malID) => {
    const recommended = await fetch(`https://api.jikan.moe/v3/anime/${malID}/recommendations`)
      .then((res) => res.json());

    setAnimeList(recommended.recommendations.slice(0, 15));
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
          animeList={animeList}
        />) : showWatchlist ? (
            <nav className="userWatchList">
            <UserWatchlist/>
            </nav>
          ) : showGenreSearch ? (
            <GenreSearch
            handleGenre={handleGenre}
            genre={genre}
            setGenre={setGenre}
            genreAnimeList={genreAnimeList}
          />) : (
            <div className="Instructor">Please select a search method to start discovering!</div>
          )}
      </div>
    </div>
  );
}