# _(<abbr title="Développeur Web et Web Mobile">DWWM</abbr> 2023)_ <abbr title="Compétence Professionnelle">CP</abbr> 7 - Développer des composants métier coté serveur
> [REAC _(24/05/2023)_, pages 27 et 28](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m04&type=t)  
> [RE _(24/05/2023)_, page 12](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m04&type=t)

## 🚀 Contexte
Maintenant que l'on sait modéliser et dialoguer avec notre base de données, on va pouvoir s'attaquer à la logique métier de notre application.  
Dans le cadre d'un projet web, ça représentera principalement nos contrôleurs, middlewares et services.

Si tu as déjà travaillé sur un projet web, tu as probablement déjà entendu parler du design pattern <abbr title="Modèle-Vue-Contrôleur">MVC</abbr>.  
Et si ce n'est pas le cas, pas de panique, on va voir ensemble ce que c'est !

## 💡 Le design pattern <abbr title="Modèle-Vue-Contrôleur">MVC</abbr>
Le design pattern <abbr title="Modèle-Vue-Contrôleur">MVC</abbr> est un modèle d'architecture logicielle qui sépare les données, la logique métier et l'interface utilisateur.

- **Modèle** : représente les données de l'application. Il contient les classes qui permettent de manipuler les données _(si tu utilises un ORM, tu as des classes pré-construites à partir de ton schéma Prisma qui sont accessibles depuis n'importe quelle instance de Prisma)_.
- **Vue** : représente l'interface utilisateur. C'est ce que l'utilisateur voit et avec quoi il interagit.
- **Contrôleur** : fait le lien entre le modèle et la vue. Il contient la logique métier de l'application.

!!! warning "Les schémas disponibles en ligne"
    Il existe de nombreux schémas qui expliquent le design pattern <abbr title="Modèle-Vue-Contrôleur">MVC</abbr> mais ils ne sont pas tous corrects.  
    Enfin, si, ils sont corrects, mais certains ne s'appliquent pas à tous les frameworks et architectures.

Pour t'aider à mieux te représenter l'un des schémas les plus courants, voici un diagramme de séquence "basique" :
``` mermaid
sequenceDiagram
    autonumber

    box Green Navigateur
    actor Utilisateur
    end

    box Purple Serveur
    participant Routeur
    participant Contrôleur
    participant Modèle
    participant Vue
    end

    participant Base de données

    Utilisateur->>Routeur: Je veux voir la page d'accueil
    Routeur->>Contrôleur: Appelle la méthode `home`
    alt Si des données sont nécessaires
        Contrôleur->>Modèle: Demande les données
        Modèle->>Base de données: Récupère les données
        Base de données-->>Modèle: Retourne les données
        Modèle-->>Contrôleur: Retourne les données
    end
    Contrôleur->>Vue: Demande le HTML
    Vue-->>Contrôleur: Retourne le HTML généré
    Contrôleur->>Utilisateur: Retourne le HTML généré
```

Le concept est simple : chaque partie de l'application a un rôle bien défini et ne doit pas empiéter sur le rôle des autres.

??? question "Et si j'ai des middlewares ?"
    Dans la majorité des cas, les middlewares s'exécutent avant le contrôleur même si on peut en avoir à différents moments de la circulation de la donnée.  
    Si tu as déjà utilisé Express, tu as probablement déjà utilisé un middleware pour vérifier si l'utilisateur est connecté avant de lui afficher une page qui est réservée aux utilisateurs connectés.

    ??? example "Exemple d'utilisation d'un middleware"
        ```typescript
        import type { RequestHandler } from "express";

        import * as controllers from './controllers';
        import session from 'express-session';
        import express from 'express';

        const app = express();
        app.set('view engine', 'ejs');
        app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            cookie: { secure: true },
        }));
        
        const isUserConnected: RequestHandler = (req, res, next) => {
            // Si l'utilisateur n'est pas connecté...
            if (!req.session.userId) {
                // ... on appelle la méthode `unauthorized` du contrôleur `error`
                return controller.error.unauthorized(req, res);
            }

            // L'utilisateur est connecté, on peut continuer !
            next();
        };

        // Route accessible par tout le monde, connecté ou non
        app.get('/', controllers.home.index);

        // Route accessible uniquement par les utilisateurs connectés (middleware `isUserConnected`)
        app.get('/dashboard', isUserConnected, controllers.dashboard.index);

        app.listen(3000, () => {
            console.log('Serveur démarré sur le port 3000');
        });
        ```

