import type { Props } from "@theme/Tag";

import Link from "@docusaurus/Link";

const Tag = ({ permalink, label, count, description }: Props) => {
  const getCountString = () => {
    if (count > 1) return `(${count} références)`;
    return `(${count} référence)`;
  };

  return (
    <Link
      href={permalink}
      title={description}
      className="px-2 py-1 inline-flex gap-2 hover:no-underline rounded-full bg-violet-50 dark:bg-violet-800"
    >
      {label}
      {count && <span className="italic">{getCountString()}</span>}
    </Link>
  );
};

export default Tag;
