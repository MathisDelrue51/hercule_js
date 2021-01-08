console.log('test 1...2...1...2');

const hercule = {
    name: 'Hercule',
    job: 'Demi-dieu',
    age: 35,
    departement: 75,
    arm: 60.5,
    inRelationship: true,
};

const friends = ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'];

function addTitle() {
    const title = document.createElement('h1');
    title.className = 'banner_title';
    title.textContent = 'Vous consultez le profil de Hercule';
    const header = document.getElementById('header-banner');
    header.appendChild(title);
};

function addWork() {

    for (let index = 0; index <= 11; index++) {
        base.displayWork(index);
    }
};

function generatePseudo(name, departement) {
    return name + "-du-" + departement;
};

function writePseudo() {
    const profilContent = generatePseudo(hercule.name, hercule.departement);
    console.log(profilContent);
    const profil = document.getElementById('profil-name');
    profil.textContent = profilContent;
}

function openCloseMenu(event) {
    console.log("openCloseMenu");
    const banner = document.getElementById('header-banner');
    if (banner.classList.contains('banner--open')) {
        banner.classList.remove('banner--open');
    } else {
        banner.classList.add('banner--open');
    }
}


base.fillProfil(hercule);

base.printFriends(friends);

base.setBestFriend(friends[0]);

addTitle();

addWork();

writePseudo();

const menu = document.getElementById('menu-toggler');
menu.addEventListener('click', openCloseMenu);