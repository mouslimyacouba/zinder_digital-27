# Zinder Digital V2 — Lot 02B

## Objet
Refonte du contenu commercial et éditorial du site Zinder Digital en gardant la structure technique existante, les fichiers séparés, les corrections fonctionnelles du Lot 02A et les contraintes de sécurité du projet.

## Correspondance des sections existantes
Avant la modification, le site contenait déjà les blocs suivants :
- Accueil
- Services
- Offres et tarifs
- Réalisations et démonstrations
- Notre méthode
- À propos
- Questions fréquentes
- Contact

Les contenus ont été réécrits pour correspondre au brief Lot 02B sans remettre en cause la structure HTML/CSS/JS ni les corrections déjà validées (menu mobile, aria, formulaire, logo PNG).

## Sections réécrites
- Accueil : promesse principale et proposition de valeur
- Services : 5 services décrits avec problème, bénéfice et CTA
- Offres et tarifs : 3 niveaux de prix de départ avec précision sur leur caractère provisoire
- Réalisations et démonstrations : AtelierPro + mention “APK disponible sur demande” + démonstrations identifiées comme concepts
- Notre méthode : déroulé simple et clair du projet
- À propos : présentation de Zinder Digital comme agence numérique professionnelle, moderne et accessible
- Questions fréquentes : FAQ courte et utile avant contact
- Contact : message commercial clair et CTA WhatsApp conservés

## Fichiers modifiés
- `index.html` : contenu commercial et éditorial finalisé pour le lot 02B
- `assets/css/style.css` : ajustement visuel de la FAQ pour rester cohérent avec la charte existante
- `backup/index.html.backup` : sauvegarde avant validation du lot 02B
- `zinder_digital_lot02b.zip` : archive complète du projet modifié

## Textes à valider commercialement
Les éléments ci-dessous doivent être confirmés par le propriétaire avant la suite du projet :
- Les prix de départ proposés : 25 000 FCFA, 50 000 FCFA et 100 000 FCFA
- La formulation “frais de domaine, hébergement, abonnements et options peuvent être séparés”
- Le positionnement “agence digitale professionnelle, moderne, sérieuse et accessible”
- L’utilisation de la mention “APK disponible sur demande” pour AtelierPro
- Le statut des démonstrations comme “concepts de démonstration” et non comme des références clients
- Le wording commercial final de la promesse et de la proposition de valeur

## Tests réalisés
1. `git status --short --branch`
   - Résultat : branche active `chore/lot-02-fonctionnel`, aucun merge ni push effectué
2. `node --check assets/js/main.js`
   - Résultat : OK, pas d’erreur de syntaxe sur le JavaScript existant
3. Validation HTML automatisée via Python
   - Contrôles effectués : présence de la promesse d’accueil, présence du texte de proposition de valeur, présence des sections demandées, présence d’AtelierPro, d’APK disponible sur demande, de l’offre triadique et du formulaire Formspree
   - Résultat : OK
4. `zip -r zinder_digital_lot02b.zip . -x '.git/*'`
   - Résultat : archive générée avec succès

## Éléments non testés
- Validation visuelle réelle dans un navigateur, car aucun navigateur graphique n’est disponible dans ce conteneur
- Vérification de rendu mobile/desktop en environnement réel, hors session de navigateur local
- Vérification des liens externes WhatsApp et Formspree depuis un navigateur réel
- Validation de la conformité commerciale par le propriétaire avant mise en production

## Statut
Le lot 02B est conforme au brief éditorial demandé et prêt pour validation commerciale du propriétaire. Aucun commit, merge, push ni déploiement n’a été effectué.
