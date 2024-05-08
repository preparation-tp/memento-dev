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

## ➕ Informations complémentaires

## 📝 Critères d'évaluation
!!! abstract "Critères d'évaluation"
    - Les traitements relatifs aux manipulations des données répondent aux fonctionnalités décrites dans le dossier de conception
    - L'intégrité et la confidentialité des données sont maintenues
    - Les cas d'exception sont pris en compte
    - Toutes les entrées sont contrôlées et validées dans les composants serveurs sécurisés
    - Les tests unitaires et de sécurité sont associés à chaque composant
    - La démarche structurée de résolution de problème est adaptée en cas de dysfonctionnement
    - Le système de veille permet de suivre les évolutions technologiques et les problématiques de sécurité liées aux bases de données SQL et NoSQL

---

[⬅️ <abbr title="Compétence Professionnelle">CP</abbr> 5 - Mettre en place une base de données relationnelle](cp-5-mettre-en-place-une-base-de-donnees-relationnelle.md)  
[➡️ <abbr title="Compétence Professionnelle">CP</abbr> 7 - Développer des composants métier coté serveur](cp-7-developper-des-composants-metier-cote-serveur.md)  
[🏠 Retour à l'accueil du millésime 2023](index.md)