# _(<abbr title="Développeur Web et Web Mobile">DWWM</abbr> 2023)_ <abbr title="Compétence Professionnelle">CP</abbr> 6 - Développer des composants d’accès aux données SQL et NoSQL
> [REAC _(24/05/2023)_, pages 25 et 26](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m04&type=t)  
> [RE _(24/05/2023)_, page 11](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m04&type=t)

## 🚀 Contexte

Gros morceau la création de bases de données, n'est-ce pas ? 😅  
On va pouvoir souffler un coup en parlant maintenant de l'accès à ces bases de données. _(enfin, souffler... pas trop quand même)_

Et tu sais quoi, comme tout ce qu'on a vu jusqu'à maintenant, on va alléger un peu les choses en parlant de merveilleux outils comme les <abbr titl="Object-Relational Mapping">ORM</abbr> et les <abbr title="Object-Document Mapper">ODM</abbr> !

??? question "C'est quoi un <abbr title='Object-Relational Mapping'>ORM</abbr> et <abbr title='Object-Document Mapper'>ODM</abbr>, et quelles sont les différences ?"
    Les <abbr title='Object-Relational Mapping'>ORM</abbr> et les <abbr title='Object-Document Mapper'>ODM</abbr> sont des outils qui permettent de faire le lien entre les bases de données et les langages de programmation.

    - Les <abbr title='Object-Relational Mapping'>ORM</abbr> sont utilisés pour les bases de données relationnelles, comme MySQL, PostgreSQL ou SQLite. Ils permettent de manipuler les données de la base de données sous forme d'objets, ce qui facilite leur utilisation dans le code.
    - Les <abbr title='Object-Document Mapper'>ODM</abbr> sont utilisés pour les bases de données NoSQL, comme MongoDB. Ils fonctionnent de la même manière que les <abbr title='Object-Relational Mapping'>ORM</abbr>, mais pour les bases de données NoSQL.

    En gros, les <abbr title='Object-Relational Mapping'>ORM</abbr> et les <abbr title='Object-Document Mapper'>ODM</abbr> permettent de simplifier la manipulation des données dans le code, en évitant d'avoir à écrire des requêtes à la main.

Alleeeez, on va voir ça de plus près !

## ⚙️ Configuration d'un <abbr title='Object-Relational Mapping'>ORM</abbr> avec Prisma _(Node.js)_

Pour ce qui est de l'ORM, on va parler de Prisma ! Bien entendu, mis à part la syntaxe, les principes restent les mêmes pour les autres ORM.

??? question "C'est quoi Prisma ?"
    Prisma est un ORM qui permet de simplifier la manipulation des bases de données relationnelles.
    Il permet de générer du code à partir du schéma de la base de données, ce qui facilite la manipulation des données dans le code.

    Prisma est compatible avec plusieurs bases de données relationnelles, comme MySQL, PostgreSQL ou SQLite ainsi que MongoDB pour les bases de données NoSQL.

Dans un premier temps, on va installer Prisma et configurer notre base de données.

??? example "Installation de Prisma _(Node.js)_"
    ```command-line
    npm install prisma --save-dev # Installation de Prisma
    npx prisma init # Initialisation de Prisma dans le projet
    ```

    Une fois Prisma installé et initialisé, on va pouvoir le configurer _(ce qui correspond en partie à la <abbr title="Compétence Professionnelle">CP</abbr> 5)_ :

    - Modifier le fichier `.env` à la racine du projet pour y ajouter les informations de connexion à la base de données
    - Créer les modèles de données dans le dossier `prisma/schema.prisma`

    ??? example "Exemple de fichier `.env`"
        ```env
        DATABASE_URL="postgresql://username:password@localhost:5432/database?schema=public"
        ```

    ??? example "Exemple de fichier `schema.prisma`"
        ```prisma
        datasource db {
          provider = "postgresql"
          url      = env("DATABASE_URL")
        }

        generator client {
          provider = "prisma-client-js"
        }

        model User {
          id       Int      @id @default(autoincrement())
          email    String   @unique
          password String
        }
        ```

!!! question "Je fais mes requêtes SQL à la main, il faut que j'apprenne à utiliser un ORM/ODM ?"
    Non ! D'un certain côté, c'est nettement plus intéressant de savoir réaliser les requêtes par toi-même, sans utiliser d'outils qui génèrent du SQL à ta place.  
    En entreprise, tu vas certainement utiliser ces fameux outils, mais dès que l'on va chercher à avoir les requêtes les plus optimisées possibles, il va falloir mettre les mains dans le cambouis !

Mais avant de vouloir manipuler nos données, on va s'assurer d'une chose primordiale : l'**intégrité des données**.

## 🔎 Intégrité des données

