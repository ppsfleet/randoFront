# RandoFront

## Installation
- Copiez vos clés ssh dans le dossier ssh
- Éditez le fichier .env
- Enregistrez votre clé publique sur le serveur torus
- `docker-compose up` - la compilation prend du temps, ce serait mieux si votre ordinateur ne se mettait pas en veille durant le processus.
- Ouvrez `index.html` dans votre navigateur internet

Apriori si vous n'utilisez pas Internet Explorer, konqueror ou tout autre navigateur obsolète la page web devrait fonctionner correctement.

## Notes

Si vous voulez repartir d'une installation vide vous pouvez recompiler le docker avec `docker-compose build --no-cache`

Veillez à mettre un intervalle d'au moins 3 jours pour être sûr que le service 5 trouve des images.

Lors du passage de l'étape 5 à l'étape 6, seul la première image est tuilée car tuiler toutes les images prend beaucoup de temps et aurait complexifié inutilement le code Javascript de la page HTML. Bien entendu le micro-service de tuilage est capable de tuiler plusieurs images en même temps.