# _(<abbr title="Développeur Web et Web Mobile">DWWM</abbr> 2018)_ <abbr title="Compétence Professionnelle">CP</abbr> 5 - Créer une base de données
> [REAC (03/05/2018), pages 21 et 22](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

## 🚀 Contexte

Je pense que les mots sont dits : il faut créer une base de données 🙃  
OK c’est vrai que si on part de ce principe, la CP est vite complétée et on passerait à la CP 6 de suite, mais ça va plus loin en réalité !

Comme pour la CP 1, on va avant toute chose parler de la conception, soit : La modélisation de la base de données.  
Et pour modéliser notre base de données, on va se baser sur la méthode [Merise](https://fr.wikipedia.org/wiki/Merise_(informatique)).

Dans cette méthode on retrouvera plusieurs schémas, notamment ces derniers :
- Le dictionnaire des donnée qui permet de définir les données de chaque entité.
- Le MCD (Modèle Conceptuel de Données) qui permet de définir les entités et les relations entre ces entités.
- Le MLD (Modèle Logique de Données) qui permet de définir les tables et les relations entre ces tables.
- Le MPD (Modèle Physique de Données) qui permet de définir les tables, les relations, les types de données, les contraintes, etc.

Bien qu'il existe des outils pour réaliser ces modèles, il est tout à fait possible de les réaliser avec un papier et un crayon.  
Toutefois, un super outil pour réaliser tout cette conception existe : [Looping](https://www.looping.fr/).

!!! warning "Compatibilité"
    Looping est un logiciel qui fonctionne sous Windows.  
    Pour les utilisateurs de Mac ou Linux, il faudra passer par une machine virtuelle ou un émulateur comme [Wine](https://www.winehq.org/).

## 📝 Critères d'évaluation
!!! abstract "Critères d'évaluation"
    - Les pages web sont conformes à l’expérience utilisateur y compris pour l’expérience mobile
    - L'architecture de l'application répond aux bonnes pratiques de développement et de sécurisation d'application web
    - L’application web est optimisée pour les équipements mobiles
    - La démarche de recherche permet de résoudre un problème technique ou de mettre en œuvre une nouvelle fonctionnalité
    - La veille sur les vulnérabilités connues permet d’identifier des failles potentielles
    - La documentation technique liée aux technologies associées, rédigée en langue anglaise, est comprise (sans contre-sens, ...)

## 🤯 Aller plus loin _(hors référentiel)_

Cette partie concerne principalement les développeuses et développeurs qui ont utilisés des frameworks/bibliothèques
pour le développement de leur interface utilisateur, comme React, Angular, Vue.js, etc.

Dans la plupart des cas, ces outils permettent de créer la partie front-end de manière dynamique, mais sans aucune gestion de la partie back-end.  
Peut-être que vous me voyez venir... 😏

Comme la partie référencement est essentielle sur un site web et sur ce titre professionnel,
il est important de bien comprendre comment fonctionne le référencement sur une application web dynamique qui ne gère pas le back-end.  
Le contenu généré par Javascript _(côté navigateur)_ n'est pas indexé par les moteurs de recherche, ce qui implique que le référencement naturel est impacté.

Pour contre-balancer cet aspect, il est possible de mettre en place des solutions comme le [Server Side Rendering _(SSR)_](https://openclassrooms.com/fr/courses/5922626-optimisez-le-referencement-de-votre-site-seo-en-ameliorant-ses-performances-techniques/6055261-decidez-entre-client-side-et-server-side-rendering) ou le [Static Site Generation _(SSG)_](https://www.cloudflare.com/fr-fr/learning/performance/static-site-generator/) pour générer le contenu côté serveur et le rendre accessible aux moteurs de recherche.

Pour React, l'une des solutions les plus connue reste [Next.js](https://nextjs.org/), qui permet de gérer le rendu côté serveur et de générer des pages statiques.  
On retrouve d'ailleurs une solution similaire pour Vue.js avec [Nuxt.js](https://nuxtjs.org/).

Bien que ces solutions soient très intéressantes, je conseille régulièrement de regarder [Vike](https://vike.dev/)
qui permet aux applications React, Vue, Svelte, Preact, Solid et Angular de palier à ce problème de référencement _(et bien plus encore)_.

---

## 📚 Documentations
- [MDN - Responsive Design](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [MDN - Media Queries](https://developer.mozilla.org/fr/docs/Web/CSS/Media_Queries/Using_media_queries)

---

[⬅️ <abbr title="Compétence Professionnelle">CP</abbr> 2 - Réaliser une interface utilisateur web statique et adaptable](cp-2-realiser-une-interface-utilisateur-web-statique-et-adaptable.md)  
[➡️ <abbr title="Compétence Professionnelle">CP</abbr> 4 - Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce](cp-4-realiser-une-interface-utilisateur-avec-une-solution-de-gestion-de-contenu-ou-e-commerce.md)  
[🏠 Retour à l'accueil du millésime 2018](index.md)