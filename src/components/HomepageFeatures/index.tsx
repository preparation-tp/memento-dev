import type { ComponentProps } from "react";

import Heading from "@theme/Heading";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Compétences clés",
    Svg: require("@site/static/illustrations/coding.svg").default,
    description: (
      <>
        Trouvez toutes les compétences essentielles à maîtriser pour vos
        examens, soigneusement organisées pour que vous sachiez exactement quoi
        apprendre.
      </>
    ),
  },
  {
    title: "Guides et ressources",
    Svg: require("@site/static/illustrations/map.svg").default,
    description: (
      <>
        Explorez des guides et des ressources partagés par la communauté.
        Profitez de l'expertise collective pour réviser chaque sujet de manière
        efficace.
      </>
    ),
  },
  {
    title: "Plateforme communautaire",
    Svg: require("@site/static/illustrations/diversity.svg").default,
    description: (
      <>
        Participez et contribuez à l'amélioration de cette ressource. Rejoignez
        notre communauté open-source et aidez à créer une documentation encore
        plus riche et complète.
      </>
    ),
  },
];

const HomepageFeatures = () => {
  return (
    <section className="flex items-center py-8 w-full">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = (props: FeatureItem) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-center">
        <props.Svg className="w-48 h-48" role="img" />
      </div>

      <div className="text-center">
        <Heading as="h2" className="text-xl font-bold mb-2">
          {props.title}
        </Heading>

        <p className="text-balance">{props.description}</p>
      </div>
    </div>
  );
};

export default HomepageFeatures;
