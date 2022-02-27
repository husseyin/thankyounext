import { URL } from "../../environment";

const VideoDetails = ({ video }) => {
  console.log({ video });
  return (
    <>
      <div>
        <h3>{video.name}</h3>
        <p>{video.content}</p>
      </div>
    </>
  );
};

export default VideoDetails;

export const getStaticPaths = async () => {
  const res = await fetch(`${URL}/api/videos`);
  const videos = await res.json();

  const paths = videos.map((video) => {
    return {
      params: { id: video.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${URL}/api/videos/${context.params.id}`);
  const video = await res.json();

  return {
    props: { video },
  };
};
