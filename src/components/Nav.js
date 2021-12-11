import React from 'react'
import UserWatchList from './UserWatchlist'

export default function Nav({ topAnime }) {
	return (
			<nav>
				<h3>Popular Anime:</h3>
				{!topAnime
        			? "Please sign in."
					: topAnime.map(anime => (
					<div className="topAnime">
						<img alt="Anime Image" src={anime.image_url}/>
							<a
								href={anime.url} 
								target="_blank"
								key={anime.mal_id} 
								rel="noreferrer">
								{ anime.title }
							</a>
						<button onClick={(e) => console.log(anime.title, anime.mal_id)}>Add to Watchlist</button> 
					</div>
				))}
			</nav>
	)
}