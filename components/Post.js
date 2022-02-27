import styles from "../styles/Post.module.css";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <>
      {/* veya <Link href={"/posts/" + post.id}> */}
      <Link href={`/posts/${post.id}`}>
        <a className={styles.card}>
          <h3>{post.title}</h3>
        </a>
      </Link>
    </>
  );
};

export default Post;
