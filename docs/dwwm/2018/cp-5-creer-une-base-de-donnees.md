# _(<abbr title="Développeur Web et Web Mobile">DWWM</abbr> 2018)_ <abbr title="Compétence Professionnelle">CP</abbr> 5 - Créer une base de données
> [REAC (03/05/2018), pages 21 et 22](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

## 🚀 Contexte

Je pense que les mots sont dits : il faut créer une base de données 🙃  
OK c’est vrai que si on part de ce principe, la CP est vite complétée et on passerait à la CP 6 de suite, mais ça va plus loin en réalité !

Comme pour la CP 1, on va avant toute chose parler de la conception, soit : La modélisation de la base de données.  
Et pour modéliser notre base de données, on va se baser sur la méthode [Merise](https://fr.wikipedia.org/wiki/Merise_(informatique)).

Dans cette méthode on retrouvera plusieurs schémas, notamment ces derniers :

- Le dictionnaire des données qui permet de définir les données de chaque entité.
- Le MCD (Modèle Conceptuel de Données) qui permet de définir les entités et les relations entre ces entités.
- Le MLD (Modèle Logique de Données) qui permet de définir les tables et les relations entre ces tables.
- Le MPD (Modèle Physique de Données) qui permet de définir les tables, les relations, les types de données, les contraintes, etc.

Bien qu'il existe des outils pour réaliser ces modèles, il est tout à fait possible de les réaliser avec un papier et un crayon.  
Toutefois, un super outil pour réaliser tout cette conception existe : [Looping](https://www.looping.fr/).

!!! warning "Compatibilité"
    Looping est un logiciel qui fonctionne sous Windows.  
    Pour les utilisateurs de Mac ou Linux, il faudra passer par une machine virtuelle ou un émulateur comme [Wine](https://www.winehq.org/).

!!! warning "Conformité des schémas"
    Même si la base de données peut évoluer au travers du développement, le fait de maintenir à jour les schémas _(tous, sans exception !)_ est primordial.  
    Votre jury sera très attentif à la conformité de vos schémas, alors ne négligez pas cette partie.

## ➕ Informations complémentaires

Tout comme la <abbr title="Compétence Professionnelle">CP</abbr> 1, on serait tenté de se plonger immédiatement dans le code, mais il est important de bien modéliser sa base de données avant de commencer à coder.

Voici les étapes à suivre pour bien modéliser sa base de données :

1. **Définition des besoins**
    - Il est important de bien comprendre les besoins du client pour définir les données à stocker.
2. **Dictionnaire des données**
    - Il permet de définir les données de chaque entité, avec des types génériques comme "alphanumérique", "alphabétique", "numérique", "date", etc.
3. **Modèle Conceptuel de Données _(MCD)_**
    - Il permet de définir les entités et les relations entre ces entités, sans se soucier des contraintes techniques.
4. **Modèle Logique de Données _(MLD)_**
    - Il permet de définir les tables et les relations entre ces tables, en prenant en compte les contraintes techniques.
5. **Modèle Physique de Données _(MPD)_**
    - Il permet de définir les tables, les relations, les types de données, les contraintes, etc. pour la base de données.

!!! warning "Intentions pour le <abbr title="Modèle Conceptuel de Données">MCD</abbr>"
    N'oubliez pas que le <abbr title="Modèle Conceptuel de Données">MCD</abbr> est un modèle conceptuel, il ne doit pas contenir de contraintes techniques ni de termes techniques.  
    Ce dernier est avant tout destiné à être compris par le client.

!!! warning "Liaisons graphiques entre entités/tables"
    Les liaisons entre les entités/tables au travers de la méthode Merise ne doivent en aucun cas se faire avec la notation "crow's foot" _(pied de corbeau)_.  
    Cette dernière n'est pas conforme à cette méthode et est davanatge utilisée dans la méthode [UML](https://fr.wikipedia.org/wiki/UML_(informatique)).

## 📝 Critères d'évaluation
!!! abstract "Critères d'évaluation"
    - La base de données est conforme au schéma physique
    - Les scripts de création de bases de données et d’insertion des données de test s’exécutent sans erreurs
    - Les besoins de sécurité du <abbr title="Système de Gestion de Base de Données">SGBD</abbr> sont exprimés selon l’état de l’art et les exigences de sécurité identifiées
    - La démarche de recherche permet de résoudre un problème technique ou de mettre en œuvre une nouvelle fonctionnalité
    - La documentation technique liée aux technologies associées, rédigée en langue anglaise, est comprise (sans contre-sens, ...)

---

## 📚 Documentations
- [Éditions ENI - Merise - Guide pratique (3e édition), par Jean-Luc Baptiste](https://www.editions-eni.fr/livre/merise-guide-pratique-3e-edition-modelisation-des-donnees-et-des-traitements-manipulations-avec-le-langage-sql-9782409015342)

## 🛠 Outils
- [Looping](https://www.looping.fr/)

---

[⬅️ <abbr title="Compétence Professionnelle">CP</abbr> 4 - Réaliser une interface avec une solution de gestion de contenu ou e-commerce](cp-4-realiser-une-interface-utilisateur-avec-une-solution-de-gestion-de-contenu-ou-e-commerce.md)  
[➡️ <abbr title="Compétence Professionnelle">CP</abbr> 6 - Développer les composants d'accès aux données](cp-6-developper-les-composants-d-acces-aux-donnees.md)  
[🏠 Retour à l'accueil du millésime 2018](index.md)