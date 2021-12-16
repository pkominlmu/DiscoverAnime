import React from 'react'
import { auth } from '../firebaseConfig'

export default function Nav({ topAnime, addWatchlistItem }) {
	function submit(title, mal_id, postedBy) {
		addWatchlistItem({ title, mal_id, postedBy });
	  }

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
							<button onClick={(e) => submit(anime.title, anime.mal_id, auth.currentUser.uid)}>Add to Watchlist</button> 
					</div>
				))}
			</nav>
	)
}