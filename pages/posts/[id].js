// [id] dinamik olduğu için linkte /posts/'ne yazılırsa yazılsın bu sayfa çalışacaktır'

const PostDetail = ({ post }) => {
  console.log({ post });
  return (
    <>
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default PostDetail;

// link üzerinde id değeri ile her requestte farklı data çekileceği için
//getServerSideProps kullanılır, parametre context ile alınır
// export const getServerSideProps = async (context) => {
//   //veya const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/" + context.params.id
//   );
//   const post = await res.json();

//   return {
//     props: { post },
//   };
// };

//getServerSideProps kullandık ancak biz dönecek olan datanın ne kadar boyutta
//olduğunu bildiğimiz için burada her request işleminde html oluşturmak yerine
//getStaticPaths ve getStaticProps kullanarak her request yerine build edildiği
//zaman html yaptırarak performansı daha yüksek tutabiliriz
export const getStaticPaths = async () => {
  //tüm postlar
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await res.json();

  //tüm id değerlerini tanımlamamız gerek map ile paths içerisine id attık
  const paths = posts.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  //buradaki fallback eğer aranan değer yoksa 404 sayfasını açar
  return {
    paths: paths,
    fallback: false,
  };
};

//getStaticPaths ile kaçtane html sayfası yaratmamız gerektiğini belirttik
//geriye bu post objelerinin verilerine ulaşmak kalıyor
//tek bir objeye ulaşmak içinde context kullanılmalı
export const getStaticProps = async (context) => {
  //tek post
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + context.params.id
  );
  const post = await res.json();

  return {
    props: { post },
  };    
};
