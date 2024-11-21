export type Testimonial = {
  name?: string;
  date: Date;
  before: string[];
  during: string[];
  after: string[];
};

export const candidateTestimonials: Testimonial[] = [
  {
    name: "Christian HUMBERT",
    date: new Date("2024-11-18"),
    before: [
      "Comme j'ai l'habitude de donner des conférences, me retrouver devant un jury ne me faisait pas très peur.",
      "La plus grosse appréhension que j'avais, c'était de me dire que j'avais des pros devant moi, et dans mon esprit, **Jury = Sélection** : si ça ne plaît pas, tu es automatiquement recalé...",
    ],
    during: [
      "J'ai eu la chance d'avoir un jury qui a su me mettre à l'aise. J'ai également eu la présence d'un accompagnateur _(aménagement d'épreuves)_, ce qui a contribué à me sentir plus serein.",
      "Les premières secondes semblent toujours un peu longues, mais une fois lancé on oublie qu'on est jugé.",
      "C'est surtout lors des questions du jury qu'il faut bien s'accrocher.",
    ],
    after: [
      'Tu te dis "J\'ai gagné la finale !!".',
      "Tant de temps de formation, des heures de travail pour écrire les dossiers...",
      "Le tout, c'est d'être fier de ton taf, quelque soit le résultat. Et même si tu ne l'as pas du premier coup, les échecs forment à la réussite 😉",
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
  {
    name: "Florence CARLIN",
    date: new Date("2024-11-19"),
    before: [
      "Je suis du genre pas à l'aise en public, d'autant plus en présentation (j'ai un TDAH et beaucoup de mal à trouver mes mots en situation de stress...).",
      "Du coup j'appréhendais juuuste un peu le passage devant le jury.",
      "Par contre, j'étais plutôt fière de mon dossier projet donc ça compensait un peu le stress quand même !",
    ],
    during: [
      "Les jurés m'ont mis plus à l'aise que je ne l'aurais pensé, mais ce qui m'a destabilisé c'est leur côté totalement inexpressifs pendant la présentation !",
      "J'ai réussi à plutôt bien gérer quand même, mais ça fait vraiment bizarre.",
      "J'ai bien aimé le passage des questions, où ils n'ont pas cherché à me \"piéger\" en posant la question de différentes manières pour s'assurer que je comprenais ce que je faisais au-delà du bafouillage.",
      "On a eu des échanges très intéressants, notamment sur la façon dont j'avais un point de notre BDD et c'était cool !",
    ],
    after: [
      "Très fière, très soulagée et plus de confiance en moi qu'avant le passage !",
    ],
  },
  {
    date: new Date("2024-11-20"),
    before: [
      "Je suis timide et pas du tout à l’aise à parler devant un « public », on conseille souvent de ne pas apprendre par cœur son texte mais c’est ce que j’ai fait.",
      "Venant du monde de la logistique, je ne suis également pas à l'aise avec tout ce qui est logiciel de traitement de texte. J'ai passé énormément de temps à faire mes dossiers et ma présentation, mais le principal c'est de montrer au jury que vous avez bossé.",
      "D'autant plus que j'avais repris mon poste en même temps, ce n'était pas évident. J'ai fini ma présentation PowerPoint 2 jours avant ma soutenance.",
    ],
    during: [
      "Ayant beaucoup répété, je finissais en 25 minutes en général, ce qui m'a donné un peu de temps pour de l'improvisation. J'ai finalement terminé ma présentation en 29 minutes.",
      "Ça m'a déstressé pour les questions ! Ça s'est même terminé en discussion, c'était franchement cool 😎",
      "Je pense que ça ne se serait pas passé comme ça si je n'avais pas répété autant !",
      "Le jury m'a félicité pour la soutenance en me reprochant uniquement mon ton monotone pendant la soutenance (l'inconvénient de tout apprendre par cœur).",
    ],
    after: [
      "Je suis sorti avec un bon sentiment, même si j'ai beaucoup galéré à monter mes dossiers. Mais comme avec mon équipe nous avons beaucoup bossé sur le projet, je savais au fond de moi que c'était bon !",
      "Fierté d'avoir réussi, surtout quand on n'est pas à l'aise.",
      "J'espère que mon témoignage peut aider des personnes qui sont dans la même situation que moi. À savoir que j'ai redoublé mon bac à l'époque, parce que je ne travaillais pas assez avant l'examen.",
      "Je me suis promis de ne plus refaire la même erreur !",
    ],
  },
];

export const juryTestimonials: Testimonial[] = [
  {
    name: "Gauthier DANIELS",
    date: new Date("2024-11-18"),
    before: [
      "Avoir été candidat m'a permis de comprendre ce que les candidats ressentent.",
      "J'essaye de mettre les candidats à l'aise, de les rassurer, de les guider.",
      "En prenant le temps de bien lire les dossiers, je prends note des points à aborder lors de l'oral.",
    ],
    during: [
      "J'essaye de poser des questions ouvertes, de ne pas donner la réponse, mais de guider le candidat.",
      "Je veux m'assurer que le candidat a compris ce qu'il a fait, qu'il est capable de l'expliquer.",
      'Il n\'y a pas de piège ni de "bonne réponse" _(selon les cas)_, je souhaite comprendre la réflexion du candidat à une situation donnée.',
    ],
    after: [
      "Peu importe le ressenti et/ou le résultat de la soutenance, je prends le temps de donner un retour au candidat, de lui expliquer pourquoi j'ai posé telle question.",
      "Je lui donne des pistes d'amélioration, des axes de travail pour la suite.",
      "Il est important de partager son expérience aux candidats et de leur permettre d'avancer efficacement dans leur projet professionnel.",
    ],
  },
];
