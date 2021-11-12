import { findAllByDisplayValue } from "@testing-library/react";
import { useState } from "react";
import { auth } from "../firebaseConfig"
var getYouTubeID = require('get-youtube-id')

export default function ArticleEntry({ addArticle }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [postedBy, setPostedBy] = useState("");
  const [image_url, setImage_url] = useState("");
  const [video_url, setVideo_url] = useState("");

  function checkUID() {
    if (auth.currentUser.uid == "8LxQ0IGvRjMkrz9LZzJwPMKdhHW2") {
      return true;
    } else if (auth.currentUser.uid == "XRxgmNqVjVOiGVrKtLwxUOXG91C2") {
      return true;
    } else { return false; }
  }

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("Both a title and a body must be supplied!");
    } else if (!checkUID()) {
      setError("You are not allowed to create a blog post! This is Paul and Andrew's blog.");
    } else {
      addArticle({ title, body, postedBy, image_url, video_url });
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Title:
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        Body:
        <textarea
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        Image link:
        <input value={image_url} onChange={(e) => setImage_url(e.target.value)} />
        Video link (If you do not include one, an empty YouTube video will appear):
        <input value={video_url} onChange={(e) => setVideo_url(getYouTubeID(e.target.value))} />
        <button type="submit" value={postedBy} onClick={(e) => setPostedBy(auth.currentUser.displayName)}>Create your post!</button>
      </form>
    </div>
  );
}
