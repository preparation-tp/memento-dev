import DefaultAdmonitionTypes from "@docusaurus/theme-classic/lib/theme/Admonition/Types";
import clsx from "clsx";

interface QuoteAdmonitionProps {
  children: React.ReactNode;
  title: string;
}

const headingClasses = ["mb-4", "uppercase", "font-bold", "text-sm"];

const QuoteAdmonition = (props: QuoteAdmonitionProps) => {
  return (
    <div className="admonition admonition-quote alert alert--quote">
      <div className={clsx("admonition-heading", headingClasses)}>
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

        {props.title || "Citation"}
      </div>

      <div className="admonition-content">{props.children}</div>
    </div>
  );
};

const ExampleAdmonition = (props: QuoteAdmonitionProps) => {
  return (
    <div className="admonition admonition-quote alert alert--example">
      <div className={clsx("admonition-heading", headingClasses)}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 256 256"
          className="inline-block w-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M237.66,86.34l-60-60a8,8,0,0,0-11.32,0L37.11,155.57a44.77,44.77,0,0,0,63.32,63.32L212.32,107l22.21-7.4a8,8,0,0,0,3.13-13.25Zm-32.19,6.07a8,8,0,0,0-3.13,1.93l-39.57,39.57c-8.47,2.9-21.75,4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172,43.31,217.19,88.5Z"></path>
        </svg>

        {props.title || "Exemple"}
      </div>

      <div className="admonition-content">{props.children}</div>
    </div>
  );
};

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  quote: QuoteAdmonition,
  example: ExampleAdmonition,
};

export default AdmonitionTypes;
