# _(<abbr title="Développeur Web et Web Mobile">DWWM</abbr> 2018)_ <abbr title="Compétence Professionnelle">CP</abbr> 3 - Développer une interface utilisateur web dynamique
> [REAC (03/05/2018), pages 17 et 18](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

## 🚀 Contexte

Et maintenant que tout est fait pour la partie statique, il va falloir mettre en place une partie dynamique !

!!! quote "Mais... comment je peux faire ET du statique, ET du dynamique ?"
    Pas de panique, c'est très simple !
    
    En réalité, toutes les pages peuvent avoir du Javascript sans souci, mais il est important de ne pas parler de Javascript dans la partie statique.  
    Par contre, vu qu'ici on parle de la <abbr title="Compétence Professionnelle">CP</abbr> 3 et donc de contenu dynamique, Javascript prend toute son importance ! Tu peux tout à fait te baser sur la même page que la précédente et parler maintenant des interactions utilisateurs 😉

!!! info "Petit rappel"
    En dehors de l’aspect statique, la <abbr title="Compétence Professionnelle">CP</abbr> 3 se base sur tous les points de la <abbr title="Compétence Professionnelle">CP</abbr> 2, donc référencement et responsive !

Si tu as utilisé des requêtes AJAX pour récupérer des données, c'est le moment de les mettre en avant avec des extraits de code commentés pour expliquer leur fonctionnement !

??? example "Exemple de connexion avec React"
    ```tsx
    import React, { useState } from 'react';

    // On crée un état initial pour notre formulaire
    const initialState = {
      email: '',
      password: '',
    };

    const LoginForm = () => {
      const [form, setForm] = useState(initialState);

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // On récupère le nom et la valeur de l'input qui a déclenché l'événement
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
      };

      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // On empêche le formulaire de se soumettre et donc de recharger la page
        event.preventDefault();
        
        // On peut maintenant envoyer les données du formulaire à notre API
        const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify(form) });
        const data = await response.json();

        // On peut ensuite traiter la réponse de l'API
        // ...
      };

      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jean.dupont@exemple.fr"
          />

          <label htmlFor="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="********"
          />

          <button type="submit">Se connecter</button>
        </form>
      );
    };
    ```

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

[⬅️ <abbr title="Compétence Professionnelle">CP</abbr> 2 - Réaliser une interface utilisateur web statique et adaptable](cp-2-realiser-une-interface-utilisateur-web-statique-et-adaptable.md)  
[➡️ <abbr title="Compétence Professionnelle">CP</abbr> 4 - Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce](cp-4-realiser-une-interface-utilisateur-avec-une-solution-de-gestion-de-contenu-ou-e-commerce.md)  
[🏠 Retour à l'accueil du millésime 2018](index.md)