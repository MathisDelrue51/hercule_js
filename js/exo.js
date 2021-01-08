//Création de la constante objet contenant l'ensemble de la page
const page = {
    //l'objet hercule contenant ses caractéristiques
    hercule: {
        name: 'Hercule',
        job: 'Demi-dieu',
        age: 35,
        departement: 75,
        arm: 60.5,
        inRelationship: true,
    },

    friends: ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'],
    form: document.getElementById('contact'),
    menu: document.getElementById('menu-toggler'),

    //Fonction qui ajoute au header un titre de type h1 avec la classe banner_title et du contenu
    addTitle: function () {
        const title = document.createElement('h1');
        title.className = 'banner_title';
        title.textContent = 'Vous consultez le profil de Hercule';
        const header = document.getElementById('header-banner');
        header.appendChild(title);
    },

    addWork: function () {
        //Pour chaque tour de boucle faire appel à la fonction contenue dans le fichier base qui va retirer la classe 'hidden' et nous permettre d'afficher les travaux d'hercule
        for (let index = 0; index <= 11; index++) {
            base.displayWork(index);
        }
    },

    //Fonction qui récupère en paramètre un nom, et un département et qui renvoie une association des 2
    generatePseudo: function (name, departement) {
        return name + "-du-" + departement;
    },

    //Fonction qui ajoute du contenu dans notre élément 'profil-name'
    writePseudo: function () {
        //appelle notre fonction qui génère un pseudo avec des données contenues dans notre objet hercule et stocke ce pseudo dans une constante
        const profilContent = page.generatePseudo(page.hercule.name, page.hercule.departement);
        console.log(profilContent);
        const profil = document.getElementById('profil-name');
        profil.textContent = profilContent;
    },

    //Fonction ouvre ou ferme notre menu lorsqu'elle est appelée
    openCloseMenu: function (event) {
        //Récupère l'élément qui a l'ID 'header-banner' et le stocke dans banner
        const banner = document.getElementById('header-banner');
        //SI banner contient déjà la classe 'banner--open' on la retire
        //SINON on l'ajoute
        if (banner.classList.contains('banner--open')) {
            banner.classList.remove('banner--open');
        } else {
            banner.classList.add('banner--open');
        }
    },

    contactHercule: function (event) {
        //Evite de recharger la page lors de l'envoie du formulaire
        event.preventDefault();
        alert("Hercule ne souhaite pas être dérangé");
    },

    displayVote: function () {
        const totalVotes = base.vote.hercule + base.vote.cesar;

        //Récupère dans une constante l'élément qui a la classe '.people__popularity' dans l''ID trends-hercule
        const herculePopularity = document.querySelector('#trends-hercule .people__popularity');
        //Récupère dans une constante l'élément qui a la classe '.people__popularity' mais ici dans l''ID trends-cesar
        const cesarPopularity = document.querySelector('#trends-cesar .people__popularity');

        //Ajoute dans textContent de notre élément le résultat du calcul
        herculePopularity.textContent = Math.round(100 * base.vote.hercule / totalVotes) + "%";
        cesarPopularity.textContent = Math.round(100 * base.vote.cesar / totalVotes) + "%";

        //Idem  pour se placer dans l'élément qui a la classe '.people__bar' dans l''ID trends-hercule
        const herculeBar = document.querySelector('#trends-hercule .people__bar');
        const cesarBar = document.querySelector('#trends-cesar .people__bar');

        //Modifie le style dans notre CSS. La width équivaut au résultat de notre calcul
        herculeBar.style.width = herculePopularity.textContent;
        cesarBar.style.width = cesarPopularity.textContent;

    },

    init: function () {
        base.fillProfil(page.hercule);

        base.printFriends(page.friends);

        base.setBestFriend(page.friends[0]);

        page.addTitle();

        page.addWork();

        page.writePseudo();

        page.menu.addEventListener('click', page.openCloseMenu);

        page.form.addEventListener('submit', page.contactHercule);

        page.displayVote();
    }

}

page.init();