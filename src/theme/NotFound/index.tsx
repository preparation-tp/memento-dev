import { PageMetadata } from "@docusaurus/theme-common";
import { translate } from "@docusaurus/Translate";
import NotFoundContent from "./Content";
import Layout from "@theme/Layout";

export default function Index(): JSX.Element {
  const title = translate({
    id: "theme.NotFound.title",
    message: "Page Not Found",
  });

  return (
    <>
      <PageMetadata title={title} />
      <Layout>
        <NotFoundContent />
      </Layout>
    </>
  );
}
