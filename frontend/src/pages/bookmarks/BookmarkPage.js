import React, { useState, useEffect } from "react";
import { axiosRes } from "../../api/axiosDefaults";
import Post from '../posts/Post';

function BookmarkPage() {
    const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

    useEffect(() => {
        async function fetchBookmarkedPosts() {
            try {
                const { data } = await axiosRes.get("/bookmarks/");
                setBookmarkedPosts(data);
            } catch (error) {
                console.error("Error fetching bookmarks", error);
            }
        }

        fetchBookmarkedPosts();
    }, []);

    return (
      <div>
        {bookmarkedPosts.map((bookmark) => (
          <Post key={bookmark.post.id} {...bookmark.post} />
        ))}
      </div>
    );
  
}

export default BookmarkPage;
