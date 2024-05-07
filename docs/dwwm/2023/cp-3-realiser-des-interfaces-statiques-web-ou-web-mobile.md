# _(<abbr title="Développeur Web et Web Mobile">DWWM</abbr> 2023)_ <abbr title="Compétence Professionnelle">CP</abbr> 3 - Réaliser des interfaces utilisateur statiques web ou web mobile
> [REAC _(24/05/2023)_, pages 19 et 20](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m04&type=t)  
> [RE _(24/05/2023)_, page 10](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m04&type=t)

## 🚀 Contexte

Pfiou, les maquettes sont terminées et tu as survécu à mes pavés d'explications ! 💪  
Eh bien c'est reparti pour un tour, car maintenant tu vas devoir réaliser les interfaces statiques web ou web mobile à partir de ces maquettes.

!!! question "Mais qu'est-ce qu'une interface statique ?"
    Une interface statique, c'est une interface qui ne bouge pas, qui n'a pas d'interactions avec l'utilisateur autre que les différents liens qui peuvent être présents.

Pour réaliser ces interfaces, tu vas devoir respecter les maquettes que tu as réalisées précédemment, tout en prenant en compte les besoins en éco-conception et en accessibilité. _(je radote, mais c'est important !)_

On va rentrer directement dans le vif du sujet, avec pour commencer... les technologies à utiliser !  
Puisqu'on ne parle pas de dynamique mais de statique, tu vas devoir te tourner vers des technologies front-end, comme le HTML et le CSS. Le Javascript sera également de la partie, mais qu'à partir de la <abbr title="Compétence Professionnelle">CP</abbr> 4 😉

Dans un premier temps, tu vas devoir parler du squelette de ton site, c'est-à-dire de la structure HTML. On retrouvera par ailleurs des notions essentielles comme :

- Les balises sémantiques _(pour une meilleure accessibilité et un meilleur référencement)_
- Les médias _(images, vidéos, sons, etc.)_
- Les liens _(pour naviguer d'une page à une autre)_

Ensuite, tu vas devoir t'occuper de la mise en forme de ton site, c'est-à-dire du CSS.  
N'oublie pas : le site **doit** correspondre aux maquettes que tu as réalisées, et donc respecter la charte graphique.

??? abstract "Petit rappel sur le CSS"
    Le <abbr title="Cascading Style Sheets">CSS</abbr> est un langage de style utilisé pour décrire la présentation d'un document écrit en HTML.  
    Il permet de définir la couleur, la police, la taille et l'espacement des éléments, mais aussi de les positionner sur la page.

    Même si le navigateur stylise déjà certains éléments HTML, il ne faut pas se baser sur les styles par défaut, car ils peuvent varier d'un navigateur à un autre et surtout se casser d'une version à une autre.

    Pour éviter les mauvaises surprises, il est recommandé de réinitialiser les styles par défaut en début de feuille de style, en utilisant par exemple un fichier de réinitialisation comme [Normalize.css](https://necolas.github.io/normalize.css/) ou [Reset CSS](https://meyerweb.com/eric/tools/css/reset/).

Ensuite, tu vas devoir t'assurer que ton site est bien accessible à tous, rendre tes pages web responsives _(c'est-à-dire qu'elles s'adaptent à tous les types d'écrans)_ et enfin, publier ton site de manière sécurisée.

La partie éco-conception sera également à prendre en compte, en veillant à ne pas surcharger ton site en médias inutiles ou trop lourds.

## 👓 L'accessibilité

Dans la compétence précédente, je t'ai parlé de l'accessibilité et de l'importance de rendre un site accessible à tous. On a notamment vu qu'il est important de maîtriser le contraste, la taille de police, le choix de la police et les intitulés des liens et boutons.

Mais au delà de ces aspects, on va également pouvoir donner plus de précisions au navigateur sur le contenu de notre site, en utilisant des balises sémantiques ainsi que des attributs spécifiques : `alt` pour les images, `title` pour les liens, mais surtout `aria-*`.

??? abstract "Petit rappel sur les attributs `aria-*`"
    Les attributs `aria-*` sont des attributs spécifiques qui permettent de donner des informations supplémentaires sur les éléments de la page.  
    Ils sont particulièrement utiles pour les technologies d'assistance, comme les lecteurs d'écran, qui peuvent ainsi mieux comprendre le contenu de la page.

    Par exemple, si tu as un bouton qui ouvre un menu, tu pourrais ajouter l'attribut `aria-expanded="false"` pour indiquer que le menu est fermé, puis le passer à `true` lorsque le menu est ouvert.

    Tu peux retrouver la liste complète des attributs `aria-*` sur le [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).

## 🌐 Le référencement naturel

J'entends déjà l'un de mes chers collègues juré s'impatienter : "Et le référencement, on en parle ?"  
La réponse : bien sûr que <del style="text-decoration: line-through" aria-hidden="true">non</del> oui !

Le référencement naturel, ou SEO _(pour Search Engine Optimization)_, est un ensemble de techniques visant à améliorer la visibilité d'un site web dans les moteurs de recherche.  
On parlera dans un premier temps de l'optimisation du contenu, avec des balises `<title>`, `<meta>`, `<h1>`, `<h2>`, etc., mais aussi de l'optimisation technique, avec la vitesse de chargement, la compatibilité mobile, les balises sémantiques, etc.

On retrouvera également des notions de netlinking _(liens entrants et sortants)_, de maillage interne, de balises `<a>` et `<img>`, de sitemap, de robots.txt, etc.

Ça fait beaucoup, non ? 😅  
Disons que c'est un vaste sujet et qui, même s'il ne fait pas toujours rêver, est indispensable pour que ton site soit visible sur les moteurs de recherche.

Difficile de dire au client "Désolé, votre site n'apparaît pas sur Google et je m'en fiche" !

## 🌳 L'éco-conception

On sait déjà que l'éco-conception c'est l'art de concevoir un site web de manière à réduire son impact environnemental, et que pour cela, il faut éviter d'intégrer beaucoup d'images et autres médias.  
Mais est-ce que ça veut pour autant dire que tu dois te contenter de sites tout moches et tout gris ? Non !

En HTML, au delà de l'import des médias, on ne va pas avoir beaucoup de contrôle sur la consommation énergétique.  
Mais pas aucun contrôle !

L'action la plus primordiale sur les images, c'est dans un premier temps d'utiliser des ressources compressées, mais aussi de les dimensionner correctement.

!!! quote "En CSS, ça prend 2 secondes de redimensionner une image"
    Effectivement, il est possible de redimensionner les images en leur appliquant une largeur et une hauteur.  
    Mais l'image reste chargée en entier, même si elle n'est pas affichée dans sa totalité.  
    Ça voudrait donc dire imposer au navigateur de télécharger une image en haute résolution pour l'afficher en miniature : pas terrible.

    Pour éviter ça, on va dans un premier temps réduire et compresser l'image et on peut également utiliser l'attribut `srcset` qui permet de charger une image en fonction de la taille de l'écran.

Maintenant que nos images sont prêtes, il faut que je vous dise que ce n'est pas tout !  
Il faut également penser au format de nos images. La plupart du temps, on croise des images en JPEG, PNG ou GIF, mais il existe un format plus récent et plus performant : le WebP. _(et non, ce n'est pas un Pokémon)_

??? question "Et le format SVG ? Ce n'est pas bien ?"
    Si, si, le format SVG est très bien !

    C'est vrai que je ne l'évoque pas ici, mais le SVG est un format d'image vectorielle qui a l'avantage d'être léger et de s'adapter à toutes les tailles d'écran sans créer de flou ou pixélisation.

    Il est particulièrement adapté pour les icônes, logos et autres éléments graphiques simples.

Allez cette fois-ci, on ne touche plus aux images et leur format, par contre "comment peut-on les charger ?".  
Celui qui répond "avec une simple balise `<img>` et son attribut `src`" a tout faux ! _(enfin non, pas tout faux, mais pas tout à fait juste)_

On va évidemment utiliser une balise `<img>`, mais on va également utiliser des techniques de chargement différé, comme le lazy loading, qui permet de charger les images uniquement lorsqu'elles sont visibles à l'écran.

En tant que juré, j'ai souvent vu des projets qui exploitent un script JS pour faire du lazy loading, mais il existe un attribut HTML qui permet de faire ça très simplement : `loading="lazy"`.  
De cette manière, nos images ne seront chargées que si elles sont visibles à l'écran, ce qui permet de réduire la consommation de bande passante et donc l'impact environnemental.

??? example "Voici un exemple concret de ce qu'on vient de voir"
    ```html 
    <img
        src="clairiere.jpg"
        srcset="clairiere-480w.webp 480w, clairiere-800w.webp 800w"
        sizes="(max-width: 600px) 480px, 800px"
        alt="Une clairière verdoyante"
        loading="lazy"
    >
    ```

Allez, arrêtons-nous là pour l'éco-conception !

## 📱 Le responsive design

Maintenant que notre site est éco-conçu, accessible et optimisé pour le référencement, il est temps de s'attaquer à la partie responsive design.
Tu connais certainement déjà le principe, mais pour les autres, le responsive design c'est le fait de rendre un site web adaptatif et lisible sur tous les types d'écrans, que ce soit un ordinateur, une tablette ou un smartphone.

Pour cela, nous avons plusieurs possibilités :

- Les media queries _(pour adapter le style en fonction de la taille de l'écran et du type de support)_
- Les unités relatives _(pour adapter la taille des éléments en fonction de la taille de la police)_
    - `em` : unité relative à la taille de la police de l'élément parent
    - `rem` : unité relative à la taille de la police de l'élément racine
    - `%` : unité relative à la taille de l'élément parent
    - `vw/vh` : unité relative à la largeur de la fenêtre _(ainsi que les variantes `lvh/lvw`, `svh/svw` et `dvh/dvw`)_
- Les grid et flexbox _(pour organiser les éléments de manière flexible et adaptative)_

Il est également possible d'utiliser des frameworks CSS, comme Tailwind CSS ou Bootstrap, qui proposent des composants et des classes prédéfinies pour faciliter la mise en place du responsive design.

??? info "Le cas de Bootstrap"
    Alors je vais faire le vieux râleur, mais Bootstrap c'est bien, mais c'est pas bien.

    <iframe src="https://giphy.com/embed/26ufdipQqU2lhNA4g" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

    Mais alors, pourquoi ce n'est pas bien ?  
    Pour faire simple : Bootstrap c'est lourd. Très lourd.

    Il propose beaucoup de fonctionnalités, mais il est très rare de toutes les utiliser et derrière ça implique que le navigateur va charger du code inutile, ce qui va ralentir le chargement de la page.

    Si tu veux utiliser un framework CSS, je te conseille plutôt de te tourner vers Tailwind CSS, qui propose une approche plus modulaire et plus légère.  
    Tailwind CSS viendra te générer un fichier CSS final basé **uniquement** sur les classes que tu utilises, ce qui permet de réduire la taille du fichier final.

    Comme ça, adieu les 200Ko de CSS pour un site qui n'en fait que 20 !

## 🔒 Déploiement et sécurité

Dernière étape avant de pouvoir souffler un peu : le déploiement de ton site.

Pour déployer ton site, tu vas devoir choisir un hébergeur, un nom de domaine, configurer un serveur, transférer tes fichiers, etc.  
Tu peux totalement utiliser des services "gratuits", comme Netlify ou Vercel, mais assure-toi que le service que tu choisis respecte les normes de sécurité, les normes de respect sur les données personnelles, mais surtout que tu sois en mesure de déployer ton site sans ces outils !

Enfin, n'oublie pas de sécuriser ton site, en utilisant un certificat SSL par exemple.

??? question "Un certificat quoi ?"
    Un certificat SSL est un fichier de données qui sécurise les échanges de données entre un serveur
    et un navigateur en cryptant les données transmises.
    Il garantit que les données sont sécurisées et ne peuvent pas être interceptées.

    Tu peux en générer un gratuitement avec [Let's Encrypt](https://letsencrypt.org/), mais il faudra le renouveler tous les 3 mois.

Si tu as la main sur la configuration du serveur, tu pourras également mettre en place des règles de sécurité, comme le CSP _(Content Security Policy)_, qui permet de limiter les risques de failles XSS _(Cross-Site Scripting)_.  
Tu peux également activer la compression Gzip pour réduire la taille des fichiers envoyés au navigateur afin d'accélérer le chargement du site et
de répondre davantage aux critères d'éco-conception.

## 🤯 Aller plus loin _(hors référentiel)_

Tu utilises un site qui tourne sur un port spécifique, mais tu aimerais bien que ton site soit accessible sur les ports 80 _(HTTP)_ et 443 _(HTTPS)_ ?  
Pour ça il y a une merveilleuse technologie qui s'appelle le reverse proxy !

Le reverse proxy, c'est un serveur qui va recevoir les requêtes HTTP et les rediriger vers le serveur qui héberge le site.
Tu peux très bien faire la redirection sur le même serveur, c'est d'ailleurs ce qu'on va faire ici.

Prenons un exemple concret, le cas d'une application qui tourne sur le port 3000, mais que l'on souhaite rendre accessible sur le port 80.

Avec Nginx, on peut faire ça très simplement en créant un fichier de configuration dans `/etc/nginx/sites-available/`.

??? example "Exemple de configuration d'un reverse proxy Nginx"
    ```nginx
    server {
        listen 80;
        listen [::]:80;
        server_name monsite.fr;

        location / {
            proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for ; # On transmet l'adresse IP du client
            proxy_set_header    Host $host; # On transmet le nom de domaine
            proxy_pass          http://localhost:3000; # On redirige les requêtes vers le port 3000, où tourne notre application
        }
    }
    ```

... Tadaaa ! C'est tout !  
Bien entendu, il va falloir activer ce site avec un lien symbolique dans `/etc/nginx/sites-enabled/` et redémarrer Nginx pour que les changements soient pris en compte.  
Si tu souhaites également rajouter le support du HTTPS, tu peux utiliser [Certbot](https://certbot.eff.org/) pour générer un certificat Let's Encrypt.

## 📝 Critères d'évaluation

!!! abstract "Critères d'évaluation"
    - L’interface est conforme à la maquette et les besoins en éco-conception sont pris en compte
    - L’interface tient compte de l’expérience utilisateur, y compris pour les personnes en situation de handicap
    - L’interface respecte les recommandations de sécurité liées aux applications web ou web mobile
    - L’interface s’adapte au type d’utilisation de l‘application, et notamment à la taille, au type et à la disposition du support, y compris pour les équipements mobiles
    - La règlementation en vigueur est respectée, y compris celle relative à l’accessibilité
    - Le site est publié de manière sécurisée
    - Le site est visible sur les moteurs de recherche et le référencement dépend du public

---

## 📚 Documentations

- [Wikipédia - Accessibilité web](https://fr.wikipedia.org/wiki/Accessibilit%C3%A9_du_web)
- [Wikipédia - Référencement naturel](https://fr.wikipedia.org/wiki/R%C3%A9f%C3%A9rencement_naturel)
- [Wikipédia - Éco-conception numérique](https://fr.wikipedia.org/wiki/%C3%89coconception)
- [MDN - Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [Let's Encrypt](https://letsencrypt.org/)

## 🛠️ Outils

- [Certbot](https://certbot.eff.org/)
- [WebAim Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Checker](https://contrastchecker.com/)
- [Coolors - Contrast Checker](https://coolors.co/contrast-checker/112a46-acc8e5)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bootstrap](https://getbootstrap.com/)

---

[⬅️ <abbr title="Compétence Professionnelle">CP</abbr> 2 - Maquetter des interfaces utilisateur web ou web mobile](cp-2-maquetter-des-interfaces-utilisateur-web-ou-web-mobile.md)  
[➡️ <abbr title="Compétence Professionnelle">CP</abbr> 4 - Développer la partie dynamique des interfaces utilisateur web ou web mobile](cp-4-developper-la-partie-dynamique-des-interfaces-utilisateur-web-ou-web-mobile.md)  
[🏠 Retour à l'accueil du millésime 2023](index.md)