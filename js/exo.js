const page ={
    hercule : {
        name: 'Hercule',
        job: 'Demi-dieu',
        age: 35,
        departement: 75,
        arm: 60.5,
        inRelationship: true,
    },

    friends : ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'],

    addTitle: function() {
        const title = document.createElement('h1');
        title.className = 'banner_title';
        title.textContent = 'Vous consultez le profil de Hercule';
        const header = document.getElementById('header-banner');
        header.appendChild(title);
    },

    addWork: function() {

        for (let index = 0; index <= 11; index++) {
            base.displayWork(index);
        }
    },
    
    generatePseudo: function(name, departement) {
        return name + "-du-" + departement;
    },

     writePseudo: function() {
        const profilContent = page.generatePseudo(page.hercule.name, page.hercule.departement);
        console.log(profilContent);
        const profil = document.getElementById('profil-name');
        profil.textContent = profilContent;
    },
    
    openCloseMenu: function(event) {
        console.log("openCloseMenu");
        const banner = document.getElementById('header-banner');
        if (banner.classList.contains('banner--open')) {
            banner.classList.remove('banner--open');
        } else {
            banner.classList.add('banner--open');
        }
    },
    
    contactHercule: function(event) {
        event.preventDefault();
        alert("Hercule ne souhaite pas être dérangé");    
    },

    init: function() {
        base.fillProfil(page.hercule);
    
        base.printFriends(page.friends);
    
        base.setBestFriend(page.friends[0]);
    
        page.addTitle();
    
        page.addWork();
    
        page.writePseudo();
    
        const menu = document.getElementById('menu-toggler');
        menu.addEventListener('click', page.openCloseMenu);
    
        const form = document.getElementById('contact');
        form.addEventListener('submit', page.contactHercule);
    }

}

page.init();