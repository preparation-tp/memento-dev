import type { Props } from "@theme/DocTagDocListPage";

import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";

import SearchMetadata from "@theme/SearchMetadata";
import Translate from "@docusaurus/Translate";
import Unlisted from "@theme/Unlisted";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import clsx from "clsx";

const DocItem = (props: { doc: Props["tag"]["items"][number] }) => {
  return (
    <article className="p-2 md:p-4 flex flex-col gap-2 border border-gray-200 dark:border-gray-900 bg-violet-50/10 rounded-md shadow">
      <Link to={props.doc.permalink}>
        <Heading as="h3" className="font-bold text-lg">
          {props.doc.title}
        </Heading>
      </Link>

      {props.doc.description && <p>{props.doc.description}</p>}

      <Link
        to={props.doc.permalink}
        className="flex items-center gap-2 hover:no-underline"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
          width="1.25em"
          height="1.25em"
        >
          <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
        </svg>
        Lire la documentation
      </Link>
    </article>
  );
};

const DocTagDocListPageMetadata = (props: Props & { title: string }) => {
  return (
    <>
      <PageMetadata title={props.title} description={props.tag.description} />
      <SearchMetadata tag="doc_tag_doc_list" />
    </>
  );
};

const DocTagDocListPageContent = (props: Props & { title: string }) => {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.page.docsTagDocListPage)}
    >
      <div className="container margin-vert--lg">
        <div className="row">
          <main className="col col--8 col--offset-2">
            {props.tag.unlisted && <Unlisted />}

            <header className="mb-8">
              <Heading as="h1" className="font-bold text-4xl mb-2">
                {props.title}
              </Heading>

              {props.tag.description && <p>{props.tag.description}</p>}

              <Link href={props.tag.allTagsPath} className="italic">
                {"> "}
                <Translate
                  id="theme.tags.tagsPageLink"
                  description="The label of the link targeting the tag list page"
                >
                  View All Tags
                </Translate>
              </Link>
            </header>

            <section className="flex flex-col gap-4">
              <Heading as="h2" className="font-bold text-2xl mb-2">
                Liste des documentations
              </Heading>

              <section className="grid lg:grid-cols-2 gap-2">
                {props.tag.items.map((doc) => (
                  <DocItem key={doc.id} doc={doc} />
                ))}
              </section>
            </section>
          </main>
        </div>
      </div>
    </HtmlClassNameProvider>
  );
};

export default function DocTagDocListPage(props: Props): JSX.Element {
  const title = `Documentations avec le tag "${props.tag.label}"`;

  return (
    <>
      <DocTagDocListPageMetadata {...props} title={title} />
      <DocTagDocListPageContent {...props} title={title} />
    </>
  );
}
