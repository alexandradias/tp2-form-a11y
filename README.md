# tp2-form-a11y
Un formulaire de réservation pour l'Auberge du Jacana Africain

# Bilan de controle
## Structure, sémantique et validations en html

**Regrouper les éléments de formulaire de même nature.**
* J'ai regroupé dans le formulaire les items communs dans des balises "fieldset".


**Faire des groupes d’options dans une liste déroulante.**
* J'ai utilisé les balises "optgroup" et "option" pour la sélection du nombre d'occupant dans les chambres et ainsi limité le choix au nombre maximal autorisé.

**Étiqueter les regroupements d’éléments de formulaire à l’aide de la balise legend.**
* J'ai intégré la balise "legend" juste après chaque fieldset.


**Étiqueter un groupe d’options d’une liste déroulante.**
* J'ai intégré les balises options dans des optgroup et des select.


**Étiqueter les champs de formulaire.**
* J'ai intégrer la balise "role" à tous les champs nécéssaires.

**Rendre (garder) le formulaire navigable au clavier.**
* J'ai intégré la navigation au clavier, mais je ne parviens pas en totalité à viser tous les éléments du site.

**Baliser avec précision les éléments de formulaire.**
* J'ai balisé tous les éléments du formulaire.

**Bien choisir le type du input.**
* Je pense avoir correctement choisi le type d'input recommandé.

**Code sémantique et valide pour l’ensemble du document.**
* J'ai essayé de garder un code sémantique, hiérarchisé pour apporter un maximum de sens à ma page.

**Identifier par un attribut approprié les champs obligatoires du formulaire.**
* J'ai intégré required aux champs obligatoires du formulaire, mise à part sur le champs des petits déjeuners qui n'étaient pas obligatoire.


**Ajouter des contraintes de saisie sur les champs de formulaire.**
* J'ai intégré des contraintes de saisie à certains champs comme pour le NOM, PRENOM, TELEPHONE etc… avec des expressions régulières. Exemple pour les emails -> pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$". prenom et nom -> pattern="[a-zA-ZÀ-ÿ '\-]+".
Cette balise pattern me permet de spécifier ce qui doit être accepté dans les champs.

## Styles

**Travailler Mobile First.**
* J'ai travaillé en Mobile First, j'ai commencé à mettre en place sur la page d'accueil le carrousel et j'ai intégré le menu récatif.

**Contrôler les espacements et les alignements.**
* Je pense avoir correctement gérer la plupart des espacements et alignements de ma page formulaire.

### Styler l’interactivité : 

**État focus, état checked des éléments de formulaires, états des hyperliens link, visited, hover, active.**
* J'ai ciblé les différents états mais certains d'entre eux ne fonctionnent pas, j'ai l'impression de les avoir pourtant bien géré :/.

**Styler les messages d’erreur. Styler les boutons radio en les gardant accessibles au clavier.**
* J'ai intégré les messages d'erreur, mais je ne les vois pas fonctionner :/

**Organiser et documenter la feuille de styles.**
* Je pense avoir organisé correctement ma feuille de style, mais j'aurais pu avec plus de temps ajouter de la documentation complémentaire.

## Navigation et composants accessibles

**Menu réactif javascript (d’après celui du cadriciel)**
* J'ai intégré le menu récatif, celui-ci fonctionne correctement sur la page d'accueil mais je ne parviens pas à le faire se rétracter sur la page formulaire :/.

**Utiliser le contrôle des versions GIT**
* J'ai utilisé GIT pour faire certaines versions de mon projet mais je n'ai pas versionné à chacune de mes étapes.
Je n'ai pas oublié d'indiquer le message lié au commit mais je pense que je devrais être plus précise dans l'ennoncé de mon message afin qu'il soit plus clair pour tous.

## Bonus

**Intégration et programmation de la page d’accueil incluant son carrousel et des onglets pour les contenus « description, équipements, activités, tarifs et forfaits, emplacement ».**

* J'ai sur la page d'accueil tenté d'intégrer le carrousel en me basant sur notre précédent projet. Faute de temps je n'ai pas pu tout mettre en page.

## Conclusion
J'ai trouvé ce projet très enrichissant sur le plan des formulaires, cette partie me semble être très dense, et longue à maitriser, pour répondre en totalité et à 100% à toutes les normes. 

J'ai manqué de temps pour faire les choses précisément, et je me sens frustrée de rendre un travail à mon sens pas totalement abouti. J'aurais aimé Eve te rendre un travail en totalité responsive avec les 2 pages bien mise en forme.


J'espère malgré tout avoir répondu au mieux à ton niveau d'exigence pour ce projet TP2.



