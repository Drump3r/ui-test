import Head from "next/head";
import NavBar from "../components/layout/NavBar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import VoteCardList from "../components/VoteCard/VoteCardList";
import votesApi from "../utils/api/votesApi";

function Home({ votes }) {
  return (
    <>
      <Head>
        <title>Rule of Thumb</title>
        <meta
          name="description"
          content="Rule of Thumb is a crowd sourced court of public opinion where
              anyone and everyone can speak out and speak freely"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <Header />
      <div className="max-centered">
        <aside
          className="banner banner-top"
          role="doc-tip"
          aria-label="Speak Out"
        >
          <div className="banner__left">
            <span className="banner__hairline">Speak out. Be heard.</span>
            <span className="banner__title">Be counted</span>
          </div>
          <div className="banner__right">
            <p className="banner__text">
              Rule of Thumb is a crowd sourced court of public opinion where
              anyone and everyone can speak out and speak freely. It’s easy: You
              share your opinion, we analyze and put the data in a public
              report.
            </p>
          </div>
          <button className="icon-button" aria-label="close">
            <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
              <g stroke="#000" strokeWidth={2} fill="none" fillRule="evenodd">
                <path d="M1 19L19 1M1 1l18 18" />
              </g>
            </svg>
          </button>
        </aside>

        <main role="main">
          {/* <!-- Start: Implementation --> */}

          <VoteCardList votes={votes} />
          {/* <!-- End: Implementation --> */}
        </main>
        <aside
          className="banner banner-bottom"
          role="doc-tip"
          aria-label="Submit a name"
        >
          <img
            srcSet="assets/img/bg-people.png 750w, assets/img/bg-people.@2x.png 1440w"
            sizes="(min-width: 750px) 1440px, 100vw"
            className="banner__background"
            src="assets/img/bg-people.png"
            alt="People"
            role="none"
          />
          <div className="banner__left">
            <h2 className="banner__heading">
              Is there anyone else you would want us to add?
            </h2>
          </div>
          <div className="banner__right">
            <button className="banner__cta">Submit a name</button>
          </div>
        </aside>
        <hr role="separator"></hr>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const votes = await votesApi.findAll();
  return {
    props: {
      votes,
    }, // will be passed to the page component as props
  };
}

export default Home;
