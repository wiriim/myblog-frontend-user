import styles from '../styles/Main.module.css';
import { format } from 'date-fns';

function PostItem({ post }) {
    return (
        <div className={styles.postItem}>
            <h2>{post.title}</h2>
            <p className={styles.createdDate}>{post.author.username} - {format(post.created_date, 'dd MMMM yyyy')}</p>
            <p className={styles.content}>{post.content}</p>
        </div>
    );
}
export default PostItem;
