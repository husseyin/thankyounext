import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/react.svg" />
      </Head>

      <h1 className="green bigText">About Page</h1>

      <style jsx>{`
        .green {
          color: green;
        }

        .bigText {
          font-size: 4rem;
        }
      `}</style>
    </>
  );
};

export default About;
