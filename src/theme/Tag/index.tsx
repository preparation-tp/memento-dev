import type { Props } from "@theme/Tag";

import Link from "@docusaurus/Link";

const Tag = ({ permalink, label, count, description }: Props) => {
  return (
    <Link
      href={permalink}
      title={description}
      className="px-2 py-1 inline-block hover:no-underline"
    >
      {label}
      {count && <span>{count}</span>}
    </Link>
  );
};

export default Tag;
