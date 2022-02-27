import Post from "./Post";
import styles from "../styles/Post.module.css";

const PostList = ({ posts }) => {
  return (
    <>
      {/* home sayfasından gelen posts ile tüm verileri çektik */}
      {posts.map((post) => (
        <div key={post.id} className={styles.grid}>
          {/* buradaki component ile her bir post için işlem yaptık */}
          <Post post={post} />
        </div>
      ))}
    </>
  );
};

export default PostList;
