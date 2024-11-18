export type Testimonial = {
  name?: string;
  date: Date;
  before: string[];
  during: string[];
  after: string[];
};

const testimonials: Testimonial[] = [
  {
    name: "Christian HUMBERT",
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
  {
    date: new Date("2024-11-18"),
    before: [
      "Stress !!!",
      "C'était vraiment l'inconnu pour moi et je me rappelle m'être dit qu'en plus de six mois, je ne suis plus derrière un écran mais je vais bien être évalué par des professionnels, physiquement, sur un lieu de rendez-vous bien réel !",
      "Je peux ajouter que j'avais quand même un sentiment d'être préparé et d'avoir vraiment travaillé dur entre la fin de ma formation et le TP.",
    ],
    during: [
      "C'est allé assez vite une fois qu'on y est. Tout était programmé dans ma tête, je savais que j'allais :",
      "Me présenter, présenter mon projet puis répondre aux questions.",
      "Lors des questions, j'ai été assez frustré par moment car je connaissais la réponse, mais je ne savais pas comment l'expliquer.",
      "Le jury a été bienveillant et a essayé de me guider sans me donner la réponse pour autant.",
    ],
    after: [
      "Sentiment de soulagement sur 2-3 jours, puis montage russe d'émotions car le processus de reconversion n'est pas fini.",
    ],
  },
];

export default testimonials;