??? warning "Le cas de React"
    D'après toi, est-ce que React doit être considéré comme la vue dans le design pattern <abbr title="Modèle-Vue-Contrôleur">MVC</abbr> ?  
    La réponse est non !

    React est une bibliothèque JavaScript qui permet de créer des interfaces utilisateur, mais elle n'est pas liée de manière directe à un serveur.  
    Certes, on va consommer une API pour récupérer des données, mais React n'est que le réceptacle de ces données côté client _(navigateur)_.

    On va donc faire simple : on parlera plutôt d'une architecture "client-serveur" avec React côté client et notre API côté serveur.  
    Mais ça n'empêche pas que ton API puisse être une API REST _(ou GraphQL)_ qui respecte le design pattern <abbr title="Modèle-Vue-Contrôleur">MVC</abbr> !  
    Tout dépendra de si tu demandes **dans ton serveur back-end** de retourner une vue _(HTML)_ au navigateur.

## 🧑‍⚖️ Règles et conventions de nommage
Peu importe le contexte dans lequel tu réalises le projet que tu vas soutenir face à ton jury, tu dois respecter les règles et conventions de nommage de l'entreprise.  
Si tu fais un projet personnel, tu peux définir les tiennes, du moment que tu es en mesure de les expliquer à ton jury et que tu les respectes du début à la fin.

!!! info "La cohérence, c'est la clé"
    Pense à être cohérent en ce qui concerne la langue utilisée.

    !!! warning "Pas de franglais !"
        Évite de mélanger plusieurs langues dans tes nommages.  
        Si tu choisis de travailler en français, reste en français.  
        Si tu choisis de travailler en anglais, reste en anglais.

    D'ailleurs, je te recommande chaudement de travailler en anglais ne serait-ce que pour te familiariser avec la langue de Shakespeare qui est, on le rappelle, la langue la plus répandue dans le monde de l'informatique.  
    Tu as évidemment le droit d'utiliser des traducteurs en ligne pour t'aider à trouver le bon mot _(ou la bonne expression)_, on ne te demande pas d'être bilingue !

Pour t'aider à te lancer, tu peux t'inspirer des conventions de nommage les plus répandues que tu trouveras facilement en ligne.

??? example "Court exemple de convention de nommage"
    **Indentations** :

    - **2 espaces** pour le JavaScript
    - **4 espaces** pour le HTML
    - **4 espaces** pour le CSS

    **Syntaxe générale** :

    - **camelCase** pour les variables, fonctions et méthodes
    - **PascalCase** pour les classes et les composants React
    - **kebab-case** pour les noms de fichiers et de dossiers
    - **UPPER_CASE** pour les constantes
    
    **Instructions** :

    - **if** :
        ```javascript
        if (condition) {
          // Instructions
        } else {
          // Instructions
        }
        ```
    - **for** _(et autres boucles)_ :
        ```javascript
        for (let i = 0; i < array.length; i++) {
          // Instructions
        }
        ```
    - **switch** :
        ```javascript
        switch (variable) {
          case 'valeur':
            // Instructions
            break; // Ou `return` si on souhaite sortir de la fonction
          default: // Toujours mettre un `default` avec un `break`/`return`, même si tous les cas sont gérés plus haut et/ou qu'on ne souhaite rien faire
            // Potentielles instructions
            break;
        }
        ```

    **Commentaires** :

    - Dans la langue définie pour le projet
    - JSDoc pour les fonctions et méthodes
    - `// @TODO [nom du développeur]` pour les tâches à réaliser plus tard

    **Imports** :

    - Commencer par importer les types
    - Continuer par les imports de bibliothèques et modules _(de la plus spécifique à la plus générale)_
    - Terminer par les imports non nommés
    - Un saut de ligne entre chaque groupe d'imports
    - Ordonner les imports par taille _(du plus court au plus long)_ puis par ordre alphabétique

    ```typescript
    import type { Type1, Type2 } from 'module';

    import { Component1, Component2 } from 'components';
    import { module1, module2 } from 'module';
    import { lib1, lib2 } from 'library';

    import 'style.css';

    // ...
    ``` 

