import type { Props } from "@theme/TagsListInline";

import Tag from "@theme/Tag";

export default function TagsListInline({ tags }: Props): JSX.Element {
  return (
    <ul className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <li
          key={tag.permalink}
          className="border border-violet-400 bg-violet-100 dark:bg-violet-950 transition-colors rounded-md hover:bg-transparent hover:dark:bg-violet-950/20 text-sm"
        >
          <Tag {...tag} />
        </li>
      ))}
    </ul>
  );
}
