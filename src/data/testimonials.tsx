export type Testimonial = {
  name?: string;
  date: Date;
  before: string[];
  during: string[];
  after: string[];
};

const testimonials: Testimonial[] = [
  {
    name: "Christian H.",
    date: new Date("2024-11-18"),
    before: [
      "Comme j'ai l'habitude de donner des conférences, me retrouver devant un jury ne me faisait pas très peur.",
      "La plus grosse appréhension que j'avais, c'était de me dire que j'avais des pros devant moi, et dans mon esprit, **Jury = Sélection** : si ça ne plaît pas, tu es automatiquement recalé...",
    ],
    during: [
      "J'ai eu la chance d'avoir un jury qui a su me mettre à l'aise. J'ai également eu la présence d'un accompagnateur _(aménagement d'épreuves)_, ce qui a contribué à me sentir plus serein.",
      "Les premières secondes semblent toujours un peu longue, mais une fois lancé on oublie qu'on est jugé.",
      "C'est surtout lors des questions du jury qu'il faut bien s'accrocher.",
    ],
    after: [
      'Tu te dis "J\'ai gagné la finale !!".',
      "Tant de temps de formation, des heures de travail pour écrire les dossiers...",
      "Le tout, c'est d'être fier de ton taf, quelque soit le résultat. Et même si tu ne l'as pas du premier coup, les échecs forments à la réussite 😉",
    ],
  },
];

export default testimonials;
