import React from "react";
import GenreSearchDisplayer from "./GenreSearchDisplayer";
export default function GenreSearch(props, addWatchlistItem) {
    return (
        <main>
        <div className="genre-page">
            <h4>Search by Genre!</h4>
          <div className="genre-buttons">
              <p>
                <button value={props.genre} onClick={(e) => props.setGenre(1)}>Action</button>
                <button value={props.genre} onClick={(e) => props.setGenre(2)}>Adventure</button>
                <button value={props.genre} onClick={(e) => props.setGenre(3)}>Cars</button>
                <button value={props.genre} onClick={(e) => props.setGenre(4)}>Comedy</button>
                <button value={props.genre} onClick={(e) => props.setGenre(7)}>Mystery</button>
                <button value={props.genre} onClick={(e) => props.setGenre(8)}>Drama</button>
                <button value={props.genre} onClick={(e) => props.setGenre(10)}>Fantasy</button>
                <button value={props.genre} onClick={(e) => props.setGenre(11)}>Game</button>
                <button value={props.genre} onClick={(e) => props.setGenre(13)}>Historical</button>
                <button value={props.genre} onClick={(e) => props.setGenre(14)}>Horror</button>
                <button value={props.genre} onClick={(e) => props.setGenre(17)}>Martial Arts</button>
                <button value={props.genre} onClick={(e) => props.setGenre(18)}>Mecha</button>
                <button value={props.genre} onClick={(e) => props.setGenre(19)}>Music</button>
                <button value={props.genre} onClick={(e) => props.setGenre(20)}>Parody</button>
                <button value={props.genre} onClick={(e) => props.setGenre(21)}>Samurai</button>
                <button value={props.genre} onClick={(e) => props.setGenre(22)}>Romance</button>
                <button value={props.genre} onClick={(e) => props.setGenre(23)}>School</button>
                <button value={props.genre} onClick={(e) => props.setGenre(24)}>Sci-Fi</button>
                <button value={props.genre} onClick={(e) => props.setGenre(25)}>Shoujo</button>
                <button value={props.genre} onClick={(e) => props.setGenre(27)}>Shounen</button>
                <button value={props.genre} onClick={(e) => props.setGenre(29)}>Space</button>
                <button value={props.genre} onClick={(e) => props.setGenre(30)}>Sports</button>
                <button value={props.genre} onClick={(e) => props.setGenre(31)}>Super Power</button>
                <button value={props.genre} onClick={(e) => props.setGenre(32)}>Vampire</button>
                <button value={props.genre} onClick={(e) => props.setGenre(36)}>Slice of Life</button>
                <button value={props.genre} onClick={(e) => props.setGenre(37)}>Supernatural</button>
                <button value={props.genre} onClick={(e) => props.setGenre(38)}>Military</button>
                <button value={props.genre} onClick={(e) => props.setGenre(40)}>Psychological</button>
                <button value={props.genre} onClick={(e) => props.setGenre(41)}>Suspense</button>
            </p>
          </div>
          <form className="genre-search-button">
          <button onClick={props.handleGenre}>Search!</button>
          </form>
        </div>
        <div className="anime-list">
          {props.genreAnimeList.map((anime) => (
            <GenreSearchDisplayer anime={anime} key={anime.mal_id} addWatchlistItem={addWatchlistItem} />
          ))}
        </div>
      </main>
    );
  }
    