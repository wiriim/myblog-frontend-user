import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import styles from "../styles/Main.module.css";

function Main() {
    const [posts, setPosts] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function getPosts() {
            try {
                const URL = "http://localhost:3000/posts";
                const response = await fetch(URL);

                if (!response.ok) {
                    throw new Error(
                        `${response.status} ${response.statusText}`
                    );
                }

                const responseJson = await response.json();
                const posts = responseJson.posts;
                setPosts(posts);
            } catch (err) {
                setError(err.message);
            } finally {
                setFetched(true);
            }
        }

        getPosts();
    }, []);

    if (!fetched) {
        return "Fetching...";
    }

    if (error) {
        return error;
    }

    return (
        <main className={styles.main}>
            <h1>Posts</h1>
            {posts.map((post) => {
                return <PostItem key={post.id} post={post}></PostItem>;
            })}
        </main>
    );
}

export default Main;
