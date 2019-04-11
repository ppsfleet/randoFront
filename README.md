# randoFront

## Installation
- `docker-compose up`
- Ouvrez `index.html` dans votre navigateur internet

Apriori si vous n'utilisez pas Internet Explorer la page web devrait fonctionner correctement.

## Notes

Veillez a mettre un interval d'au moins 3 jours pour être sur que le service 5 trouve des images.

Lors du passage de l'étape 5 à l'étape 6, seul la première image est tuilée car tuiler toutes les images prend beaucoup de temps et aurait complexifié inutilement le code javascript de la page HTML. Bien entendu le micro-service de tuilage est capable de tuiler plusieurs images en même temps.