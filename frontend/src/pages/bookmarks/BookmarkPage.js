import React, { useState, useEffect } from "react";
import { axiosRes } from "../../api/axiosDefaults";

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
                <div key={bookmark.id}>
                    <p>{bookmark.post.title}</p>
                </div>
            ))}
        </div>
    );
}

export default BookmarkPage;
