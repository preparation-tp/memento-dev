import DefaultAdmonitionTypes from "@docusaurus/theme-classic/lib/theme/Admonition/Types";

interface QuoteAdmonitionProps {
  children: React.ReactNode;
  title: string;
}

const QuoteAdmonition = (props: QuoteAdmonitionProps) => {
  return (
    <div className="admonition admonition-quote alert alert--quote">
      <div className="admonition-heading">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="inline-block w-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
        </svg>

        <span>{props.title}</span>
      </div>

      <div className="admonition-content">{props.children}</div>
    </div>
  );
};

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  quote: QuoteAdmonition,
};

export default AdmonitionTypes;
