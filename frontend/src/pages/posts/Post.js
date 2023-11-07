import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    dislikes_count,
    dislike_id,
    bookmark_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const isOwner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log("Error while deleting:", err);
    }
  };

  // Handle Like
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
    }
  };

  // Handle dislike
  const handleDislike = async () => {
    try {
      const { data } = await axiosRes.post("/dislikes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, dislikes_count: post.dislikes_count + 1, dislike_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
    }
  };

  // Handle undislike
  const handleUndislike = async () => {
    try {
      await axiosRes.delete(`/dislikes/${dislike_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, dislikes_count: post.dislikes_count - 1, dislike_id: null }
            : post;
        }),
      }));
    } catch (err) {
    }
  };

  // Handle Bookmark
  const handleBookmark = async () => {
    try {
      const { data } = await axiosRes.post("/bookmarks/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, bookmark_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
    }
  };

  // handle Unbookmark
  const handleUnbookmark = async () => {
    try {
      await axiosRes.delete(`/bookmarks/${bookmark_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, bookmark_id: null }
            : post;
        }),
      }));
    } catch (err) {
    }
  };

    
  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span style={{ marginRight: '10px' }}>{updated_at}</span>
            <span>
              {isOwner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't bookmark your own post!</Tooltip>}
              >
                  <i className="far fa-bookmark" />
                </OverlayTrigger>
              ) : bookmark_id ? (
                <span onClick={handleUnbookmark}>
                  <i className={`fas fa-bookmark ${styles.Bookmark}`} />
                </span>
              ) : currentUser ? (
                <span onClick={handleBookmark}>
                  <i className={`far fa-bookmark ${styles.BookmarkOutline}`} />
                </span>
              ) : (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Log in to bookmark posts!</Tooltip>}
                >
                  <i className="far fa-bookmark" />
                </OverlayTrigger>
              )}
            </span>
            {isOwner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {'0' && <Card.Title className="text-center">{title}</Card.Title>}
        {content ? <Card.Text>{content}</Card.Text> : null}
        <div className={styles.PostBar}>
          {isOwner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          {isOwner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't dislike your own post!</Tooltip>}
            >
              <i className="far fa-thumbs-down" />
            </OverlayTrigger>
          ) : dislike_id ? (
            <span onClick={handleUndislike}>
              <i className={`fas fa-thumbs-down ${styles.ThumbsDown}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleDislike}>
              <i className={`far fa-thumbs-down ${styles.ThumbsDownOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to dislike posts!</Tooltip>}
            >
              <i className="far fa-thumbs-down" />
            </OverlayTrigger>
          )}
          {dislikes_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;