Au passage, tu as la possibilité de configurer ton éditeur de texte pour qu'il respecte ces conventions de nommage.  
Sur VSCode, l'extension [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) te permettra de vérifier que ton code respecte bien les conventions de nommage que tu auras définies et [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) te permettra de formater ton code automatiquement selon ces mêmes conventions.

Ça me permet également de te rappeler que tu dois **documenter ton code** et ce, **dans la langue définie pour le projet** tout comme les commentaires.  
Le premier réflexe à avoir est de documenter l'installation et l'utilisation de ton projet dans le fichier `README.md` à la racine de ton projet.

Ensuite, n'ai pas peur d'abuser de la JSDoc _(ou PHPDoc si tu travailles en PHP)_ pour documenter tes fonctions et méthodes.  
Par contre, n'abuse pas des commentaires potentiellement "inutiles" qui alourdissent la lecture de ton code, ça peut être contre-productif.

## 🔄 Le jeu d'essai et les tests unitaires
Histoire de faire simple : commençons par le jeu d'essai !

### 🎮 Le jeu d'essai
Le jeu d'essai est un ensemble de données qui permet de tester le bon fonctionnement de l'application.  
Ce type de test se compose de trois parties :

- **Les données d'entrée** : ce sont les données que tu vas envoyer à ton application pour tester son comportement.
- **Les données de sortie attendues** : ce sont les données que tu attends en retour de ton application.
- **Les données de sortie obtenues** : ce sont les données que ton application te renvoie.

Si on prend l'exemple d'un formulaire d'inscription où nous vérifions que l'utilisateur utilise une adresse e-mail valide et unique, ainsi qu'un mot de passe fort _(12 caractères minimum, au moins une majuscule, une minuscule, un chiffre et un caractère spécial)_, voici ce que pourrait donner notre jeu d'essai :

??? example "Données invalides"
    - **Les données d'entrée** :
        - Adresse e-mail : `mauvaise-adresse@email`
        - Mot de passe : `password`
    - **Les données de sortie attendues** :
        - Erreur : `Adresse e-mail invalide`
        - Erreur : `Le mot de passe ne respecte pas les critères de sécurité requis`
    - **Les données de sortie obtenues** :
        - Erreur : `Adresse e-mail invalide`
        - Erreur : `Le mot de passe ne respecte pas les critères de sécurité requis`

