import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", []),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),    
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["client","admin"]),
    new Route("/editpassword", "Changement de mot de passe", "/pages/auth/editpassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos réservation", "/pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"]),
    new Route("/menu", "La carte", "/pages/menu.html", ["client", "admin"]),    
];



//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";