L'intégrité des données, c'est le fait de garantir que les données stockées dans la base de données sont correctes et cohérentes, de la création jusqu'à la suppression.  
Si dans un champ de ta base de données tu attends un nombre entier, tu ne vas pas accepter une chaîne de caractères, n'est-ce pas ?

Et pour garantir cette intégrité, on va mettre en place des vérifications **avant** d'insérer ou de mettre à jour des données dans la base de données.

Rien de plus simple bien entendu !  

En prenant un exemple d'inscription d'utilisateur, voici ce que tu pourrais mettre en place :

??? example "Exemple de vérifications avec Prisma et Joi _(Node.js)_"
    ```typescript
    import { Prisma } from '#/libs';
    import bcrypt from 'bcrypt';
    import Joi from 'joi';

    interface UserCreateInput {
      email: string;
      password: string;
    }

    export const authServices = {
      async createUser(data: UserCreateInput) {
        // On récupère l'instance de Prisma pour pouvoir interagir avec la base de données
        const prisma = Prisma.getInstance();

        const joiSchema = Joi.object({
          // On définit les règles de validation pour l'email, soit une chaîne de caractères qui doit être un email,
          // qui est obligatoire et qui ne doit pas dépasser 80 caractères
          email: Joi.string().email().required().max(80),
          // On définit les règles de validation pour le mot de passe,
          // soit une chaîne de caractères qui doit faire au moins 8 caractères et qui est obligatoire
          password: Joi.string().min(8).required(),
        });

        // On valide les données avec le schéma Joi
        const { error } = joiSchema.validate(data);

        // S'il y a une ou plusieurs erreurs, on renvoie le tout
        if (error) {
          throw new Error(error.message);
        }

        // On vérifie si l'utilisateur existe déjà
        const doesUserExist = await prisma.user.findUnique({
          // On cherche un utilisateur avec l'email renseigné,
          // puisqu'un email se doit d'être unique dans notre base de données
          where: { email: data.email },
        });

        // Si c'est le cas, on renvoie une erreur
        if (doesUserExist) {
          throw new Error('User already exists');
        }

        // Pas d'erreur jusqu'ici ? On crée l'utilisateur et on le renvoie !
        return prisma.user.create({
          data: {
            email: data.email,
            // On hash le mot de passe avant de le stocker pour ne pas le stocker en clair
            password: await bcrypt.hash(data.password, 10),
          },
        });
      },
    };
    ```

    Si tu n'es pas à l'aise avec le code ci-dessus _(Node.js et/ou Typescript)_, pas de panique !  
    L'idée est de comprendre la logique derrière les vérifications à mettre en place pour garantir l'intégrité des données.

## 💼 Compétences attendues
Si tu utilises un outil te générant du code SQL, il est important de savoir reproduire à la main les requêtes générées par cet outil.  

??? example "Requête basique générée par Prisma"
    ```typescript
    const user = await prisma.user.findUnique({
      where: { id: 1 },
    });
    ```

    Ce qui donnera :
    ```sql
    SELECT "User".*
    FROM "User"
    WHERE "User"."id" = 1;
    ```

??? example "Requête avec jointure générée par Prisma"
    ```typescript
    const user = await prisma.user.findUnique({
      select: {
        id: true,
        email: true,
        posts: {
          select: {
            title: true,
          },
        },
      },
      include: {
        posts: true,
      },
      where: { id: 1 },
    });
    ```

    Ce qui donnera :
    ```sql
    SELECT u.id, u.email, p.title
    FROM "User" u
    INNER JOIN "Post" p ON p.userId = u.id
    WHERE u.id = 1;
    ```

    _(Oui, c'est un exemple fictif et pas entièrement correspondant, mais tu as compris l'idée !)_

## 🔐 Confidentialité des données
La plupart du temps, nos bases de données vont accueillir des données confidentielles, comme :

- Des mots de passe
- Des informations personnelles _(nom, prénom, adresse, etc.)_
- Des données sensibles _(informations bancaires, médicales, etc.)_

Bien que notre bases de données se doit d'être sécurisée dans son accès et ses permissions, dans le cas d'une fuite il est important de sécuriser ces données.

Pour les mots de passe, on va les **hacher** avant de les stocker dans la base de données.

??? question "C'est quoi le hachage d'un mot de passe ?"
    Le hachage d'un mot de passe est une manière de le sécuriser en le transformant en une chaîne de caractères "aléatoire", appelée **hash**.  

    Il est important de noter que le hachage est **unidirectionnel**, c'est-à-dire qu'il est impossible de retrouver le mot de passe d'origine à partir de son hash contrairement au **chiffrement**.

