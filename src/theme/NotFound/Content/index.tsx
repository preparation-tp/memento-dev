import type { Props } from "@theme/NotFound/Content";

import Translate from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import clsx from "clsx";
import Link from "@docusaurus/Link";

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <main
      className={clsx(
        "container mt-16 flex items-center justify-center",
        className
      )}
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <Heading as="h1" className="font-bold text-4xl mb-4">
          <Translate
            id="theme.NotFound.title"
            description="The title of the 404 page"
          >
            Page Not Found
          </Translate>
        </Heading>

        <p>
          <Translate
            id="theme.NotFound.p1"
            description="The first paragraph of the 404 page"
          >
            We could not find what you were looking for.
          </Translate>
        </p>

        <p>
          <Translate
            id="theme.NotFound.p2"
            description="The 2nd paragraph of the 404 page"
          >
            Please contact the owner of the site that linked you to the original
            URL and let them know their link is broken.
          </Translate>
        </p>

        <Link to="/" className="self-center mt-8 button">
          Retourner à la page d'accueil
        </Link>
      </div>
    </main>
  );
}
