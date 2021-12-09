import "./App.css";
import { useState, useEffect } from "react";
import Title from "./Title";
import Nav from './Nav';
import Form from "./Form";
import { SignIn, SignOut, useAuthentication } from "../services/authService";

export default function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const user = useAuthentication();

  const GetTopAnime = async () => {
	const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
		.then(res => res.json());

	SetTopAnime(temp.top.slice(0, 8));
}

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  const fetchAnime = async (name) => {
    const search = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${name}&page=1&order_by=member&sort=asc&limit=10`
    ).then((res) => res.json());

    setAnimeList(search.results);
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
	  <div className="Sidebar">
	  <Nav 
		  topAnime={topAnime} />
	  </div>
      <div className="allContent">
        <Form
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}