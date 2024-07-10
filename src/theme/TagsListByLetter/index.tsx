import type { TagLetterEntry } from "@docusaurus/theme-common";
import type { Props } from "@theme/TagsListByLetter";

import { listTagsByLetters } from "@docusaurus/theme-common";
import Heading from "@theme/Heading";
import Tag from "@theme/Tag";

const TagLetterEntryItem = ({
  letterEntry,
}: {
  letterEntry: TagLetterEntry;
}) => {
  return (
    <article>
      <Heading
        as="h2"
        id={letterEntry.letter}
        className="mb-2 font-bold text-xl"
      >
        {letterEntry.letter}
      </Heading>

      <ul className="flex flex-wrap gap-2 ml-4">
        {letterEntry.tags.map((tag) => (
          <li key={tag.permalink}>
            <Tag {...tag} />
          </li>
        ))}
      </ul>
    </article>
  );
};

const TagsListByLetter = ({ tags }: Props): JSX.Element => {
  const letterList = listTagsByLetters(tags);

  return (
    <section className="flex flex-col gap-4">
      {letterList.map((letterEntry) => (
        <TagLetterEntryItem
          key={letterEntry.letter}
          letterEntry={letterEntry}
        />
      ))}
    </section>
  );
};

export default TagsListByLetter;
