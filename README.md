# RandoFront

## Installation
- Copiez vos clés ssh dans le dossier ssh, elles servirons pour se connecter à Torus
- Éditez le fichier .env en mettant vos identifiants Torus et PEPS
- Démarrez le vpn pour vous connecter en ssh aux serveurs de torus
- Enregistrez votre clé publique sur le serveur torus
- `docker-compose up` - la compilation prend du temps, ce serait mieux si votre ordinateur ne se mettait pas en veille durant le processus
- Ouvrez `index.html` dans votre navigateur internet, les services y sont détaillés et il est possible de les lancer depuis cette interface

Apriori si vous n'utilisez pas Internet Explorer, konqueror ou tout autre navigateur obsolète la page web devrait fonctionner correctement.

## Notes

Si vous voulez repartir d'une installation vide vous pouvez recompiler le docker avec `docker-compose build --no-cache`

Veillez à mettre un intervalle d'au moins 3 jours pour être sûr que le service 5 trouve des images.

Lors du passage de l'étape 5 à l'étape 6, seul la première image est tuilée car tuiler toutes les images prend beaucoup de temps et aurait complexifié inutilement le code Javascript de la page HTML. Bien entendu le micro-service de tuilage est capable de tuiler plusieurs images en même temps.

Le code des services est disponibles aux liens suivants :
- https://github.com/ppsfleet/satiles est le service qui tuile l'image
- https://github.com/ppsfleet/hdfsup est le service qui téléverse l'image sur l'HDFS
- https://github.com/ppsfleet/randolivetiles contient tous les autres services