??? question "Et le chiffrement, ça sert à quoi ?"
    Comme le hachage, le chiffrement permet de sécuriser des données, il est **bidirectionnel**.  
    C'est à dire que l'on peut retrouver les données d'origine à partir des données chiffrées.

    Si tu as déjà eu l'occasion d'envoyer des "messages codés", c'est que tu as déjà utilisé le chiffrement sans pour autant le savoir !  
    L'un des chiffrements les plus connus est le **chiffre de César**, qui consiste à décaler les lettres de l'alphabet d'un certain nombre de positions.

    ??? example "Exemple de chiffrement de César"
        ```plaintext
        Message : "Bonjour"
        Décalage : 3

        Message chiffré : "Erqmrxu"
        ```

    !!! warning "Attention"
        Le chiffrement n'est pas une solution de sécurité absolue, il est possible de retrouver les données d'origine à partir des données chiffrées.  
        D'ailleurs le chiffre de César est un chiffrement très simple à casser, on ne va donc pas l'utiliser pour protéger les données sensibles !

    On va privilégier un algorithme de chiffrement qui se base sur une **clé secrète**, qui sera la clé pour chiffrer et déchiffrer les données.  
    C'est d'ailleurs plus ou moins ce qui est fait avec la célèbre machine Enigma utilisée par les allemands pendant la Seconde Guerre Mondiale pour chiffrer leurs messages et éviter qu'ils soient interceptés et compris par les alliés.

Mais alors, comment on peut s'y prendre ?

🥁🥁🥁

Avec des bibliothèques, tout simplement ! 🙃  
_(Ou si tu es un peu fou, tu peux essayer de le faire toi-même, mais attention à ce que ce soit **réellement** sécurisé derrière)_

Tu as notamment une bibliothèque _(Node.js)_ qui est très utilisée pour hacher les mots de passe : `bcrypt` _(ou encore `argon2`)_ et une autre pour chiffrer les données : `crypto` _(native à Node.js en plus, si ça c'est pas la classe 😎)_.

Je te laisse te plonger dans les documentations associées, que tu retrouveras _(presque)_ tout en bas de cette fiche.

Et naturellement : **PERSONNE** ne doit avoir accès à ces données, à part les personnes autorisées/concernées bien entendu.

## 📝 Critères d'évaluation
!!! abstract "Critères d'évaluation"
    - Les traitements relatifs aux manipulations des données répondent aux fonctionnalités décrites dans le dossier de conception
    - L'intégrité et la confidentialité des données sont maintenues
    - Les cas d'exception sont pris en compte
    - Toutes les entrées sont contrôlées et validées dans les composants serveurs sécurisés
    - Les tests unitaires et de sécurité sont associés à chaque composant
    - La démarche structurée de résolution de problème est adaptée en cas de dysfonctionnement
    - Le système de veille permet de suivre les évolutions technologiques et les problématiques de sécurité liées aux bases de données SQL et NoSQL

## 🤯 Aller plus loin _(hors référentiel)_
T'es encore là ? Tu aimes ça les <del>patates</del> bases de données, hein ? 😏  
Alors dans ce cas, je te recommande chaudement de te pencher sur PostgreSQL qui est, à mon sens, l'une des seules **vraies** bases de données relationnelles.

Je ne m'étalerai pas sur ce sujet, mais désolé MySQL/MariaDB de ne pas être au niveau... 😅

Les ressources que je m'apprête à te recommander sont un peu plus avancées, mais ce sont d'excellentes portes d'entrées vers des métiers comme <abbr title="DataBase Administrator">DBA</abbr> par exemple.  
Tu retrouveras des notions très bien expliquées et pertinentes pour t'améliorer sur le sujet dans les ressources de [Dalibo](https://www.dalibo.com/formations).

!!! info "Gratuité des formations Dalibo"
    Dalibo propose des formations, mais qui ne sont pas gratuites pour autant.  
    Seuls les supports de cours sont disponibles gratuitement, aux formats EPUB et PDF.

## 📚 Documentations

- [SQL.sh - Cours et tutoriels SQL](https://sql.sh/)
- [Prisma - Documentation](https://www.prisma.io/docs/)
- [Joi - Documentation](https://joi.dev/api/?v=17.13.0)
- [Dalibo - Formations](https://www.dalibo.com/formations)
- [Chiffrement de César - Wikipédia](https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage)
- [bcrypt - Documentation](https://www.npmjs.com/package/bcrypt)
- [crypto - Documentation](https://nodejs.org/api/crypto.html)

---

[⬅️ <abbr title="Compétence Professionnelle">CP</abbr> 5 - Mettre en place une base de données relationnelle](cp-5-mettre-en-place-une-base-de-donnees-relationnelle.md)  
[➡️ <abbr title="Compétence Professionnelle">CP</abbr> 7 - Développer des composants métier coté serveur](cp-7-developper-des-composants-metier-cote-serveur.md)  
[🏠 Retour à l'accueil du millésime 2023](index.md)