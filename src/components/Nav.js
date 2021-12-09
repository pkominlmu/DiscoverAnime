import React from 'react'

export default function Nav({ topAnime }) {
	return (
		<aside>
			<nav>
				<button>Search by Title!</button>
				<button>Search by Genre!</button>
				<button>Your Watchlist</button>
				<h3>Top Anime:</h3>
				{topAnime.map(anime => (
					<div className="topAnime">
						<img src={anime.image_url}/>
						<a 
							href={anime.url} 
							target="_blank"
							key={anime.mal_id} 
							rel="noreferrer">
							{ anime.title }
						</a>
						<button>Add to Watchlist</button> 
					</div>
				))}
			</nav>
		</aside>
	)
}