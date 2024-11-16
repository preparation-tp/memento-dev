import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HeaderIllustration from "@site/static/illustrations/notes.svg";
import PwaBanner from "../components/PwaBanner";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

const Home = () => {
  return (
    <>
      <Layout
        title={`Synthèses et ressources pour développeurs`}
        description="Découvrez des synthèses et ressources open-source dans le développement informatique, rédigées par une communauté de développeurs."
      >
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
      <PwaBanner />
    </>
  );
};

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="bg-violet-600">
      <div className="container flex flex-col-reverse md:flex-row items-center gap-12 text-center md:text-left mx-auto max-w-5xl py-16">
        <div className="md:w-1/2">
          <Heading as="h1" className="text-5xl font-bold text-white">
            {siteConfig.title}
          </Heading>

          <p className="text-xl py-6 text-white">{siteConfig.tagline}</p>

          <div className="md:py-10">
            <Link className="button" to="/intro">
              Accédez aux ressources 🚀
            </Link>
          </div>
        </div>

        <HeaderIllustration role="img" className="hidden md:block !w-1/2" />
      </div>
    </header>
  );
};

export default Home;
