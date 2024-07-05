import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HeaderIllustration from "@site/static/illustrations/notes.svg";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

const Home = () => {
  return (
    <Layout
      title={`Synthèses et ressources pour développeurs`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="bg-violet-600">
      <div className="container flex flex-col-reverse md:flex-row items-center gap-12 text-center md:text-left mx-auto max-w-5xl py-24">
        <div className="md:w-1/2">
          <Heading as="h1" className="text-5xl font-bold text-white">
            {siteConfig.title}
          </Heading>

          <p className="text-xl py-6 text-white">{siteConfig.tagline}</p>

          <div className="md:py-10">
            <Link
              className="bg-white rounded-md text-gray-500 px-4 py-2 text-lg"
              to="/docs/intro"
            >
              Docusaurus Tutorial - 5 min ⏱️
            </Link>
          </div>
        </div>

        <HeaderIllustration role="img" className="hidden md:block !w-1/2" />
      </div>
    </header>
  );
};

export default Home;
