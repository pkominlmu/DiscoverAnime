import YouTube from "react-youtube"
export default function Article({ article }) {
  //const target = document.getElementById("YTvideo");
  const opts = {
    height: "780",
    width: "1280",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

  function handleLikes() {
    if (document.getElementById("likes").checked) {
      article.likes += 1;
    }
  }

  /*function hideVideo() {
    if (target.style.display != "none") {
      target.style.display = "none";
    } else {
      target.style.display = "flex";
    }
  }
  <div className="videoButton"><button onClick={() => hideVideo()}>Click to Hide Video</button></div>
  */

  return (
    <article>
      {!article ? (
        <p className="Welcome">Welcome to our Blog site! Select an Article to begin reading.</p>
      ) : (
        <section>
          <h2 className="title">{article.title}</h2>
          <p className="date">{`Date Posted: ${article.date.toDate().toString()}`}</p>
          <p className="postedBy">{`Posted by: ${article.postedBy}`}</p>
          <div className="likes">
          Like: {<input type="radio" id="likes" onChange={() => handleLikes()}/>} Likes: {article.likes}
          </div>
          <p className="body">{article.body}</p>
          <div className="image"> <img src={article.image_url} alt=""/> </div>
          <div className="video" id="YTvideo"> <YouTube videoId={article.video_url} opts={opts}/> </div> 
        </section>
      )}
    </article>
  );
}