??? example "Données valides"
    - **Les données d'entrée** :
        - Adresse e-mail : `bonne-adresse@email.fr`
        - Mot de passe : `Password123&` _(bon, le mot de passe n'est absolument pas "fort", mais il respecte les critères imposés)_
    - **Les données de sortie attendues** :
        - Succès : `Utilisateur inscrit avec succès`
    - **Les données de sortie obtenues** :
        - Succès : `Utilisateur inscrit avec succès`

??? example "Adresse e-mail déjà utilisée"
    - **Les données d'entrée** :
        - Adresse e-mail : `adresse-email@utilisee.fr`
        - Mot de passe : `Password123&`
    - **Les données de sortie attendues** :
        - Erreur : `Adresse e-mail déjà utilisée`
    - **Les données de sortie obtenues** :
        - Erreur : `Adresse e-mail déjà utilisée`

!!! question "Mais alors, comment faire ces tests facilement ?"
    Si je te parle de client HTTP, tu me réponds... ?  
    Postman ? Insomnia ?

    Bingo ! 🎉

    Utiliser un client HTTP comme Postman ou Insomnia te permettra de tester facilement les routes de ton API, et de vérifier que les données que tu envoies sont bien traitées par ton serveur.

### 🧪 Les tests unitaires
Les tests unitaires, c'est un peu comme le jeu d'essai, mais en plus automatisé et surtout axé sur les fonctions et méthodes de ton application.

Le gros avantage que ça va te permettre, c'est de t'assurer que toutes les fonctionnalités développées fonctionnent comme prévu et ce, à chaque fois que tu modifies ton code.  
Oui oui, tu as bien lu : **à chaque fois que tu modifies ton code**, pas forcément à chaque fois que tu modifies une fonction ou une méthode qui avait déjà des tests unitaires.

Alors pas forcément à la moindre modification, je veux plutôt dire que le but est de vérifier avant de livrer !  
Tu peux d'ailleurs faire en sorte que **tous les tests unitaires** doivente passer avant de pouvoir pusher ton code sur la branche principale de ton dépôt Git. Au début c'est casse pied, mais tu verras que ça te permettra de gagner du temps sur le long terme.

L'objectif c'est de t'assurer que tu ne casses pas une fonctionnalité existante en ajoutant une nouvelle fonctionnalité ou en modifiant une fonctionnalité existante pour garantir que ton projet reste fonctionnel et ne casse pas sous les mains des utilisateurs.

??? example "Un petit exemple ?"
    Imaginons que tu as une fonction qui permet de vérifier si une adresse e-mail est valide.  
    Voici ce que pourrait donner un test unitaire pour cette fonction :

    ```typescript
    import { isValidEmail } from './utils';

    describe('isValidEmail', () => {
        it('should return true if the email is valid', () => {
            expect(isValidEmail('fake@email')).toBe(false);
            expect(isValidEmail('true@email.com')).toBe(true);
        });
    });
    ```

## 📝 Critères d'évaluation
!!! abstract "Critères d'évaluation"
    - Les traitements répondent aux fonctionnalités décrites dans le dossier de conception
    - Les composants métier sont sécurisés
    - Les bonnes pratiques de la programmation orientée objet _(POO)_ sont respectées
    - Les règles de nommage sont conformes aux normes de qualité de l’entreprise
    - Le code source est documenté, y compris en anglais
    - Un jeu d’essai fonctionnel et les tests unitaires ont été réalisés pour les composants concernés
    - Les tests de sécurité sont réalisés
    - La démarche structurée de résolution de problème est adaptée en cas de dysfonctionnement

## 📚 Documentations
- [Wikipédia - Design pattern <abbr title="Modèle-Vue-Contrôleur">MVC</abbr>](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur) _(Attention, le schéma présenté n'est pas forcément le plus adapté à tous les frameworks et architectures)_
- [Wikipédia - Conventions de nommage](https://fr.wikipedia.org/wiki/Convention_de_nommage)
- [JSDoc - Documentation](https://jsdoc.app/)
- [PHPDoc - Documentation](https://www.phpdoc.org/)

## ⚙️ Outils
- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)

---

[⬅️ <abbr title="Compétence Professionnelle">CP</abbr> 6 - Développer des composants d’accès aux données SQL et NoSQL](cp-6-developper-des-composants-d-acces-aux-donnees-sql-et-nosql.md)  
[➡️ <abbr title="Compétence Professionnelle">CP</abbr> 8 - Documenter le déploiement d’une application dynamique web ou web mobile](cp-8-documenter-le-deploiement-d-une-application-dynamique-web-ou-web-mobile.md)  
[🏠 Retour à l'accueil du millésime 2023](index.md)