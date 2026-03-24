import { format } from "date-fns";
import styles from "../styles/Post.module.css";

function CommentItem({ comment }) {
    return (
        <div className={styles.commentItem}>
            <h3 className={styles.commentUser}>
                {(comment.user && comment.user.username) || "Anon"}
            </h3>
            <p className={styles.commentDate}>{format(comment.created_date, "dd MMMM yyyy")}</p>
            <p className={styles.commentContent}>{comment.content}</p>
        </div>
    );
}

export default CommentItem;
