import type { Props } from "@theme/TagsListInline";

import Tag from "@theme/Tag";

export default function TagsListInline({ tags }: Props): JSX.Element {
  return (
    <ul className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <li
          key={tag.permalink}
          className="transition-colors rounded-md text-sm"
        >
          <Tag {...tag} />
        </li>
      ))}
    </ul>
  );
}
