import { useLocation } from "react-router";
import styles from "../styles/Post.module.css";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";

function Post() {
    const location = useLocation();
    const post = location.state;
    const [comments, setComments] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getComments() {
            try {
                const URL = `http://localhost:3000/posts/${post.id}/comments`;
                const response = await fetch(URL);

                if (!response.ok) {
                    throw new Error(
                        `${response.status} ${response.statusText}`
                    );
                }

                const responseJson = await response.json();
                const comments = responseJson.comments;
                setComments(comments);
            } catch (err) {
                setError(err.message);
            } finally {
                setFetched(true);
            }
        }

        getComments();
    }, []);

    async function postComment(formData) {
        try{
            const URL = `http://localhost:3000/posts/${post.id}/comments`;
            const content = formData.get("comment");
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ content }),
            });
            const responseJson = await response.json();
            const comment = responseJson.comment;
            setComments([...comments, comment]);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div className={styles.postContainer}>
            <h1>{post.title}</h1>
            <p className={styles.createdDate}>
                {post.author.username} -{" "}
                {format(post.created_date, "dd MMMM yyyy")}
            </p>
            <p className={styles.content}>{post.content}</p>

            <div className={styles.seperator}></div>
            <h2>Comments</h2>
            <form action={postComment} className={styles.commentForm}>
                <textarea
                    name="comment"
                    id="comment"
                    className={styles.commentInput}
                ></textarea>
                <button className={styles.commentBtn}>Comment</button>
            </form>
            <div className={styles.commentSection}>
                {!fetched
                    ? "Fetching..."
                    : error
                    ? error
                    : comments.map((comment) => {
                          return (
                              <CommentItem key={comment.id} comment={comment} />
                          );
                      })}
            </div>
        </div>
    );
}

export default Post;
